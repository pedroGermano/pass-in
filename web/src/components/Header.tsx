import logoNlw from "../assets/nlw-unite-icon.svg";
import { NavLink } from "./navLink";

export function Header() {
  return (
    <div className="flex items-center gap-5">
      <img src={logoNlw} alt="logo nlw" />

      <nav className="flex items-center gap-5 py-8">
        <NavLink href="/eventos">Eventos</NavLink>
        <NavLink href="/participantes">Participantes</NavLink>
      </nav>
    </div>
  );
}
