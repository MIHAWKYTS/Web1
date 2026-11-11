import logo from "../../assets/logo.svg";
import rio from "../../assets/rio.svg";

export function SectionLogo() {
  return (
    <header>
      <img src={logo} alt="Feito em Penedo, vitrine de artesãs" className="logo" />
      <img src={rio} alt="Ilustração do Rio São Francisco" className="rio" />
    </header>
  );
}
