export function CardArtesa({ nome, produto, foto, whatsapp }) {
  return (
    <article className="card">
      <img src={foto} alt={`Trabalho de ${nome}: ${produto}`} className="card-foto" />
      <h3>{nome}</h3>
      <p>{produto}</p>
      <a
        className="botao"
        href={`https://wa.me/${whatsapp}`}
        target="_blank"
        rel="noreferrer"
      >
        Contato
      </a>
    </article>
  );
}
