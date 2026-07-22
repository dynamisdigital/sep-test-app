# sep-test-app

App de **execução dos roteiros de teste manual do SEP**, tela a tela, contra o backend real
local. Extraído do repo `docs-SEP` (`docs-sep/roteiros-teste/`) para repo próprio, agora com
**persistência em arquivo** (`data/db.json`) — os resultados de teste ficam no git e podem ser
commitados.

## O que é

- Um app estático (HTML/CSS/JS puro, sem framework, sem build) que lê os roteiros dos `.md`
  desta pasta e deixa marcar cada passo, registrar ocorrências e definir o status de cada
  jornada, por **rodada** de execução.
- Um servidor local **zero-dependência** (`server.mjs`, só `node:http`/`node:fs`) que serve o
  app e persiste o estado em [`data/db.json`](./data/db.json) via `GET`/`PUT /api/db`.

## Como rodar

Requer **Node 22+**. Sem `npm install` (não há dependências).

```bash
npm start
# abre em http://127.0.0.1:4599  (porta configurável via env PORT)
```

Cada marcação é gravada automaticamente em `data/db.json`. Para registrar uma rodada no
histórico, **comite o arquivo** quando quiser:

```bash
git add data/db.json
git commit -m "test: rodada <descrição>"
```

### Modo alternativo (sem servidor)

Abrir [`app/index.html`](./app/index.html) direto (duplo clique, `file://`) também funciona,
mas aí o estado vive só no `localStorage` do navegador. Use **Exportar**/**Importar** (JSON)
para levar a rodada de uma máquina a outra. Rodar pelo servidor evita esse atrito e persiste
no repo.

## Persistência (`data/db.json`)

- Fonte de verdade no modo servidor. Contém **todas as rodadas** (marcações, status,
  ocorrências, registro).
- Escrita atômica (`.tmp` + `rename`) para nunca deixar o arquivo truncado.
- `data/db.json.tmp` é ignorado pelo git; `data/db.json` é versionado.
- Se o servidor não responder, o app cai para o `localStorage` e mostra um aviso no topo.

## Regenerar o conteúdo dos roteiros

O app não lê os `.md` em runtime: lê [`app/dados.js`](./app/dados.js), **artefato derivado**
gerado dos `.md` desta pasta. Depois de editar qualquer roteiro:

```bash
npm run gerar          # = node app/gerar-dados.mjs
npm run check-dados    # falha (exit != 0) se dados.js estiver desatualizado
```

## Estrutura

```
sep-test-app/
├── server.mjs            servidor local (static + /api/db)
├── package.json          scripts: start | gerar | check-dados (sem deps)
├── data/db.json          o "banco" — estado das rodadas (versionado)
├── app/
│   ├── index.html        shell do app
│   ├── app.css / app.js  UI e lógica (persistência server-aware + fallback localStorage)
│   ├── dados.js          conteúdo gerado (não editar à mão)
│   └── gerar-dados.mjs   gerador dos .md → dados.js
├── CENARIOS-TESTE-JORNADAS-USUARIO.md   hub de execução + matriz de cobertura
├── ROTEIRO-00-AMBIENTE-E-MASSA.md       ambiente e massa de dados
├── ROTEIRO-01-ACESSO-E-SESSAO.md        acesso e sessão (J-000..J-039)
└── ROTEIRO-04-CREDITO-FORMALIZACAO.md   crédito e formalização (J-060..J-079)
```

## Segurança

O servidor escuta **apenas em `127.0.0.1`** e não tem autenticação — é ferramenta de dev
local. **Não exponha na rede.** O caminho de escrita é fixo (`data/db.json`) e o estático é
travado dentro de `app/` (sem path traversal).

## Origem e documentação

Migrado do repo `docs-SEP`. Documentação de produto (estado, PRD, arquitetura, ADRs) segue no
`docs-SEP` — ver `docs-sep/STATE.md`, `docs-sep/PRD-FASE-4.md` e `AGENT.md`. Links dos roteiros
para specs/e2e/collections assumem os repos irmãos (`sep-app`, `sep-mobile`, `sep-api`,
`docs-SEP`) no mesmo diretório-pai.
