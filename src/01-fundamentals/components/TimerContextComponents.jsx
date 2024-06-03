import { useTimeI } from "./TimeContextI";
import { useTimeII } from "./TimeContextII";
import { useTimeIII } from "./TimeContextIII";

export function Color() {
  const color = `rgb(${[1, 2, 3].map(() => (Math.random() * 256) | 0)})`;
  return (
    <div
      style={{ backgroundColor: color }}
      className="h-10 w-10 self-center"
    ></div>
  );
}
export function TimeI() {
  const { time } = useTimeI();
  return <span className="mx-auto  block max-w-fit">Its {time}</span>;
}
export function ColorI() {
  const { time } = useTimeI();
  time;

  const color = `rgb(${[1, 2, 3].map(() => (Math.random() * 256) | 0)})`;
  return (
    <div
      style={{ backgroundColor: color }}
      className="h-10 w-10 self-center"
    ></div>
  );
}
export function ColorII() {
  const { allowColor } = useTimeII();
  allowColor;

  const color = `rgb(${[1, 2, 3].map(() => (Math.random() * 256) | 0)})`;
  return (
    <div
      style={{ backgroundColor: color }}
      className="h-10 w-10 self-center"
    ></div>
  );
}
export function ColorIII() {
  const { allowColor } = useTimeIII();
  allowColor;

  const color = `rgb(${[1, 2, 3].map(() => (Math.random() * 256) | 0)})`;
  return (
    <div
      style={{ backgroundColor: color }}
      className="h-10 w-10 self-center"
    ></div>
  );
}
