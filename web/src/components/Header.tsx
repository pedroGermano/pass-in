import logoNlw from "../assets/nlw-unite-icon.svg";

export function Header() {
  return (
    <div className="flex items-center gap-5">
      <img src={logoNlw} alt="logo nlw" />

      <nav className="flex items-center gap-5 py-8">
        <a className="text-sm font-medium text-zinc-300" href="#">
          Eventos
        </a>
        <a className="text-sm font-medium" href="#">
          Participatnes
        </a>
      </nav>
    </div>
  );
}
