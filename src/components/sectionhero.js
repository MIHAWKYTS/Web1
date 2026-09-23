import heroImg from "../assets/hero.svg";

export function Sectionhero() {
  return (
    <section className="hero" id="inicio">
      <div className="color-block"></div>
      <div className="hero-text">
        <h1>Feito à mão em Penedo</h1>
        <h3>Conheça quem faz, onde encontrar e como falar com as artesãs</h3>
        <p>
          Uma vitrine digital para o artesanato local: veja os produtos, descubra
          os dias e locais de venda e chame a artesã direto pelo WhatsApp.
        </p>
        <a className="botao" href="#artesas">Ver artesãs</a>
      </div>
      <div className="hero-image">
        <img src={heroImg} alt="Igreja às margens do Rio São Francisco" className="hero-img" />
      </div>
      <div className="color-block"></div>
    </section>
  );
}
