export default function dateWithFourDigits(date) {
  // Transform "mm/yyyy" to "yymm"
  return date.slice(-2) + date.slice(0, 2);
}
