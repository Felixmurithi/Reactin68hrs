export function ListContainer({ children }) {
  return (
    // <ul className={`flex list-inside list-${marker} flex-col gap-5`}>
    <ul
      className={`flex list-inside list-decimal flex-col gap-5 leading-loose tracking-wide`}
    >
      {children}
    </ul>
  );
}

export function ListItem({ children }) {
  return (
    // <li className="leading-loose tracking-wide before:pl-2 before:content-['']">
    <li className="ml-12">{children}</li>
  );
}
