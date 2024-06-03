import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="flex h-14 justify-end bg-emerald-100 pl-[300px] pr-[300px]">
      <nav className="flex justify-around gap-6   self-center">
        <NavLink to="fundamentals">Fundamentals</NavLink>
        <NavLink to="setup">Set-up</NavLink>
        <NavLink to="routing">Routing</NavLink>
      </nav>
    </header>
  );
}

export default Header;
