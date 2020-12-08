import { serverAddress, oneAsset } from '../../constants';

export default function getAsset(assetId) {
  console.log(serverAddress);
  return new Promise((resolve, reject) => {
    fetch(serverAddress + oneAsset + assetId, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(() => reject('Houve um problema em getAsset'));
  });
}