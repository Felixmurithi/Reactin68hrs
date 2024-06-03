export default function titleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((x) => x[0].toUpperCase() + x.slice(1))
    .join(" ");
}
