import { serverAddress, allAssets } from '../../constants';

export default function getAllAssets(){
  return new Promise((resolve, reject) => {
    fetch(serverAddress + '/db', {
      method: "POST"
    })
    .then(response => response.json())
    .then(data => resolve(data))
    .catch(() => {
      reject("Não foi possível baixar os ativos.");
    });
  });
}