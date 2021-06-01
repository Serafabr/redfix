import { Router } from 'express';
import { join } from 'path';
import fs from 'fs';
import csvParse from 'csv-parse';
import { pgPool } from '../db/index.js';
import graphqlUpload from '../middlewares/graphql-upload.js';
import paths from '../paths.js';

async function decideUploadDestination(req, res, next){
  const { files, image, avatar, cebFile } = req?.body?.variables ? req.body.variables : {};
  if (!files && !image && !avatar && !cebFile) next();   // no uploads
  if (files) saveFiles(req, res, next);       // regular uploads
  if (image) saveImage(req, res, next);       // image
  if (avatar) saveAvatar(req, res, next);     // avatar
  if (cebFile) insertCebData(req, res, next); // CEB csv files
}

// Helper function to write files to disk from a stream
function saveLocal(stream, filePath){
  return new Promise((resolve, reject) => stream
    .on("error", error => {
      if (stream.truncated){ fs.unlinkSync(filePath); }
      reject(error);
    })
    .on("end", () => resolve())
    .pipe(fs.createWriteStream(filePath))
  );
}

async function saveFiles(req, res, next){
  const { files, filesMetadata } = req.body.variables;
  Promise.all(files.map(async (file, i) => {
    const resolvedFile = await file.promise;
    const { filename, mimetype, encoding, createReadStream } = resolvedFile;
    const stream = createReadStream();
    const filePath = join(paths.files, filesMetadata[i].uuid);
    return saveLocal(stream, filePath);
  }))
  .then(() => {
    next();
  })
  .catch(error => {
    console.log(error);
  });
}

async function saveImage(req, res, next){
  const { image, imageMetadata } = req.body.variables;
  const resolvedImage = await image.promise;
  const { filename, mimetype, encoding, createReadStream } = resolvedImage;
  const stream = createReadStream();
  const imagePath = join(paths.images, imageMetadata.uuid);
  saveLocal(stream, imagePath)
  .then(() => {
    next();
  })
  .catch(error => {
    console.log(error);
    res.status(500).end();
  });
}

async function saveAvatar(req, res, next){
  const { avatar, avatarMetadata } = req.body.variables;
  const resolvedAvatar = await avatar.promise;
  const { filename, mimetype, encoding, createReadStream } = resolvedAvatar;
  const stream = createReadStream();
  const avatarPath = join(paths.images, avatarMetadata.uuid);
  saveLocal(stream, avatarPath)
  .then(() => {
    next();
  })
  .catch(error => {
    console.log(error);
    res.status(500).end();
  });
}

async function insertCebData(req, res, next){
  const cebFile = req.body.variables.cebFile[0];
  const resolvedCebFile = await cebFile.promise;
  const { filename, mimetype, encoding, createReadStream } = resolvedCebFile;
  const stream = createReadStream();
  const promises = [];
  stream
  .pipe(csvParse({ from_line: 2, delimiter: ';' })) // skip header and set delimiter
  .on("data", record => { // each record is a line of ceb csv file
    try {
      record.pop(); // remove empty string at the end of the record
      const valuesString = `(${record.map(field => ("'" + field + "'")).join(',')})`;
      // console.log(valuesString);
      promises.push(pgPool.query('select web.create_energy_bill($1)', [valuesString]));
      // console.log(data);
    } catch(error) {
      console.log(error);
      res.json({ cebSuccess: false });
    }
  })
  .on("end", () => {
    Promise.all(promises)
    .then(values => {
      const insertedCount = values.map(value => value.rows[0].create_energy_bill).reduce((acc, curr) => acc + curr);
      // console.log(insertedCount);
      res.json({
        cebSuccess: true,
        insertedCount: insertedCount,
      });
    })
    .catch(error => {
      console.log(error);
      res.json({ cebSuccess: false });
    });
  })
  .on("error", error => {
    console.log(error);
    res.json({ cebSuccess: false });
  })
}

const router = Router();

router.post(
  '/',
  graphqlUpload,           // Processes the multipart request
  decideUploadDestination, // Checks upload type and calls functions accordingly
);

export default router;
