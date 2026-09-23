export function SectionOnde() {
  return (
    <section id="onde" className="secao">
      <h2>Onde encontrar</h2>
      <p>Locais e horários em que os produtos podem ser encontrados.</p>
      <table>
        <thead>
          <tr>
            <th>Local</th>
            <th>Dia</th>
            <th>Horário</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Feira da Praça</td>
            <td>Sábado</td>
            <td>08h às 13h</td>
          </tr>
          <tr>
            <td>Sede da associação</td>
            <td>Segunda a sexta</td>
            <td>09h às 17h</td>
          </tr>
          <tr>
            <td>Ponto no cais</td>
            <td>Domingo</td>
            <td>10h às 16h</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
