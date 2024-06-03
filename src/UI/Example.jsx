import Button from "./Button";
import { Span } from "./Text";

export function ExampleDiv({
  children,
  justify = "around",
  bg = true,
  gap = "",
}) {
  return (
    <div
      className={`mx-auto flex w-fit justify-around gap-4 self-center  rounded-sm border border-stone-200 bg-stone-50 p-2`}
    >
      {children}
    </div>
  );
}

export function Add({ onClick }) {
  return (
    <Button onClick={onClick} color={"text-emerald-600"}>
      <Span textSize="text-2xl" color={"text-red-600"}>
        +
      </Span>
    </Button>
  );
}
export function Subtract({ onClick }) {
  return (
    <Button
      onClick={onClick}
      border={"border-yellow-900"}
      hover={"hover:border-yellow-700"}
    >
      <Span color={"text-yello-900"}>-</Span>
    </Button>
  );
}
