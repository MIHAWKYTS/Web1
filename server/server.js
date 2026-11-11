
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
  console.log("Não consegui conectar no PostgreSQL. Ele está ligado?");
});


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
