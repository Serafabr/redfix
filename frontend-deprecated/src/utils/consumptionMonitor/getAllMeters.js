import { serverAddress, cebMeters, caesbMeters } from '../../constants';

export default function getAllMeters(meterType) {

  return new Promise((resolve, reject) => {
    
    let meterRoute = meterType === "1" ? cebMeters : caesbMeters;

    fetch(serverAddress + meterRoute, {
      method: "GET"
    })
    .then(response => response.json())
    .then(data => resolve(data))
    .catch(() => {
      alert("There was an error in retrieving meters.");
      reject("Failed to get the items.");
    })
  });
}