
const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();
app.use(cors());
app.use(express.json());


const banco = new Pool({
  connectionString:
    process.env.DATABASE_URL || "postgres://postgres:postgres@localhost:5432/feitoempenedo",
});


banco.query(`
  CREATE TABLE IF NOT EXISTS cadastros (
    id SERIAL PRIMARY KEY,
    nome TEXT NOT NULL,
    produto TEXT NOT NULL,
    whatsapp TEXT NOT NULL
  )
`).catch(() => {
  console.log("Não conectou no PostgreSQL. Ele está ligado?");
});

banco.query(`
  CREATE TABLE IF NOT EXISTS artesas (
    id SERIAL PRIMARY KEY,
    nome TEXT NOT NULL,
    produto TEXT NOT NULL,
    foto TEXT NOT NULL,
    whatsapp TEXT NOT NULL
  );

  INSERT INTO artesas (nome, produto, foto, whatsapp)
  SELECT * FROM (VALUES
    ('Maria das Dores', 'Bordado', '/fotos/artesa1.svg', '5500000000000'),
    ('Joana Lima', 'Cerâmica', '/fotos/artesa2.svg', '5500000000000'),
    ('Ana Souza', 'Renda', '/fotos/artesa3.svg', '5500000000000'),
    ('Rita Ferreira', 'Cestaria de palha', '/fotos/artesa4.svg', '5500000000000'),
    ('Luzia Santos', 'Doces caseiros', '/fotos/artesa5.svg', '5500000000000'),
    ('Carlos Almeida', 'Esculturas em madeira', '/fotos/artesa6.svg', '5500000000000')
  ) AS dados
  WHERE NOT EXISTS (SELECT 1 FROM artesas);
`).catch(() => {});


app.get("/artesas", async (req, res) => {
  const resultado = await banco.query("SELECT * FROM artesas ORDER BY id");
  res.json(resultado.rows);
});


app.get("/cadastros", async (req, res) => {
  const resultado = await banco.query("SELECT * FROM cadastros ORDER BY id");
  res.json(resultado.rows);
});


app.post("/cadastros", async (req, res) => {
  const { nome, produto, whatsapp } = req.body;
  const resultado = await banco.query(
    "INSERT INTO cadastros (nome, produto, whatsapp) VALUES ($1, $2, $3) RETURNING *",
    [nome, produto, whatsapp]
  );
  res.status(201).json(resultado.rows[0]);
});

app.listen(3001, () => {
  console.log("Servidor rodando em http://localhost:3001/cadastros");
});
