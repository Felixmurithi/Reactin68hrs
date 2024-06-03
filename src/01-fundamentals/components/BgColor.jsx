function BgColor() {
  const color = `rgb(${[1, 2, 3].map(() => (Math.random() * 256) | 0)})`;
  return (
    <div
      style={{ backgroundColor: color }}
      className="h-5 w-5 self-center"
    ></div>
  );
}

export default BgColor;
