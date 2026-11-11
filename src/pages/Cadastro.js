import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaShoppingBasket, FaWhatsapp, FaPaperPlane, FaArrowLeft } from "react-icons/fa";
import { SectionLogo } from "../components/sectionLogo/sectionLogo";
import { Sectionfooter } from "../components/sectionfooter";

export function Cadastro() {
  // Cada campo do formulário guarda o que foi digitado
  const [nome, setNome] = useState("");
  const [produto, setProduto] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [mensagem, setMensagem] = useState("");

  function enviar(evento) {
    evento.preventDefault(); // não recarrega a página

    // Envia os dados para o banco (json-server salva no arquivo db.json)
    fetch("http://localhost:3001/cadastros", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome, produto, whatsapp }),
    })
      .then(() => {
        setMensagem("Recebemos seu interesse! Em breve entraremos em contato pelo WhatsApp.");
        setNome("");
        setProduto("");
        setWhatsapp("");
      })
      .catch(() => {
        setMensagem("Erro ao enviar. O banco de dados está ligado?");
      });
  }

  return (
    <div className="pagina">
      <SectionLogo />
      <div className="voltar">
        <Link to="/" className="botao">
          <FaArrowLeft /> Voltar
        </Link>
      </div>

      <section className="secao cadastro">
        <form className="formulario" onSubmit={enviar}>
          <div>
            <h2>Quer fazer parte das nossas artesãs?</h2>
            <p>Tem interesse em mostrar seu trabalho no site? Deixe seus dados e entraremos em contato.</p>
          </div>

          <label>
            <span><FaUser /> Nome</span>
            <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />
          </label>

          <label>
            <span><FaShoppingBasket /> Produto</span>
            <input type="text" value={produto} onChange={(e) => setProduto(e.target.value)} required />
          </label>

          <label>
            <span><FaWhatsapp /> WhatsApp</span>
            <input type="tel" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} required />
          </label>

          <button type="submit" className="botao">
            <FaPaperPlane /> Quero participar
          </button>

          {mensagem && <p className="mensagem">{mensagem}</p>}
        </form>
      </section>
      <Sectionfooter />
    </div>
  );
}
