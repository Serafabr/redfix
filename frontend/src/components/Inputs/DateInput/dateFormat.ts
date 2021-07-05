export {};

// const limit = (val, max) => {
//   if (val.length === 1 && val[0] > max[0]) {
//     val = '0' + val;
//   }

//   if (val.length === 2) {
//     if (Number(val) === 0) {
//       val = '01';

//     //this can happen when user paste number
//   } else if (val > max) {
//       val = max;
//     }
//   }

//   return val;
// }

// export const dateFormat = (val) => {
//   let month = limit(val.substring(0, 2), '12');
//   let year = val.substring(2, 4);

//   return month + (year.length ? '/' + year : '');
// }