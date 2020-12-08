import { serverAddress, allWorkOrders } from '../../constants';

export default function getAllWorkOrders(){
  return new Promise((resolve, reject) => {
    fetch(serverAddress + allWorkOrders, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(data => resolve(data))
    .catch(()=>reject('Houve um problema em fetch'));
  });
}