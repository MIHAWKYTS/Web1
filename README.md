# Feito em Penedo — Vitrine de artesãs

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white&labelColor=20232a)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?logo=javascript&logoColor=black&labelColor=20232a)
![CSS3](https://img.shields.io/badge/CSS3-Flexbox-1572B6?logo=css3&logoColor=white&labelColor=20232a)
![React Router](https://img.shields.io/badge/React%20Router-6-CA4245?logo=reactrouter&logoColor=white&labelColor=20232a)
![Status](https://img.shields.io/badge/status-protótipo%20acadêmico-orange)

Vitrine digital para divulgar o artesanato local de **Penedo-AL**: quem faz, o que faz, onde encontrar e como entrar em contato pelo WhatsApp.

## Sumário

- [O que é o projeto](#o-que-é-o-projeto)
- [O que o site tem](#o-que-o-site-tem)
- [Tecnologias](#tecnologias)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Como rodar](#como-rodar)
- [Banco de dados](#banco-de-dados)
- [Como incluir uma artesã](#como-incluir-uma-artesã)

## O que é o projeto

Artesãs e produtores locais vendem principalmente de forma presencial ou por indicação, e não há um lugar único onde moradores e turistas descubram quem produz o quê, onde comprar e como falar com quem faz.

O **Feito em Penedo** é uma vitrine em React que apresenta as artesãs e seus produtos, mostra onde e quando encontrar os pontos de venda, e leva o visitante direto ao WhatsApp de quem produz — sem intermediários.

## O que o site tem

| Seção | O que faz |
|---|---|
| **Cabeçalho** | Logo da vitrine e ilustração do Rio São Francisco. |
| **Início** (`#inicio`) | Apresentação com texto e imagem lado a lado, e botão para a lista de artesãs. |
| **Artesãs** (`#artesas`) | Cards com foto, nome, produto e botão de contato direto pelo `wa.me`. |
| **Sobre** (`#sobre`) | História da vitrine, texto e imagem. |
| **Onde encontrar** (`#onde`) | Tabela com locais, dias e horários de venda. |
| **Rodapé** | Créditos. |

O menu navega por âncoras entre as seções e o layout é responsivo, com breakpoints em 768px e 480px.

### Página de cadastro (`/cadastro`)

Uma segunda página, aberta pelo botão **Quero fazer parte** (início) ou **Seja uma artesã** (menu). Tem um formulário (nome, produto e WhatsApp) para quem tem interesse em aparecer na vitrine. Os dados são salvos no banco de dados PostgreSQL.

## Tecnologias

- [React](https://react.dev) (via [Create React App](https://create-react-app.dev))
- JavaScript (ES6+)
- CSS (Flexbox, media queries, `:hover`)
- [React Router](https://reactrouter.com) (`react-router-dom`): rotas entre as páginas
- [React Icons](https://react-icons.github.io/react-icons): ícones do menu, cards e formulário
- [PostgreSQL](https://www.postgresql.org): banco de dados onde ficam os cadastros
- [Express](https://expressjs.com) + [pg](https://node-postgres.com): servidor que recebe o formulário e grava no banco

## Estrutura do projeto

```
WEb1/
├── public/
│   └── index.html
├── src/
│   ├── App.js                     # rotas: / (Home) e /cadastro (Cadastro)
│   ├── index.css                  # cores, tipografia, Flexbox e media queries
│   ├── index.js                   # ponto de entrada do React
│   ├── pages/
│   │   ├── Home.js                # página inicial (junta todas as seções)
│   │   └── Cadastro.js            # formulário que salva no banco
│   ├── data/
│   │   └── artesas.js             # dados das artesãs (um objeto por artesã)
│   ├── assets/                    # logo e ilustrações (SVG)
│   └── components/
│       ├── sectionLogo/
│       │   └── sectionLogo.js     # cabeçalho (logo + ilustração do rio)
│       ├── sectionmenu.js         # menu por âncoras + link para /cadastro
│       ├── sectionhero.js         # seção de início
│       ├── sectionartesas.js      # lista de cards (.map() sobre data/artesas.js)
│       ├── cardartesa.js          # um card de artesã, recebe dados via props
│       ├── sectionsobre.js        # seção "Sobre a vitrine"
│       ├── sectiononde.js         # tabela "Onde encontrar"
│       └── sectionfooter.js       # rodapé
├── server.js                      # servidor Express que salva no PostgreSQL
├── package.json
└── README.md
```

## Como rodar

Pré-requisitos: [Node.js](https://nodejs.org) (com npm) e [Docker](https://www.docker.com) (para o PostgreSQL).

```bash
# 1. instalar as dependências
npm install

# 2. criar o PostgreSQL no Docker (só na primeira vez)
docker run -d --name feitoempenedo-db -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=feitoempenedo -p 5432:5432 -v feitoempenedo-dados:/var/lib/postgresql/data postgres:16
# nas próximas vezes (ex.: depois de reiniciar o PC), só ligue ele:
docker start feitoempenedo-db

# 3. ligar o servidor (em um terminal)
npm run banco
# API em http://localhost:3001/cadastros

# 4. rodar o site (em outro terminal)
npm start
# abre em http://localhost:3000

# 5. rodar os testes
npm test

# 6. gerar a versão de produção
npm run build
# gera os arquivos otimizados em build/
```

## Banco de dados

Os cadastros ficam no **PostgreSQL**. O arquivo `server.js` é um servidor [Express](https://expressjs.com) que liga o site ao banco:

1. A pessoa preenche o formulário em `/cadastro` e clica em **Quero participar**.
2. O React envia os dados com `fetch` (método `POST`) para `http://localhost:3001/cadastros`.
3. O `server.js` grava o cadastro na tabela `cadastros` (criada sozinha na primeira vez):

```sql
CREATE TABLE cadastros (
  id SERIAL PRIMARY KEY,
  nome TEXT NOT NULL,
  produto TEXT NOT NULL,
  whatsapp TEXT NOT NULL
);
```

O PostgreSQL roda no container `feitoempenedo-db` (porta 5432, usuário e senha `postgres`). Os dados ficam no volume `feitoempenedo-dados`, então não se perdem quando o container é desligado.

Por padrão o servidor conecta em `postgres://postgres:postgres@localhost:5432/feitoempenedo`. Se você usar outro PostgreSQL (com outro usuário, senha ou porta), passe outro endereço:

```bash
DATABASE_URL=postgres://usuario:senha@localhost:5432/feitoempenedo npm run banco
```

Para ver os cadastros salvos, acesse http://localhost:3001/cadastros ou rode:

```bash
docker exec -it feitoempenedo-db psql -U postgres feitoempenedo -c "SELECT * FROM cadastros;"
```

Se o banco estiver desligado, o `npm run banco` avisa no terminal e o formulário mostra uma mensagem de erro.

## Como incluir uma artesã

Basta adicionar um objeto em `src/data/artesas.js`; um novo card aparece automaticamente na seção **Artesãs**, sem precisar mexer no layout:

```js
{ id: 7, nome: "Nome", produto: "Produto", foto: fotoNova, whatsapp: "55DDDNUMERO" }
```
