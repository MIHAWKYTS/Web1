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

Uma segunda página, aberta pelo botão **Quero fazer parte** (início) ou **Seja uma artesã** (menu). Tem um formulário (nome, produto e WhatsApp) para quem tem interesse em aparecer na vitrine. Os dados são salvos no banco de dados (`db.json`).

## Tecnologias

- [React](https://react.dev) (via [Create React App](https://create-react-app.dev))
- JavaScript (ES6+)
- CSS (Flexbox, media queries, `:hover`)
- [React Router](https://reactrouter.com) (`react-router-dom`): rotas entre as páginas
- [React Icons](https://react-icons.github.io/react-icons): ícones do menu, cards e formulário
- [json-server](https://github.com/typicode/json-server): banco de dados simples em arquivo JSON

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
├── db.json                        # banco de dados (json-server)
├── package.json
└── README.md
```

## Como rodar

Pré-requisito: [Node.js](https://nodejs.org) (com npm).

```bash
# 1. instalar as dependências
npm install

# 2. ligar o banco de dados (em um terminal)
npm run banco
# API em http://localhost:3001/cadastros

# 3. rodar o site (em outro terminal)
npm start
# abre em http://localhost:3000

# 4. rodar os testes
npm test

# 5. gerar a versão de produção
npm run build
# gera os arquivos otimizados em build/
```

## Banco de dados

O banco é o [json-server](https://github.com/typicode/json-server), que transforma o arquivo `db.json` em uma API:

1. A pessoa preenche o formulário em `/cadastro` e clica em **Quero participar**.
2. O React envia os dados com `fetch` (método `POST`) para `http://localhost:3001/cadastros`.
3. O json-server grava o cadastro no `db.json`:

```json
{
  "cadastros": [
    { "nome": "Maria", "produto": "Bordado", "whatsapp": "5582999999999", "id": 1 }
  ]
}
```

Para ver os cadastros salvos, abra o `db.json` ou acesse http://localhost:3001/cadastros. Se o banco estiver desligado, o formulário mostra uma mensagem de erro.

## Como incluir uma artesã

Basta adicionar um objeto em `src/data/artesas.js`; um novo card aparece automaticamente na seção **Artesãs**, sem precisar mexer no layout:

```js
{ id: 7, nome: "Nome", produto: "Produto", foto: fotoNova, whatsapp: "55DDDNUMERO" }
```
