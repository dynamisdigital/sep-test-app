// server.mjs — servidor local zero-dep do sep-test-app.
//
// Serve o app estatico de `app/` e persiste o estado de execucao em `data/db.json`.
// Uso: `npm start` (ou `node server.mjs`), depois abrir http://127.0.0.1:4599.
//
// SEGURANCA: escuta SO em 127.0.0.1 (localhost). E uma ferramenta de dev; nao tem
// autenticacao e nao deve ser exposta na rede. O caminho de escrita e fixo (data/db.json);
// nada no request decide onde gravar, e o estatico e travado dentro de `app/`.

import { createServer } from "node:http";
import { readFile, writeFile, rename, mkdir } from "node:fs/promises";
import { extname, join, normalize, sep } from "node:path";
import { fileURLToPath } from "node:url";

const RAIZ = fileURLToPath(new URL(".", import.meta.url));
const DIR_APP = join(RAIZ, "app");
const DIR_DADOS = join(RAIZ, "data");
const ARQ_DB = join(DIR_DADOS, "db.json");
const ARQ_DB_TMP = join(DIR_DADOS, "db.json.tmp");

const HOST = "127.0.0.1";
const PORTA = Number(process.env.PORT) || 4599;
const LIMITE_BODY = 5 * 1024 * 1024; // 5 MB

const TEXTO = "text/plain; charset=utf-8";
const JSON_TIPO = "application/json; charset=utf-8";
const TIPOS = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".json": JSON_TIPO,
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".png": "image/png",
  ".woff2": "font/woff2",
  ".map": JSON_TIPO,
};

function enviar(res, status, tipo, corpo) {
  res.writeHead(status, { "content-type": tipo, "cache-control": "no-store" });
  res.end(corpo);
}

// Resolve um caminho de URL para um arquivo dentro de `app/`, bloqueando path traversal.
// Retorna null se o alvo escapa de `app/` ou a URL e malformada.
function resolverEstatico(caminhoUrl) {
  let rel;
  try {
    rel = decodeURIComponent(caminhoUrl);
  } catch {
    return null;
  }
  rel = rel === "/" ? "index.html" : rel.replace(/^\/+/, "");
  const alvo = normalize(join(DIR_APP, rel));
  if (alvo !== DIR_APP && !alvo.startsWith(DIR_APP + sep)) return null;
  return alvo;
}

function lerBody(req, limite) {
  return new Promise((resolve, reject) => {
    let tamanho = 0;
    const partes = [];
    req.on("data", (chunk) => {
      tamanho += chunk.length;
      if (tamanho > limite) {
        reject(Object.assign(new Error("payload grande"), { code: "TOO_LARGE" }));
        req.destroy();
        return;
      }
      partes.push(chunk);
    });
    req.on("end", () => resolve(Buffer.concat(partes).toString("utf8")));
    req.on("error", reject);
  });
}

// Escrita atomica: grava no .tmp e renomeia, evitando db.json truncado se o processo cair.
async function gravarDb(texto) {
  await mkdir(DIR_DADOS, { recursive: true });
  await writeFile(ARQ_DB_TMP, texto, "utf8");
  await rename(ARQ_DB_TMP, ARQ_DB);
}

async function responderGetDb(res) {
  try {
    const txt = await readFile(ARQ_DB, "utf8");
    enviar(res, 200, JSON_TIPO, txt.trim() === "" ? "{}" : txt);
  } catch (e) {
    if (e.code === "ENOENT") return enviar(res, 200, JSON_TIPO, "{}");
    throw e;
  }
}

async function responderPutDb(req, res) {
  let body;
  try {
    body = await lerBody(req, LIMITE_BODY);
  } catch (e) {
    if (e.code === "TOO_LARGE") return enviar(res, 413, TEXTO, "payload excede o limite");
    throw e;
  }
  let dados;
  try {
    dados = JSON.parse(body);
  } catch {
    return enviar(res, 400, TEXTO, "corpo nao e JSON valido");
  }
  await gravarDb(JSON.stringify(dados, null, 2) + "\n");
  enviar(res, 200, JSON_TIPO, JSON.stringify({ ok: true }));
}

async function responderEstatico(req, res, caminho) {
  const alvo = resolverEstatico(caminho);
  if (!alvo) return enviar(res, 403, TEXTO, "acesso negado");
  try {
    const conteudo = await readFile(alvo);
    const tipo = TIPOS[extname(alvo).toLowerCase()] || "application/octet-stream";
    res.writeHead(200, { "content-type": tipo, "cache-control": "no-store" });
    res.end(req.method === "HEAD" ? undefined : conteudo);
  } catch (e) {
    if (e.code === "ENOENT" || e.code === "EISDIR") return enviar(res, 404, TEXTO, "nao encontrado");
    throw e;
  }
}

const servidor = createServer(async (req, res) => {
  try {
    const caminho = (req.url || "/").split("?")[0];

    if (caminho === "/api/db") {
      if (req.method === "GET") return await responderGetDb(res);
      if (req.method === "PUT" || req.method === "POST") return await responderPutDb(req, res);
      return enviar(res, 405, TEXTO, "metodo nao suportado");
    }

    if (req.method === "GET" || req.method === "HEAD") {
      return await responderEstatico(req, res, caminho);
    }
    return enviar(res, 405, TEXTO, "metodo nao suportado");
  } catch {
    enviar(res, 500, TEXTO, "erro interno");
  }
});

servidor.listen(PORTA, HOST, () => {
  console.log(`sep-test-app no ar: http://${HOST}:${PORTA}`);
  console.log(`Estado persistido em: ${ARQ_DB}`);
  console.log("Localhost apenas. Ctrl+C para parar.");
});
