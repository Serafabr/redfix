export default function removeEmptyMeters(data){
  // Input:
  // data (array): contains query response
  //
  // Output:
  // nonEmptyMeters (array): contains med of meters that actually have data for the query period
  //
  // Purpose:
  // Identify meters' med attributes that have data

  let nonEmptyMeters = [];

  data.forEach(element => {
    if(element.length > 0){
      nonEmptyMeters.push(element[0].med);
    }
  });

  return nonEmptyMeters;
}