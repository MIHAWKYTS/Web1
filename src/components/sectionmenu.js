import { Link } from "react-router-dom";
import { FaHome, FaUsers, FaInfoCircle, FaMapMarkerAlt, FaEdit } from "react-icons/fa";

export function Sectionmenu() {
  return (
    <menu className="menu">
      <a href="#inicio"><FaHome /> Início</a>
      <a href="#artesas"><FaUsers /> Artesãs</a>
      <a href="#sobre"><FaInfoCircle /> Sobre</a>
      <a href="#onde"><FaMapMarkerAlt /> Onde encontrar</a>
      <Link to="/cadastro"><FaEdit /> Seja uma artesã</Link>
    </menu>
  );
}
