import { CardArtesa } from "./cardartesa";
import { artesas } from "../data/artesas";

export function SectionArtesas() {
  return (
    <section id="artesas" className="secao">
      <h2>Nossas artesãs</h2>
      <p>Conheça quem faz e fale direto com cada artesã pelo WhatsApp.</p>
      <div className="cards">
        {artesas.map((artesa) => (
          <CardArtesa
            key={artesa.id}
            nome={artesa.nome}
            produto={artesa.produto}
            foto={artesa.foto}
            whatsapp={artesa.whatsapp}
          />
        ))}
      </div>
    </section>
  );
}
