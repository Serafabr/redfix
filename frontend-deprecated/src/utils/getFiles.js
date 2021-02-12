import uuidv4 from 'uuid/v4';

export default function getFiles(fileList){

  const n = fileList.length;

  const files = n > 0
    ? fileList.map(file => Object.assign(file, { preview: URL.createObjectURL(file) }))
    : [];

  let filesMetadata = [];

  if(n > 0){
    for(let i = 0; i <= n - 1; i++){
      filesMetadata.push({
        filename: fileList[i].name,
        uuid: uuidv4(),
        size: fileList[i].size,
      });
    }
  }
  return {
    files,
    filesMetadata,
  };
};