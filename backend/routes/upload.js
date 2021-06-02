import { Router } from 'express';
import { graphqlUploadExpress } from 'graphql-upload';
import { join } from 'path';
import fs from 'fs';
import csvParse from 'csv-parse';
import { pgPool } from '../db/index.js';
import paths from '../paths.js';

async function saveUploads(req, res, next){
  switch (req?.body?.variables?.uploadType){
    case 'files': saveFiles(req, res, next); break;
    case 'image': saveImage(req, res, next); break;
    case 'avatar': saveAvatar(req, res, next); break;
    case 'energy': insertEnergyData(req, res, next); break;
    default: next();
  }
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

async function insertEnergyData(req, res, next){
  const energyCsv = req.body.variables.energyCsv;
  const resolvedEnergyCsv = await energyCsv.promise;
  const { filename, mimetype, encoding, createReadStream } = resolvedEnergyCsv;
  const stream = createReadStream();
  const allValues = [];
  stream
  .pipe(csvParse({ from_line: 2, delimiter: ';' })) // skip header and set delimiter
  .on("data", record => { // each record is a line of energy csv file
    try {
      // remove empty string at the end of the record
      record.pop();
      // generate string compatible with VALUES clause format of INSERT
      const values = `(${record.map(field => ("'" + field + "'")).join(',')})`;
      allValues.push(values);
    } catch(error) {
      console.log(error);
      res.status(400).end();
    }
  })
  .on("end", async () => {
    req.body.variables.valuesString = allValues.join(',');
    next();
  })
  .on("error", error => {
    console.log(error);
    res.status(400).end();
  })
}

const router = Router();

router.post(
  '/',
  graphqlUploadExpress({
    maxFileSize: 100E6,
    maxFiles: 10,
  }),
  saveUploads,
);

export default router;
