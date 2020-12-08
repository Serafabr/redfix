export default function formatNumber(number, dig = 2) {
  if (isNaN(number) || number == 0) return "-";
  return number.toLocaleString("pt-BR", {
    maximumFractionDigits: dig,
    minimumFractionDigits: dig
  });
}