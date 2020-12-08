export default function formatDate(dateStr) {
  return dateStr.slice(6) + "/" + dateStr.slice(4, 6) + "/" + dateStr.slice(0, 4);
}