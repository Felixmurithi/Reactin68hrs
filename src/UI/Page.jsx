export function Main({ children }) {
  return <main className="align-center flex flex-col gap-24">{children}</main>;
}

export function Article({ children }) {
  return <article className="flex flex-col gap-24">{children}</article>;
}

export function Section({ children }) {
  return <section className="flex flex-col gap-7">{children}</section>;
}
export function Paragraph({ children, bgwhite = false }) {
  return <p className={`leading-loose tracking-wide   `}>{children}</p>;
}
