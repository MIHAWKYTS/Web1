import { useState, useEffect } from "react";
import { CardArtesa } from "./cardartesa";

export function SectionArtesas() {
  const [artesas, setArtesas] = useState([]);
  const [erro, setErro] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/artesas")
      .then((resposta) => {
        if (!resposta.ok) {
          throw new Error();
        }
        return resposta.json();
      })
      .then((dados) => setArtesas(dados))
      .catch(() => setErro("Não foi possível carregar as artesãs. O banco de dados está ligado?"));
  }, []);

  return (
    <section id="artesas" className="secao">
      <h2>Nossas artesãs</h2>
      <p>Conheça quem faz e fale direto com cada artesã pelo WhatsApp.</p>
      {erro && <p className="mensagem">{erro}</p>}
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
