export default function getCurrentMonth(){
  let currentDate = new Date();
  let month = currentDate.getMonth(); // January is 0
  let year = currentDate.getFullYear();
  if(month < 10){
    return "0" + month.toString() + "/" + year.toString();
  }
}