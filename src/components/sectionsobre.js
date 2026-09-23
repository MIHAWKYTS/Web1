import sobreImg from "../assets/sobre.svg";

export function SectionSobre() {
  return (
    <section id="sobre" className="secao sobre">
      <div className="sobre-texto">
        <h2>Sobre a vitrine</h2>
        <p>
          A vitrine reúne, em um só lugar, o trabalho das artesãs e produtores de
          Penedo-AL. A ideia é dar visibilidade a quem faz o artesanato local e
          ajudar moradores e turistas a encontrar e comprar direto de quem produz.
        </p>
      </div>
      <img src={sobreImg} alt="Barraca de feira com peças de artesanato" className="sobre-img" />
    </section>
  );
}
