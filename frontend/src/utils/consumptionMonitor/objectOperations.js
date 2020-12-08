export default function applyFuncToAttr(listObjects, attr, func) {
  let values = [];
  let answer = 0;
  listObjects.forEach(item => {
    if (item[attr] > 0) values.push(item[attr]);
  });
  if (values.length == 0) return 0;
  try {
    answer = func(...values);
  } catch {
    console.log("applyFuncToAttr: could not apply the function.");
  }
  return answer;
}