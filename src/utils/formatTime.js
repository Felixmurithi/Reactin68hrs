export default function formatTime(date) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "2-digit",
    // year: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(date);
}
