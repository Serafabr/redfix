export default function dateToStrFormDates(date){
  
  let year = date.getFullYear();
  let month = parseInt(date.getMonth(), 10) + 1;
  if(month < 10){
    month = "0" + month.toString();
  } else {
    month = month.toString();
  }
  let day = date.getDate();
  if(day < 10){
    day = "0" + day.toString();
  } else {
    day = day.toString();
  }
  return month + "/" + year;
}