import { serverAddress, oneWorkOrder } from '../../constants';

export default function getWorkOrder(workOrderId){
  return new Promise((resolve, reject) => {
    fetch(serverAddress + oneWorkOrder + workOrderId, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(data => resolve(data))
    .catch(()=>reject('Houve um problema em fetch'));
  });
}