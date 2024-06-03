function Button({
  children,
  onClick,
  border = "border-emerald-600",
  hover = "hover:border-emerald-400",
}) {
  return (
    <button
      className={`self-center rounded-md border-2 border-solid ${border}  ${hover}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
