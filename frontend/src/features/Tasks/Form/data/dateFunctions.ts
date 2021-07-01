import dayjs from "dayjs";
import customParseFormat from 'dayjs/plugin/customParseFormat';

export const isDateStringValid = (dateString: string) => {
  dayjs.extend(customParseFormat);
  return dayjs(dateString, 'DD/MM/YYYY', true).isValid(); 
}