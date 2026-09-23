# Feito em Penedo — Vitrine de artesãs

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white&labelColor=20232a)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?logo=javascript&logoColor=black&labelColor=20232a)
![CSS3](https://img.shields.io/badge/CSS3-Flexbox-1572B6?logo=css3&logoColor=white&labelColor=20232a)
![Status](https://img.shields.io/badge/status-protótipo%20acadêmico-orange)

Vitrine digital de página única para divulgar o artesanato local de **Penedo-AL**: quem faz, o que faz, onde encontrar e como entrar em contato pelo WhatsApp.

## Sumário

- [O que é o projeto](#o-que-é-o-projeto)
- [O que o site tem](#o-que-o-site-tem)
- [Tecnologias](#tecnologias)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Como rodar](#como-rodar)
- [Como incluir uma artesã](#como-incluir-uma-artesã)
## O que é o projeto

Artesãs e produtores locais vendem principalmente de forma presencial ou por indicação, e não há um lugar único onde moradores e turistas descubram quem produz o quê, onde comprar e como falar com quem faz.

O **Feito em Penedo** é o *front-end* dessa solução: uma página única (single page) em React que apresenta as artesãs e seus produtos, mostra onde e quando encontrar os pontos de venda, e leva o visitante direto ao WhatsApp de quem produz — sem intermediários.

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

## Tecnologias

- [React](https://react.dev) (via [Create React App](https://create-react-app.dev))
- JavaScript (ES6+)
- CSS (Flexbox, media queries, `:hover`)

## Estrutura do projeto

```
WEb1/
├── public/
│   └── index.html
├── src/
│   ├── App.js                     # junta todas as seções
│   ├── index.css                  # cores, tipografia, Flexbox e media queries
│   ├── index.js                   # ponto de entrada do React
│   ├── data/
│   │   └── artesas.js             # dados das artesãs (um objeto por artesã)
│   ├── assets/                    # logo e ilustrações (SVG)
│   └── components/
│       ├── sectionLogo/
│       │   └── sectionLogo.js     # cabeçalho (logo + ilustração do rio)
│       ├── sectionmenu.js         # menu por âncoras
│       ├── sectionhero.js         # seção de início
│       ├── sectionartesas.js      # lista de cards (.map() sobre data/artesas.js)
│       ├── cardartesa.js          # um card de artesã, recebe dados via props
│       ├── sectionsobre.js        # seção "Sobre a vitrine"
│       ├── sectiononde.js         # tabela "Onde encontrar"
│       └── sectionfooter.js       # rodapé
├── package.json
└── README.md
```

## Como rodar

Pré-requisito: [Node.js](https://nodejs.org) (com npm).

```bash
# 1. instalar as dependências
npm install

# 2. rodar em modo de desenvolvimento
npm start
# abre em http://localhost:3000

# 3. rodar os testes
npm test

# 4. gerar a versão de produção
npm run build
# gera os arquivos otimizados em build/
```

## Como incluir uma artesã

Basta adicionar um objeto em `src/data/artesas.js`; um novo card aparece automaticamente na seção **Artesãs**, sem precisar mexer no layout:

```js
{ id: 7, nome: "Nome", produto: "Produto", foto: fotoNova, whatsapp: "55DDDNUMERO" }
```
