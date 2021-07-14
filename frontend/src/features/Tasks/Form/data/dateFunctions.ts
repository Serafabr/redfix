import dayjs from "dayjs";
import customParseFormat from 'dayjs/plugin/customParseFormat';

export const isDateStringValid = (dateString: string | undefined) => {
  
  dayjs.extend(customParseFormat);
  
  if (dateString === undefined || dateString.length === 0) {
    return true;
  }
  
  return dayjs(dateString, 'DD/MM/YYYY', true).isValid(); 
}