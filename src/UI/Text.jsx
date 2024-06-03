export function TextBold({ children }) {
  return (
    <strong className="before:content-['_'] after:content-['_']">
      {children}
    </strong>
  );
}

export function H2({ children }) {
  return <h2>{children}</h2>;
}
export function H3({ children }) {
  return <h2>{children}</h2>;
}

export function Span({ children }) {
  return (
    <span className={`rounded  px-2  text-2xl text-stone-800`}>{children}</span>
  );
}
export function SpanLarge({ children }) {
  return (
    <span className={`mx-4  rounded  text-7xl text-stone-800`}>{children}</span>
  );
}
export function Like() {
  return (
    <span
      className={`-mr-5  ml-6 self-center  rounded text-5xl text-green-800`}
    >
      ♥
    </span>
  );
}
