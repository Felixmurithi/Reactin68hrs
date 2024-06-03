export function randomColor() {
  const color = `rgb(${[1, 2, 3].map(() => (Math.random() * 256) | 0)})`;
  return color;
}
