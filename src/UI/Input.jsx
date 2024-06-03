export function Form({ children, onSubmit }) {
  return (
    <form action="" onSubmit={onSubmit}>
      {children}
    </form>
  );
}

export function InputField({ type, onChange, placeHolder }) {
  return (
    <input
      className="w-[150px] rounded-[3px] border border-emerald-800 px-2"
      type={type}
      onChange={onChange}
      placeholder={placeHolder}
    />
  );
}

export function Select({ children, onChange, name, id, value }) {
  return (
    <select
      name={name}
      id={id}
      value={value}
      onChange={onChange}
      className="w-[150px] rounded-[3px] border border-stone-800 px-2"
    >
      {children}
    </select>
  );
}

export function Option({ children, value }) {
  return <option value={value}>{children}</option>;
}
export function Label({ children, id }) {
  return <label htmlFor={id}>{children}</label>;
}
