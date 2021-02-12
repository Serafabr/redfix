export default function validateInput(input) {
  if (
    input === undefined ||
    input === null ||
    input === '' // ||
    // isNaN(Number(input))
  ) {
    return null;
  }
  else {
    return input;
  }
}