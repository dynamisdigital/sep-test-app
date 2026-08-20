// GERADO por gerar-dados.mjs — nao editar a mao.
// Fonte: *.md na raiz do sep-test-app — rode `npm run gerar` apos editar.
window.SEP_DADOS = {
  "schemaVersion": 1,
  "geradoEm": "2026-08-20T13:22:13.040Z",
  "gerador": {
    "arquivo": "gerar-dados.mjs",
    "versao": "1.1.0"
  },
  "totais": {
    "roteiros": 6,
    "escopos": 62,
    "jornadas": 48,
    "passos": 324,
    "assercoes": 36,
    "na": 3
  },
  "glossario": [
    {
      "termo": "MFA",
      "definicaoHtml": "Autenticação multifator: além da senha, o sistema exige um segundo fator. No SEP o segundo fator é o TOTP."
    },
    {
      "termo": "TOTP",
      "definicaoHtml": "Código numérico de 6 dígitos que muda a cada 30 segundos, gerado por um app autenticador (Google Authenticator, Authy) pareado com a conta. É o segundo fator do MFA."
    },
    {
      "termo": "Backup code",
      "definicaoHtml": "Código de uso único, entregue ao habilitar o MFA, que substitui o TOTP quando o celular não está à mão. Cada código só funciona uma vez."
    },
    {
      "termo": "Step-up",
      "definicaoHtml": "Reautenticação no meio de uma operação sensível: mesmo já logado, o usuário confirma identidade de novo e recebe um token de curta duração para aquela ação específica."
    },
    {
      "termo": "Step-up legado",
      "definicaoHtml": "Variante que só exige o token de step-up se o usuário tiver MFA habilitado. Quem não tem MFA passa direto."
    },
    {
      "termo": "Step-up estrito",
      "definicaoHtml": "Variante que <strong>nega</strong> a operação quando o usuário não tem MFA, antes mesmo de olhar o token. É a diferença que várias jornadas negativas testam."
    },
    {
      "termo": "Token de uso único",
      "definicaoHtml": "O token de step-up vale para <strong>uma</strong> mutação. Reenviar a mesma requisição com o mesmo token dá 403 — é proposital."
    },
    {
      "termo": "KYC",
      "definicaoHtml": "&quot;Know Your Customer&quot;: conferência de identidade da pessoa física."
    },
    {
      "termo": "KYB",
      "definicaoHtml": "O equivalente para pessoa jurídica: conferência da empresa e do representante."
    },
    {
      "termo": "PLD",
      "definicaoHtml": "Prevenção à lavagem de dinheiro. Exige trilha de auditoria do que aconteceu e quando."
    },
    {
      "termo": "Onboarding",
      "definicaoHtml": "A jornada de cadastro e aprovação que precede o crédito. Só com onboarding <code>APROVADO_FINAL</code> o tomador consegue criar proposta."
    },
    {
      "termo": "Proposta",
      "definicaoHtml": "O pedido de crédito criado pelo tomador, antes de virar contrato."
    },
    {
      "termo": "Formalização",
      "definicaoHtml": "A etapa entre a aprovação da proposta e o contrato assinado: gerar minuta, aceitar, assinar."
    },
    {
      "termo": "Minuta",
      "definicaoHtml": "A versão do contrato apresentada para leitura e aceite, antes da assinatura."
    },
    {
      "termo": "CCB",
      "definicaoHtml": "Cédula de Crédito Bancário: o documento de dívida que o tomador assina. É o PDF baixado ao fim da formalização."
    },
    {
      "termo": "Envelope",
      "definicaoHtml": "O pacote enviado ao provedor de assinatura digital. Tem status próprio (<code>ENVIADO</code>, <code>ASSINADO</code>) separado do status do contrato."
    },
    {
      "termo": "Webhook",
      "definicaoHtml": "Chamada que o provedor externo faz <strong>para</strong> o SEP avisando que algo aconteceu (ex.: &quot;o documento foi assinado&quot;). Nos roteiros ele é simulado pelo Insomnia."
    },
    {
      "termo": "HMAC",
      "definicaoHtml": "Assinatura criptográfica que acompanha o webhook e prova que ele veio mesmo do provedor. Webhook com HMAC errado deve ser recusado."
    },
    {
      "termo": "Idempotency-Key",
      "definicaoHtml": "Cabeçalho que identifica uma tentativa. Reenviar a mesma requisição com a mesma chave não duplica a operação — é o que protege contra duplo clique e retry."
    },
    {
      "termo": "IDOR",
      "definicaoHtml": "Falha em que trocar um ID na URL dá acesso ao dado de outra pessoa. As jornadas &quot;de contrato alheio&quot; existem para provar que o SEP <strong>não</strong> tem essa falha."
    },
    {
      "termo": "Escrow",
      "definicaoHtml": "Conta em que o dinheiro fica retido até a condição combinada se cumprir."
    },
    {
      "termo": "Lockout",
      "definicaoHtml": "Bloqueio temporário da conta após seguidas senhas erradas. No SEP: 5 tentativas em 15 min bloqueiam por 30 min."
    },
    {
      "termo": "RBAC",
      "definicaoHtml": "Controle de acesso por papel (<code>ADMIN</code>, <code>FINANCEIRO</code>, <code>BACKOFFICE</code>, <code>CLIENTE</code>). Define o que cada persona enxerga."
    },
    {
      "termo": "MSW",
      "definicaoHtml": "Mock Service Worker: camada que finge ser o backend no navegador. <strong>Se ele estiver ligado, o teste não vale</strong> — o roteiro exige o backend real."
    },
    {
      "termo": "DevTools",
      "definicaoHtml": "O painel do navegador aberto com <code>F12</code>. A aba <strong>Network</strong> mostra as chamadas de rede; a aba <strong>Console</strong> mostra os erros."
    },
    {
      "termo": "psql",
      "definicaoHtml": "O cliente de linha de comando do PostgreSQL. Nos roteiros ele é sempre chamado por dentro do Docker, pelo comando já pronto no passo."
    },
    {
      "termo": "Aba anônima",
      "definicaoHtml": "Janela do navegador que não reaproveita sessão nem cache de login. Garante que você está mesmo deslogado."
    }
  ],
  "diagnostico": {
    "avisos": [
      {
        "codigo": "SEM_RESULTADO_FINAL",
        "arquivo": "ROTEIRO-01-ACESSO-E-SESSAO.md",
        "linha": 142,
        "msg": "jornada J-002.M-N1 sem \"Resultado final esperado\""
      },
      {
        "codigo": "SEM_RESULTADO_FINAL",
        "arquivo": "ROTEIRO-01-ACESSO-E-SESSAO.md",
        "linha": 203,
        "msg": "jornada J-003.M sem \"Resultado final esperado\""
      },
      {
        "codigo": "SEM_RESULTADO_FINAL",
        "arquivo": "ROTEIRO-01-ACESSO-E-SESSAO.md",
        "linha": 313,
        "msg": "jornada J-011.W sem \"Resultado final esperado\""
      },
      {
        "codigo": "SEM_RESULTADO_FINAL",
        "arquivo": "ROTEIRO-01-ACESSO-E-SESSAO.md",
        "linha": 471,
        "msg": "jornada J-020.W sem \"Resultado final esperado\""
      },
      {
        "codigo": "SEM_RESULTADO_FINAL",
        "arquivo": "ROTEIRO-01-ACESSO-E-SESSAO.md",
        "linha": 577,
        "msg": "jornada J-022.W-N1 sem \"Resultado final esperado\""
      },
      {
        "codigo": "SEM_RESULTADO_FINAL",
        "arquivo": "ROTEIRO-01-ACESSO-E-SESSAO.md",
        "linha": 610,
        "msg": "jornada J-030.W sem \"Resultado final esperado\""
      },
      {
        "codigo": "SEM_RESULTADO_FINAL",
        "arquivo": "ROTEIRO-01-ACESSO-E-SESSAO.md",
        "linha": 665,
        "msg": "jornada J-031.W sem \"Resultado final esperado\""
      },
      {
        "codigo": "SEM_RESULTADO_FINAL",
        "arquivo": "ROTEIRO-01-ACESSO-E-SESSAO.md",
        "linha": 705,
        "msg": "jornada J-033.W sem \"Resultado final esperado\""
      },
      {
        "codigo": "SEM_RESULTADO_FINAL",
        "arquivo": "ROTEIRO-02-GOVERNANCA.md",
        "linha": 173,
        "msg": "jornada J-040.W-N1 sem \"Resultado final esperado\""
      },
      {
        "codigo": "SEM_RESULTADO_FINAL",
        "arquivo": "ROTEIRO-02-GOVERNANCA.md",
        "linha": 293,
        "msg": "jornada J-041.W-N1 sem \"Resultado final esperado\""
      },
      {
        "codigo": "SEM_RESULTADO_FINAL",
        "arquivo": "ROTEIRO-02-GOVERNANCA.md",
        "linha": 483,
        "msg": "jornada J-043.W-N1 sem \"Resultado final esperado\""
      },
      {
        "codigo": "SEM_RESULTADO_FINAL",
        "arquivo": "ROTEIRO-02-GOVERNANCA.md",
        "linha": 526,
        "msg": "jornada J-044.M-N1 sem \"Resultado final esperado\""
      },
      {
        "codigo": "SEM_RESULTADO_FINAL",
        "arquivo": "ROTEIRO-03-ONBOARDING.md",
        "linha": 217,
        "msg": "jornada J-050.W-N1 sem \"Resultado final esperado\""
      },
      {
        "codigo": "SEM_RESULTADO_FINAL",
        "arquivo": "ROTEIRO-03-ONBOARDING.md",
        "linha": 343,
        "msg": "jornada J-051.A-N1 sem \"Resultado final esperado\""
      },
      {
        "codigo": "SEM_RESULTADO_FINAL",
        "arquivo": "ROTEIRO-03-ONBOARDING.md",
        "linha": 587,
        "msg": "jornada J-052.W-N1 sem \"Resultado final esperado\""
      },
      {
        "codigo": "SEM_RESULTADO_FINAL",
        "arquivo": "ROTEIRO-03-ONBOARDING.md",
        "linha": 631,
        "msg": "jornada J-052.W-N2 sem \"Resultado final esperado\""
      },
      {
        "codigo": "SEM_RESULTADO_FINAL",
        "arquivo": "ROTEIRO-03-ONBOARDING.md",
        "linha": 671,
        "msg": "jornada J-053.A-N1 sem \"Resultado final esperado\""
      },
      {
        "codigo": "SEM_RESULTADO_FINAL",
        "arquivo": "ROTEIRO-03-ONBOARDING.md",
        "linha": 710,
        "msg": "jornada J-054.W-N1 sem \"Resultado final esperado\""
      },
      {
        "codigo": "SEM_RESULTADO_FINAL",
        "arquivo": "ROTEIRO-03-ONBOARDING.md",
        "linha": 762,
        "msg": "jornada J-055.M sem \"Resultado final esperado\""
      },
      {
        "codigo": "SEM_RESULTADO_FINAL",
        "arquivo": "ROTEIRO-03-ONBOARDING.md",
        "linha": 891,
        "msg": "jornada J-057.A sem \"Resultado final esperado\""
      },
      {
        "codigo": "SEM_RESULTADO_FINAL",
        "arquivo": "ROTEIRO-03-ONBOARDING.md",
        "linha": 932,
        "msg": "jornada J-058.A sem \"Resultado final esperado\""
      },
      {
        "codigo": "SEM_RESULTADO_FINAL",
        "arquivo": "ROTEIRO-04-CREDITO-FORMALIZACAO.md",
        "linha": 137,
        "msg": "jornada J-061.W-N1 sem \"Resultado final esperado\""
      },
      {
        "codigo": "SEM_RESULTADO_FINAL",
        "arquivo": "ROTEIRO-04-CREDITO-FORMALIZACAO.md",
        "linha": 179,
        "msg": "jornada J-062.W sem \"Resultado final esperado\""
      },
      {
        "codigo": "SEM_RESULTADO_FINAL",
        "arquivo": "ROTEIRO-04-CREDITO-FORMALIZACAO.md",
        "linha": 224,
        "msg": "jornada J-063.W sem \"Resultado final esperado\""
      },
      {
        "codigo": "SEM_RESULTADO_FINAL",
        "arquivo": "ROTEIRO-04-CREDITO-FORMALIZACAO.md",
        "linha": 372,
        "msg": "jornada J-070.W-N1 sem \"Resultado final esperado\""
      },
      {
        "codigo": "SEM_RESULTADO_FINAL",
        "arquivo": "ROTEIRO-04-CREDITO-FORMALIZACAO.md",
        "linha": 437,
        "msg": "jornada J-070.W-N2 sem \"Resultado final esperado\""
      },
      {
        "codigo": "SEM_RESULTADO_FINAL",
        "arquivo": "ROTEIRO-04-CREDITO-FORMALIZACAO.md",
        "linha": 582,
        "msg": "jornada J-072.W sem \"Resultado final esperado\""
      },
      {
        "codigo": "SEM_RESULTADO_FINAL",
        "arquivo": "ROTEIRO-04-CREDITO-FORMALIZACAO.md",
        "linha": 635,
        "msg": "jornada J-073.M sem \"Resultado final esperado\""
      }
    ]
  },
  "roteiros": [
    {
      "id": "CENARIOS",
      "arquivo": "CENARIOS-TESTE-JORNADAS-USUARIO.md",
      "hash": "77425dc4",
      "titulo": "Roteiro de teste manual - Jornadas de usuário SEP",
      "tipo": "hub",
      "ordem": 0,
      "atualizadoEm": "2026-08-10",
      "resumoHtml": "",
      "escopos": [
        {
          "key": "CENARIOS/7.1",
          "id": "7.1",
          "escopoId": "7.1",
          "kind": "secao",
          "nivel": 3,
          "titulo": "Exclusão de cliente pelo admin — não existe",
          "anchor": "excluso-de-cliente-pelo-admin--no-existe",
          "ordem": 1,
          "meta": [],
          "metaIndex": {},
          "notas": [
            "<strong>Hub de execução.</strong> Roteiro manual, tela a tela, contra o <strong>backend real local</strong> (<code>:8080</code>, PostgreSQL em Docker, providers Fake). Cobre o marco <code>v1.0-local</code> (Fase 4). As jornadas ficam neste repositório (<code>sep-test-app</code>); este arquivo e o ponto de entrada, o preparo comum e a matriz de cobertura.",
            "Estado do produto e escopo da fase ficam no repo <code>docs-SEP</code> (<code>docs-sep/STATE.md</code> e <code>docs-sep/PRD-FASE-4.md</code> §37).",
            "<strong>No modo <code>file://</code>, exporte antes de fechar a aba.</strong> As marcações vivem no <code>localStorage</code> do navegador; alguns navegadores limpam esse armazenamento sem aviso (o Safari é o mais restritivo). Se o app detectar que não consegue gravar, exibe um banner vermelho no topo. Rodar pelo servidor (<code>npm start</code>) evita isso: o autosave persiste em <code>data/db.json</code>.",
            "A jornada de lockout (<code>J-012.W-N1</code>) bloqueia a persona por <strong>30 minutos</strong>. Execute-a por último dentro da sessão de acesso.",
            "<strong>O mobile permanece no roteiro</strong> mesmo sem aparelho: ele roda como PWA no navegador. Isso não e detalhe — o <strong>cadastro de usuário só existe no mobile</strong> (§7.2). Sem essa superfície não há como criar conta pela UI, só pela API.",
            "<strong>Verifique que o MSW esta desligado.</strong> Web e mobile podem rodar com Mock Service Worker. Se a superfície estiver em mock, o resultado do roteiro <strong>não vale</strong> — o mock aceita credenciais que o backend real recusa. Ver <code>PRE-04</code> no <a href=\"./ROTEIRO-00-AMBIENTE-E-MASSA.md\" rel=\"noreferrer\"><code>ROTEIRO-00</code></a> §8.",
            "<code>golden-path-mobile.spec.ts</code> <strong>deixou de ser vermelha em 2026-07-31</strong>: a M-Sprint 17 a reescreveu contra MSW e a suíte e2e do mobile fechou verde. Ela também deixou de ser a única spec que batia no <code>:8080</code> real — hoje <strong>nenhuma</strong> bate; todas rodam contra o MSW. Isso não afrouxa o roteiro, muda o argumento: a cobertura automatizada prova o app contra um mock que a própria equipe escreve, e o único lugar onde o contrato com o backend real é exercido é a execução manual daqui.",
            "Os dois checkboxes transformam &quot;isso não existe&quot; em afirmação verificável. Se o endpoint aparecer um dia, o roteiro falha e avisa."
          ],
          "grupos": [],
          "assercoes": [
            {
              "key": "CENARIOS/7.1/#0d96370a",
              "id": null,
              "hash": "18f7cffe",
              "textoHtml": "Confirmar que <code>/app/admin/users/:id</code> <strong>não</strong> oferece ação de exclusão",
              "comoHtml": "Logado como <code>admin</code>, abrir o detalhe de um usuário e procurar botão de excluir, remover ou deletar. Não pode existir — o sistema não apaga usuário, por decisão. Se houver, é ocorrência (funcionalidade não prevista, com risco de perder trilha).",
              "textoBusca": "confirmar que /app/admin/users/:id não oferece ação de exclusão logado como admin, abrir o detalhe de um usuário e procurar botão de excluir, remover ou deletar. não pode existir — o sistema não apaga usuário, por decisão. se houver, é ocorrência (funcionalidade não prevista, com risco de perder trilha).",
              "esperadoHtml": null,
              "blocos": [],
              "na": false,
              "naMotivo": null,
              "marcadoNaFonte": false,
              "linha": 217,
              "ordem": 1
            },
            {
              "key": "CENARIOS/7.1/#d46c22c9",
              "id": null,
              "hash": "c70c25ab",
              "textoHtml": "Confirmar que <code>DELETE /api/v1/usuarios/{id}</code> responde <code>404</code>/<code>405</code>, não <code>500</code>",
              "comoHtml": "No Insomnia, montar um request <code>DELETE</code> para <code>/api/v1/usuarios/&lt;algum-id&gt;</code> com o <code>adminAccessToken</code>. O endpoint não existe, então a resposta certa é <code>404</code> (rota inexistente) ou <code>405</code> (método não permitido). Um <code>500</code> seria defeito: significaria que o endpoint existe e quebrou, em vez de simplesmente não existir.",
              "textoBusca": "confirmar que delete /api/v1/usuarios/{id} responde 404/405, não 500 no insomnia, montar um request delete para /api/v1/usuarios/<algum-id> com o adminaccesstoken. o endpoint não existe, então a resposta certa é 404 (rota inexistente) ou 405 (método não permitido). um 500 seria defeito: significaria que o endpoint existe e quebrou, em vez de simplesmente não existir.",
              "esperadoHtml": null,
              "blocos": [],
              "na": false,
              "naMotivo": null,
              "marcadoNaFonte": false,
              "linha": 221,
              "ordem": 2
            }
          ],
          "linha": 209,
          "stats": {
            "passos": 0,
            "na": 0,
            "assercoes": 2
          }
        },
        {
          "key": "CENARIOS/8",
          "id": "8",
          "escopoId": "8",
          "kind": "secao",
          "nivel": 2,
          "titulo": "Achados a confirmar em execução",
          "anchor": "achados-a-confirmar-em-execuo",
          "ordem": 2,
          "meta": [],
          "metaIndex": {},
          "notas": [
            "<strong>Reconferidos no código em 2026-08-10</strong>, para o próximo leitor não refazer o trabalho: o <strong>A2</strong> e o <strong>A4</strong> continuam válidos — o <code>roleGuard</code> do web compara a role <strong>principal</strong> (<code>allowedRoles.includes(user.role)</code>), e não existe equivalente do <code>redirectAuthenticatedGuard</code> no <code>sep-app</code>. O <strong>A1</strong>, o <strong>A3</strong> e o <strong>A5</strong> não foram medidos e seguem como estavam. Nenhum foi fechado pelas sprints de julho e agosto."
          ],
          "grupos": [
            {
              "id": "g1",
              "tituloHtml": null,
              "tela": null,
              "implicito": true,
              "passos": [
                {
                  "key": "CENARIOS/8/A1",
                  "id": "A1",
                  "hash": "25dcfd1e",
                  "textoHtml": "A rota <code>/app/credora</code> <strong>não</strong> tem <code>roleGuard</code>, embora o item de menu seja <code>roles: ['CLIENTE']</code>. Conferir se <code>financeiro</code>, <code>backoffice</code> e <code>admin</code> alcançam a tela por URL direta. Se alcançarem, decidir se é intencional (o <code>credoraPresenceGuard</code> já barra as sub-rotas) ou gap de guard.",
                  "comoHtml": "Logar como <code>financeiro</code> e colar <code>http://localhost:4200/app/credora</code> na barra. Repetir com <code>backoffice</code> e <code>admin</code>. Anotar, para cada um, se a tela abre ou é barrada. Este é um <strong>achado a confirmar</strong>: o resultado alimenta uma decisão de projeto, não é pass/fail — registrar o que observou, sem julgar como defeito.",
                  "textoBusca": "a rota /app/credora não tem roleguard, embora o item de menu seja roles: ['cliente']. conferir se financeiro, backoffice e admin alcançam a tela por url direta. se alcançarem, decidir se é intencional (o credorapresenceguard já barra as sub-rotas) ou gap de guard. logar como financeiro e colar http://localhost:4200/app/credora na barra. repetir com backoffice e admin. anotar, para cada um, se a tela abre ou é barrada. este é um achado a confirmar: o resultado alimenta uma decisão de projeto, não é pass/fail — registrar o que observou, sem julgar como defeito.",
                  "esperadoHtml": null,
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 275,
                  "ordem": 1
                },
                {
                  "key": "CENARIOS/8/A2",
                  "id": "A2",
                  "hash": "5a885f3b",
                  "textoHtml": "<code>roleGuard</code> (web e mobile) checa <code>user.role</code> — apenas a role <strong>principal</strong>, nunca o conjunto. Um usuário <code>{CLIENTE, FINANCEIRO}</code> tem principal <code>FINANCEIRO</code> e perderia acesso a rotas marcadas <code>CLIENTE</code>. Conferir com o <code>admin@sep.test</code>, que nasce <code>ADMIN</code>+<code>CLIENTE</code> pelo bootstrap.",
                  "comoHtml": "Logar como <code>admin@sep.test</code> (que é ADMIN <strong>e</strong> CLIENTE) e tentar abrir uma rota marcada só para <code>CLIENTE</code>, como <code>/app/credito/propostas/nova</code>. Registrar se ele alcança ou é barrado — isso mostra se o guard olha só a role principal ou o conjunto todo.",
                  "textoBusca": "roleguard (web e mobile) checa user.role — apenas a role principal, nunca o conjunto. um usuário {cliente, financeiro} tem principal financeiro e perderia acesso a rotas marcadas cliente. conferir com o admin@sep.test, que nasce admin+cliente pelo bootstrap. logar como admin@sep.test (que é admin e cliente) e tentar abrir uma rota marcada só para cliente, como /app/credito/propostas/nova. registrar se ele alcança ou é barrado — isso mostra se o guard olha só a role principal ou o conjunto todo.",
                  "esperadoHtml": null,
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 283,
                  "ordem": 2
                },
                {
                  "key": "CENARIOS/8/A3",
                  "id": "A3",
                  "hash": "dbe2caab",
                  "textoHtml": "O <code>credoraPresenceGuard</code> do web <strong>libera</strong> o acesso quando o erro não é 404. Conferir o comportamento com a API fora do ar.",
                  "comoHtml": "Logar como <code>cliente-a</code>, abrir uma rota de credora e então <strong>parar a API</strong> (<code>Ctrl+C</code> no terminal do A3 do ROTEIRO-00). Recarregar a rota de credora e observar: o guard deixa passar ou barra? Religar a API depois. Registrar o comportamento observado.",
                  "textoBusca": "o credorapresenceguard do web libera o acesso quando o erro não é 404. conferir o comportamento com a api fora do ar. logar como cliente-a, abrir uma rota de credora e então parar a api (ctrl+c no terminal do a3 do roteiro-00). recarregar a rota de credora e observar: o guard deixa passar ou barra? religar a api depois. registrar o comportamento observado.",
                  "esperadoHtml": null,
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 290,
                  "ordem": 3
                },
                {
                  "key": "CENARIOS/8/A4",
                  "id": "A4",
                  "hash": "a9827e56",
                  "textoHtml": "O <code>sep-app</code> não tem equivalente do <code>redirectAuthenticatedGuard</code> do mobile: um usuário logado consegue reabrir <code>/login</code>. Conferir se isso gera estado inconsistente.",
                  "comoHtml": "Logado no web, colar <code>http://localhost:4200/login</code> na barra. A tela de login abre mesmo já logado? Se abrir, tentar entrar de novo e observar se algo quebra — é isso que se investiga: reentrar não pode deixar a sessão num estado estranho.",
                  "textoBusca": "o sep-app não tem equivalente do redirectauthenticatedguard do mobile: um usuário logado consegue reabrir /login. conferir se isso gera estado inconsistente. logado no web, colar http://localhost:4200/login na barra. a tela de login abre mesmo já logado? se abrir, tentar entrar de novo e observar se algo quebra — é isso que se investiga: reentrar não pode deixar a sessão num estado estranho.",
                  "esperadoHtml": null,
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 295,
                  "ordem": 4
                },
                {
                  "key": "CENARIOS/8/A5",
                  "id": "A5",
                  "hash": "1c98dc29",
                  "textoHtml": "<a href=\"../docs-SEP/repos/sep-api/CONTRATOS.md\" rel=\"noreferrer\"><code>CONTRATOS.md</code></a> descreve o aceite com <code>@RequireStepUp</code>, mas o <code>ContratoController</code> usa <code>@RequireStepUpEstrito</code> desde a Sprint 27. Divergência documental a corrigir no doc operacional.",
                  "comoHtml": "Este é o único A que não se testa na tela — é conferência de documento. A prova prática já está na <a href=\"./ROTEIRO-04-CREDITO-FORMALIZACAO.md#j-070w-n1---aceite-negado-para-usuário-sem-mfa\" rel=\"noreferrer\"><code>J-070.W-N1</code></a>: o aceite exige MFA, logo é estrito. Marcar quando aquela jornada confirmar, e registrar que o <code>CONTRATOS.md</code> precisa de correção.",
                  "textoBusca": "contratos.md descreve o aceite com @requirestepup, mas o contratocontroller usa @requirestepupestrito desde a sprint 27. divergência documental a corrigir no doc operacional. este é o único a que não se testa na tela — é conferência de documento. a prova prática já está na j-070.w-n1: o aceite exige mfa, logo é estrito. marcar quando aquela jornada confirmar, e registrar que o contratos.md precisa de correção.",
                  "esperadoHtml": null,
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 300,
                  "ordem": 5
                }
              ]
            }
          ],
          "assercoes": [],
          "linha": 265,
          "stats": {
            "passos": 5,
            "na": 0,
            "assercoes": 0
          }
        }
      ],
      "ocorrenciasColunas": [],
      "registroCampos": []
    },
    {
      "id": "ROTEIRO-00",
      "arquivo": "ROTEIRO-00-AMBIENTE-E-MASSA.md",
      "hash": "2e6283cc",
      "titulo": "Roteiro 00 - Ambiente e massa de dados",
      "tipo": "secoes",
      "ordem": 10,
      "atualizadoEm": "2026-08-10",
      "resumoHtml": "",
      "escopos": [
        {
          "key": "ROTEIRO-00/2",
          "id": "2",
          "escopoId": "2",
          "kind": "secao",
          "nivel": 2,
          "titulo": "O que você precisa antes de começar",
          "anchor": "o-que-voc-precisa-antes-de-comear",
          "ordem": 1,
          "meta": [],
          "metaIndex": {},
          "notas": [
            "Pré-requisito de <strong>todos</strong> os demais roteiros. Nada aqui e jornada de usuário: e o preparo que faz as jornadas serem executáveis contra o backend real local. Hub: <a href=\"./CENARIOS-TESTE-JORNADAS-USUARIO.md\" rel=\"noreferrer\"><code>CENARIOS-TESTE-JORNADAS-USUARIO.md</code></a>.",
            "<strong>Execute pelo <a href=\"./app/index.html\" rel=\"noreferrer\">app</a></strong>, não editando este arquivo — as caixas aqui ficam sempre vazias. Desvio não vira caixa marcada: vira <strong>ocorrência</strong> registrada no passo."
          ],
          "grupos": [],
          "assercoes": [
            {
              "key": "ROTEIRO-00/2/#0a2a5264",
              "id": null,
              "hash": "2d5212a1",
              "textoHtml": "Docker e Docker Compose instalados e o daemon rodando",
              "comoHtml": "No terminal, rodar <code>docker ps</code>. Se listar uma tabela (mesmo vazia), está tudo certo. Se disser &quot;Cannot connect to the Docker daemon&quot;, o Docker está instalado mas não iniciado — abrir o Docker Desktop, ou no Linux <code>sudo systemctl start docker</code>.",
              "textoBusca": "docker e docker compose instalados e o daemon rodando no terminal, rodar docker ps. se listar uma tabela (mesmo vazia), está tudo certo. se disser \"cannot connect to the docker daemon\", o docker está instalado mas não iniciado — abrir o docker desktop, ou no linux sudo systemctl start docker.",
              "esperadoHtml": null,
              "blocos": [],
              "na": false,
              "naMotivo": null,
              "marcadoNaFonte": false,
              "linha": 24,
              "ordem": 1
            },
            {
              "key": "ROTEIRO-00/2/#2710b503",
              "id": null,
              "hash": "e65e22d4",
              "textoHtml": "JDK 21 disponível (<code>java -version</code>)",
              "comoHtml": "Rodar <code>java -version</code>. A primeira linha precisa começar com <code>21</code>. Se aparecer 17, 11 ou &quot;command not found&quot;, a API não sobe — instalar o JDK 21 antes de seguir.",
              "textoBusca": "jdk 21 disponível (java -version) rodar java -version. a primeira linha precisa começar com 21. se aparecer 17, 11 ou \"command not found\", a api não sobe — instalar o jdk 21 antes de seguir.",
              "esperadoHtml": null,
              "blocos": [],
              "na": false,
              "naMotivo": null,
              "marcadoNaFonte": false,
              "linha": 28,
              "ordem": 2
            },
            {
              "key": "ROTEIRO-00/2/#af3b05ae",
              "id": null,
              "hash": "caefa939",
              "textoHtml": "Node.js &gt;= 22 (<code>node -v</code>) — exigido pelo CLI do Capacitor 8 (<a href=\"../docs-SEP/adr/0019-baseline-capacitor-8-mobile.md\" rel=\"noreferrer\">ADR 0019</a>)",
              "comoHtml": "Rodar <code>node -v</code>. Precisa ser <code>v22</code> ou maior. Versão menor faz o <code>npm start</code> do mobile falhar de um jeito difícil de diagnosticar — vale conferir agora.",
              "textoBusca": "node.js >= 22 (node -v) — exigido pelo cli do capacitor 8 (adr 0019) rodar node -v. precisa ser v22 ou maior. versão menor faz o npm start do mobile falhar de um jeito difícil de diagnosticar — vale conferir agora.",
              "esperadoHtml": null,
              "blocos": [],
              "na": false,
              "naMotivo": null,
              "marcadoNaFonte": false,
              "linha": 31,
              "ordem": 3
            },
            {
              "key": "ROTEIRO-00/2/#54d2057e",
              "id": null,
              "hash": "4d5681ec",
              "textoHtml": "Um autenticador TOTP (Google Authenticator, Aegis, 1Password, Bitwarden — extensão de navegador serve). <strong>Não há atalho</strong>: o step-up estrito exige código válido",
              "comoHtml": "Instalar um destes no celular ou como extensão do navegador. A extensão é mais prática, porque dá para copiar o código em vez de digitar olhando para o celular. Não dá para pular: várias jornadas param sem um código TOTP válido de verdade.",
              "textoBusca": "um autenticador totp (google authenticator, aegis, 1password, bitwarden — extensão de navegador serve). não há atalho: o step-up estrito exige código válido instalar um destes no celular ou como extensão do navegador. a extensão é mais prática, porque dá para copiar o código em vez de digitar olhando para o celular. não dá para pular: várias jornadas param sem um código totp válido de verdade.",
              "esperadoHtml": null,
              "blocos": [],
              "na": false,
              "naMotivo": null,
              "marcadoNaFonte": false,
              "linha": 34,
              "ordem": 4
            },
            {
              "key": "ROTEIRO-00/2/#f8c034df",
              "id": null,
              "hash": "865a812e",
              "textoHtml": "<strong>Insomnia</strong> com a collection do projeto importada — ver §3.1",
              "comoHtml": "Baixar em <code>insomnia.rest</code> e instalar. O Insomnia é o programa usado para chamar a API direto, sem passar pela tela — várias verificações do roteiro só existem lá. A importação da collection é o §3.1, logo abaixo.",
              "textoBusca": "insomnia com a collection do projeto importada — ver §3.1 baixar em insomnia.rest e instalar. o insomnia é o programa usado para chamar a api direto, sem passar pela tela — várias verificações do roteiro só existem lá. a importação da collection é o §3.1, logo abaixo.",
              "esperadoHtml": null,
              "blocos": [],
              "na": false,
              "naMotivo": null,
              "marcadoNaFonte": false,
              "linha": 39,
              "ordem": 5
            }
          ],
          "linha": 22,
          "stats": {
            "passos": 0,
            "na": 0,
            "assercoes": 5
          }
        },
        {
          "key": "ROTEIRO-00/3.1",
          "id": "3.1",
          "escopoId": "3.1",
          "kind": "secao",
          "nivel": 3,
          "titulo": "Insomnia",
          "anchor": "insomnia",
          "ordem": 2,
          "meta": [],
          "metaIndex": {},
          "notas": [
            "<strong>O mobile continua no roteiro.</strong> Ele roda como PWA em <code>localhost:8100</code>, que e navegador. Isso importa porque o <strong>cadastro de usuário só existe no mobile</strong> — no web, <code>/register</code> e tela de canalização. Sem a superfície mobile não há como criar conta pela UI.",
            "<strong>Atenção ao MSW.</strong> Web e mobile podem rodar com mock (Mock Service Worker) em vez do backend real. Este roteiro exige backend real. Ver <code>PRE-04</code>.",
            "<strong>A collection é anterior às Sprints 33 e 34 e não tem tudo.</strong> Falta nela o <code>GET /api/v1/auth/politica-lockout</code>, endpoint <strong>público</strong> que a <code>/account-locked</code> consome. Enquanto a collection não for renovada, chame-o direto no navegador — <code>http://localhost:8080/api/v1/auth/politica-lockout</code> — que ele responde sem token. Renovar a collection é trabalho no repo <code>docs-SEP</code>, não neste.",
            "As variáveis de token e ID nascem <strong>vazias</strong> de propósito: a collection e versionada e não pode carregar credencial nem PII. Preencher e parte do roteiro.",
            "<strong>Nota editorial.</strong> O restante do <code>docs-SEP</code> escreve sem acentuação, mas os roteiros de teste são a <strong>exceção</strong>: quem executa é gente que não conhece o sistema, e português sem acento cansa numa leitura de ~170 passos. Aqui se escreve em PT-BR correto. O parser e o app comparam marcadores sem acento (<code>semAcento()</code>), então acentuar um título de seção não quebra a geração — mas <strong>acentuar o texto de um passo muda o hash dele</strong> e marca &quot;revise&quot; para quem já executou. Ajuste texto de passo só quando for necessário mesmo.",
            "Os nomes de pasta e de request do Insomnia são citados <strong>literalmente</strong> (<code>Usuários</code>, <code>criar cliente público</code>) porque precisam bater com a busca da ferramenta. Não &quot;corrigir&quot; essas ocorrências."
          ],
          "grupos": [],
          "assercoes": [
            {
              "key": "ROTEIRO-00/3.1/#ceaf7510",
              "id": null,
              "hash": "590c0d9a",
              "textoHtml": "Importar a collection <code>sep-api.insomnia_collection.json</code>",
              "comoHtml": "O arquivo fica no repo <code>docs-SEP</code>, em <code>docs-sep/sep-api.insomnia_collection.json</code>. No Insomnia: <strong>Application</strong> &gt; <strong>Preferences</strong> &gt; <strong>Data</strong> &gt; <strong>Import Data</strong> &gt; <strong>From File</strong>, e escolher esse arquivo. Depois de importar, a barra lateral mostra as pastas — é por elas que os passos se referem aos requests, no formato <code>Insomnia &gt; **Pasta** &gt; nome do request</code>.",
              "textoBusca": "importar a collection sep-api.insomniacollection.json o arquivo fica no repo docs-sep, em docs-sep/sep-api.insomniacollection.json. no insomnia: application > preferences > data > import data > from file, e escolher esse arquivo. depois de importar, a barra lateral mostra as pastas — é por elas que os passos se referem aos requests, no formato insomnia > pasta > nome do request.",
              "esperadoHtml": "18 pastas e 150 requests. Há também uma <a href=\"../docs-SEP/docs-sep/sep-api.postman_collection.json\" rel=\"noreferrer\">collection Postman</a> equivalente.",
              "blocos": [],
              "na": false,
              "naMotivo": null,
              "marcadoNaFonte": false,
              "linha": 71,
              "ordem": 1
            },
            {
              "key": "ROTEIRO-00/3.1/#d42574f4",
              "id": null,
              "hash": "9d4057fa",
              "textoHtml": "Selecionar o environment e conferir <code>baseUrl = http://localhost:8080</code>",
              "comoHtml": "No topo da barra lateral há um seletor de environment (costuma vir escrito &quot;No Environment&quot;). Selecionar o environment da collection e abrir para editar: <code>baseUrl</code> precisa estar como <code>http://localhost:8080</code>. As demais variáveis (<code>adminAccessToken</code>, <code>clienteId</code>...) estão <strong>vazias de propósito</strong> — você as preenche conforme os passos mandarem guardar valores.",
              "textoBusca": "selecionar o environment e conferir baseurl = http://localhost:8080 no topo da barra lateral há um seletor de environment (costuma vir escrito \"no environment\"). selecionar o environment da collection e abrir para editar: baseurl precisa estar como http://localhost:8080. as demais variáveis (adminaccesstoken, clienteid...) estão vazias de propósito — você as preenche conforme os passos mandarem guardar valores.",
              "esperadoHtml": null,
              "blocos": [],
              "na": false,
              "naMotivo": null,
              "marcadoNaFonte": false,
              "linha": 79,
              "ordem": 2
            }
          ],
          "linha": 66,
          "stats": {
            "passos": 0,
            "na": 0,
            "assercoes": 2
          }
        },
        {
          "key": "ROTEIRO-00/4.1",
          "id": "4.1",
          "escopoId": "4.1",
          "kind": "secao",
          "nivel": 3,
          "titulo": "Banco de dados",
          "anchor": "banco-de-dados",
          "ordem": 3,
          "meta": [],
          "metaIndex": {},
          "notas": [],
          "grupos": [
            {
              "id": "g1",
              "tituloHtml": null,
              "tela": null,
              "implicito": true,
              "passos": [
                {
                  "key": "ROTEIRO-00/4.1/A1",
                  "id": "A1",
                  "hash": "4e652bf5",
                  "textoHtml": "No <code>sep-api</code>, subir o Postgres:",
                  "comoHtml": "Abrir um terminal na raiz do workspace — a pasta que contém <code>sep-api</code>, <code>sep-app</code> e <code>sep-mobile</code> — e rodar os dois comandos. O <code>-d</code> deixa o banco rodando em segundo plano, então o terminal volta a ficar livre. <strong>Deixe este terminal aberto</strong>: ele é o que você vai usar nos passos de SQL mais adiante.",
                  "textoBusca": "no sep-api, subir o postgres: abrir um terminal na raiz do workspace — a pasta que contém sep-api, sep-app e sep-mobile — e rodar os dois comandos. o -d deixa o banco rodando em segundo plano, então o terminal volta a ficar livre. deixe este terminal aberto: ele é o que você vai usar nos passos de sql mais adiante.",
                  "esperadoHtml": "container <code>sep-postgres</code> em execução (<code>docker ps</code>), imagem <code>postgres:16-alpine</code>, porta <code>5432</code> publicada.",
                  "blocos": [
                    {
                      "tipo": "codigo",
                      "lang": "bash",
                      "regiao": "como",
                      "conteudo": "cd sep-api\ndocker compose up -d postgres"
                    }
                  ],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 121,
                  "ordem": 1
                },
                {
                  "key": "ROTEIRO-00/4.1/A2",
                  "id": "A2",
                  "hash": "650b3ef4",
                  "textoHtml": "Conferir que o banco aceita conexão:",
                  "comoHtml": "Rodar no mesmo terminal. O comando pergunta ao Postgres se ele já está pronto para receber conexão. Subir o container leva alguns segundos: se a resposta for &quot;no response&quot;, esperar 5 segundos e repetir antes de concluir que deu errado.",
                  "textoBusca": "conferir que o banco aceita conexão: rodar no mesmo terminal. o comando pergunta ao postgres se ele já está pronto para receber conexão. subir o container leva alguns segundos: se a resposta for \"no response\", esperar 5 segundos e repetir antes de concluir que deu errado.",
                  "esperadoHtml": "<code>accepting connections</code>.",
                  "blocos": [
                    {
                      "tipo": "codigo",
                      "lang": "bash",
                      "regiao": "como",
                      "conteudo": "docker exec sep-postgres pg_isready -U sep -d sep_dev"
                    }
                  ],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 132,
                  "ordem": 2
                }
              ]
            }
          ],
          "assercoes": [],
          "linha": 119,
          "stats": {
            "passos": 2,
            "na": 0,
            "assercoes": 0
          }
        },
        {
          "key": "ROTEIRO-00/4.2",
          "id": "4.2",
          "escopoId": "4.2",
          "kind": "secao",
          "nivel": 3,
          "titulo": "API",
          "anchor": "api",
          "ordem": 4,
          "meta": [],
          "metaIndex": {},
          "notas": [],
          "grupos": [
            {
              "id": "g1",
              "tituloHtml": null,
              "tela": null,
              "implicito": true,
              "passos": [
                {
                  "key": "ROTEIRO-00/4.2/A3",
                  "id": "A3",
                  "hash": "5d74eb13",
                  "textoHtml": "Subir a API:",
                  "comoHtml": "Abrir um <strong>segundo</strong> terminal — o primeiro fica reservado para o banco — entrar em <code>sep-api</code> e rodar o comando. Ele não devolve o prompt: a API fica rodando e imprimindo log, e é assim mesmo. Esperar a linha <code>Started SepApiApplication</code>. <strong>Deixe este terminal aberto</strong> durante toda a execução; fechá-lo derruba a API.",
                  "textoBusca": "subir a api: abrir um segundo terminal — o primeiro fica reservado para o banco — entrar em sep-api e rodar o comando. ele não devolve o prompt: a api fica rodando e imprimindo log, e é assim mesmo. esperar a linha started sepapiapplication. deixe este terminal aberto durante toda a execução; fechá-lo derruba a api.",
                  "esperadoHtml": "sobe sem erro; o Flyway aplica as migrations até a última versão.",
                  "blocos": [
                    {
                      "tipo": "codigo",
                      "lang": "bash",
                      "regiao": "como",
                      "conteudo": "./gradlew bootRun"
                    }
                  ],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 147,
                  "ordem": 1
                },
                {
                  "key": "ROTEIRO-00/4.2/A4",
                  "id": "A4",
                  "hash": "6e2cf4e5",
                  "textoHtml": "Conferir prontidão: Insomnia &gt; <strong>Actuator</strong> &gt; <code>GET /actuator/health</code>.",
                  "comoHtml": "No Insomnia, abrir a pasta <strong>Actuator</strong> na barra lateral, clicar no request <code>GET /actuator/health</code> e depois no botão <strong>Send</strong>. A resposta aparece no painel da direita. Erro de conexão aqui significa que a API do <strong>A3</strong> não subiu.",
                  "textoBusca": "conferir prontidão: insomnia > actuator > get /actuator/health. no insomnia, abrir a pasta actuator na barra lateral, clicar no request get /actuator/health e depois no botão send. a resposta aparece no painel da direita. erro de conexão aqui significa que a api do a3 não subiu.",
                  "esperadoHtml": "<code>{\"status\":\"UP\"}</code>.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 156,
                  "ordem": 2
                },
                {
                  "key": "ROTEIRO-00/4.2/A5",
                  "id": "A5",
                  "hash": "43336e29",
                  "textoHtml": "Conferir que as migrations rodaram por completo:",
                  "comoHtml": "Rodar no terminal do banco (o do <strong>A1</strong>). O comando lê a tabela em que o Flyway registra cada migration aplicada. Olhar a coluna <code>success</code>: <code>t</code> é sucesso, <code>f</code> é falha. Uma única linha <code>f</code> significa banco em estado inconsistente — nesse caso, fazer o reset do §7 antes de continuar, porque nada adiante vai funcionar direito.",
                  "textoBusca": "conferir que as migrations rodaram por completo: rodar no terminal do banco (o do a1). o comando lê a tabela em que o flyway registra cada migration aplicada. olhar a coluna success: t é sucesso, f é falha. uma única linha f significa banco em estado inconsistente — nesse caso, fazer o reset do §7 antes de continuar, porque nada adiante vai funcionar direito.",
                  "esperadoHtml": "as últimas linhas com <code>success = t</code>. Nenhuma migration falhada.",
                  "blocos": [
                    {
                      "tipo": "codigo",
                      "lang": "bash",
                      "regiao": "como",
                      "conteudo": "docker exec sep-postgres psql -U sep -d sep_dev \\\n  -c \"SELECT version, description, success FROM flyway_schema_history ORDER BY installed_rank DESC LIMIT 5;\""
                    }
                  ],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 161,
                  "ordem": 3
                },
                {
                  "key": "ROTEIRO-00/4.2/A6",
                  "id": "A6",
                  "hash": "d3b97054",
                  "textoHtml": "Conferir que os providers estão em Fake (default do <code>application.yml</code>): nenhuma variável <code>APP_*_PROVIDER</code> apontando para adapter real no shell.",
                  "comoHtml": "No terminal em que você subiu a API, rodar <code>env | grep APP_</code> (no PowerShell, <code>Get-ChildItem Env:APP_*</code>). O esperado é <strong>não sair nada</strong>: sem variável definida, a API usa o default do <code>application.yml</code>, que é o provider Fake. Se aparecer alguma variável apontando para adapter real, o teste tentaria falar com serviço externo de verdade — apagar a variável e reiniciar a API.",
                  "textoBusca": "conferir que os providers estão em fake (default do application.yml): nenhuma variável appprovider apontando para adapter real no shell. no terminal em que você subiu a api, rodar env | grep app (no powershell, get-childitem env:app). o esperado é não sair nada: sem variável definida, a api usa o default do application.yml, que é o provider fake. se aparecer alguma variável apontando para adapter real, o teste tentaria falar com serviço externo de verdade — apagar a variável e reiniciar a api.",
                  "esperadoHtml": "KYC, KYB e PLD em <code>fake</code>. Nenhuma chamada externa sai da máquina.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 171,
                  "ordem": 4
                }
              ]
            }
          ],
          "assercoes": [],
          "linha": 145,
          "stats": {
            "passos": 4,
            "na": 0,
            "assercoes": 0
          }
        },
        {
          "key": "ROTEIRO-00/4.3",
          "id": "4.3",
          "escopoId": "4.3",
          "kind": "secao",
          "nivel": 3,
          "titulo": "Web e mobile",
          "anchor": "web-e-mobile",
          "ordem": 5,
          "meta": [],
          "metaIndex": {},
          "notas": [],
          "grupos": [
            {
              "id": "g1",
              "tituloHtml": null,
              "tela": null,
              "implicito": true,
              "passos": [
                {
                  "key": "ROTEIRO-00/4.3/A7",
                  "id": "A7",
                  "hash": "cfb17564",
                  "textoHtml": "Subir o web:",
                  "comoHtml": "<strong>Terceiro</strong> terminal, também na raiz do workspace. Na primeira vez, rodar <code>npm ci</code> antes do <code>npm start</code> para instalar as dependências (demora alguns minutos). Este terminal também fica ocupado e precisa continuar aberto.",
                  "textoBusca": "subir o web: terceiro terminal, também na raiz do workspace. na primeira vez, rodar npm ci antes do npm start para instalar as dependências (demora alguns minutos). este terminal também fica ocupado e precisa continuar aberto.",
                  "esperadoHtml": "<code>http://localhost:4200</code> carrega a landing pública.",
                  "blocos": [
                    {
                      "tipo": "codigo",
                      "lang": "bash",
                      "regiao": "como",
                      "conteudo": "cd sep-app && npm start"
                    }
                  ],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 182,
                  "ordem": 1
                },
                {
                  "key": "ROTEIRO-00/4.3/A8",
                  "id": "A8",
                  "hash": "93814a63",
                  "textoHtml": "Subir o mobile (PWA) e abrir no navegador:",
                  "comoHtml": "<strong>Quarto</strong> terminal. Mesma coisa do A7: <code>npm ci</code> na primeira vez. Ao final você tem quatro terminais abertos (banco, API, web, mobile) — vale deixá-los identificados, porque os passos adiante dizem em qual rodar. O &quot;mobile&quot; aqui é o site aberto no navegador comum, não um celular.",
                  "textoBusca": "subir o mobile (pwa) e abrir no navegador: quarto terminal. mesma coisa do a7: npm ci na primeira vez. ao final você tem quatro terminais abertos (banco, api, web, mobile) — vale deixá-los identificados, porque os passos adiante dizem em qual rodar. o \"mobile\" aqui é o site aberto no navegador comum, não um celular.",
                  "esperadoHtml": "<code>http://localhost:8100</code> carrega a splash e navega para <code>/welcome</code>.",
                  "blocos": [
                    {
                      "tipo": "codigo",
                      "lang": "bash",
                      "regiao": "como",
                      "conteudo": "cd sep-mobile && npm start"
                    }
                  ],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 190,
                  "ordem": 2
                },
                {
                  "key": "ROTEIRO-00/4.3/A9",
                  "id": "A9",
                  "hash": "260576e6",
                  "textoHtml": "Ativar a emulação de dispositivo no DevTools (Pixel 5 ou 390x844).",
                  "comoHtml": "Na aba do <code>localhost:8100</code>, abrir o DevTools com <code>F12</code> e ligar o modo dispositivo com <code>Ctrl+Shift+M</code>. No seletor que aparece no topo da página, escolher <strong>Pixel 5</strong>. Sem isso o mobile abre em tamanho de desktop e o layout não é o que se quer testar.",
                  "textoBusca": "ativar a emulação de dispositivo no devtools (pixel 5 ou 390x844). na aba do localhost:8100, abrir o devtools com f12 e ligar o modo dispositivo com ctrl+shift+m. no seletor que aparece no topo da página, escolher pixel 5. sem isso o mobile abre em tamanho de desktop e o layout não é o que se quer testar.",
                  "esperadoHtml": "layout mobile. As specs Playwright usam Pixel 5; usar a mesma referência mantém os resultados comparáveis.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 199,
                  "ordem": 3
                }
              ]
            }
          ],
          "assercoes": [],
          "linha": 180,
          "stats": {
            "passos": 3,
            "na": 0,
            "assercoes": 0
          }
        },
        {
          "key": "ROTEIRO-00/5.2",
          "id": "5.2",
          "escopoId": "5.2",
          "kind": "secao",
          "nivel": 3,
          "titulo": "Cadastrar o usuário que virara ADMIN",
          "anchor": "cadastrar-o-usurio-que-virara-admin",
          "ordem": 6,
          "meta": [],
          "metaIndex": {},
          "notas": [
            "<strong>Política de senha real.</strong> Mínimo 12 caracteres <strong>ou</strong> passphrase de 4+ palavras. A senha <code>123456</code> usada nos fixtures e no MSW <strong>não passa</strong> no backend real — ela existe apenas no mock. Use as senhas deste roteiro.",
            "A verificação HIBP (vazamento de senha) vem <strong>desabilitada</strong> por default (<code>NoopPasswordBreachChecker</code>, <code>matchIfMissing = true</code>), então o cadastro não depende de acesso a internet."
          ],
          "grupos": [
            {
              "id": "g1",
              "tituloHtml": null,
              "tela": null,
              "implicito": true,
              "passos": [
                {
                  "key": "ROTEIRO-00/5.2/B1",
                  "id": "B1",
                  "hash": "01f9d9d2",
                  "textoHtml": "Insomnia &gt; <strong>Usuários</strong> &gt; <code>POST /usuarios (criar cliente público) — 201</code>, com o body:",
                  "comoHtml": "No Insomnia, abrir a pasta <strong>Usuários</strong> (com acento — é o nome literal na collection) e clicar no request <code>POST /usuarios (criar cliente público) — 201</code>. No painel do meio, aba <strong>Body</strong>, substituir o conteúdo pelo JSON abaixo e clicar em <strong>Send</strong>. Na resposta, copiar o valor do campo <code>id</code> e colar na variável <code>adminId</code> do environment — vários passos adiante dependem dele. Este usuário nasce como <code>CLIENTE</code> comum; ele vira ADMIN no <strong>B2</strong>.",
                  "textoBusca": "insomnia > usuários > post /usuarios (criar cliente público) — 201, com o body: no insomnia, abrir a pasta usuários (com acento — é o nome literal na collection) e clicar no request post /usuarios (criar cliente público) — 201. no painel do meio, aba body, substituir o conteúdo pelo json abaixo e clicar em send. na resposta, copiar o valor do campo id e colar na variável adminid do environment — vários passos adiante dependem dele. este usuário nasce como cliente comum; ele vira admin no b2.",
                  "esperadoHtml": "<code>201</code> com o <code>id</code> (UUID v6) e <code>role: \"CLIENTE\"</code>. Guardar o <code>id</code> em <code>adminId</code>.",
                  "blocos": [
                    {
                      "tipo": "codigo",
                      "lang": "json",
                      "regiao": "como",
                      "conteudo": "{ \"username\": \"admin@sep.test\", \"password\": \"roteiro-manual-sep-2026\" }"
                    }
                  ],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 229,
                  "ordem": 1
                }
              ]
            }
          ],
          "assercoes": [],
          "linha": 223,
          "stats": {
            "passos": 1,
            "na": 0,
            "assercoes": 0
          }
        },
        {
          "key": "ROTEIRO-00/5.3",
          "id": "5.3",
          "escopoId": "5.3",
          "kind": "secao",
          "nivel": 3,
          "titulo": "Promover a ADMIN por SQL",
          "anchor": "promover-a-admin-por-sql",
          "ordem": 7,
          "meta": [],
          "metaIndex": {},
          "notas": [
            "<strong>A linha <code>CLIENTE</code> permanece de propósito</strong> — roles são cumulativas e o backfill da V42 já tinha criado a linha <code>CLIENTE</code>. O <code>admin@sep.test</code> fica ADMIN <strong>e</strong> CLIENTE. Isso ajuda em algumas jornadas e <strong>atrapalha as negativas de RBAC</strong>: para testar &quot;ADMIN não ve tela de tomador&quot;, use um ADMIN sem <code>CLIENTE</code>, ou remova a linha: ``<code>sql DELETE FROM usuario_role ur USING usuario u WHERE ur.usuario_id = u.id AND u.username = 'admin@sep.test' AND ur.role = 'CLIENTE'; </code>``"
          ],
          "grupos": [
            {
              "id": "g1",
              "tituloHtml": null,
              "tela": null,
              "implicito": true,
              "passos": [
                {
                  "key": "ROTEIRO-00/5.3/B2",
                  "id": "B2",
                  "hash": "352443b6",
                  "textoHtml": "Promover:",
                  "comoHtml": "Rodar no terminal do banco (o do <strong>A1</strong>). Copiar o bloco inteiro de uma vez, incluindo a linha final <code>SQL</code> — é ela que fecha o comando. São dois comandos SQL: o primeiro muda a role principal, o segundo acrescenta a linha na tabela de roles cumulativas. Os dois são necessários; rodar só um deixa o usuário meio promovido, que é pior do que não promover.",
                  "textoBusca": "promover: rodar no terminal do banco (o do a1). copiar o bloco inteiro de uma vez, incluindo a linha final sql — é ela que fecha o comando. são dois comandos sql: o primeiro muda a role principal, o segundo acrescenta a linha na tabela de roles cumulativas. os dois são necessários; rodar só um deixa o usuário meio promovido, que é pior do que não promover.",
                  "esperadoHtml": "<code>UPDATE 1</code> e <code>INSERT 0 1</code>.",
                  "blocos": [
                    {
                      "tipo": "codigo",
                      "lang": "bash",
                      "regiao": "como",
                      "conteudo": "docker exec sep-postgres psql -U sep -d sep_dev <<'SQL'\nUPDATE usuario SET role = 'ADMIN' WHERE username = 'admin@sep.test';\nINSERT INTO usuario_role (usuario_id, role)\nSELECT id, 'ADMIN' FROM usuario WHERE username = 'admin@sep.test'\nON CONFLICT DO NOTHING;\nSQL"
                    }
                  ],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 257,
                  "ordem": 1
                },
                {
                  "key": "ROTEIRO-00/5.3/B3",
                  "id": "B3",
                  "hash": "a7afdeeb",
                  "textoHtml": "Conferir o resultado:",
                  "comoHtml": "Mesmo terminal. <code>UPDATE 0</code> no passo anterior significa que o usuário do <strong>B1</strong> não foi criado — nesse caso, voltar ao B1 antes de seguir. A saída deste comando vem em formato de tabela; ler a linha e comparar com o esperado.",
                  "textoBusca": "conferir o resultado: mesmo terminal. update 0 no passo anterior significa que o usuário do b1 não foi criado — nesse caso, voltar ao b1 antes de seguir. a saída deste comando vem em formato de tabela; ler a linha e comparar com o esperado.",
                  "esperadoHtml": "<code>principal = ADMIN</code> e <code>roles = {ADMIN,CLIENTE}</code>.",
                  "blocos": [
                    {
                      "tipo": "codigo",
                      "lang": "bash",
                      "regiao": "como",
                      "conteudo": "docker exec sep-postgres psql -U sep -d sep_dev \\\n  -c \"SELECT u.username, u.role AS principal, array_agg(ur.role) AS roles\n      FROM usuario u JOIN usuario_role ur ON ur.usuario_id = u.id\n      WHERE u.username = 'admin@sep.test' GROUP BY u.username, u.role;\""
                    }
                  ],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 272,
                  "ordem": 2
                },
                {
                  "key": "ROTEIRO-00/5.3/B4",
                  "id": "B4",
                  "hash": "0c96c7f9",
                  "textoHtml": "Insomnia &gt; <strong>Auth</strong> &gt; <code>POST /auth/login (admin)</code>, com o body:",
                  "comoHtml": "Pasta <strong>Auth</strong>, request <code>POST /auth/login (admin)</code>, aba <strong>Body</strong>, o JSON abaixo, <strong>Send</strong>. Na resposta, copiar o valor de <code>accessToken</code> — é uma cadeia longa de letras e números — e colar na variável <code>adminAccessToken</code> do environment. Copiar <strong>sem</strong> as aspas e sem a palavra <code>Bearer</code>. Esse token é o que autoriza os próximos requests de administrador; sem ele, o <strong>B6</strong> e o <strong>B7</strong> respondem 401.",
                  "textoBusca": "insomnia > auth > post /auth/login (admin), com o body: pasta auth, request post /auth/login (admin), aba body, o json abaixo, send. na resposta, copiar o valor de accesstoken — é uma cadeia longa de letras e números — e colar na variável adminaccesstoken do environment. copiar sem as aspas e sem a palavra bearer. esse token é o que autoriza os próximos requests de administrador; sem ele, o b6 e o b7 respondem 401.",
                  "esperadoHtml": "<code>accessToken</code> no corpo e <code>mfaRequired: false</code> (o ADMIN ainda não tem TOTP). Guardar o token em <code>adminAccessToken</code>.",
                  "blocos": [
                    {
                      "tipo": "codigo",
                      "lang": "json",
                      "regiao": "como",
                      "conteudo": "{ \"username\": \"admin@sep.test\", \"password\": \"roteiro-manual-sep-2026\" }"
                    }
                  ],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 293,
                  "ordem": 3
                }
              ]
            }
          ],
          "assercoes": [],
          "linha": 251,
          "stats": {
            "passos": 3,
            "na": 0,
            "assercoes": 0
          }
        },
        {
          "key": "ROTEIRO-00/5.4",
          "id": "5.4",
          "escopoId": "5.4",
          "kind": "secao",
          "nivel": 3,
          "titulo": "Criar os demais usuários internos",
          "anchor": "criar-os-demais-usurios-internos",
          "ordem": 8,
          "meta": [],
          "metaIndex": {},
          "notas": [
            "<strong>Ordem importa: promova antes de habilitar TOTP no <code>admin</code>.</strong> A promoção usa o <code>@RequireStepUp</code> legado, que <strong>faz bypass quando o usuário ainda não tem MFA</strong>. Com o <code>admin</code> sem TOTP, a promoção passa sem token. Se você habilitar TOTP no <code>admin</code> primeiro, cada promoção passa a exigir o par <code>step-up/initiate</code> + <code>step-up/complete</code> e o header <code>X-Step-Up-Token</code>.",
            "<strong>B9 a B12 não são burocracia.</strong> Se qualquer um deles passar, há escalada de privilégio: o impasse de bootstrap descrito em §5.1 e uma decisão de segurança deliberada, não um descuido."
          ],
          "grupos": [
            {
              "id": "g1",
              "tituloHtml": null,
              "tela": null,
              "implicito": true,
              "passos": [
                {
                  "key": "ROTEIRO-00/5.4/B5",
                  "id": "B5",
                  "hash": "e79f364d",
                  "textoHtml": "Insomnia &gt; <strong>Usuários</strong> &gt; <code>POST /usuarios (criar cliente público) — 201</code>, duas vezes, com os bodies:",
                  "comoHtml": "É o mesmo request do <strong>B1</strong>, enviado duas vezes trocando o body. Anotar o <code>id</code> da resposta do <strong>financeiro</strong> na variável <code>financeiroId</code>; o do backoffice você vai colar direto na URL do <strong>B7</strong>, então deixe à mão. Os dois nascem <code>CLIENTE</code> — a promoção é o passo seguinte.",
                  "textoBusca": "insomnia > usuários > post /usuarios (criar cliente público) — 201, duas vezes, com os bodies: é o mesmo request do b1, enviado duas vezes trocando o body. anotar o id da resposta do financeiro na variável financeiroid; o do backoffice você vai colar direto na url do b7, então deixe à mão. os dois nascem cliente — a promoção é o passo seguinte.",
                  "esperadoHtml": "dois <code>201</code>, ambos <code>CLIENTE</code>. Guardar o <code>id</code> do financeiro em <code>financeiroId</code>.",
                  "blocos": [
                    {
                      "tipo": "codigo",
                      "lang": "json",
                      "regiao": "como",
                      "conteudo": "{ \"username\": \"financeiro@sep.test\", \"password\": \"roteiro-manual-sep-2026\" }"
                    },
                    {
                      "tipo": "codigo",
                      "lang": "json",
                      "regiao": "como",
                      "conteudo": "{ \"username\": \"backoffice@sep.test\", \"password\": \"roteiro-manual-sep-2026\" }"
                    }
                  ],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 318,
                  "ordem": 1
                },
                {
                  "key": "ROTEIRO-00/5.4/B6",
                  "id": "B6",
                  "hash": "30a0bf6c",
                  "textoHtml": "Insomnia &gt; <strong>Usuários</strong> &gt; <code>POST /usuarios/{id}/role (ADMIN + step-up promove FINANCEIRO)</code>, apontando para o <code>id</code> do financeiro, com o body:",
                  "comoHtml": "Na URL do request, trocar o <code>{id}</code> pelo <code>financeiroId</code> do <strong>B5</strong> (ou usar a variável, se a collection já referenciar). Conferir na aba <strong>Headers</strong> que o <code>Authorization</code> está usando o <code>adminAccessToken</code> do <strong>B4</strong>. Este passo funciona <strong>sem</strong> token de step-up só porque o <code>admin</code> ainda não tem TOTP — é o motivo do aviso logo acima sobre a ordem. Se responder 403 pedindo step-up, é sinal de que alguém habilitou TOTP no <code>admin</code> antes da hora.",
                  "textoBusca": "insomnia > usuários > post /usuarios/{id}/role (admin + step-up promove financeiro), apontando para o id do financeiro, com o body: na url do request, trocar o {id} pelo financeiroid do b5 (ou usar a variável, se a collection já referenciar). conferir na aba headers que o authorization está usando o adminaccesstoken do b4. este passo funciona sem token de step-up só porque o admin ainda não tem totp — é o motivo do aviso logo acima sobre a ordem. se responder 403 pedindo step-up, é sinal de que alguém habilitou totp no admin antes da hora.",
                  "esperadoHtml": "<code>200</code> com <code>role: \"FINANCEIRO\"</code>.",
                  "blocos": [
                    {
                      "tipo": "codigo",
                      "lang": "json",
                      "regiao": "como",
                      "conteudo": "{ \"role\": \"FINANCEIRO\" }"
                    }
                  ],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 331,
                  "ordem": 2
                },
                {
                  "key": "ROTEIRO-00/5.4/B7",
                  "id": "B7",
                  "hash": "52b74c99",
                  "textoHtml": "Repetir <strong>B6</strong> para o <code>id</code> do backoffice, com o body:",
                  "comoHtml": "Mesmo request, trocando o <code>{id}</code> na URL pelo do backoffice e o valor do body.",
                  "textoBusca": "repetir b6 para o id do backoffice, com o body: mesmo request, trocando o {id} na url pelo do backoffice e o valor do body.",
                  "esperadoHtml": "<code>200</code> com <code>role: \"BACKOFFICE\"</code>.",
                  "blocos": [
                    {
                      "tipo": "codigo",
                      "lang": "json",
                      "regiao": "como",
                      "conteudo": "{ \"role\": \"BACKOFFICE\" }"
                    }
                  ],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 344,
                  "ordem": 3
                },
                {
                  "key": "ROTEIRO-00/5.4/B8",
                  "id": "B8",
                  "hash": "5cf137c3",
                  "textoHtml": "Conferir o audit log das duas promoções:",
                  "comoHtml": "Terminal do banco. Este comando lê a trilha de auditoria de segurança. Cada promoção precisa ter deixado uma linha <code>ROLE_ALTERADO</code> — é exigência regulatória, não capricho. Se as promoções deram <code>200</code> mas aqui não aparecem duas linhas, <strong>isso é um defeito</strong>: registre uma ocorrência.",
                  "textoBusca": "conferir o audit log das duas promoções: terminal do banco. este comando lê a trilha de auditoria de segurança. cada promoção precisa ter deixado uma linha rolealterado — é exigência regulatória, não capricho. se as promoções deram 200 mas aqui não aparecem duas linhas, isso é um defeito: registre uma ocorrência.",
                  "esperadoHtml": "duas linhas <code>ROLE_ALTERADO</code>. Promoção sem trilha é defeito.",
                  "blocos": [
                    {
                      "tipo": "codigo",
                      "lang": "bash",
                      "regiao": "como",
                      "conteudo": "docker exec sep-postgres psql -U sep -d sep_dev \\\n  -c \"SELECT tipo, data_evento FROM audit_log_seguranca WHERE tipo = 'ROLE_ALTERADO' ORDER BY data_evento DESC LIMIT 5;\""
                    }
                  ],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 350,
                  "ordem": 4
                },
                {
                  "key": "ROTEIRO-00/5.4/B9",
                  "id": "B9",
                  "hash": "9d2fe4fa",
                  "textoHtml": "Insomnia &gt; <strong>Usuários</strong> &gt; <code>POST /admin/usuarios (criar admin interno) — 201</code>, trocando o body para uma role operacional:",
                  "comoHtml": "<strong>Atenção: aqui o erro é o resultado certo.</strong> Estes quatro passos tentam burlar o sistema de propósito; se algum deles der certo, o defeito é grave. Enviar o request com o body abaixo (note o campo <code>role</code>, que o body normal não tem) e conferir que a resposta é <strong>400</strong>, não 201. Procurar <code>USR-400-002</code> no corpo da resposta.",
                  "textoBusca": "insomnia > usuários > post /admin/usuarios (criar admin interno) — 201, trocando o body para uma role operacional: atenção: aqui o erro é o resultado certo. estes quatro passos tentam burlar o sistema de propósito; se algum deles der certo, o defeito é grave. enviar o request com o body abaixo (note o campo role, que o body normal não tem) e conferir que a resposta é 400, não 201. procurar usr-400-002 no corpo da resposta.",
                  "esperadoHtml": "<strong>400</strong> com código <code>USR-400-002</code>. O atalho para role operacional é fechado.",
                  "blocos": [
                    {
                      "tipo": "codigo",
                      "lang": "json",
                      "regiao": "como",
                      "conteudo": "{ \"username\": \"atalho@sep.test\", \"password\": \"roteiro-manual-sep-2026\", \"role\": \"FINANCEIRO\" }"
                    }
                  ],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 363,
                  "ordem": 5
                },
                {
                  "key": "ROTEIRO-00/5.4/B10",
                  "id": "B10",
                  "hash": "6f96b63a",
                  "textoHtml": "Repetir <strong>B9</strong> sem o header <code>Authorization</code>.",
                  "comoHtml": "No mesmo request do B9, aba <strong>Headers</strong>, desmarcar (ou apagar) a linha <code>Authorization</code> e enviar de novo. Depois <strong>restaurar o header</strong> — os passos seguintes precisam dele. A diferença entre 401 e 403 importa: 401 é &quot;não sei quem você é&quot;, 403 é &quot;sei quem você é e você não pode&quot;.",
                  "textoBusca": "repetir b9 sem o header authorization. no mesmo request do b9, aba headers, desmarcar (ou apagar) a linha authorization e enviar de novo. depois restaurar o header — os passos seguintes precisam dele. a diferença entre 401 e 403 importa: 401 é \"não sei quem você é\", 403 é \"sei quem você é e você não pode\".",
                  "esperadoHtml": "<strong>401</strong>. Criação de interno não é pública.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 373,
                  "ordem": 6
                },
                {
                  "key": "ROTEIRO-00/5.4/B11",
                  "id": "B11",
                  "hash": "153ae09c",
                  "textoHtml": "Insomnia &gt; <strong>Usuários</strong> &gt; <code>POST /admin/usuarios (cliente tenta criar admin) — 403</code>, com <code>clienteAccessToken</code> preenchido (persona criada na §6).",
                  "comoHtml": "Este passo depende do <code>clienteAccessToken</code>, que só existe depois da §6.1 — se você ainda não criou as personas, <strong>pule agora e volte aqui</strong> depois do <strong>C1</strong>. Para obter o token: fazer login como <code>cliente-a</code> pelo request de login e copiar o <code>accessToken</code>, como no <strong>B4</strong>.",
                  "textoBusca": "insomnia > usuários > post /admin/usuarios (cliente tenta criar admin) — 403, com clienteaccesstoken preenchido (persona criada na §6). este passo depende do clienteaccesstoken, que só existe depois da §6.1 — se você ainda não criou as personas, pule agora e volte aqui depois do c1. para obter o token: fazer login como cliente-a pelo request de login e copiar o accesstoken, como no b4.",
                  "esperadoHtml": "<strong>403</strong>. Só ADMIN cria interno.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 379,
                  "ordem": 7
                },
                {
                  "key": "ROTEIRO-00/5.4/B12",
                  "id": "B12",
                  "hash": "0ee6dd0c",
                  "textoHtml": "Como <code>admin</code>, tentar alterar a <strong>própria</strong> role para <code>CLIENTE</code>.",
                  "comoHtml": "Usar o request de promoção do <strong>B6</strong>, mas colocando na URL o <code>adminId</code> (o id do próprio admin, guardado no <strong>B1</strong>) e <code>{ \"role\": \"CLIENTE\" }</code> no body. A recusa é proposital: se um ADMIN pudesse se rebaixar, poderia também se promover, e todo o impasse de bootstrap da §5.1 perderia sentido.",
                  "textoBusca": "como admin, tentar alterar a própria role para cliente. usar o request de promoção do b6, mas colocando na url o adminid (o id do próprio admin, guardado no b1) e { \"role\": \"cliente\" } no body. a recusa é proposital: se um admin pudesse se rebaixar, poderia também se promover, e todo o impasse de bootstrap da §5.1 perderia sentido.",
                  "esperadoHtml": "recusado. ADMIN não altera a própria role — é por isso que o primeiro ADMIN precisa nascer por SQL.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 387,
                  "ordem": 8
                }
              ]
            }
          ],
          "assercoes": [],
          "linha": 305,
          "stats": {
            "passos": 8,
            "na": 0,
            "assercoes": 0
          }
        },
        {
          "key": "ROTEIRO-00/6.1",
          "id": "6.1",
          "escopoId": "6.1",
          "kind": "secao",
          "nivel": 3,
          "titulo": "Personas",
          "anchor": "personas",
          "ordem": 9,
          "meta": [],
          "metaIndex": {},
          "notas": [
            "A persona <code>credora</code> só vira credora de fato depois do KYB aprovado e do cadastro em <code>/app/credora/cadastro</code> — <strong>isso é jornada</strong>, coberta no roteiro de credora, não aqui. Até lá ela é um <code>CLIENTE</code> comum e o <code>credoraPresenceGuard</code> a bloqueia."
          ],
          "grupos": [
            {
              "id": "g1",
              "tituloHtml": null,
              "tela": null,
              "implicito": true,
              "passos": [
                {
                  "key": "ROTEIRO-00/6.1/C1",
                  "id": "C1",
                  "hash": "a3238473",
                  "textoHtml": "Insomnia &gt; <strong>Usuários</strong> &gt; <code>POST /usuarios (criar cliente público) — 201</code>, três vezes, com os bodies:",
                  "comoHtml": "Mesmo request do <strong>B1</strong> e do <strong>B5</strong>, agora três vezes. <strong>As senhas são diferentes entre si</strong> — copie cada uma exatamente da tabela acima, porque errar aqui só aparece muitas jornadas depois, na forma de um login que não entra. Guardar o <code>id</code> do <code>cliente-a</code> em <code>clienteId</code>. Estas três personas são as que aparecem na maioria das jornadas: <code>cliente-a</code> é o tomador principal, <code>cliente-b</code> serve para provar que ninguém enxerga dado alheio, e <code>credora</code> é usada no roteiro de credora.",
                  "textoBusca": "insomnia > usuários > post /usuarios (criar cliente público) — 201, três vezes, com os bodies: mesmo request do b1 e do b5, agora três vezes. as senhas são diferentes entre si — copie cada uma exatamente da tabela acima, porque errar aqui só aparece muitas jornadas depois, na forma de um login que não entra. guardar o id do cliente-a em clienteid. estas três personas são as que aparecem na maioria das jornadas: cliente-a é o tomador principal, cliente-b serve para provar que ninguém enxerga dado alheio, e credora é usada no roteiro de credora.",
                  "esperadoHtml": "três <code>201</code>, todos <code>CLIENTE</code>. Guardar o <code>id</code> do <code>cliente-a</code> em <code>clienteId</code>. Nenhum deles recebe role interna.",
                  "blocos": [
                    {
                      "tipo": "codigo",
                      "lang": "json",
                      "regiao": "como",
                      "conteudo": "{ \"username\": \"cliente-a@sep.test\", \"password\": \"jornada-tomador-sep-2026\" }"
                    },
                    {
                      "tipo": "codigo",
                      "lang": "json",
                      "regiao": "como",
                      "conteudo": "{ \"username\": \"cliente-b@sep.test\", \"password\": \"jornada-ownership-sep-2026\" }"
                    },
                    {
                      "tipo": "codigo",
                      "lang": "json",
                      "regiao": "como",
                      "conteudo": "{ \"username\": \"credora@sep.test\", \"password\": \"jornada-credora-sep-2026\" }"
                    }
                  ],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 412,
                  "ordem": 1
                },
                {
                  "key": "ROTEIRO-00/6.1/C2",
                  "id": "C2",
                  "hash": "2863418a",
                  "textoHtml": "Conferir que nenhum usuário nasceu com <code>precisa_redefinir_senha = true</code>:",
                  "comoHtml": "Terminal do banco. Este comando lista todos os usuários criados até aqui — devem ser seis. É um bom momento para conferir a lista inteira: se faltar alguém, algum passo anterior falhou sem você notar. Nas colunas <code>mfa_habilitado</code> e <code>precisa_redefinir_senha</code>, <code>f</code> quer dizer falso.",
                  "textoBusca": "conferir que nenhum usuário nasceu com precisaredefinirsenha = true: terminal do banco. este comando lista todos os usuários criados até aqui — devem ser seis. é um bom momento para conferir a lista inteira: se faltar alguém, algum passo anterior falhou sem você notar. nas colunas mfahabilitado e precisaredefinirsenha, f quer dizer falso.",
                  "esperadoHtml": "<code>precisa_redefinir_senha = f</code> e <code>mfa_habilitado = f</code> para todos. O <code>UPDATE</code> da migration V6 só atingiu usuários que existiam na época; em banco novo não há nenhum.",
                  "blocos": [
                    {
                      "tipo": "codigo",
                      "lang": "bash",
                      "regiao": "como",
                      "conteudo": "docker exec sep-postgres psql -U sep -d sep_dev \\\n  -c \"SELECT username, role, mfa_habilitado, precisa_redefinir_senha FROM usuario ORDER BY data_criacao;\""
                    }
                  ],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 431,
                  "ordem": 2
                }
              ]
            }
          ],
          "assercoes": [],
          "linha": 401,
          "stats": {
            "passos": 2,
            "na": 0,
            "assercoes": 0
          }
        },
        {
          "key": "ROTEIRO-00/6.2",
          "id": "6.2",
          "escopoId": "6.2",
          "kind": "secao",
          "nivel": 3,
          "titulo": "Habilitar TOTP",
          "anchor": "habilitar-totp",
          "ordem": 10,
          "meta": [],
          "metaIndex": {},
          "notas": [
            "<strong>Deixe <code>cliente-b</code> sem TOTP de propósito.</strong> Ele é a persona das negativas de step-up estrito: sem MFA, a operação tem de ser negada com 403."
          ],
          "grupos": [
            {
              "id": "g1",
              "tituloHtml": null,
              "tela": null,
              "implicito": true,
              "passos": [
                {
                  "key": "ROTEIRO-00/6.2/C3",
                  "id": "C3",
                  "hash": "fd2a2567",
                  "textoHtml": "No web, autenticar como <code>cliente-a</code> e abrir <strong>Meu perfil</strong>.",
                  "comoHtml": "Na aba do <code>localhost:4200</code>, entrar com <code>cliente-a@sep.test</code> / <code>jornada-tomador-sep-2026</code>. Como este usuário ainda não tem TOTP, o login entra direto no painel, sem pedir código. <strong>Meu perfil</strong> fica no menu do usuário.",
                  "textoBusca": "no web, autenticar como cliente-a e abrir meu perfil. na aba do localhost:4200, entrar com cliente-a@sep.test / jornada-tomador-sep-2026. como este usuário ainda não tem totp, o login entra direto no painel, sem pedir código. meu perfil fica no menu do usuário.",
                  "esperadoHtml": null,
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 457,
                  "ordem": 1
                },
                {
                  "key": "ROTEIRO-00/6.2/C4",
                  "id": "C4",
                  "hash": "b947002d",
                  "textoHtml": "Abrir a configuração de TOTP em <code>/app/profile/setup-totp</code>.",
                  "comoHtml": "<strong>Não há link para esta tela no menu nem no perfil</strong> — digitar o endereço <code>http://localhost:4200/app/profile/setup-totp</code> direto na barra; funciona porque você já está logado. A tela abre com o título <strong>Habilitar autenticação em duas etapas (TOTP)</strong> e um botão <strong>Iniciar setup</strong>: o QR só aparece depois de clicar nele.",
                  "textoBusca": "abrir a configuração de totp em /app/profile/setup-totp. não há link para esta tela no menu nem no perfil — digitar o endereço http://localhost:4200/app/profile/setup-totp direto na barra; funciona porque você já está logado. a tela abre com o título habilitar autenticação em duas etapas (totp) e um botão iniciar setup: o qr só aparece depois de clicar nele.",
                  "esperadoHtml": "QR code e secret em texto são exibidos.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 461,
                  "ordem": 2
                },
                {
                  "key": "ROTEIRO-00/6.2/C5",
                  "id": "C5",
                  "hash": "a693cae6",
                  "textoHtml": "Escanear o QR no autenticador e confirmar com o código corrente.",
                  "comoHtml": "A tela está numerada em três passos. No <strong>1. Escaneie o QR code</strong>, ler o QR pelo autenticador (na extensão de navegador costuma haver a opção de colar o secret em texto em vez de escanear). Depois, no <strong>3. Confirme com o primeiro código gerado</strong>, digitar no campo <strong>Código TOTP</strong> o número de 6 dígitos que o autenticador mostra — ele <strong>muda a cada 30 segundos</strong> — e clicar em <strong>Confirmar e ativar MFA</strong>. Se der erro, o código provavelmente virou no meio do caminho: esperar o próximo e repetir.",
                  "textoBusca": "escanear o qr no autenticador e confirmar com o código corrente. a tela está numerada em três passos. no 1. escaneie o qr code, ler o qr pelo autenticador (na extensão de navegador costuma haver a opção de colar o secret em texto em vez de escanear). depois, no 3. confirme com o primeiro código gerado, digitar no campo código totp o número de 6 dígitos que o autenticador mostra — ele muda a cada 30 segundos — e clicar em confirmar e ativar mfa. se der erro, o código provavelmente virou no meio do caminho: esperar o próximo e repetir.",
                  "esperadoHtml": "MFA habilitado; <strong>os backup codes aparecem uma única vez</strong> — copiar agora.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 467,
                  "ordem": 3
                },
                {
                  "key": "ROTEIRO-00/6.2/C6",
                  "id": "C6",
                  "hash": "265a170b",
                  "textoHtml": "Guardar os backup codes junto das credenciais desta execução.",
                  "comoHtml": "<strong>Não feche a tela antes de copiar.</strong> Os códigos aparecem no bloco <strong>2. Guarde seus backup codes</strong>, como uma lista simples — <strong>não há botão de copiar</strong>: selecionar com o mouse e copiar à mão. A própria tela avisa que eles não serão exibidos de novo, e é verdade: perdê-los significa refazer o enrollment. Colar num arquivo de rascunho da execução, junto das senhas em uso. Pelo menos um precisa sobrar sem uso para a jornada <code>J-031.W</code>, que testa justamente o consumo de um backup code.",
                  "textoBusca": "guardar os backup codes junto das credenciais desta execução. não feche a tela antes de copiar. os códigos aparecem no bloco 2. guarde seus backup codes, como uma lista simples — não há botão de copiar: selecionar com o mouse e copiar à mão. a própria tela avisa que eles não serão exibidos de novo, e é verdade: perdê-los significa refazer o enrollment. colar num arquivo de rascunho da execução, junto das senhas em uso. pelo menos um precisa sobrar sem uso para a jornada j-031.w, que testa justamente o consumo de um backup code.",
                  "esperadoHtml": "pelo menos um backup code reservado para a jornada de backup code.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 475,
                  "ordem": 4
                },
                {
                  "key": "ROTEIRO-00/6.2/C7",
                  "id": "C7",
                  "hash": "ee2ce43b",
                  "textoHtml": "Repetir <strong>C3-C6</strong> para <code>financeiro</code> (opera Pix e chaves Pix, ambos com step-up estrito).",
                  "comoHtml": "Sair da sessão do <code>cliente-a</code> e entrar como <code>financeiro@sep.test</code> / <code>roteiro-manual-sep-2026</code>. Repetir C3 a C6. No autenticador, a segunda conta aparece como uma entrada separada — confira que está lendo o código <strong>da conta certa</strong> na hora de usar; é o erro mais comum daqui em diante.",
                  "textoBusca": "repetir c3-c6 para financeiro (opera pix e chaves pix, ambos com step-up estrito). sair da sessão do cliente-a e entrar como financeiro@sep.test / roteiro-manual-sep-2026. repetir c3 a c6. no autenticador, a segunda conta aparece como uma entrada separada — confira que está lendo o código da conta certa na hora de usar; é o erro mais comum daqui em diante.",
                  "esperadoHtml": "<code>financeiro</code> com MFA habilitado.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 483,
                  "ordem": 5
                },
                {
                  "key": "ROTEIRO-00/6.2/C8",
                  "id": "C8",
                  "hash": "d29da957",
                  "textoHtml": "Conferir no banco:",
                  "comoHtml": "Terminal do banco. Esta consulta lista só quem tem MFA ligado — devem ser exatamente duas linhas. Se <code>cliente-b</code> aparecer aqui, o enrollment foi feito na conta errada e as jornadas negativas de step-up vão falhar sem motivo aparente.",
                  "textoBusca": "conferir no banco: terminal do banco. esta consulta lista só quem tem mfa ligado — devem ser exatamente duas linhas. se cliente-b aparecer aqui, o enrollment foi feito na conta errada e as jornadas negativas de step-up vão falhar sem motivo aparente.",
                  "esperadoHtml": "<code>cliente-a</code> e <code>financeiro</code> na lista.",
                  "blocos": [
                    {
                      "tipo": "codigo",
                      "lang": "bash",
                      "regiao": "como",
                      "conteudo": "docker exec sep-postgres psql -U sep -d sep_dev \\\n  -c \"SELECT username, mfa_habilitado FROM usuario WHERE mfa_habilitado = true;\""
                    }
                  ],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 490,
                  "ordem": 6
                }
              ]
            }
          ],
          "assercoes": [],
          "linha": 447,
          "stats": {
            "passos": 6,
            "na": 0,
            "assercoes": 0
          }
        },
        {
          "key": "ROTEIRO-00/7",
          "id": "7",
          "escopoId": "7",
          "kind": "secao",
          "nivel": 2,
          "titulo": "Reset entre execuções",
          "anchor": "reset-entre-execues",
          "ordem": 11,
          "meta": [],
          "metaIndex": {},
          "notas": [
            "Os valores-sentinela de <code>99999999999</code> (força <code>409</code>) e os UUIDs de ownership existem no <strong>MSW</strong>, não no backend real. Contra <code>:8080</code>, os cenários negativos se constroem com dados reais — por exemplo, ownership se testa com o ID real do <code>cliente-a</code> autenticado como <code>cliente-b</code>."
          ],
          "grupos": [
            {
              "id": "g1",
              "tituloHtml": null,
              "tela": null,
              "implicito": true,
              "passos": [
                {
                  "key": "ROTEIRO-00/7/D1",
                  "id": "D1",
                  "hash": "a95a72d2",
                  "textoHtml": "Reset total (apaga o volume; ambiente do zero):",
                  "comoHtml": "<strong>Este passo apaga tudo e não tem desfazer.</strong> O <code>-v</code> remove o volume do banco, ou seja, todos os usuários e dados que você criou. Só rode quando quiser recomeçar do zero, e faça o <strong>D4</strong> antes para não perder o registro da rodada anterior. Depois de rodar, reiniciar a API (o terminal do <strong>A3</strong>) para o Flyway recriar as tabelas.",
                  "textoBusca": "reset total (apaga o volume; ambiente do zero): este passo apaga tudo e não tem desfazer. o -v remove o volume do banco, ou seja, todos os usuários e dados que você criou. só rode quando quiser recomeçar do zero, e faça o d4 antes para não perder o registro da rodada anterior. depois de rodar, reiniciar a api (o terminal do a3) para o flyway recriar as tabelas.",
                  "esperadoHtml": "banco vazio. Toda a §5 e a §6 precisam ser refeitas.",
                  "blocos": [
                    {
                      "tipo": "codigo",
                      "lang": "bash",
                      "regiao": "como",
                      "conteudo": "cd sep-api && docker compose down -v && docker compose up -d postgres"
                    }
                  ],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 550,
                  "ordem": 1
                },
                {
                  "key": "ROTEIRO-00/7/D2",
                  "id": "D2",
                  "hash": "f0ab48b1",
                  "textoHtml": "Destravar uma conta bloqueada sem reset total: remover as tentativas registradas para o usuário.",
                  "comoHtml": "Use isto quando errar a senha cinco vezes e a persona ficar bloqueada por 30 minutos (§6.4) — é bem mais rápido que o reset total, e não destrói a massa de dados. O <code>DELETE</code> abaixo <strong>basta</strong>: o bloqueio é recalculado do banco a cada tentativa, e não há nada em memória guardando quem está travado. <strong>Não é preciso reiniciar a API.</strong> A alternativa é simplesmente esperar os 30 minutos passarem.",
                  "textoBusca": "destravar uma conta bloqueada sem reset total: remover as tentativas registradas para o usuário. use isto quando errar a senha cinco vezes e a persona ficar bloqueada por 30 minutos (§6.4) — é bem mais rápido que o reset total, e não destrói a massa de dados. o delete abaixo basta: o bloqueio é recalculado do banco a cada tentativa, e não há nada em memória guardando quem está travado. não é preciso reiniciar a api. a alternativa é simplesmente esperar os 30 minutos passarem.",
                  "esperadoHtml": "login volta a ser aceito com a senha correta, sem reiniciar nada.",
                  "blocos": [
                    {
                      "tipo": "codigo",
                      "lang": "bash",
                      "regiao": "como",
                      "conteudo": "docker exec sep-postgres psql -U sep -d sep_dev \\\n  -c \"DELETE FROM login_attempt WHERE username = 'cliente-b@sep.test';\""
                    }
                  ],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 559,
                  "ordem": 2
                },
                {
                  "key": "ROTEIRO-00/7/D3",
                  "id": "D3",
                  "hash": "ba1dec39",
                  "textoHtml": "Só se o problema for <code>429</code> (rate limit), não <code>423</code>: reiniciar a API.",
                  "comoHtml": "O contador de requisições por IP vive <strong>em memória</strong>, não no banco, então o <code>DELETE</code> do D2 não o alcança. Reiniciar a API no terminal do <strong>A3</strong> (<code>Ctrl+C</code> e <code>./gradlew bootRun</code> de novo) zera o contador. Esperar 1 minuto também resolve — a janela do limitador é de 60 segundos. Se a tela mostra <strong>Conta bloqueada temporariamente</strong> ou <code>423</code>, o passo certo é o D2, não este.",
                  "textoBusca": "só se o problema for 429 (rate limit), não 423: reiniciar a api. o contador de requisições por ip vive em memória, não no banco, então o delete do d2 não o alcança. reiniciar a api no terminal do a3 (ctrl+c e ./gradlew bootrun de novo) zera o contador. esperar 1 minuto também resolve — a janela do limitador é de 60 segundos. se a tela mostra conta bloqueada temporariamente ou 423, o passo certo é o d2, não este.",
                  "esperadoHtml": "as requisições voltam a passar sem <code>429</code>.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 571,
                  "ordem": 3
                },
                {
                  "key": "ROTEIRO-00/7/D4",
                  "id": "D4",
                  "hash": "62e7e1d7",
                  "textoHtml": "Antes de uma execução limpa, criar uma <strong>rodada nova</strong> pelo botão <code>+</code> do topo do <a href=\"./app/index.html\" rel=\"noreferrer\">app</a>. A rodada anterior continua registrada.",
                  "comoHtml": "Rodando pelo servidor (<code>npm start</code>), tudo já está persistido em <code>data/db.json</code> — basta clicar no <code>+</code> no topo para abrir uma rodada nova; a anterior permanece no seletor de rodadas e no arquivo. Comite <code>data/db.json</code> para congelar o registro. (No modo <code>file://</code>, clique em <strong>Exportar</strong> antes, pois ali o estado vive só no navegador.)",
                  "textoBusca": "antes de uma execução limpa, criar uma rodada nova pelo botão + do topo do app. a rodada anterior continua registrada. rodando pelo servidor (npm start), tudo já está persistido em data/db.json — basta clicar no + no topo para abrir uma rodada nova; a anterior permanece no seletor de rodadas e no arquivo. comite data/db.json para congelar o registro. (no modo file://, clique em exportar antes, pois ali o estado vive só no navegador.)",
                  "esperadoHtml": "a rodada nova começa com o progresso zerado; a anterior continua acessível no seletor de rodadas e em <code>data/db.json</code>.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 578,
                  "ordem": 4
                }
              ]
            }
          ],
          "assercoes": [],
          "linha": 548,
          "stats": {
            "passos": 4,
            "na": 0,
            "assercoes": 0
          }
        },
        {
          "key": "ROTEIRO-00/9",
          "id": "9",
          "escopoId": "9",
          "kind": "secao",
          "nivel": 2,
          "titulo": "Verificação final do ambiente",
          "anchor": "verificao-final-do-ambiente",
          "ordem": 12,
          "meta": [],
          "metaIndex": {},
          "notas": [],
          "grupos": [
            {
              "id": "g1",
              "tituloHtml": null,
              "tela": null,
              "implicito": true,
              "passos": [
                {
                  "key": "ROTEIRO-00/9/E1",
                  "id": "E1",
                  "hash": "c183581a",
                  "textoHtml": "<code>PRE-01</code> a <code>PRE-10</code> marcados",
                  "comoHtml": "Conferir na tabela do §8 que cada <code>PRE</code> de 01 a 10 aponta para um passo que você já executou. <code>PRE-11</code> a <code>PRE-13</code> <strong>não</strong> entram aqui: eles são produzidos por jornadas de outros roteiros, não por este preparo.",
                  "textoBusca": "pre-01 a pre-10 marcados conferir na tabela do §8 que cada pre de 01 a 10 aponta para um passo que você já executou. pre-11 a pre-13 não entram aqui: eles são produzidos por jornadas de outros roteiros, não por este preparo.",
                  "esperadoHtml": null,
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 614,
                  "ordem": 1
                },
                {
                  "key": "ROTEIRO-00/9/E2",
                  "id": "E2",
                  "hash": "132ba191",
                  "textoHtml": "Login funciona no web para <code>admin</code>, <code>financeiro</code>, <code>backoffice</code> e <code>cliente-a</code>",
                  "comoHtml": "Em <code>localhost:4200</code>, entrar e sair com as quatro personas, uma de cada vez, usando as senhas da tabela do §6.1. <code>cliente-a</code> e <code>financeiro</code> vão pedir o código TOTP (foram habilitados no §6.2); <code>admin</code> e <code>backoffice</code> entram direto. Testar agora evita descobrir uma senha errada no meio de uma jornada longa.",
                  "textoBusca": "login funciona no web para admin, financeiro, backoffice e cliente-a em localhost:4200, entrar e sair com as quatro personas, uma de cada vez, usando as senhas da tabela do §6.1. cliente-a e financeiro vão pedir o código totp (foram habilitados no §6.2); admin e backoffice entram direto. testar agora evita descobrir uma senha errada no meio de uma jornada longa.",
                  "esperadoHtml": null,
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 618,
                  "ordem": 2
                },
                {
                  "key": "ROTEIRO-00/9/E3",
                  "id": "E3",
                  "hash": "69b29020",
                  "textoHtml": "Login funciona no mobile para <code>cliente-a</code>",
                  "comoHtml": "Na aba do <code>localhost:8100</code>, com a emulação de dispositivo ligada (<strong>A9</strong>), entrar como <code>cliente-a</code>. O mobile <strong>verifica</strong> o código TOTP mas não cadastra — o enrollment é só no web, e já foi feito.",
                  "textoBusca": "login funciona no mobile para cliente-a na aba do localhost:8100, com a emulação de dispositivo ligada (a9), entrar como cliente-a. o mobile verifica o código totp mas não cadastra — o enrollment é só no web, e já foi feito.",
                  "esperadoHtml": null,
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 623,
                  "ordem": 3
                },
                {
                  "key": "ROTEIRO-00/9/E4",
                  "id": "E4",
                  "hash": "a96b4877",
                  "textoHtml": "Nenhuma superfície está em MSW (<code>PRE-04</code> conferido nas duas)",
                  "comoHtml": "Em cada aba (<code>:4200</code> e <code>:8100</code>), abrir o DevTools (<code>F12</code>), aba <strong>Console</strong>, e rodar <code>localStorage.NG_APP_USE_MSW</code>. A resposta precisa ser <code>null</code> ou <code>\"false\"</code>. Se vier <code>\"true\"</code>, rodar <code>localStorage.removeItem('NG_APP_USE_MSW')</code> e recarregar. Com o MSW ligado a tela responde bonito sem backend nenhum, e <strong>o roteiro inteiro perde o valor</strong>.",
                  "textoBusca": "nenhuma superfície está em msw (pre-04 conferido nas duas) em cada aba (:4200 e :8100), abrir o devtools (f12), aba console, e rodar localstorage.ngappusemsw. a resposta precisa ser null ou \"false\". se vier \"true\", rodar localstorage.removeitem('ngappusemsw') e recarregar. com o msw ligado a tela responde bonito sem backend nenhum, e o roteiro inteiro perde o valor.",
                  "esperadoHtml": null,
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 627,
                  "ordem": 4
                },
                {
                  "key": "ROTEIRO-00/9/E5",
                  "id": "E5",
                  "hash": "cd720b2e",
                  "textoHtml": "A aba de rede do navegador mostra chamadas saindo para <code>localhost:8080</code>",
                  "comoHtml": "É a confirmação positiva do E4: em vez de perguntar se o mock está desligado, olhar se o backend real está sendo chamado. Aba <strong>Network</strong>, filtrar por <code>8080</code>, e fazer qualquer ação na tela (um login serve). Tem que aparecer chamada.",
                  "textoBusca": "a aba de rede do navegador mostra chamadas saindo para localhost:8080 é a confirmação positiva do e4: em vez de perguntar se o mock está desligado, olhar se o backend real está sendo chamado. aba network, filtrar por 8080, e fazer qualquer ação na tela (um login serve). tem que aparecer chamada.",
                  "esperadoHtml": "se não há chamadas para <code>:8080</code>, a superfície está em mock e o resultado do roteiro não vale.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 632,
                  "ordem": 5
                }
              ]
            }
          ],
          "assercoes": [],
          "linha": 610,
          "stats": {
            "passos": 5,
            "na": 0,
            "assercoes": 0
          }
        }
      ],
      "ocorrenciasColunas": [
        "#",
        "Passo",
        "O que aconteceu",
        "Esperado",
        "Issue"
      ],
      "registroCampos": [
        {
          "chave": "executado_por",
          "rotulo": "Executado por",
          "tipo": "texto"
        },
        {
          "chave": "data_hora",
          "rotulo": "Data / hora",
          "tipo": "texto"
        },
        {
          "chave": "commit_sep_api",
          "rotulo": "Commit sep-api",
          "tipo": "texto"
        },
        {
          "chave": "commit_sep_app",
          "rotulo": "Commit sep-app",
          "tipo": "texto"
        },
        {
          "chave": "commit_sep_mobile",
          "rotulo": "Commit sep-mobile",
          "tipo": "texto"
        },
        {
          "chave": "resultado",
          "rotulo": "Resultado",
          "tipo": "texto"
        },
        {
          "chave": "observacoes",
          "rotulo": "Observações",
          "tipo": "textarea"
        }
      ]
    },
    {
      "id": "ROTEIRO-01",
      "arquivo": "ROTEIRO-01-ACESSO-E-SESSAO.md",
      "hash": "48298d8f",
      "titulo": "Roteiro 01 - Acesso e sessão",
      "tipo": "jornadas",
      "ordem": 11,
      "atualizadoEm": "2026-08-10",
      "resumoHtml": "",
      "escopos": [
        {
          "key": "ROTEIRO-01/J-001.W",
          "id": "J-001.W",
          "escopoId": "J-001.W",
          "kind": "jornada",
          "nivel": 3,
          "titulo": "Visitante navega da landing até o login",
          "anchor": "j-001w---visitante-navega-da-landing-at-o-login",
          "ordem": 1,
          "meta": [
            {
              "chave": "ID",
              "texto": "J-001.W",
              "html": "<code>J-001.W</code>"
            },
            {
              "chave": "Tipo",
              "texto": "Positiva",
              "html": "Positiva"
            },
            {
              "chave": "Persona",
              "texto": "Visitante (sem token)",
              "html": "Visitante (sem token)"
            },
            {
              "chave": "Superfície",
              "texto": "Web http://localhost:4200",
              "html": "Web <code>http://localhost:4200</code>"
            },
            {
              "chave": "Pré-condições",
              "texto": "PRE-01 PRE-02 PRE-04",
              "html": "<code>PRE-01</code> <code>PRE-02</code> <code>PRE-04</code>"
            },
            {
              "chave": "Credenciais",
              "texto": "nenhuma — esta jornada é de visitante, sem fazer login",
              "html": "nenhuma — esta jornada é de visitante, <strong>sem</strong> fazer login"
            },
            {
              "chave": "Endpoints tocados",
              "texto": "nenhum obrigatório",
              "html": "nenhum obrigatório"
            },
            {
              "chave": "Duração",
              "texto": "3 min",
              "html": "3 min"
            },
            {
              "chave": "Automação equivalente",
              "texto": "smoke.spec.ts (parcial)",
              "html": "<a href=\"../sep-app/e2e/smoke.spec.ts\" rel=\"noreferrer\"><code>smoke.spec.ts</code></a> (parcial)"
            },
            {
              "chave": "Só o manual cobre",
              "texto": "Leitura visual do conteúdo, layout <768px",
              "html": "Leitura visual do conteúdo, layout &lt;768px"
            }
          ],
          "metaIndex": {
            "ID": "J-001.W",
            "Tipo": "Positiva",
            "Persona": "Visitante (sem token)",
            "Superfície": "Web http://localhost:4200",
            "Pré-condições": "PRE-01 PRE-02 PRE-04",
            "Credenciais": "nenhuma — esta jornada é de visitante, sem fazer login",
            "Endpoints tocados": "nenhum obrigatório",
            "Duração": "3 min",
            "Automação equivalente": "smoke.spec.ts (parcial)",
            "Só o manual cobre": "Leitura visual do conteúdo, layout <768px"
          },
          "notas": [
            "Família <code>J-000</code> a <code>J-039</code>: público, cadastro, login, MFA, lockout, sessão, perfil, senha e step-up. Requer <a href=\"./ROTEIRO-00-AMBIENTE-E-MASSA.md\" rel=\"noreferrer\"><code>ROTEIRO-00</code></a> concluído. Hub: <a href=\"./CENARIOS-TESTE-JORNADAS-USUARIO.md\" rel=\"noreferrer\"><code>CENARIOS-TESTE-JORNADAS-USUARIO.md</code></a>.",
            "Tudo no navegador. O mobile e o PWA em <code>localhost:8100</code> com emulação de dispositivo. Biometria nativa fica no <code>ROTEIRO-09</code>, adiado por exigir aparelho."
          ],
          "grupos": [
            {
              "id": "g2",
              "tituloHtml": "Tela <code>/</code> (landing)",
              "tela": "/",
              "implicito": false,
              "passos": [
                {
                  "key": "ROTEIRO-01/J-001.W/P1",
                  "id": "P1",
                  "hash": "1b39d05b",
                  "textoHtml": "Abrir <code>http://localhost:4200</code> em aba anônima.",
                  "comoHtml": "No Chrome, <code>Ctrl+Shift+N</code> abre uma janela anônima (no Firefox, <code>Ctrl+Shift+P</code>). A janela anônima importa: ela não tem token de sessão de execuções anteriores, e é isso que faz de você um &quot;visitante&quot;. Digitar o endereço na barra e abrir. Se a página não carregar, o <code>sep-app</code> não está no ar — volte ao <a href=\"./ROTEIRO-00-AMBIENTE-E-MASSA.md\" rel=\"noreferrer\"><code>ROTEIRO-00</code></a> §4.3.",
                  "textoBusca": "abrir http://localhost:4200 em aba anônima. no chrome, ctrl+shift+n abre uma janela anônima (no firefox, ctrl+shift+p). a janela anônima importa: ela não tem token de sessão de execuções anteriores, e é isso que faz de você um \"visitante\". digitar o endereço na barra e abrir. se a página não carregar, o sep-app não está no ar — volte ao roteiro-00 §4.3.",
                  "esperadoHtml": "landing carrega; nenhum erro no console.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 61,
                  "ordem": 1
                },
                {
                  "key": "ROTEIRO-01/J-001.W/P2",
                  "id": "P2",
                  "hash": "a46befc5",
                  "textoHtml": "Abrir a aba de rede antes de interagir.",
                  "comoHtml": "<code>F12</code> abre o DevTools; escolher a aba <strong>Network</strong> (ou <strong>Rede</strong>) e recarregar com <code>Ctrl+R</code> para capturar o carregamento desde o início. Ler a coluna <strong>Name</strong>: você deve ver só arquivos estáticos (<code>.js</code>, <code>.css</code>, fontes, ícones). O que <strong>não</strong> pode aparecer é chamada à API — filtre por <code>auth</code> ou <code>api</code> na caixa de filtro para confirmar que a lista fica vazia.",
                  "textoBusca": "abrir a aba de rede antes de interagir. f12 abre o devtools; escolher a aba network (ou rede) e recarregar com ctrl+r para capturar o carregamento desde o início. ler a coluna name: você deve ver só arquivos estáticos (.js, .css, fontes, ícones). o que não pode aparecer é chamada à api — filtre por auth ou api na caixa de filtro para confirmar que a lista fica vazia.",
                  "esperadoHtml": "<strong>nenhuma</strong> chamada autenticada (<code>/auth/me</code>, <code>/api/v1/...</code>) antes do login.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 68,
                  "ordem": 2
                },
                {
                  "key": "ROTEIRO-01/J-001.W/P3",
                  "id": "P3",
                  "hash": "fe30d78f",
                  "textoHtml": "Reduzir a janela para 375px de largura.",
                  "comoHtml": "Com o DevTools aberto, ligar o modo dispositivo (<code>Ctrl+Shift+M</code>) e escolher um preset de 375px de largura, como <strong>iPhone SE</strong>. 375px é a largura de celular mais estreita que interessa. Depois rolar a página inteira até o rodapé procurando barra de rolagem <strong>horizontal</strong> — ela é o defeito; a vertical é normal.",
                  "textoBusca": "reduzir a janela para 375px de largura. com o devtools aberto, ligar o modo dispositivo (ctrl+shift+m) e escolher um preset de 375px de largura, como iphone se. 375px é a largura de celular mais estreita que interessa. depois rolar a página inteira até o rodapé procurando barra de rolagem horizontal — ela é o defeito; a vertical é normal.",
                  "esperadoHtml": "sem scroll horizontal; CTAs alcançáveis. Este é um dos itens que o <code>STATE.md</code> (repo <code>docs-SEP</code>, <code>docs-sep/STATE.md</code>) marca como pendente de conferência visual.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 75,
                  "ordem": 3
                },
                {
                  "key": "ROTEIRO-01/J-001.W/P4",
                  "id": "P4",
                  "hash": "4422bd14",
                  "textoHtml": "Clicar em <strong>Entrar</strong>.",
                  "comoHtml": "A palavra <strong>Entrar</strong> aparece em três lugares da landing (no topo, no bloco principal e no rodapé) e as três levam ao mesmo lugar — use a do topo. Ao lado dela há <strong>Criar conta</strong>, que leva a outro destino; não é esta. Conferir o endereço na barra depois do clique.",
                  "textoBusca": "clicar em entrar. a palavra entrar aparece em três lugares da landing (no topo, no bloco principal e no rodapé) e as três levam ao mesmo lugar — use a do topo. ao lado dela há criar conta, que leva a outro destino; não é esta. conferir o endereço na barra depois do clique.",
                  "esperadoHtml": "vai para <code>/login</code>; formulário visível e com foco utilizável.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 82,
                  "ordem": 4
                }
              ]
            }
          ],
          "assercoes": [
            {
              "key": "ROTEIRO-01/J-001.W/#a684c7fd",
              "id": null,
              "hash": "f1fd2774",
              "textoHtml": "Landing e login renderizam sem token e sem chamada autenticada",
              "comoHtml": "Na tela de login, conferir que existem os campos <strong>E-mail</strong> e <strong>Senha</strong> e o botão <strong>Entrar</strong>. Não preencher nada: esta jornada termina aqui, e o login em si é a <a href=\"#j-011w---login-com-mfa-totp\" rel=\"noreferrer\"><code>J-011.W</code></a>.",
              "textoBusca": "landing e login renderizam sem token e sem chamada autenticada na tela de login, conferir que existem os campos e-mail e senha e o botão entrar. não preencher nada: esta jornada termina aqui, e o login em si é a j-011.w.",
              "esperadoHtml": null,
              "blocos": [],
              "na": false,
              "naMotivo": null,
              "marcadoNaFonte": false,
              "linha": 91,
              "ordem": 1
            }
          ],
          "linha": 42,
          "stats": {
            "passos": 4,
            "na": 0,
            "assercoes": 1
          }
        },
        {
          "key": "ROTEIRO-01/J-002.W-N1",
          "id": "J-002.W-N1",
          "escopoId": "J-002.W-N1",
          "kind": "jornada",
          "nivel": 3,
          "titulo": "Visitante tenta área autenticada",
          "anchor": "j-002w-n1---visitante-tenta-rea-autenticada",
          "ordem": 2,
          "meta": [
            {
              "chave": "ID",
              "texto": "J-002.W-N1",
              "html": "<code>J-002.W-N1</code>"
            },
            {
              "chave": "Tipo",
              "texto": "Negativa — controle de acesso",
              "html": "Negativa — controle de acesso"
            },
            {
              "chave": "Persona",
              "texto": "Visitante (sem token)",
              "html": "Visitante (sem token)"
            },
            {
              "chave": "Superfície",
              "texto": "Web",
              "html": "Web"
            },
            {
              "chave": "Vetor",
              "texto": "Acesso por URL direta sem sessão",
              "html": "Acesso por URL direta sem sessão"
            },
            {
              "chave": "Comportamento seguro esperado",
              "texto": "Redireciono para /login sem vazar dado",
              "html": "Redireciono para <code>/login</code> sem vazar dado"
            },
            {
              "chave": "Pré-condições",
              "texto": "PRE-01 PRE-02 PRE-04",
              "html": "<code>PRE-01</code> <code>PRE-02</code> <code>PRE-04</code>"
            },
            {
              "chave": "Só o manual cobre",
              "texto": "Negação de rota por URL direta — item pendente no STATE.md",
              "html": "<strong>Negação de rota por URL direta</strong> — item pendente no <code>STATE.md</code>"
            }
          ],
          "metaIndex": {
            "ID": "J-002.W-N1",
            "Tipo": "Negativa — controle de acesso",
            "Persona": "Visitante (sem token)",
            "Superfície": "Web",
            "Vetor": "Acesso por URL direta sem sessão",
            "Comportamento seguro esperado": "Redireciono para /login sem vazar dado",
            "Pré-condições": "PRE-01 PRE-02 PRE-04",
            "Só o manual cobre": "Negação de rota por URL direta — item pendente no STATE.md"
          },
          "notas": [],
          "grupos": [
            {
              "id": "g1",
              "tituloHtml": null,
              "tela": null,
              "implicito": true,
              "passos": [
                {
                  "key": "ROTEIRO-01/J-002.W-N1/P1",
                  "id": "P1",
                  "hash": "aa27d558",
                  "textoHtml": "Sem sessão, abrir <code>/app/dashboard</code> direto na barra de endereços.",
                  "comoHtml": "Em aba anônima (<code>Ctrl+Shift+N</code>), colar <code>http://localhost:4200/app/dashboard</code> na barra. O ponto do teste é <strong>não</strong> passar pela tela de login: é a tentativa de entrar pela URL, que é como um atacante faria. Olhar a tela com atenção no instante do carregamento — o defeito seria o dashboard piscar antes do redirecionamento, vazando dado por um segundo.",
                  "textoBusca": "sem sessão, abrir /app/dashboard direto na barra de endereços. em aba anônima (ctrl+shift+n), colar http://localhost:4200/app/dashboard na barra. o ponto do teste é não passar pela tela de login: é a tentativa de entrar pela url, que é como um atacante faria. olhar a tela com atenção no instante do carregamento — o defeito seria o dashboard piscar antes do redirecionamento, vazando dado por um segundo.",
                  "esperadoHtml": "redireciona para <code>/login</code>. Nenhum dado do dashboard aparece antes.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 113,
                  "ordem": 1
                },
                {
                  "key": "ROTEIRO-01/J-002.W-N1/P2",
                  "id": "P2",
                  "hash": "da2ba53f",
                  "textoHtml": "Repetir para <code>/app/admin/users</code>.",
                  "comoHtml": "Mesma aba anônima, trocando só o endereço. Continuar sem fazer login entre um passo e outro.",
                  "textoBusca": "repetir para /app/admin/users. mesma aba anônima, trocando só o endereço. continuar sem fazer login entre um passo e outro.",
                  "esperadoHtml": "<code>/login</code>.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 120,
                  "ordem": 2
                },
                {
                  "key": "ROTEIRO-01/J-002.W-N1/P3",
                  "id": "P3",
                  "hash": "24fc8e89",
                  "textoHtml": "Repetir para <code>/app/pix/chaves</code>.",
                  "comoHtml": null,
                  "textoBusca": "repetir para /app/pix/chaves.",
                  "esperadoHtml": "<code>/login</code>.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 124,
                  "ordem": 3
                },
                {
                  "key": "ROTEIRO-01/J-002.W-N1/P4",
                  "id": "P4",
                  "hash": "a82519af",
                  "textoHtml": "Repetir para <code>/app/credora</code>.",
                  "comoHtml": null,
                  "textoBusca": "repetir para /app/credora.",
                  "esperadoHtml": "<code>/login</code>.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 126,
                  "ordem": 4
                },
                {
                  "key": "ROTEIRO-01/J-002.W-N1/P5",
                  "id": "P5",
                  "hash": "94e609ac",
                  "textoHtml": "Abrir <code>/design-system</code>.",
                  "comoHtml": "<strong>Aqui o comportamento é o oposto dos anteriores</strong>: esta rota carrega mesmo sem login, e isso é decisão de projeto, não falha. O que você verifica é o conteúdo: a página deve mostrar só amostras de componentes e cores. Se aparecer nome de cliente, valor de contrato ou qualquer dado de verdade, aí sim é ocorrência.",
                  "textoBusca": "abrir /design-system. aqui o comportamento é o oposto dos anteriores: esta rota carrega mesmo sem login, e isso é decisão de projeto, não falha. o que você verifica é o conteúdo: a página deve mostrar só amostras de componentes e cores. se aparecer nome de cliente, valor de contrato ou qualquer dado de verdade, aí sim é ocorrência.",
                  "esperadoHtml": "<strong>carrega sem sessão</strong> — a rota não tem guard, por decisão. Registrar se expõe qualquer dado real; deve exibir apenas componentes e tokens.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 128,
                  "ordem": 5
                }
              ]
            }
          ],
          "assercoes": [
            {
              "key": "ROTEIRO-01/J-002.W-N1/#a994f26c",
              "id": null,
              "hash": "d4ed9f3a",
              "textoHtml": "Nenhuma rota <code>/app/**</code> renderiza conteúdo sem sessão",
              "comoHtml": null,
              "textoBusca": "nenhuma rota /app/ renderiza conteúdo sem sessão",
              "esperadoHtml": null,
              "blocos": [],
              "na": false,
              "naMotivo": null,
              "marcadoNaFonte": false,
              "linha": 138,
              "ordem": 1
            }
          ],
          "linha": 98,
          "stats": {
            "passos": 5,
            "na": 0,
            "assercoes": 1
          }
        },
        {
          "key": "ROTEIRO-01/J-002.M-N1",
          "id": "J-002.M-N1",
          "escopoId": "J-002.M-N1",
          "kind": "jornada",
          "nivel": 3,
          "titulo": "Visitante tenta área autenticada (mobile)",
          "anchor": "j-002m-n1---visitante-tenta-rea-autenticada-mobile",
          "ordem": 3,
          "meta": [
            {
              "chave": "ID",
              "texto": "J-002.M-N1",
              "html": "<code>J-002.M-N1</code>"
            },
            {
              "chave": "Tipo",
              "texto": "Negativa — controle de acesso",
              "html": "Negativa — controle de acesso"
            },
            {
              "chave": "Persona",
              "texto": "Visitante",
              "html": "Visitante"
            },
            {
              "chave": "Superfície",
              "texto": "Mobile http://localhost:8100",
              "html": "Mobile <code>http://localhost:8100</code>"
            },
            {
              "chave": "Comportamento seguro esperado",
              "texto": "Redireciono para /welcome (não /login)",
              "html": "Redireciono para <code>/welcome</code> (não <code>/login</code>)"
            },
            {
              "chave": "Pré-condições",
              "texto": "PRE-01 PRE-03 PRE-04",
              "html": "<code>PRE-01</code> <code>PRE-03</code> <code>PRE-04</code>"
            },
            {
              "chave": "Automação equivalente",
              "texto": "smoke.spec.ts (parcial)",
              "html": "<a href=\"../sep-mobile/e2e/smoke.spec.ts\" rel=\"noreferrer\"><code>smoke.spec.ts</code></a> (parcial)"
            }
          ],
          "metaIndex": {
            "ID": "J-002.M-N1",
            "Tipo": "Negativa — controle de acesso",
            "Persona": "Visitante",
            "Superfície": "Mobile http://localhost:8100",
            "Comportamento seguro esperado": "Redireciono para /welcome (não /login)",
            "Pré-condições": "PRE-01 PRE-03 PRE-04",
            "Automação equivalente": "smoke.spec.ts (parcial)"
          },
          "notas": [],
          "grupos": [
            {
              "id": "g1",
              "tituloHtml": null,
              "tela": null,
              "implicito": true,
              "passos": [
                {
                  "key": "ROTEIRO-01/J-002.M-N1/P1",
                  "id": "P1",
                  "hash": "4d1d3602",
                  "textoHtml": "Sem sessão, abrir <code>/app/inicio</code>.",
                  "comoHtml": "Em aba anônima, com a emulação de dispositivo ligada (<code>Ctrl+Shift+M</code>), colar <code>http://localhost:8100/app/inicio</code>. Repare que a porta é <strong>8100</strong> (mobile), não 4200.",
                  "textoBusca": "sem sessão, abrir /app/inicio. em aba anônima, com a emulação de dispositivo ligada (ctrl+shift+m), colar http://localhost:8100/app/inicio. repare que a porta é 8100 (mobile), não 4200.",
                  "esperadoHtml": "redireciona para <code>/welcome</code>. Note a diferença em relação ao web, que vai para <code>/login</code>.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 156,
                  "ordem": 1
                },
                {
                  "key": "ROTEIRO-01/J-002.M-N1/P2",
                  "id": "P2",
                  "hash": "c7a49168",
                  "textoHtml": "Repetir para <code>/app/propostas</code> e <code>/app/parcelas</code>.",
                  "comoHtml": "Mesmos endereços com <code>/app/propostas</code> e depois <code>/app/parcelas</code>. A diferença de destino em relação ao web (<code>/welcome</code> em vez de <code>/login</code>) é proposital: no mobile o visitante cai na tela de boas-vindas, que oferece <strong>Entrar</strong> e <strong>Criar conta</strong>.",
                  "textoBusca": "repetir para /app/propostas e /app/parcelas. mesmos endereços com /app/propostas e depois /app/parcelas. a diferença de destino em relação ao web (/welcome em vez de /login) é proposital: no mobile o visitante cai na tela de boas-vindas, que oferece entrar e criar conta.",
                  "esperadoHtml": "<code>/welcome</code> nos dois casos.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 161,
                  "ordem": 2
                }
              ]
            }
          ],
          "assercoes": [],
          "linha": 142,
          "stats": {
            "passos": 2,
            "na": 0,
            "assercoes": 0
          }
        },
        {
          "key": "ROTEIRO-01/J-003.W",
          "id": "J-003.W",
          "escopoId": "J-003.W",
          "kind": "jornada",
          "nivel": 3,
          "titulo": "Visitante tenta se cadastrar pelo web (canalização)",
          "anchor": "j-003w---visitante-tenta-se-cadastrar-pelo-web-canalizao",
          "ordem": 4,
          "meta": [
            {
              "chave": "ID",
              "texto": "J-003.W",
              "html": "<code>J-003.W</code>"
            },
            {
              "chave": "Tipo",
              "texto": "Positiva — verifica canalização, não cadastro",
              "html": "Positiva — verifica canalização, <strong>não</strong> cadastro"
            },
            {
              "chave": "Persona",
              "texto": "Visitante",
              "html": "Visitante"
            },
            {
              "chave": "Superfície",
              "texto": "Web",
              "html": "Web"
            },
            {
              "chave": "Pré-condições",
              "texto": "PRE-01 PRE-02 PRE-04",
              "html": "<code>PRE-01</code> <code>PRE-02</code> <code>PRE-04</code>"
            },
            {
              "chave": "Nota",
              "texto": "O cadastro real só existe no mobile (J-003.M). No web, /register e tela estática de canalização.",
              "html": "O cadastro real <strong>só existe no mobile</strong> (<a href=\"#j-003m---visitante-cria-conta-de-cliente\" rel=\"noreferrer\"><code>J-003.M</code></a>). No web, <code>/register</code> e tela estática de canalização."
            },
            {
              "chave": "Automação equivalente",
              "texto": "golden-path.spec.ts",
              "html": "<a href=\"../sep-app/e2e/golden-path.spec.ts\" rel=\"noreferrer\"><code>golden-path.spec.ts</code></a>"
            }
          ],
          "metaIndex": {
            "ID": "J-003.W",
            "Tipo": "Positiva — verifica canalização, não cadastro",
            "Persona": "Visitante",
            "Superfície": "Web",
            "Pré-condições": "PRE-01 PRE-02 PRE-04",
            "Nota": "O cadastro real só existe no mobile (J-003.M). No web, /register e tela estática de canalização.",
            "Automação equivalente": "golden-path.spec.ts"
          },
          "notas": [],
          "grupos": [
            {
              "id": "g1",
              "tituloHtml": null,
              "tela": null,
              "implicito": true,
              "passos": [
                {
                  "key": "ROTEIRO-01/J-003.W/P1",
                  "id": "P1",
                  "hash": "39406636",
                  "textoHtml": "Abrir <code>/register</code> sem token.",
                  "comoHtml": "Em aba anônima, abrir <code>http://localhost:4200/register</code>. Você chega aqui também clicando em <strong>Criar conta</strong> na landing. A tela se chama <strong>Como cadastrar sua conta</strong> e explica três caminhos (tomador pelo app, credora por convite, interno pelo admin). O único elemento clicável é o link <strong>Já tenho conta — fazer login</strong>.",
                  "textoBusca": "abrir /register sem token. em aba anônima, abrir http://localhost:4200/register. você chega aqui também clicando em criar conta na landing. a tela se chama como cadastrar sua conta e explica três caminhos (tomador pelo app, credora por convite, interno pelo admin). o único elemento clicável é o link já tenho conta — fazer login.",
                  "esperadoHtml": "tela de canalização (&quot;tomador baixa o app; credora entra por convite; interno é criado pelo admin&quot;). <strong>Nenhum</strong> campo de senha, nenhum formulário de cadastro.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 183,
                  "ordem": 1
                },
                {
                  "key": "ROTEIRO-01/J-003.W/P2",
                  "id": "P2",
                  "hash": "9d8b1884",
                  "textoHtml": "Inspecionar a rede durante a visita.",
                  "comoHtml": "Com o DevTools na aba <strong>Network</strong>, recarregar a página. Como esta tela é estática, não pode haver nenhuma chamada à API — filtrar por <code>api</code> e confirmar lista vazia.",
                  "textoBusca": "inspecionar a rede durante a visita. com o devtools na aba network, recarregar a página. como esta tela é estática, não pode haver nenhuma chamada à api — filtrar por api e confirmar lista vazia.",
                  "esperadoHtml": "nenhum <code>POST /api/v1/usuarios</code>, nenhuma chamada autenticada.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 190,
                  "ordem": 2
                }
              ]
            }
          ],
          "assercoes": [
            {
              "key": "ROTEIRO-01/J-003.W/#30dc0ed5",
              "id": null,
              "hash": "7d286371",
              "textoHtml": "Não existe caminho de cadastro pelo web — a jornada &quot;cadastro cliente pelo web&quot; não e executável por decisão de produto, não por defeito",
              "comoHtml": null,
              "textoBusca": "não existe caminho de cadastro pelo web — a jornada \"cadastro cliente pelo web\" não e executável por decisão de produto, não por defeito",
              "esperadoHtml": null,
              "blocos": [],
              "na": false,
              "naMotivo": null,
              "marcadoNaFonte": false,
              "linha": 198,
              "ordem": 1
            }
          ],
          "linha": 169,
          "stats": {
            "passos": 2,
            "na": 0,
            "assercoes": 1
          }
        },
        {
          "key": "ROTEIRO-01/J-003.M",
          "id": "J-003.M",
          "escopoId": "J-003.M",
          "kind": "jornada",
          "nivel": 3,
          "titulo": "Visitante cria conta de cliente",
          "anchor": "j-003m---visitante-cria-conta-de-cliente",
          "ordem": 5,
          "meta": [
            {
              "chave": "ID",
              "texto": "J-003.M",
              "html": "<code>J-003.M</code>"
            },
            {
              "chave": "Tipo",
              "texto": "Positiva",
              "html": "Positiva"
            },
            {
              "chave": "Persona",
              "texto": "Visitante",
              "html": "Visitante"
            },
            {
              "chave": "Superfície",
              "texto": "Mobile",
              "html": "Mobile"
            },
            {
              "chave": "Pré-condições",
              "texto": "PRE-01 PRE-03 PRE-04",
              "html": "<code>PRE-01</code> <code>PRE-03</code> <code>PRE-04</code>"
            },
            {
              "chave": "Endpoints tocados",
              "texto": "POST /api/v1/usuarios",
              "html": "<code>POST /api/v1/usuarios</code>"
            },
            {
              "chave": "Duração",
              "texto": "5 min",
              "html": "5 min"
            },
            {
              "chave": "Automação equivalente",
              "texto": "golden-path-mobile.spec.ts — vermelha hoje",
              "html": "<a href=\"../sep-mobile/e2e/golden-path-mobile.spec.ts\" rel=\"noreferrer\"><code>golden-path-mobile.spec.ts</code></a> — <strong>vermelha hoje</strong>"
            },
            {
              "chave": "Só o manual cobre",
              "texto": "Política de senha real do backend (o mock aceita 123456)",
              "html": "Política de senha real do backend (o mock aceita <code>123456</code>)"
            }
          ],
          "metaIndex": {
            "ID": "J-003.M",
            "Tipo": "Positiva",
            "Persona": "Visitante",
            "Superfície": "Mobile",
            "Pré-condições": "PRE-01 PRE-03 PRE-04",
            "Endpoints tocados": "POST /api/v1/usuarios",
            "Duração": "5 min",
            "Automação equivalente": "golden-path-mobile.spec.ts — vermelha hoje",
            "Só o manual cobre": "Política de senha real do backend (o mock aceita 123456)"
          },
          "notas": [],
          "grupos": [
            {
              "id": "g2",
              "tituloHtml": "Tela <code>/welcome</code> → <code>/register</code>",
              "tela": "/welcome",
              "implicito": false,
              "passos": [
                {
                  "key": "ROTEIRO-01/J-003.M/P1",
                  "id": "P1",
                  "hash": "38c81645",
                  "textoHtml": "Abrir <code>/welcome</code> e tocar na ação de criar conta.",
                  "comoHtml": "Em <code>http://localhost:8100/welcome</code>, com a emulação de dispositivo ligada. A tela tem dois botões: <strong>Entrar</strong> e <strong>Criar conta</strong> — usar o segundo. Ao contrário do web, aqui existe formulário de verdade.",
                  "textoBusca": "abrir /welcome e tocar na ação de criar conta. em http://localhost:8100/welcome, com a emulação de dispositivo ligada. a tela tem dois botões: entrar e criar conta — usar o segundo. ao contrário do web, aqui existe formulário de verdade.",
                  "esperadoHtml": "vai para <code>/register</code> com formulário real.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 221,
                  "ordem": 1
                },
                {
                  "key": "ROTEIRO-01/J-003.M/P2",
                  "id": "P2",
                  "hash": "186fbc83",
                  "textoHtml": "Informar um e-mail único desta execução e a senha <code>123456</code>.",
                  "comoHtml": "Usar um e-mail que ninguém tenha usado ainda, com a data para não repetir — por exemplo <code>cadastro-2026-07-21@sep.test</code>. <strong>Anote esse e-mail</strong>: a jornada <a href=\"#j-010m---cadastro--login--sair\" rel=\"noreferrer\"><code>J-010.M</code></a> faz login com ele. No campo <strong>Senha</strong>, digitar <code>123456</code> de propósito e enviar. A recusa é o resultado correto.",
                  "textoBusca": "informar um e-mail único desta execução e a senha 123456. usar um e-mail que ninguém tenha usado ainda, com a data para não repetir — por exemplo cadastro-2026-07-21@sep.test. anote esse e-mail: a jornada j-010.m faz login com ele. no campo senha, digitar 123456 de propósito e enviar. a recusa é o resultado correto.",
                  "esperadoHtml": "<strong>recusado</strong>. Política real é 12+ chars ou passphrase de 4+ palavras. Se passar, a superfície está em MSW — voltar e conferir <code>PRE-04</code>.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 226,
                  "ordem": 2
                },
                {
                  "key": "ROTEIRO-01/J-003.M/P3",
                  "id": "P3",
                  "hash": "15a971bc",
                  "textoHtml": "Informar a senha <code>jornada-cadastro-sep-2026</code> e enviar.",
                  "comoHtml": "Trocar só o campo <strong>Senha</strong>, mantendo o mesmo e-mail do P2. Anotar essa senha junto do e-mail.",
                  "textoBusca": "informar a senha jornada-cadastro-sep-2026 e enviar. trocar só o campo senha, mantendo o mesmo e-mail do p2. anotar essa senha junto do e-mail.",
                  "esperadoHtml": "<code>201</code>; conta criada como <code>CLIENTE</code>.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 233,
                  "ordem": 3
                },
                {
                  "key": "ROTEIRO-01/J-003.M/P4",
                  "id": "P4",
                  "hash": "af0f40d2",
                  "textoHtml": "Repetir o cadastro com o <strong>mesmo</strong> e-mail.",
                  "comoHtml": "Voltar para <code>/register</code> e enviar de novo com o e-mail do P2. O que se verifica aqui é a <strong>qualidade da mensagem</strong>: tem de ser um aviso compreensível de e-mail já cadastrado. Se aparecer código de erro cru, stack trace ou tela em branco, é ocorrência.",
                  "textoBusca": "repetir o cadastro com o mesmo e-mail. voltar para /register e enviar de novo com o e-mail do p2. o que se verifica aqui é a qualidade da mensagem: tem de ser um aviso compreensível de e-mail já cadastrado. se aparecer código de erro cru, stack trace ou tela em branco, é ocorrência.",
                  "esperadoHtml": "erro amigável de e-mail duplicado; sem stack trace na tela.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 237,
                  "ordem": 4
                },
                {
                  "key": "ROTEIRO-01/J-003.M/P5",
                  "id": "P5",
                  "hash": "84a0383a",
                  "textoHtml": "Conferir no banco que a role não escalou:",
                  "comoHtml": "<strong>Faça o P3 escolhendo &quot;Administrador&quot; no seletor Perfil</strong> — o formulário oferece essa opção, e é justamente por isso que este passo existe. O backend ignora o campo e cria <code>CLIENTE</code> de qualquer jeito. Se a consulta abaixo devolver <code>ADMIN</code>, é uma escalada de privilégio e a ocorrência é grave. Rodar no terminal do banco.",
                  "textoBusca": "conferir no banco que a role não escalou: faça o p3 escolhendo \"administrador\" no seletor perfil — o formulário oferece essa opção, e é justamente por isso que este passo existe. o backend ignora o campo e cria cliente de qualquer jeito. se a consulta abaixo devolver admin, é uma escalada de privilégio e a ocorrência é grave. rodar no terminal do banco.",
                  "esperadoHtml": "<code>role = CLIENTE</code>. O cadastro público não cria ADMIN em nenhuma hipótese.",
                  "blocos": [
                    {
                      "tipo": "codigo",
                      "lang": "bash",
                      "regiao": "como",
                      "conteudo": "docker exec sep-postgres psql -U sep -d sep_dev \\\n  -c \"SELECT username, role FROM usuario ORDER BY data_evento DESC LIMIT 1;\""
                    }
                  ],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 242,
                  "ordem": 5
                }
              ]
            }
          ],
          "assercoes": [],
          "linha": 203,
          "stats": {
            "passos": 5,
            "na": 0,
            "assercoes": 0
          }
        },
        {
          "key": "ROTEIRO-01/J-010.M",
          "id": "J-010.M",
          "escopoId": "J-010.M",
          "kind": "jornada",
          "nivel": 3,
          "titulo": "Cadastro + login + sair",
          "anchor": "j-010m---cadastro--login--sair",
          "ordem": 6,
          "meta": [
            {
              "chave": "ID",
              "texto": "J-010.M",
              "html": "<code>J-010.M</code>"
            },
            {
              "chave": "Tipo",
              "texto": "Positiva",
              "html": "Positiva"
            },
            {
              "chave": "Persona",
              "texto": "Conta criada em J-003.M",
              "html": "Conta criada em <a href=\"#j-003m---visitante-cria-conta-de-cliente\" rel=\"noreferrer\"><code>J-003.M</code></a>"
            },
            {
              "chave": "Superfície",
              "texto": "Mobile",
              "html": "Mobile"
            },
            {
              "chave": "Pré-condições",
              "texto": "PRE-01 PRE-03 PRE-04 + J-003.M concluída",
              "html": "<code>PRE-01</code> <code>PRE-03</code> <code>PRE-04</code> + <code>J-003.M</code> concluída"
            },
            {
              "chave": "Endpoints tocados",
              "texto": "POST /auth/login, GET /auth/me, POST /auth/logout",
              "html": "<code>POST /auth/login</code>, <code>GET /auth/me</code>, <code>POST /auth/logout</code>"
            },
            {
              "chave": "Duração",
              "texto": "5 min",
              "html": "5 min"
            },
            {
              "chave": "Automação equivalente",
              "texto": "golden-path-mobile.spec.ts — vermelha hoje",
              "html": "<a href=\"../sep-mobile/e2e/golden-path-mobile.spec.ts\" rel=\"noreferrer\"><code>golden-path-mobile.spec.ts</code></a> — <strong>vermelha hoje</strong>"
            },
            {
              "chave": "Só o manual cobre",
              "texto": "O caminho completo contra :8080 real, que e exatamente o que a spec vermelha tenta fazer",
              "html": "O caminho completo contra <code>:8080</code> real, que e exatamente o que a spec vermelha tenta fazer"
            }
          ],
          "metaIndex": {
            "ID": "J-010.M",
            "Tipo": "Positiva",
            "Persona": "Conta criada em J-003.M",
            "Superfície": "Mobile",
            "Pré-condições": "PRE-01 PRE-03 PRE-04 + J-003.M concluída",
            "Endpoints tocados": "POST /auth/login, GET /auth/me, POST /auth/logout",
            "Duração": "5 min",
            "Automação equivalente": "golden-path-mobile.spec.ts — vermelha hoje",
            "Só o manual cobre": "O caminho completo contra :8080 real, que e exatamente o que a spec vermelha tenta fazer"
          },
          "notas": [],
          "grupos": [
            {
              "id": "g1",
              "tituloHtml": null,
              "tela": null,
              "implicito": true,
              "passos": [
                {
                  "key": "ROTEIRO-01/J-010.M/P1",
                  "id": "P1",
                  "hash": "17c102ba",
                  "textoHtml": "Em <code>/login</code>, autenticar com as credenciais de <code>J-003.M</code>.",
                  "comoHtml": "São o e-mail e a senha que você anotou no P2/P3 da <a href=\"#j-003m---visitante-cria-conta-de-cliente\" rel=\"noreferrer\"><code>J-003.M</code></a> — não são as personas do ROTEIRO-00. Em <code>http://localhost:8100/login</code>, campos <strong>E-mail</strong> e <strong>Senha</strong>, botão <strong>Entrar</strong>.",
                  "textoBusca": "em /login, autenticar com as credenciais de j-003.m. são o e-mail e a senha que você anotou no p2/p3 da j-003.m — não são as personas do roteiro-00. em http://localhost:8100/login, campos e-mail e senha, botão entrar.",
                  "esperadoHtml": "entra em <code>/app/inicio</code>; <code>mfaRequired = false</code> (conta nova não tem TOTP).",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 271,
                  "ordem": 1
                },
                {
                  "key": "ROTEIRO-01/J-010.M/P2",
                  "id": "P2",
                  "hash": "82b6dc01",
                  "textoHtml": "Observar a barra de tabs.",
                  "comoHtml": "A barra fica no rodapé da tela. Contar as abas: devem ser quatro. O teste aqui é de <strong>ausência</strong> — as abas Credora e Admin não podem aparecer para esta persona.",
                  "textoBusca": "observar a barra de tabs. a barra fica no rodapé da tela. contar as abas: devem ser quatro. o teste aqui é de ausência — as abas credora e admin não podem aparecer para esta persona.",
                  "esperadoHtml": "Início, Propostas, Parcelas e Perfil. <strong>Sem</strong> aba Credora (a persona não tem credora) e <strong>sem</strong> aba Admin.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 277,
                  "ordem": 2
                },
                {
                  "key": "ROTEIRO-01/J-010.M/P3",
                  "id": "P3",
                  "hash": "9451c590",
                  "textoHtml": "Abrir <strong>Perfil</strong>.",
                  "comoHtml": "Tocar na aba <strong>Perfil</strong> (rota <code>/app/perfil</code> no mobile — note que no web é <code>/app/profile</code>). Conferir que o e-mail exibido no card <strong>Identificação</strong> é o mesmo com que você entrou.",
                  "textoBusca": "abrir perfil. tocar na aba perfil (rota /app/perfil no mobile — note que no web é /app/profile). conferir que o e-mail exibido no card identificação é o mesmo com que você entrou.",
                  "esperadoHtml": "e-mail e perfil batem com <code>/auth/me</code>.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 282,
                  "ordem": 3
                },
                {
                  "key": "ROTEIRO-01/J-010.M/P4",
                  "id": "P4",
                  "hash": "c0e35334",
                  "textoHtml": "Sair pela ação de logout.",
                  "comoHtml": "Há dois botões <strong>Sair</strong>: um no topo da tela e outro no fim da tela de perfil. Qualquer um serve.",
                  "textoBusca": "sair pela ação de logout. há dois botões sair: um no topo da tela e outro no fim da tela de perfil. qualquer um serve.",
                  "esperadoHtml": "volta para <code>/welcome</code>; sessão limpa.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 287,
                  "ordem": 4
                },
                {
                  "key": "ROTEIRO-01/J-010.M/P5",
                  "id": "P5",
                  "hash": "c31d1de4",
                  "textoHtml": "Acionar o <strong>voltar do navegador</strong>.",
                  "comoHtml": "Logo após sair, apertar a seta de voltar do navegador (ou <code>Alt+←</code>). A tentação do navegador é remontar a última página, que era a área logada — e é exatamente isso que não pode acontecer. Se a tela logada reaparecer, mesmo que por um instante, é ocorrência.",
                  "textoBusca": "acionar o voltar do navegador. logo após sair, apertar a seta de voltar do navegador (ou alt+←). a tentação do navegador é remontar a última página, que era a área logada — e é exatamente isso que não pode acontecer. se a tela logada reaparecer, mesmo que por um instante, é ocorrência.",
                  "esperadoHtml": "<strong>não</strong> retorna para a área logada. O <code>redirectAuthenticatedGuard</code> foi criado para esse caso na M-13 — o gatilho original era o botão físico do Android, mas o guard é o mesmo no PWA.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 291,
                  "ordem": 5
                },
                {
                  "key": "ROTEIRO-01/J-010.M/P6",
                  "id": "P6",
                  "hash": "acd76b30",
                  "textoHtml": "Abrir <code>/app/inicio</code> por URL direta após o logout.",
                  "comoHtml": "Colar <code>http://localhost:8100/app/inicio</code> na barra. É a mesma verificação da <a href=\"#j-002m-n1---visitante-tenta-área-autenticada-mobile\" rel=\"noreferrer\"><code>J-002.M-N1</code></a>, agora depois de uma sessão que existiu — o que prova que o logout limpou mesmo o token.",
                  "textoBusca": "abrir /app/inicio por url direta após o logout. colar http://localhost:8100/app/inicio na barra. é a mesma verificação da j-002.m-n1, agora depois de uma sessão que existiu — o que prova que o logout limpou mesmo o token.",
                  "esperadoHtml": "<code>/welcome</code>.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 299,
                  "ordem": 6
                }
              ]
            }
          ],
          "assercoes": [
            {
              "key": "ROTEIRO-01/J-010.M/#79218d7b",
              "id": null,
              "hash": "c306c345",
              "textoHtml": "Ciclo cadastro → login → sair fecha sem residuo de sessão",
              "comoHtml": null,
              "textoBusca": "ciclo cadastro → login → sair fecha sem residuo de sessão",
              "esperadoHtml": null,
              "blocos": [],
              "na": false,
              "naMotivo": null,
              "marcadoNaFonte": false,
              "linha": 307,
              "ordem": 1
            },
            {
              "key": "ROTEIRO-01/J-010.M/#c2ac306f",
              "id": null,
              "hash": "c858607b",
              "textoHtml": "Se todos os passos passarem, vale reavaliar por que a <code>golden-path-mobile.spec.ts</code> segue vermelha — o roteiro manual e a referência para o diagnóstico",
              "comoHtml": null,
              "textoBusca": "se todos os passos passarem, vale reavaliar por que a golden-path-mobile.spec.ts segue vermelha — o roteiro manual e a referência para o diagnóstico",
              "esperadoHtml": null,
              "blocos": [],
              "na": false,
              "naMotivo": null,
              "marcadoNaFonte": false,
              "linha": 308,
              "ordem": 2
            }
          ],
          "linha": 255,
          "stats": {
            "passos": 6,
            "na": 0,
            "assercoes": 2
          }
        },
        {
          "key": "ROTEIRO-01/J-011.W",
          "id": "J-011.W",
          "escopoId": "J-011.W",
          "kind": "jornada",
          "nivel": 3,
          "titulo": "Login com MFA TOTP",
          "anchor": "j-011w---login-com-mfa-totp",
          "ordem": 7,
          "meta": [
            {
              "chave": "ID",
              "texto": "J-011.W",
              "html": "<code>J-011.W</code>"
            },
            {
              "chave": "Tipo",
              "texto": "Positiva",
              "html": "Positiva"
            },
            {
              "chave": "Persona",
              "texto": "cliente-a — CLIENTE com TOTP habilitado",
              "html": "<code>cliente-a</code> — CLIENTE com TOTP habilitado"
            },
            {
              "chave": "Superfície",
              "texto": "Web",
              "html": "Web"
            },
            {
              "chave": "Pré-condições",
              "texto": "PRE-01 PRE-02 PRE-04 PRE-07 PRE-10",
              "html": "<code>PRE-01</code> <code>PRE-02</code> <code>PRE-04</code> <code>PRE-07</code> <code>PRE-10</code>"
            },
            {
              "chave": "Endpoints tocados",
              "texto": "POST /auth/login, POST /auth/totp/verify",
              "html": "<code>POST /auth/login</code>, <code>POST /auth/totp/verify</code>"
            },
            {
              "chave": "Duração",
              "texto": "5 min",
              "html": "5 min"
            },
            {
              "chave": "Automação equivalente",
              "texto": "nenhuma — a suite mocka o desafio",
              "html": "nenhuma — a suite mocka o desafio"
            },
            {
              "chave": "Só o manual cobre",
              "texto": "TOTP real — item pendente no STATE.md",
              "html": "<strong>TOTP real</strong> — item pendente no <code>STATE.md</code>"
            }
          ],
          "metaIndex": {
            "ID": "J-011.W",
            "Tipo": "Positiva",
            "Persona": "cliente-a — CLIENTE com TOTP habilitado",
            "Superfície": "Web",
            "Pré-condições": "PRE-01 PRE-02 PRE-04 PRE-07 PRE-10",
            "Endpoints tocados": "POST /auth/login, POST /auth/totp/verify",
            "Duração": "5 min",
            "Automação equivalente": "nenhuma — a suite mocka o desafio",
            "Só o manual cobre": "TOTP real — item pendente no STATE.md"
          },
          "notas": [],
          "grupos": [
            {
              "id": "g1",
              "tituloHtml": null,
              "tela": null,
              "implicito": true,
              "passos": [
                {
                  "key": "ROTEIRO-01/J-011.W/P1",
                  "id": "P1",
                  "hash": "c63f4a9a",
                  "textoHtml": "Em <code>/login</code>, informar e-mail e senha corretos de <code>cliente-a</code>.",
                  "comoHtml": "<code>cliente-a@sep.test</code> / <code>jornada-tomador-sep-2026</code> (tabela do §6.1 do <a href=\"./ROTEIRO-00-AMBIENTE-E-MASSA.md\" rel=\"noreferrer\"><code>ROTEIRO-00</code></a>). Como esta persona tem TOTP, o login <strong>não entra direto</strong>: cai numa segunda tela, <strong>Verificação em duas etapas</strong>. Manter o DevTools aberto na aba <strong>Network</strong> desde já — o P2 depende de ver a resposta desta chamada.",
                  "textoBusca": "em /login, informar e-mail e senha corretos de cliente-a. cliente-a@sep.test / jornada-tomador-sep-2026 (tabela do §6.1 do roteiro-00). como esta persona tem totp, o login não entra direto: cai numa segunda tela, verificação em duas etapas. manter o devtools aberto na aba network desde já — o p2 depende de ver a resposta desta chamada.",
                  "esperadoHtml": "resposta com <code>mfaRequired: true</code> e <code>mfaChallengeId</code>; <strong><code>accessToken</code> vem <code>null</code></strong>. Vai para <code>/login/verify-totp</code>.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 329,
                  "ordem": 1
                },
                {
                  "key": "ROTEIRO-01/J-011.W/P2",
                  "id": "P2",
                  "hash": "69a55250",
                  "textoHtml": "Conferir na aba de rede que nenhuma sessão completa foi emitida.",
                  "comoHtml": "Na aba <strong>Network</strong>, clicar na chamada <code>login</code> e abrir a aba <strong>Response</strong>. O ponto é o campo <code>accessToken</code>: ele tem de vir <code>null</code>. Se vier preenchido, a senha sozinha já teria dado acesso e o segundo fator seria decorativo — ocorrência grave.",
                  "textoBusca": "conferir na aba de rede que nenhuma sessão completa foi emitida. na aba network, clicar na chamada login e abrir a aba response. o ponto é o campo accesstoken: ele tem de vir null. se vier preenchido, a senha sozinha já teria dado acesso e o segundo fator seria decorativo — ocorrência grave.",
                  "esperadoHtml": "senha válida <strong>sozinha</strong> não autentica.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 337,
                  "ordem": 2
                },
                {
                  "key": "ROTEIRO-01/J-011.W/P3",
                  "id": "P3",
                  "hash": "0c60df10",
                  "textoHtml": "Informar um código TOTP <strong>incorreto</strong>.",
                  "comoHtml": "No campo <strong>Código</strong>, digitar seis dígitos quaisquer (<code>000000</code> serve) e clicar em <strong>Verificar</strong>. Erro é o resultado esperado. <strong>Não repita mais de duas vezes</strong>: tentativas inválidas contam para o lockout (§6.4 do ROTEIRO-00) e podem travar a persona por 30 minutos no meio do roteiro. Se acontecer, você cai na <strong>mesma</strong> <code>/account-locked</code> da <a href=\"#j-012w-n1---login-inválido-até-o-lockout\" rel=\"noreferrer\"><code>J-012.W-N1</code></a> — é o mesmo bloqueio de conta, não um erro diferente do MFA. A mensagem de erro distingue código inválido de bloqueio, de rate limit e de queda de rede; se ela acusar &quot;código inválido&quot; nos quatro casos, é ocorrência.",
                  "textoBusca": "informar um código totp incorreto. no campo código, digitar seis dígitos quaisquer (000000 serve) e clicar em verificar. erro é o resultado esperado. não repita mais de duas vezes: tentativas inválidas contam para o lockout (§6.4 do roteiro-00) e podem travar a persona por 30 minutos no meio do roteiro. se acontecer, você cai na mesma /account-locked da j-012.w-n1 — é o mesmo bloqueio de conta, não um erro diferente do mfa. a mensagem de erro distingue código inválido de bloqueio, de rate limit e de queda de rede; se ela acusar \"código inválido\" nos quatro casos, é ocorrência.",
                  "esperadoHtml": "erro específico do caso; permanece na tela; não autentica.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 342,
                  "ordem": 3
                },
                {
                  "key": "ROTEIRO-01/J-011.W/P4",
                  "id": "P4",
                  "hash": "72ac3e73",
                  "textoHtml": "Informar o código TOTP corrente do autenticador.",
                  "comoHtml": "Ler o código de 6 dígitos <strong>da conta <code>cliente-a</code></strong> no autenticador — se você cadastrou mais de uma conta, confira o nome antes. Como o código muda a cada 30 segundos, se ele estiver quase virando, espere o próximo para ter tempo de digitar.",
                  "textoBusca": "informar o código totp corrente do autenticador. ler o código de 6 dígitos da conta cliente-a no autenticador — se você cadastrou mais de uma conta, confira o nome antes. como o código muda a cada 30 segundos, se ele estiver quase virando, espere o próximo para ter tempo de digitar.",
                  "esperadoHtml": "login conclui; entra em <code>/app/dashboard</code>.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 352,
                  "ordem": 4
                },
                {
                  "key": "ROTEIRO-01/J-011.W/P5",
                  "id": "P5",
                  "hash": "3879a0fe",
                  "textoHtml": "Conferir o menu lateral.",
                  "comoHtml": "De novo um teste de <strong>ausência</strong>. O menu deve mostrar os grupos <strong>Jornadas</strong> e <strong>Conta</strong>. Não pode haver <strong>Operação</strong> (com Backoffice, Pix, Chaves Pix, Matching de credoras) nem <strong>Administração</strong> — são de perfis internos, e <code>cliente-a</code> é cliente.",
                  "textoBusca": "conferir o menu lateral. de novo um teste de ausência. o menu deve mostrar os grupos jornadas e conta. não pode haver operação (com backoffice, pix, chaves pix, matching de credoras) nem administração — são de perfis internos, e cliente-a é cliente.",
                  "esperadoHtml": "grupos Jornadas e Conta. <strong>Sem</strong> grupo Operação (Backoffice, Pix, Chaves Pix, Matching) e <strong>sem</strong> Administração — <code>cliente-a</code> é CLIENTE.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 357,
                  "ordem": 5
                }
              ]
            }
          ],
          "assercoes": [],
          "linha": 313,
          "stats": {
            "passos": 5,
            "na": 0,
            "assercoes": 0
          }
        },
        {
          "key": "ROTEIRO-01/J-012.W-N1",
          "id": "J-012.W-N1",
          "escopoId": "J-012.W-N1",
          "kind": "jornada",
          "nivel": 3,
          "titulo": "Login inválido até o lockout",
          "anchor": "j-012w-n1---login-invlido-at-o-lockout",
          "ordem": 8,
          "meta": [
            {
              "chave": "ID",
              "texto": "J-012.W-N1",
              "html": "<code>J-012.W-N1</code>"
            },
            {
              "chave": "Tipo",
              "texto": "Negativa — resistência a força bruta",
              "html": "Negativa — resistência a força bruta"
            },
            {
              "chave": "Persona",
              "texto": "cliente-b",
              "html": "<code>cliente-b</code>"
            },
            {
              "chave": "Superfície",
              "texto": "Web",
              "html": "Web"
            },
            {
              "chave": "Vetor",
              "texto": "Tentativas repetidas de senha inválida",
              "html": "Tentativas repetidas de senha inválida"
            },
            {
              "chave": "Comportamento seguro esperado",
              "texto": "Cinco falhas armam o bloqueio; a requisição seguinte o revela, mesmo com a senha correta. Erro que não revela se o usuário existe",
              "html": "Cinco falhas armam o bloqueio; a requisição seguinte o revela, mesmo com a senha correta. Erro que não revela se o usuário existe"
            },
            {
              "chave": "Pré-condições",
              "texto": "PRE-01 PRE-02 PRE-04 PRE-09",
              "html": "<code>PRE-01</code> <code>PRE-02</code> <code>PRE-04</code> <code>PRE-09</code>"
            },
            {
              "chave": "Política",
              "texto": "As 5 falhas mais recentes cabendo em 15 min → bloqueio de 30 min, contados da falha que fechou a janela",
              "html": "As <strong>5 falhas mais recentes</strong> cabendo em <strong>15 min</strong> → bloqueio de <strong>30 min</strong>, contados da falha que fechou a janela"
            },
            {
              "chave": "Automação equivalente",
              "texto": "account-locked.spec.ts",
              "html": "<a href=\"../sep-app/e2e/account-locked.spec.ts\" rel=\"noreferrer\"><code>account-locked.spec.ts</code></a>"
            }
          ],
          "metaIndex": {
            "ID": "J-012.W-N1",
            "Tipo": "Negativa — resistência a força bruta",
            "Persona": "cliente-b",
            "Superfície": "Web",
            "Vetor": "Tentativas repetidas de senha inválida",
            "Comportamento seguro esperado": "Cinco falhas armam o bloqueio; a requisição seguinte o revela, mesmo com a senha correta. Erro que não revela se o usuário existe",
            "Pré-condições": "PRE-01 PRE-02 PRE-04 PRE-09",
            "Política": "As 5 falhas mais recentes cabendo em 15 min → bloqueio de 30 min, contados da falha que fechou a janela",
            "Automação equivalente": "account-locked.spec.ts"
          },
          "notas": [
            "<strong>Esta jornada bloqueia a persona por 30 minutos.</strong> Execute-a por último na sessão, ou tenha o procedimento de destravamento do <a href=\"./ROTEIRO-00-AMBIENTE-E-MASSA.md\" rel=\"noreferrer\"><code>ROTEIRO-00</code></a> §7 <strong>D2</strong> a mão.",
            "<strong>Se algum passo daqui falhar, é regressão — não roteiro desatualizado.</strong> Este bloqueio <strong>nunca aconteceu</strong> entre a Sprint 5 e 2026-07-29: a tentativa falha era gravada dentro da transação do login e desfeita pelo erro de credencial, então nada chegava à tabela <code>login_attempt</code> e o lockout não tinha o que contar. A correção é recente e esta jornada é o que a guarda."
          ],
          "grupos": [
            {
              "id": "g1",
              "tituloHtml": null,
              "tela": null,
              "implicito": true,
              "passos": [
                {
                  "key": "ROTEIRO-01/J-012.W-N1/P1",
                  "id": "P1",
                  "hash": "07ec1b68",
                  "textoHtml": "Tentar login com e-mail <strong>inexistente</strong>.",
                  "comoHtml": "Usar algo que certamente não existe, como <code>naoexiste@sep.test</code>, com qualquer senha. O que se verifica é a <strong>mensagem</strong>: ela não pode dizer &quot;usuário não encontrado&quot;. Se dissesse, um atacante descobriria quais e-mails têm conta só testando a tela. Compare mentalmente com a mensagem que vai aparecer no P2 — têm de ser iguais.",
                  "textoBusca": "tentar login com e-mail inexistente. usar algo que certamente não existe, como naoexiste@sep.test, com qualquer senha. o que se verifica é a mensagem: ela não pode dizer \"usuário não encontrado\". se dissesse, um atacante descobriria quais e-mails têm conta só testando a tela. compare mentalmente com a mensagem que vai aparecer no p2 — têm de ser iguais.",
                  "esperadoHtml": "erro genérico. <strong>Não</strong> revela que o usuário não existe.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 392,
                  "ordem": 1
                },
                {
                  "key": "ROTEIRO-01/J-012.W-N1/P2",
                  "id": "P2",
                  "hash": "a9825697",
                  "textoHtml": "Tentar login de <code>cliente-b</code> com senha inválida, <strong>5 vezes</strong>.",
                  "comoHtml": "<code>cliente-b@sep.test</code> com uma senha errada qualquer, <strong>exatamente 5 vezes</strong> — contar. A mensagem tem de ser a mesma do P1: o sistema não distingue &quot;usuário não existe&quot; de &quot;senha errada&quot;. <strong>As cinco respondem erro de credencial, inclusive a quinta</strong> — o backend confere o bloqueio *antes* de conferir a senha, então na quinta ele ainda enxerga só quatro falhas gravadas, deixa passar, e só depois grava a quinta. É essa quinta que arma o bloqueio; quem vê o <code>423</code> é a requisição do passo seguinte. O rate limit por IP no login é de 10 por minuto, o dobro do limite de tentativas — cinco seguidas não disparam <code>429</code>. Se aparecer <code>429</code>, é outro problema, não o lockout.",
                  "textoBusca": "tentar login de cliente-b com senha inválida, 5 vezes. cliente-b@sep.test com uma senha errada qualquer, exatamente 5 vezes — contar. a mensagem tem de ser a mesma do p1: o sistema não distingue \"usuário não existe\" de \"senha errada\". as cinco respondem erro de credencial, inclusive a quinta — o backend confere o bloqueio antes de conferir a senha, então na quinta ele ainda enxerga só quatro falhas gravadas, deixa passar, e só depois grava a quinta. é essa quinta que arma o bloqueio; quem vê o 423 é a requisição do passo seguinte. o rate limit por ip no login é de 10 por minuto, o dobro do limite de tentativas — cinco seguidas não disparam 429. se aparecer 429, é outro problema, não o lockout.",
                  "esperadoHtml": "o mesmo erro genérico nas cinco. Nenhuma navegação para fora do login.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 398,
                  "ordem": 2
                },
                {
                  "key": "ROTEIRO-01/J-012.W-N1/P3",
                  "id": "P3",
                  "hash": "e65bbc6f",
                  "textoHtml": "Sexta requisição, agora com a senha <strong>correta</strong>.",
                  "comoHtml": "<code>cliente-b@sep.test</code> com <code>jornada-ownership-sep-2026</code>, a senha certa desta vez. Este passo prova duas coisas de uma só: que o bloqueio está armado, e que a senha certa <strong>não</strong> destrava — se destravasse, bastaria ao atacante acertar uma vez para anular o bloqueio. A tela muda: em vez do erro no formulário, o navegador vai para uma página própria, <strong>Conta bloqueada temporariamente</strong>, com o número <code>423</code> em destaque. Esse 423 é o código HTTP de &quot;recurso trancado&quot;.",
                  "textoBusca": "sexta requisição, agora com a senha correta. cliente-b@sep.test com jornada-ownership-sep-2026, a senha certa desta vez. este passo prova duas coisas de uma só: que o bloqueio está armado, e que a senha certa não destrava — se destravasse, bastaria ao atacante acertar uma vez para anular o bloqueio. a tela muda: em vez do erro no formulário, o navegador vai para uma página própria, conta bloqueada temporariamente, com o número 423 em destaque. esse 423 é o código http de \"recurso trancado\".",
                  "esperadoHtml": "o web navega para <code>/account-locked</code> (o <code>error.interceptor</code> trata o HTTP <strong>423</strong>) e a sessão é limpa. A senha correta não entra.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 408,
                  "ordem": 3
                },
                {
                  "key": "ROTEIRO-01/J-012.W-N1/P4",
                  "id": "P4",
                  "hash": "ad950f93",
                  "textoHtml": "Conferir que a explicação traz os números da política vigente.",
                  "comoHtml": "Na <code>/account-locked</code>, ler o primeiro parágrafo. Ele tem de citar <strong>5 ou mais tentativas</strong>, janela de <strong>15 minutos</strong> e bloqueio de <strong>até 30 minutos</strong>. Esses três números não estão escritos na tela: vêm de <code>GET /api/v1/auth/politica-lockout</code> e por isso acompanham a configuração real do ambiente. Confirmar no DevTools, aba <strong>Network</strong>, filtrando por <code>politica</code>: a chamada tem de aparecer, com <code>200</code>. O &quot;5 <strong>ou mais</strong>&quot; é proposital — pelo P2 você sabe que dá para chegar aqui com mais de cinco.",
                  "textoBusca": "conferir que a explicação traz os números da política vigente. na /account-locked, ler o primeiro parágrafo. ele tem de citar 5 ou mais tentativas, janela de 15 minutos e bloqueio de até 30 minutos. esses três números não estão escritos na tela: vêm de get /api/v1/auth/politica-lockout e por isso acompanham a configuração real do ambiente. confirmar no devtools, aba network, filtrando por politica: a chamada tem de aparecer, com 200. o \"5 ou mais\" é proposital — pelo p2 você sabe que dá para chegar aqui com mais de cinco.",
                  "esperadoHtml": "os três números na copy e a chamada a <code>politica-lockout</code> com <code>200</code> na aba Network.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 417,
                  "ordem": 4
                },
                {
                  "key": "ROTEIRO-01/J-012.W-N1/P5",
                  "id": "P5",
                  "hash": "9dc329d3",
                  "textoHtml": "Recarregar a página de conta bloqueada (<code>F5</code>).",
                  "comoHtml": "Ainda na <code>/account-locked</code>, recarregar. A página tem de continuar de pé, com a mesma copy. Este passo existe porque a tela já se autodestruiu por dois caminhos diferentes: a consulta da política levava um token velho e o erro da resposta arrancava o usuário de volta para o <code>/login</code> — justamente a tela que o <code>423</code> acabou de abrir. Ser jogado para o login aqui é <strong>ocorrência</strong>, não detalhe.",
                  "textoBusca": "recarregar a página de conta bloqueada (f5). ainda na /account-locked, recarregar. a página tem de continuar de pé, com a mesma copy. este passo existe porque a tela já se autodestruiu por dois caminhos diferentes: a consulta da política levava um token velho e o erro da resposta arrancava o usuário de volta para o /login — justamente a tela que o 423 acabou de abrir. ser jogado para o login aqui é ocorrência, não detalhe.",
                  "esperadoHtml": "continua em <code>/account-locked</code>. Nenhuma navegação para <code>/login</code>.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 426,
                  "ordem": 5
                },
                {
                  "key": "ROTEIRO-01/J-012.W-N1/P6",
                  "id": "P6",
                  "hash": "9f0a11bf",
                  "textoHtml": "Conferir que o foco foi para o título.",
                  "comoHtml": "Logo depois do reload do P5, <strong>sem clicar em nada</strong>, apertar <code>Tab</code> uma vez. O foco tem de sair do título <strong>Conta bloqueada temporariamente</strong> e cair no link <strong>Voltar ao login</strong> — é isso que prova que ele estava no título. Importa para quem usa leitor de tela: sem o foco no lugar, a pessoa fica em silêncio numa tela nova, no desfecho de um evento de segurança.",
                  "textoBusca": "conferir que o foco foi para o título. logo depois do reload do p5, sem clicar em nada, apertar tab uma vez. o foco tem de sair do título conta bloqueada temporariamente e cair no link voltar ao login — é isso que prova que ele estava no título. importa para quem usa leitor de tela: sem o foco no lugar, a pessoa fica em silêncio numa tela nova, no desfecho de um evento de segurança.",
                  "esperadoHtml": "o primeiro <code>Tab</code> leva ao link <strong>Voltar ao login</strong>.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 433,
                  "ordem": 6
                },
                {
                  "key": "ROTEIRO-01/J-012.W-N1/P7",
                  "id": "P7",
                  "hash": "49b35ea5",
                  "textoHtml": "Conferir o audit log:",
                  "comoHtml": "Terminal do banco. Procurar na saída os eventos das tentativas e do bloqueio que você acabou de provocar. Além do <code>LOCKOUT</code> (o bloqueio em si), tem de aparecer <strong><code>LOCKOUT_TENTATIVA_BARRADA</code></strong>, que é a tentativa do P3 — a que bateu na porta já trancada. Até a Sprint 33 nenhuma tentativa barrada deixava rastro, porque a verificação lançava antes de qualquer gravação. Tentativa de invasão sem trilha registrada é defeito de compliance, não detalhe. Terminada a jornada, <code>cliente-b</code> fica travado por 30 minutos — para destravar antes, o <strong>D2</strong> do <a href=\"./ROTEIRO-00-AMBIENTE-E-MASSA.md\" rel=\"noreferrer\"><code>ROTEIRO-00</code></a> §7.",
                  "textoBusca": "conferir o audit log: terminal do banco. procurar na saída os eventos das tentativas e do bloqueio que você acabou de provocar. além do lockout (o bloqueio em si), tem de aparecer lockouttentativabarrada, que é a tentativa do p3 — a que bateu na porta já trancada. até a sprint 33 nenhuma tentativa barrada deixava rastro, porque a verificação lançava antes de qualquer gravação. tentativa de invasão sem trilha registrada é defeito de compliance, não detalhe. terminada a jornada, cliente-b fica travado por 30 minutos — para destravar antes, o d2 do roteiro-00 §7.",
                  "esperadoHtml": "<code>LOCKOUT</code> e <code>LOCKOUT_TENTATIVA_BARRADA</code> registrados, além das tentativas.",
                  "blocos": [
                    {
                      "tipo": "codigo",
                      "lang": "bash",
                      "regiao": "como",
                      "conteudo": "docker exec sep-postgres psql -U sep -d sep_dev \\\n  -c \"SELECT tipo, data_evento FROM audit_log_seguranca ORDER BY data_evento DESC LIMIT 10;\""
                    }
                  ],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 440,
                  "ordem": 7
                },
                {
                  "key": "ROTEIRO-01/J-012.W-N1/P8",
                  "id": "P8",
                  "hash": "fed62563",
                  "textoHtml": "Conferir o texto de reserva com a API fora do ar.",
                  "comoHtml": "Parar a API no terminal do <strong>A3</strong> (<code>Ctrl+C</code>) e recarregar a <code>/account-locked</code>. Sem a política, a tela cai num texto <strong>sem número nenhum</strong> (&quot;por um período limitado&quot;). Isso é deliberado: entre vago e verdadeiro ou preciso e falso, numa tela de desfecho de segurança, vago vence — um &quot;30 minutos&quot; fixo seria mentira num ambiente configurado com outro valor. A tela não pode ficar em branco nem mostrar erro. Religar a API (<code>./gradlew bootRun</code>) antes de seguir.",
                  "textoBusca": "conferir o texto de reserva com a api fora do ar. parar a api no terminal do a3 (ctrl+c) e recarregar a /account-locked. sem a política, a tela cai num texto sem número nenhum (\"por um período limitado\"). isso é deliberado: entre vago e verdadeiro ou preciso e falso, numa tela de desfecho de segurança, vago vence — um \"30 minutos\" fixo seria mentira num ambiente configurado com outro valor. a tela não pode ficar em branco nem mostrar erro. religar a api (./gradlew bootrun) antes de seguir.",
                  "esperadoHtml": "a página abre completa, com a explicação sem números. Nenhuma tela em branco.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 453,
                  "ordem": 8
                }
              ]
            }
          ],
          "assercoes": [
            {
              "key": "ROTEIRO-01/J-012.W-N1/#c9a1e49d",
              "id": null,
              "hash": "7f748f62",
              "textoHtml": "Cinco falhas armam o bloqueio e a sexta requisição o revela, mesmo com a senha correta",
              "comoHtml": null,
              "textoBusca": "cinco falhas armam o bloqueio e a sexta requisição o revela, mesmo com a senha correta",
              "esperadoHtml": null,
              "blocos": [],
              "na": false,
              "naMotivo": null,
              "marcadoNaFonte": false,
              "linha": 464,
              "ordem": 1
            },
            {
              "key": "ROTEIRO-01/J-012.W-N1/#98f3568a",
              "id": null,
              "hash": "5c7e8be8",
              "textoHtml": "O bloqueio deixa trilha: <code>LOCKOUT</code> e <code>LOCKOUT_TENTATIVA_BARRADA</code> no audit",
              "comoHtml": null,
              "textoBusca": "o bloqueio deixa trilha: lockout e lockouttentativabarrada no audit",
              "esperadoHtml": null,
              "blocos": [],
              "na": false,
              "naMotivo": null,
              "marcadoNaFonte": false,
              "linha": 465,
              "ordem": 2
            },
            {
              "key": "ROTEIRO-01/J-012.W-N1/#0a6a70b2",
              "id": null,
              "hash": "4fb9b2ee",
              "textoHtml": "A <code>/account-locked</code> sobrevive a recarga e à API fora do ar, sem nunca anunciar um número que não seja o da política vigente",
              "comoHtml": null,
              "textoBusca": "a /account-locked sobrevive a recarga e à api fora do ar, sem nunca anunciar um número que não seja o da política vigente",
              "esperadoHtml": null,
              "blocos": [],
              "na": false,
              "naMotivo": null,
              "marcadoNaFonte": false,
              "linha": 466,
              "ordem": 3
            }
          ],
          "linha": 366,
          "stats": {
            "passos": 8,
            "na": 0,
            "assercoes": 3
          }
        },
        {
          "key": "ROTEIRO-01/J-020.W",
          "id": "J-020.W",
          "escopoId": "J-020.W",
          "kind": "jornada",
          "nivel": 3,
          "titulo": "Consultar o próprio perfil",
          "anchor": "j-020w---consultar-o-prprio-perfil",
          "ordem": 9,
          "meta": [
            {
              "chave": "ID",
              "texto": "J-020.W",
              "html": "<code>J-020.W</code>"
            },
            {
              "chave": "Tipo",
              "texto": "Positiva",
              "html": "Positiva"
            },
            {
              "chave": "Persona",
              "texto": "cliente-a",
              "html": "<code>cliente-a</code>"
            },
            {
              "chave": "Superfície",
              "texto": "Web",
              "html": "Web"
            },
            {
              "chave": "Pré-condições",
              "texto": "PRE-01 PRE-02 PRE-04 PRE-07",
              "html": "<code>PRE-01</code> <code>PRE-02</code> <code>PRE-04</code> <code>PRE-07</code>"
            },
            {
              "chave": "Endpoints tocados",
              "texto": "GET /auth/me",
              "html": "<code>GET /auth/me</code>"
            },
            {
              "chave": "Automação equivalente",
              "texto": "golden-path.spec.ts",
              "html": "<a href=\"../sep-app/e2e/golden-path.spec.ts\" rel=\"noreferrer\"><code>golden-path.spec.ts</code></a>"
            }
          ],
          "metaIndex": {
            "ID": "J-020.W",
            "Tipo": "Positiva",
            "Persona": "cliente-a",
            "Superfície": "Web",
            "Pré-condições": "PRE-01 PRE-02 PRE-04 PRE-07",
            "Endpoints tocados": "GET /auth/me",
            "Automação equivalente": "golden-path.spec.ts"
          },
          "notas": [],
          "grupos": [
            {
              "id": "g1",
              "tituloHtml": null,
              "tela": null,
              "implicito": true,
              "passos": [
                {
                  "key": "ROTEIRO-01/J-020.W/P1",
                  "id": "P1",
                  "hash": "f74de3dc",
                  "textoHtml": "Autenticado, abrir <strong>Meu perfil</strong> (<code>/app/profile</code>).",
                  "comoHtml": "Logado como <code>cliente-a</code>, abrir o menu lateral, grupo <strong>Conta</strong>, item <strong>Meu perfil</strong>. A tela tem dois cards: <strong>Identificação</strong> (E-mail, Perfil, ID) e <strong>Auditoria</strong> (Criado em, Modificado em, Criado por, Modificado por).",
                  "textoBusca": "autenticado, abrir meu perfil (/app/profile). logado como cliente-a, abrir o menu lateral, grupo conta, item meu perfil. a tela tem dois cards: identificação (e-mail, perfil, id) e auditoria (criado em, modificado em, criado por, modificado por).",
                  "esperadoHtml": "e-mail, perfil, identificador e dados de auditoria batem com <code>/auth/me</code>.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 485,
                  "ordem": 1
                },
                {
                  "key": "ROTEIRO-01/J-020.W/P2",
                  "id": "P2",
                  "hash": "b002e670",
                  "textoHtml": "Recarregar a página.",
                  "comoHtml": "<code>F5</code>. O ponto é que a sessão sobreviva ao recarregamento: se a tela devolver você ao login, o token não está sendo persistido corretamente.",
                  "textoBusca": "recarregar a página. f5. o ponto é que a sessão sobreviva ao recarregamento: se a tela devolver você ao login, o token não está sendo persistido corretamente.",
                  "esperadoHtml": "dados reaparecem sem sair da tela e sem novo login.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 490,
                  "ordem": 2
                },
                {
                  "key": "ROTEIRO-01/J-020.W/P3",
                  "id": "P3",
                  "hash": "ed1be94c",
                  "textoHtml": "Conferir na aba de rede quais endpoints a tela chama.",
                  "comoHtml": "Na aba <strong>Network</strong>, filtrar por <code>api</code> e recarregar. Ler a lista de chamadas: a tela deve buscar só o próprio usuário. Se aparecer uma chamada que <strong>lista</strong> usuários (<code>/api/v1/usuarios</code> sem id), a tela estaria pedindo dados de todo mundo para mostrar os seus — vazamento potencial, e ocorrência.",
                  "textoBusca": "conferir na aba de rede quais endpoints a tela chama. na aba network, filtrar por api e recarregar. ler a lista de chamadas: a tela deve buscar só o próprio usuário. se aparecer uma chamada que lista usuários (/api/v1/usuarios sem id), a tela estaria pedindo dados de todo mundo para mostrar os seus — vazamento potencial, e ocorrência.",
                  "esperadoHtml": "apenas endpoints de perfil próprio. <strong>Nenhuma</strong> chamada a endpoint administrativo (<code>/api/v1/usuarios</code> lista) para exibir o próprio perfil.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 494,
                  "ordem": 3
                }
              ]
            }
          ],
          "assercoes": [],
          "linha": 471,
          "stats": {
            "passos": 3,
            "na": 0,
            "assercoes": 0
          }
        },
        {
          "key": "ROTEIRO-01/J-022.W",
          "id": "J-022.W",
          "escopoId": "J-022.W",
          "kind": "jornada",
          "nivel": 3,
          "titulo": "Alterar senha com step-up",
          "anchor": "j-022w---alterar-senha-com-step-up",
          "ordem": 10,
          "meta": [
            {
              "chave": "ID",
              "texto": "J-022.W",
              "html": "<code>J-022.W</code>"
            },
            {
              "chave": "Tipo",
              "texto": "Positiva",
              "html": "Positiva"
            },
            {
              "chave": "Persona",
              "texto": "cliente-a — com TOTP habilitado",
              "html": "<code>cliente-a</code> — <strong>com</strong> TOTP habilitado"
            },
            {
              "chave": "Superfície",
              "texto": "Web",
              "html": "Web"
            },
            {
              "chave": "Pré-condições",
              "texto": "PRE-01 PRE-02 PRE-04 PRE-07 PRE-10",
              "html": "<code>PRE-01</code> <code>PRE-02</code> <code>PRE-04</code> <code>PRE-07</code> <code>PRE-10</code>"
            },
            {
              "chave": "Endpoints tocados",
              "texto": "POST /auth/step-up/initiate, POST /auth/step-up/complete, PATCH /usuarios/{id}/senha",
              "html": "<code>POST /auth/step-up/initiate</code>, <code>POST /auth/step-up/complete</code>, <code>PATCH /usuarios/{id}/senha</code>"
            },
            {
              "chave": "Step-up",
              "texto": "@RequireStepUp legado — com MFA habilitado, exige token",
              "html": "<code>@RequireStepUp</code> legado — com MFA habilitado, <strong>exige</strong> token"
            },
            {
              "chave": "Duração",
              "texto": "8 min",
              "html": "8 min"
            },
            {
              "chave": "Automação equivalente",
              "texto": "golden-path.spec.ts",
              "html": "<a href=\"../sep-app/e2e/golden-path.spec.ts\" rel=\"noreferrer\"><code>golden-path.spec.ts</code></a>"
            },
            {
              "chave": "Só o manual cobre",
              "texto": "TOTP real no desafio de step-up",
              "html": "TOTP real no desafio de step-up"
            }
          ],
          "metaIndex": {
            "ID": "J-022.W",
            "Tipo": "Positiva",
            "Persona": "cliente-a — com TOTP habilitado",
            "Superfície": "Web",
            "Pré-condições": "PRE-01 PRE-02 PRE-04 PRE-07 PRE-10",
            "Endpoints tocados": "POST /auth/step-up/initiate, POST /auth/step-up/complete, PATCH /usuarios/{id}/senha",
            "Step-up": "@RequireStepUp legado — com MFA habilitado, exige token",
            "Duração": "8 min",
            "Automação equivalente": "golden-path.spec.ts",
            "Só o manual cobre": "TOTP real no desafio de step-up"
          },
          "notas": [],
          "grupos": [
            {
              "id": "g2",
              "tituloHtml": "Tela <code>/app/profile/change-password</code>",
              "tela": "/app/profile/change-password",
              "implicito": false,
              "passos": [
                {
                  "key": "ROTEIRO-01/J-022.W/P1",
                  "id": "P1",
                  "hash": "777e7506",
                  "textoHtml": "Abrir <strong>Alterar senha</strong> e informar a senha atual <strong>incorreta</strong> e uma nova senha válida.",
                  "comoHtml": "Em <strong>Meu perfil</strong>, clicar em <strong>Alterar senha</strong>. A tela tem três campos: <strong>Senha atual</strong>, <strong>Nova senha</strong> e <strong>Confirme a nova senha</strong>. Aqui, errar a senha atual de propósito e preencher as outras duas com <code>jornada-tomador-sep-2026-v2</code>. Clicar em <strong>Salvar nova senha</strong>. Repare que você <strong>continua logado</strong> depois do erro — errar a senha atual não pode derrubar a sessão.",
                  "textoBusca": "abrir alterar senha e informar a senha atual incorreta e uma nova senha válida. em meu perfil, clicar em alterar senha. a tela tem três campos: senha atual, nova senha e confirme a nova senha. aqui, errar a senha atual de propósito e preencher as outras duas com jornada-tomador-sep-2026-v2. clicar em salvar nova senha. repare que você continua logado depois do erro — errar a senha atual não pode derrubar a sessão.",
                  "esperadoHtml": "erro de validação; a sessão <strong>não</strong> é derrubada; a senha não muda.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 523,
                  "ordem": 1
                },
                {
                  "key": "ROTEIRO-01/J-022.W/P2",
                  "id": "P2",
                  "hash": "34d49a23",
                  "textoHtml": "Informar a senha atual correta e a nova senha <code>123456</code>.",
                  "comoHtml": "Agora com <code>jornada-tomador-sep-2026</code> no campo <strong>Senha atual</strong>, e <code>123456</code> nos dois campos de nova senha. A própria tela avisa a regra abaixo do campo: mínimo 12 caracteres ou passphrase de 4+ palavras. Se <code>123456</code> for aceito, a superfície está em MSW — conferir <code>PRE-04</code>.",
                  "textoBusca": "informar a senha atual correta e a nova senha 123456. agora com jornada-tomador-sep-2026 no campo senha atual, e 123456 nos dois campos de nova senha. a própria tela avisa a regra abaixo do campo: mínimo 12 caracteres ou passphrase de 4+ palavras. se 123456 for aceito, a superfície está em msw — conferir pre-04.",
                  "esperadoHtml": "recusado pela política (12+ chars ou passphrase 4+ palavras).",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 530,
                  "ordem": 2
                },
                {
                  "key": "ROTEIRO-01/J-022.W/P3",
                  "id": "P3",
                  "hash": "139b30fa",
                  "textoHtml": "Informar a senha atual correta e a nova senha <code>jornada-tomador-sep-2026-v2</code>.",
                  "comoHtml": "Preencher os três campos corretamente e enviar. <strong>A senha ainda não mudou neste ponto</strong> — a tela leva você para uma etapa de confirmação adicional, que é o step-up. É exatamente isso que a jornada testa: operação sensível não se completa só com a sessão.",
                  "textoBusca": "informar a senha atual correta e a nova senha jornada-tomador-sep-2026-v2. preencher os três campos corretamente e enviar. a senha ainda não mudou neste ponto — a tela leva você para uma etapa de confirmação adicional, que é o step-up. é exatamente isso que a jornada testa: operação sensível não se completa só com a sessão.",
                  "esperadoHtml": "vai para o desafio de step-up (<code>/app/step-up</code>); a senha ainda <strong>não</strong> mudou.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 536,
                  "ordem": 3
                },
                {
                  "key": "ROTEIRO-01/J-022.W/P4",
                  "id": "P4",
                  "hash": "0fc38253",
                  "textoHtml": "Informar o código TOTP corrente.",
                  "comoHtml": "A tela <strong>Confirmação adicional</strong> tem um botão <strong>Iniciar</strong>; depois dele aparece o campo <strong>Código TOTP ou backup code</strong>. Digitar o código da conta <code>cliente-a</code> e clicar em <strong>Confirmar</strong>. Guarde um backup code para a <code>J-031.W</code> — aqui use o TOTP mesmo.",
                  "textoBusca": "informar o código totp corrente. a tela confirmação adicional tem um botão iniciar; depois dele aparece o campo código totp ou backup code. digitar o código da conta cliente-a e clicar em confirmar. guarde um backup code para a j-031.w — aqui use o totp mesmo.",
                  "esperadoHtml": "volta para a tela de origem preservando o contexto.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 542,
                  "ordem": 4
                },
                {
                  "key": "ROTEIRO-01/J-022.W/P5",
                  "id": "P5",
                  "hash": "a79a8e2a",
                  "textoHtml": "Confirmar a alteração.",
                  "comoHtml": "De volta à tela de senha, os campos devem estar preservados; confirmar. Com o DevTools na aba <strong>Network</strong>, clicar na chamada <code>senha</code> e conferir na aba <strong>Headers</strong> que existe um header <code>X-Step-Up-Token</code>. É esse header que carrega a prova do step-up.",
                  "textoBusca": "confirmar a alteração. de volta à tela de senha, os campos devem estar preservados; confirmar. com o devtools na aba network, clicar na chamada senha e conferir na aba headers que existe um header x-step-up-token. é esse header que carrega a prova do step-up.",
                  "esperadoHtml": "<code>PATCH /usuarios/{id}/senha</code> sai com o header <code>X-Step-Up-Token</code>; sucesso.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 547,
                  "ordem": 5
                },
                {
                  "key": "ROTEIRO-01/J-022.W/P6",
                  "id": "P6",
                  "hash": "2eaf71f7",
                  "textoHtml": "Sair e autenticar com a senha <strong>antiga</strong>.",
                  "comoHtml": "<strong>Sair</strong> (botão no topo direito) e tentar entrar com <code>jornada-tomador-sep-2026</code>. Falhar é o esperado. <strong>No máximo duas tentativas</strong> — o lockout conta.",
                  "textoBusca": "sair e autenticar com a senha antiga. sair (botão no topo direito) e tentar entrar com jornada-tomador-sep-2026. falhar é o esperado. no máximo duas tentativas — o lockout conta.",
                  "esperadoHtml": "falha.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 552,
                  "ordem": 6
                },
                {
                  "key": "ROTEIRO-01/J-022.W/P7",
                  "id": "P7",
                  "hash": "b3155404",
                  "textoHtml": "Autenticar com a senha <strong>nova</strong>.",
                  "comoHtml": "Entrar com <code>jornada-tomador-sep-2026-v2</code> e o código TOTP.",
                  "textoBusca": "autenticar com a senha nova. entrar com jornada-tomador-sep-2026-v2 e o código totp.",
                  "esperadoHtml": "sucesso (com o desafio TOTP normal do login).",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 556,
                  "ordem": 7
                },
                {
                  "key": "ROTEIRO-01/J-022.W/P8",
                  "id": "P8",
                  "hash": "3e442d71",
                  "textoHtml": "Conferir o audit log.",
                  "comoHtml": "Terminal do banco, mesma consulta do audit log usada antes.",
                  "textoBusca": "conferir o audit log. terminal do banco, mesma consulta do audit log usada antes.",
                  "esperadoHtml": "evento de senha alterada registrado.",
                  "blocos": [
                    {
                      "tipo": "codigo",
                      "lang": "bash",
                      "regiao": "como",
                      "conteudo": "docker exec sep-postgres psql -U sep -d sep_dev \\\n  -c \"SELECT tipo, data_evento FROM audit_log_seguranca ORDER BY data_evento DESC LIMIT 5;\""
                    }
                  ],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 559,
                  "ordem": 8
                }
              ]
            }
          ],
          "assercoes": [
            {
              "key": "ROTEIRO-01/J-022.W/#55c73e52",
              "id": null,
              "hash": "b6578a57",
              "textoHtml": "Senha alterada exatamente uma vez",
              "comoHtml": null,
              "textoBusca": "senha alterada exatamente uma vez",
              "esperadoHtml": null,
              "blocos": [],
              "na": false,
              "naMotivo": null,
              "marcadoNaFonte": false,
              "linha": 569,
              "ordem": 1
            },
            {
              "key": "ROTEIRO-01/J-022.W/#3f0f0766",
              "id": null,
              "hash": "c9d5587a",
              "textoHtml": "Atualizar a senha de <code>cliente-a</code> na sua folha de credenciais desta execução",
              "comoHtml": "<strong>A partir daqui a senha de <code>cliente-a</code> é <code>jornada-tomador-sep-2026-v2</code></strong>, e não mais a da tabela do ROTEIRO-00. Anotar isso no seu rascunho da execução: as jornadas seguintes vão pedir &quot;a senha de <code>cliente-a</code>&quot; e é esta a valer.",
              "textoBusca": "atualizar a senha de cliente-a na sua folha de credenciais desta execução a partir daqui a senha de cliente-a é jornada-tomador-sep-2026-v2, e não mais a da tabela do roteiro-00. anotar isso no seu rascunho da execução: as jornadas seguintes vão pedir \"a senha de cliente-a\" e é esta a valer.",
              "esperadoHtml": null,
              "blocos": [],
              "na": false,
              "naMotivo": null,
              "marcadoNaFonte": false,
              "linha": 570,
              "ordem": 2
            }
          ],
          "linha": 504,
          "stats": {
            "passos": 8,
            "na": 0,
            "assercoes": 2
          }
        },
        {
          "key": "ROTEIRO-01/J-022.W-N1",
          "id": "J-022.W-N1",
          "escopoId": "J-022.W-N1",
          "kind": "jornada",
          "nivel": 3,
          "titulo": "Alterar senha sem MFA usa o bypass legado",
          "anchor": "j-022w-n1---alterar-senha-sem-mfa-usa-o-bypass-legado",
          "ordem": 11,
          "meta": [
            {
              "chave": "ID",
              "texto": "J-022.W-N1",
              "html": "<code>J-022.W-N1</code>"
            },
            {
              "chave": "Tipo",
              "texto": "Positiva — documenta comportamento deliberado",
              "html": "Positiva — documenta comportamento deliberado"
            },
            {
              "chave": "Jornada pai",
              "texto": "J-022.W",
              "html": "<a href=\"#j-022w---alterar-senha-com-step-up\" rel=\"noreferrer\"><code>J-022.W</code></a>"
            },
            {
              "chave": "Persona",
              "texto": "cliente-b — sem TOTP",
              "html": "<code>cliente-b</code> — <strong>sem</strong> TOTP"
            },
            {
              "chave": "Superfície",
              "texto": "Web",
              "html": "Web"
            },
            {
              "chave": "Pré-condições",
              "texto": "PRE-01 PRE-02 PRE-04 PRE-09",
              "html": "<code>PRE-01</code> <code>PRE-02</code> <code>PRE-04</code> <code>PRE-09</code>"
            },
            {
              "chave": "Nota",
              "texto": "@RequireStepUp legado faz bypass quando o usuário não tem MFA — compatibilidade com usuários pré-MFA. Isto não vale para @RequireStepUpEstrito (ver ROTEIRO-04).",
              "html": "<code>@RequireStepUp</code> <strong>legado</strong> faz bypass quando o usuário não tem MFA — compatibilidade com usuários pré-MFA. Isto <strong>não</strong> vale para <code>@RequireStepUpEstrito</code> (ver <a href=\"./ROTEIRO-04-CREDITO-FORMALIZACAO.md\" rel=\"noreferrer\"><code>ROTEIRO-04</code></a>)."
            }
          ],
          "metaIndex": {
            "ID": "J-022.W-N1",
            "Tipo": "Positiva — documenta comportamento deliberado",
            "Jornada pai": "J-022.W",
            "Persona": "cliente-b — sem TOTP",
            "Superfície": "Web",
            "Pré-condições": "PRE-01 PRE-02 PRE-04 PRE-09",
            "Nota": "@RequireStepUp legado faz bypass quando o usuário não tem MFA — compatibilidade com usuários pré-MFA. Isto não vale para @RequireStepUpEstrito (ver ROTEIRO-04)."
          },
          "notas": [],
          "grupos": [
            {
              "id": "g1",
              "tituloHtml": null,
              "tela": null,
              "implicito": true,
              "passos": [
                {
                  "key": "ROTEIRO-01/J-022.W-N1/P1",
                  "id": "P1",
                  "hash": "3ce93b89",
                  "textoHtml": "Como <code>cliente-b</code>, alterar a senha informando a senha atual correta.",
                  "comoHtml": "Entrar como <code>cliente-b@sep.test</code> / <code>jornada-ownership-sep-2026</code> e repetir o caminho da <a href=\"#j-022w---alterar-senha-com-step-up\" rel=\"noreferrer\"><code>J-022.W</code></a>: <strong>Meu perfil</strong> &gt; <strong>Alterar senha</strong>, senha atual correta e nova senha <code>jornada-ownership-sep-2026-v2</code>. <strong>Se <code>cliente-b</code> ainda estiver bloqueado</strong> pela <code>J-012.W-N1</code>, destravar pelo <strong>D2</strong> do ROTEIRO-00 ou esperar os 30 minutos. A diferença para a J-022.W é o que <strong>não</strong> acontece: não aparece tela de confirmação adicional. Anotar a senha nova.",
                  "textoBusca": "como cliente-b, alterar a senha informando a senha atual correta. entrar como cliente-b@sep.test / jornada-ownership-sep-2026 e repetir o caminho da j-022.w: meu perfil > alterar senha, senha atual correta e nova senha jornada-ownership-sep-2026-v2. se cliente-b ainda estiver bloqueado pela j-012.w-n1, destravar pelo d2 do roteiro-00 ou esperar os 30 minutos. a diferença para a j-022.w é o que não acontece: não aparece tela de confirmação adicional. anotar a senha nova.",
                  "esperadoHtml": "conclui <strong>sem</strong> desafio de step-up. Este é o comportamento esperado, não um defeito.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 591,
                  "ordem": 1
                },
                {
                  "key": "ROTEIRO-01/J-022.W-N1/P2",
                  "id": "P2",
                  "hash": "d55b493a",
                  "textoHtml": "Conferir que o mesmo bypass <strong>não</strong> existe nas operações financeiras.",
                  "comoHtml": "Este passo <strong>não se executa aqui</strong> — ele é uma anotação de rastreio. A prova está na <a href=\"./ROTEIRO-04-CREDITO-FORMALIZACAO.md#j-070w-n1---aceite-negado-para-usuário-sem-mfa\" rel=\"noreferrer\"><code>J-070.W-N1</code></a> do ROTEIRO-04. Marcar quando aquela jornada tiver sido executada; se você ainda não chegou lá, deixar em branco e voltar depois.",
                  "textoBusca": "conferir que o mesmo bypass não existe nas operações financeiras. este passo não se executa aqui — ele é uma anotação de rastreio. a prova está na j-070.w-n1 do roteiro-04. marcar quando aquela jornada tiver sido executada; se você ainda não chegou lá, deixar em branco e voltar depois.",
                  "esperadoHtml": "coberto por <a href=\"./ROTEIRO-04-CREDITO-FORMALIZACAO.md\" rel=\"noreferrer\"><code>ROTEIRO-04</code></a> — sem MFA, o aceite de contrato retorna 403.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 600,
                  "ordem": 2
                }
              ]
            }
          ],
          "assercoes": [],
          "linha": 577,
          "stats": {
            "passos": 2,
            "na": 0,
            "assercoes": 0
          }
        },
        {
          "key": "ROTEIRO-01/J-030.W",
          "id": "J-030.W",
          "escopoId": "J-030.W",
          "kind": "jornada",
          "nivel": 3,
          "titulo": "Habilitar MFA TOTP",
          "anchor": "j-030w---habilitar-mfa-totp",
          "ordem": 12,
          "meta": [
            {
              "chave": "ID",
              "texto": "J-030.W",
              "html": "<code>J-030.W</code>"
            },
            {
              "chave": "Tipo",
              "texto": "Positiva",
              "html": "Positiva"
            },
            {
              "chave": "Persona",
              "texto": "Qualquer usuário sem TOTP",
              "html": "Qualquer usuário sem TOTP"
            },
            {
              "chave": "Superfície",
              "texto": "Web — o enrollment só existe aqui; o mobile apenas verifica",
              "html": "Web — <strong>o enrollment só existe aqui</strong>; o mobile apenas verifica"
            },
            {
              "chave": "Pré-condições",
              "texto": "PRE-01 PRE-02 PRE-04 PRE-10",
              "html": "<code>PRE-01</code> <code>PRE-02</code> <code>PRE-04</code> <code>PRE-10</code>"
            },
            {
              "chave": "Endpoints tocados",
              "texto": "POST /auth/totp/setup, POST /auth/totp/confirm",
              "html": "<code>POST /auth/totp/setup</code>, <code>POST /auth/totp/confirm</code>"
            },
            {
              "chave": "Automação equivalente",
              "texto": "nenhuma",
              "html": "nenhuma"
            },
            {
              "chave": "Só o manual cobre",
              "texto": "QR real, autenticador real, backup codes exibidos uma única vez",
              "html": "QR real, autenticador real, backup codes exibidos uma única vez"
            }
          ],
          "metaIndex": {
            "ID": "J-030.W",
            "Tipo": "Positiva",
            "Persona": "Qualquer usuário sem TOTP",
            "Superfície": "Web — o enrollment só existe aqui; o mobile apenas verifica",
            "Pré-condições": "PRE-01 PRE-02 PRE-04 PRE-10",
            "Endpoints tocados": "POST /auth/totp/setup, POST /auth/totp/confirm",
            "Automação equivalente": "nenhuma",
            "Só o manual cobre": "QR real, autenticador real, backup codes exibidos uma única vez"
          },
          "notas": [
            "<strong>Use <code>backoffice@sep.test</code> nesta jornada.</strong> <code>cliente-a</code> e <code>financeiro</code> já habilitaram TOTP no §6.2 do ROTEIRO-00, e <code>cliente-b</code> <strong>precisa continuar sem MFA</strong> — ele é a persona das negativas de step-up estrito. Sobra o <code>backoffice</code>, que não usa MFA em nenhuma outra jornada. Os backup codes gerados aqui são os que a <code>J-031.W</code> consome."
          ],
          "grupos": [
            {
              "id": "g1",
              "tituloHtml": null,
              "tela": null,
              "implicito": true,
              "passos": [
                {
                  "key": "ROTEIRO-01/J-030.W/P1",
                  "id": "P1",
                  "hash": "9783a1b5",
                  "textoHtml": "Abrir <code>/app/profile/setup-totp</code>.",
                  "comoHtml": "Entrar como <code>backoffice@sep.test</code> / <code>roteiro-manual-sep-2026</code> e digitar <code>http://localhost:4200/app/profile/setup-totp</code> na barra — <strong>não há link para esta tela no menu</strong>. Clicar em <strong>Iniciar setup</strong>: o QR só aparece depois disso.",
                  "textoBusca": "abrir /app/profile/setup-totp. entrar como backoffice@sep.test / roteiro-manual-sep-2026 e digitar http://localhost:4200/app/profile/setup-totp na barra — não há link para esta tela no menu. clicar em iniciar setup: o qr só aparece depois disso.",
                  "esperadoHtml": "QR code e secret em texto.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 630,
                  "ordem": 1
                },
                {
                  "key": "ROTEIRO-01/J-030.W/P2",
                  "id": "P2",
                  "hash": "c6583e22",
                  "textoHtml": "Escanear no autenticador e confirmar com um código <strong>incorreto</strong>.",
                  "comoHtml": "Escanear o QR primeiro (o autenticador passa a mostrar códigos), mas no campo <strong>Código TOTP</strong> digitar <code>000000</code> e clicar em <strong>Confirmar e ativar MFA</strong>. A recusa é o resultado certo: o QR ter sido escaneado não basta, o sistema precisa da prova de que você tem o autenticador agora.",
                  "textoBusca": "escanear no autenticador e confirmar com um código incorreto. escanear o qr primeiro (o autenticador passa a mostrar códigos), mas no campo código totp digitar 000000 e clicar em confirmar e ativar mfa. a recusa é o resultado certo: o qr ter sido escaneado não basta, o sistema precisa da prova de que você tem o autenticador agora.",
                  "esperadoHtml": "recusado; MFA <strong>não</strong> é habilitado.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 635,
                  "ordem": 2
                },
                {
                  "key": "ROTEIRO-01/J-030.W/P3",
                  "id": "P3",
                  "hash": "54ee010e",
                  "textoHtml": "Confirmar com o código corrente.",
                  "comoHtml": "Agora com o código real de 6 dígitos da conta <code>backoffice</code>. Ao dar certo, aparecem os backup codes — <strong>copiar todos antes de sair da tela</strong> e guardar no rascunho da execução. Eles são o insumo da <code>J-031.W</code>.",
                  "textoBusca": "confirmar com o código corrente. agora com o código real de 6 dígitos da conta backoffice. ao dar certo, aparecem os backup codes — copiar todos antes de sair da tela e guardar no rascunho da execução. eles são o insumo da j-031.w.",
                  "esperadoHtml": "MFA habilitado; backup codes exibidos.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 641,
                  "ordem": 3
                },
                {
                  "key": "ROTEIRO-01/J-030.W/P4",
                  "id": "P4",
                  "hash": "b903a84f",
                  "textoHtml": "Recarregar a tela.",
                  "comoHtml": "<code>F5</code>. Os códigos não podem reaparecer — a exibição é única, e é por isso que o P3 mandou copiar. Se reaparecerem, é ocorrência: significa que estão recuperáveis por quem tiver acesso à sessão.",
                  "textoBusca": "recarregar a tela. f5. os códigos não podem reaparecer — a exibição é única, e é por isso que o p3 mandou copiar. se reaparecerem, é ocorrência: significa que estão recuperáveis por quem tiver acesso à sessão.",
                  "esperadoHtml": "os backup codes <strong>não</strong> aparecem de novo. Exibição única.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 646,
                  "ordem": 4
                },
                {
                  "key": "ROTEIRO-01/J-030.W/P5",
                  "id": "P5",
                  "hash": "75e5b375",
                  "textoHtml": "Sair e autenticar novamente.",
                  "comoHtml": "<strong>Sair</strong> e entrar de novo como <code>backoffice</code>. Agora o login pede o código, o que antes não acontecia — é a confirmação de que o MFA passou a valer.",
                  "textoBusca": "sair e autenticar novamente. sair e entrar de novo como backoffice. agora o login pede o código, o que antes não acontecia — é a confirmação de que o mfa passou a valer.",
                  "esperadoHtml": "o login agora exige TOTP.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 651,
                  "ordem": 5
                },
                {
                  "key": "ROTEIRO-01/J-030.W/P6",
                  "id": "P6",
                  "hash": "c0fe65a0",
                  "textoHtml": "Conferir no banco:",
                  "comoHtml": "Terminal do banco. O comando já está com o usuário desta jornada preenchido.",
                  "textoBusca": "conferir no banco: terminal do banco. o comando já está com o usuário desta jornada preenchido.",
                  "esperadoHtml": "<code>mfa_habilitado = t</code>.",
                  "blocos": [
                    {
                      "tipo": "codigo",
                      "lang": "bash",
                      "regiao": "como",
                      "conteudo": "docker exec sep-postgres psql -U sep -d sep_dev \\\n  -c \"SELECT username, mfa_habilitado FROM usuario WHERE username = 'backoffice@sep.test';\""
                    }
                  ],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 655,
                  "ordem": 6
                }
              ]
            }
          ],
          "assercoes": [],
          "linha": 610,
          "stats": {
            "passos": 6,
            "na": 0,
            "assercoes": 0
          }
        },
        {
          "key": "ROTEIRO-01/J-031.W",
          "id": "J-031.W",
          "escopoId": "J-031.W",
          "kind": "jornada",
          "nivel": 3,
          "titulo": "Usar backup code e tentar reusar",
          "anchor": "j-031w---usar-backup-code-e-tentar-reusar",
          "ordem": 13,
          "meta": [
            {
              "chave": "ID",
              "texto": "J-031.W",
              "html": "<code>J-031.W</code>"
            },
            {
              "chave": "Tipo",
              "texto": "Positiva + negativa de reuso",
              "html": "Positiva + negativa de reuso"
            },
            {
              "chave": "Persona",
              "texto": "Usuário com MFA habilitado e backup codes guardados",
              "html": "Usuário com MFA habilitado e backup codes guardados"
            },
            {
              "chave": "Superfície",
              "texto": "Web",
              "html": "Web"
            },
            {
              "chave": "Pré-condições",
              "texto": "PRE-01 PRE-02 PRE-04 PRE-07 + backup codes de J-030.W",
              "html": "<code>PRE-01</code> <code>PRE-02</code> <code>PRE-04</code> <code>PRE-07</code> + backup codes de <code>J-030.W</code>"
            },
            {
              "chave": "Automação equivalente",
              "texto": "nenhuma",
              "html": "nenhuma"
            }
          ],
          "metaIndex": {
            "ID": "J-031.W",
            "Tipo": "Positiva + negativa de reuso",
            "Persona": "Usuário com MFA habilitado e backup codes guardados",
            "Superfície": "Web",
            "Pré-condições": "PRE-01 PRE-02 PRE-04 PRE-07 + backup codes de J-030.W",
            "Automação equivalente": "nenhuma"
          },
          "notas": [],
          "grupos": [
            {
              "id": "g1",
              "tituloHtml": null,
              "tela": null,
              "implicito": true,
              "passos": [
                {
                  "key": "ROTEIRO-01/J-031.W/P1",
                  "id": "P1",
                  "hash": "b5540435",
                  "textoHtml": "No desafio MFA do login, informar um backup code válido.",
                  "comoHtml": "Entrar como <code>backoffice@sep.test</code> (a persona que habilitou MFA na <a href=\"#j-030w---habilitar-mfa-totp\" rel=\"noreferrer\"><code>J-030.W</code></a>). Na tela <strong>Verificação em duas etapas</strong>, em vez do código do autenticador, digitar um dos <strong>backup codes</strong> guardados. O campo aceita os dois formatos. <strong>Anote qual código você usou</strong> — o P2 depende disso.",
                  "textoBusca": "no desafio mfa do login, informar um backup code válido. entrar como backoffice@sep.test (a persona que habilitou mfa na j-030.w). na tela verificação em duas etapas, em vez do código do autenticador, digitar um dos backup codes guardados. o campo aceita os dois formatos. anote qual código você usou — o p2 depende disso.",
                  "esperadoHtml": "autentica.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 678,
                  "ordem": 1
                },
                {
                  "key": "ROTEIRO-01/J-031.W/P2",
                  "id": "P2",
                  "hash": "71d42d38",
                  "textoHtml": "Sair e tentar o <strong>mesmo</strong> backup code de novo.",
                  "comoHtml": "<strong>Riscar do rascunho o código usado no P1</strong> — ele morreu ali. Sair, voltar ao login e informar exatamente aquele mesmo código. A recusa é o ponto da jornada: se ele funcionasse duas vezes, quem interceptasse o código uma vez teria acesso permanente.",
                  "textoBusca": "sair e tentar o mesmo backup code de novo. riscar do rascunho o código usado no p1 — ele morreu ali. sair, voltar ao login e informar exatamente aquele mesmo código. a recusa é o ponto da jornada: se ele funcionasse duas vezes, quem interceptasse o código uma vez teria acesso permanente.",
                  "esperadoHtml": "<strong>recusado</strong>. Backup code é de uso único.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 684,
                  "ordem": 2
                },
                {
                  "key": "ROTEIRO-01/J-031.W/P3",
                  "id": "P3",
                  "hash": "6df879f4",
                  "textoHtml": "Autenticar com um segundo backup code, ainda não usado.",
                  "comoHtml": "Pegar outro código da lista guardada na <code>J-030.W</code>, ainda não riscado. Riscar este também depois de usar. Sobrando códigos, guarde-os: são a saída se o autenticador se perder no meio da execução.",
                  "textoBusca": "autenticar com um segundo backup code, ainda não usado. pegar outro código da lista guardada na j-030.w, ainda não riscado. riscar este também depois de usar. sobrando códigos, guarde-os: são a saída se o autenticador se perder no meio da execução.",
                  "esperadoHtml": "autentica.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 689,
                  "ordem": 3
                },
                {
                  "key": "ROTEIRO-01/J-031.W/P4",
                  "id": "P4",
                  "hash": "21c4689b",
                  "textoHtml": "Conferir o audit log.",
                  "comoHtml": "Terminal do banco, mesma consulta de audit log das jornadas anteriores. Procurar os eventos referentes aos dois backup codes usados agora.",
                  "textoBusca": "conferir o audit log. terminal do banco, mesma consulta de audit log das jornadas anteriores. procurar os eventos referentes aos dois backup codes usados agora.",
                  "esperadoHtml": "uso de backup code registrado.",
                  "blocos": [
                    {
                      "tipo": "codigo",
                      "lang": "bash",
                      "regiao": "como",
                      "conteudo": "docker exec sep-postgres psql -U sep -d sep_dev \\\n  -c \"SELECT tipo, data_evento FROM audit_log_seguranca ORDER BY data_evento DESC LIMIT 10;\""
                    }
                  ],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 694,
                  "ordem": 4
                }
              ]
            }
          ],
          "assercoes": [],
          "linha": 665,
          "stats": {
            "passos": 4,
            "na": 0,
            "assercoes": 0
          }
        },
        {
          "key": "ROTEIRO-01/J-033.W",
          "id": "J-033.W",
          "escopoId": "J-033.W",
          "kind": "jornada",
          "nivel": 3,
          "titulo": "Token de step-up e de uso único",
          "anchor": "j-033w---token-de-step-up-e-de-uso-nico",
          "ordem": 14,
          "meta": [
            {
              "chave": "ID",
              "texto": "J-033.W",
              "html": "<code>J-033.W</code>"
            },
            {
              "chave": "Tipo",
              "texto": "Negativa — reuso de credencial",
              "html": "Negativa — reuso de credencial"
            },
            {
              "chave": "Persona",
              "texto": "cliente-a",
              "html": "<code>cliente-a</code>"
            },
            {
              "chave": "Superfície",
              "texto": "Web + API",
              "html": "Web + API"
            },
            {
              "chave": "Vetor",
              "texto": "Reaproveitar o mesmo X-Step-Up-Token em duas mutações",
              "html": "Reaproveitar o mesmo <code>X-Step-Up-Token</code> em duas mutações"
            },
            {
              "chave": "Comportamento seguro esperado",
              "texto": "Segunda chamada negada; token consumido na primeira",
              "html": "Segunda chamada negada; token consumido na primeira"
            },
            {
              "chave": "Pré-condições",
              "texto": "PRE-01 PRE-04 PRE-07 PRE-10",
              "html": "<code>PRE-01</code> <code>PRE-04</code> <code>PRE-07</code> <code>PRE-10</code>"
            },
            {
              "chave": "Política",
              "texto": "Token de 32 bytes, TTL 5 min, uso único, guardado como SHA-256",
              "html": "Token de 32 bytes, TTL 5 min, <strong>uso único</strong>, guardado como SHA-256"
            },
            {
              "chave": "Automação equivalente",
              "texto": "nenhuma — a suite mocka o step-up",
              "html": "nenhuma — a suite mocka o step-up"
            },
            {
              "chave": "Só o manual cobre",
              "texto": "O ciclo real de emissão, consumo e expiração",
              "html": "O ciclo real de emissão, consumo e expiração"
            }
          ],
          "metaIndex": {
            "ID": "J-033.W",
            "Tipo": "Negativa — reuso de credencial",
            "Persona": "cliente-a",
            "Superfície": "Web + API",
            "Vetor": "Reaproveitar o mesmo X-Step-Up-Token em duas mutações",
            "Comportamento seguro esperado": "Segunda chamada negada; token consumido na primeira",
            "Pré-condições": "PRE-01 PRE-04 PRE-07 PRE-10",
            "Política": "Token de 32 bytes, TTL 5 min, uso único, guardado como SHA-256",
            "Automação equivalente": "nenhuma — a suite mocka o step-up",
            "Só o manual cobre": "O ciclo real de emissão, consumo e expiração"
          },
          "notas": [
            "<strong>Esta jornada é pelo Insomnia, não pela tela.</strong> O objetivo é manipular o token na mão — algo que a interface não deixa fazer, porque ela sempre pede um token novo."
          ],
          "grupos": [
            {
              "id": "g1",
              "tituloHtml": null,
              "tela": null,
              "implicito": true,
              "passos": [
                {
                  "key": "ROTEIRO-01/J-033.W/P1",
                  "id": "P1",
                  "hash": "9bbcd93e",
                  "textoHtml": "Autenticado como <code>cliente-a</code>, chamar <code>POST /api/v1/auth/step-up/initiate</code>.",
                  "comoHtml": "Antes, fazer login como <code>cliente-a</code> pelo request de login do Insomnia (senha <code>jornada-tomador-sep-2026-v2</code>, se você já executou a <code>J-022.W</code>) e guardar o <code>accessToken</code> em <code>clienteAccessToken</code>. Depois, pasta <strong>Auth</strong>, request de <code>step-up/initiate</code>, <strong>Send</strong>. Copiar o <code>stepUpChallengeId</code> da resposta para a variável de mesmo nome.",
                  "textoBusca": "autenticado como cliente-a, chamar post /api/v1/auth/step-up/initiate. antes, fazer login como cliente-a pelo request de login do insomnia (senha jornada-tomador-sep-2026-v2, se você já executou a j-022.w) e guardar o accesstoken em clienteaccesstoken. depois, pasta auth, request de step-up/initiate, send. copiar o stepupchallengeid da resposta para a variável de mesmo nome.",
                  "esperadoHtml": "<code>stepUpChallengeId</code>.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 725,
                  "ordem": 1
                },
                {
                  "key": "ROTEIRO-01/J-033.W/P2",
                  "id": "P2",
                  "hash": "cb1daf22",
                  "textoHtml": "Chamar <code>POST /api/v1/auth/step-up/complete</code> com o desafio e o TOTP corrente.",
                  "comoHtml": "No body, o <code>stepUpChallengeId</code> do P1 e o código de 6 dígitos do autenticador (conta <code>cliente-a</code>). Copiar o token da resposta para <code>stepUpToken</code>. <strong>A partir daqui você tem 5 minutos</strong> — o P3 e o P4 precisam acontecer dentro dessa janela.",
                  "textoBusca": "chamar post /api/v1/auth/step-up/complete com o desafio e o totp corrente. no body, o stepupchallengeid do p1 e o código de 6 dígitos do autenticador (conta cliente-a). copiar o token da resposta para stepuptoken. a partir daqui você tem 5 minutos — o p3 e o p4 precisam acontecer dentro dessa janela.",
                  "esperadoHtml": "token de step-up no corpo. Guardar.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 732,
                  "ordem": 2
                },
                {
                  "key": "ROTEIRO-01/J-033.W/P3",
                  "id": "P3",
                  "hash": "bd5b05e9",
                  "textoHtml": "Usar o token em <code>PATCH /api/v1/usuarios/{id}/senha</code>.",
                  "comoHtml": "No request de troca de senha, aba <strong>Headers</strong>, conferir que existe <code>X-Step-Up-Token</code> com o valor do P2. No body, a senha atual e uma nova (<code>jornada-tomador-sep-2026-v3</code>). <strong>Anotar a senha nova</strong> — ela passa a valer.",
                  "textoBusca": "usar o token em patch /api/v1/usuarios/{id}/senha. no request de troca de senha, aba headers, conferir que existe x-step-up-token com o valor do p2. no body, a senha atual e uma nova (jornada-tomador-sep-2026-v3). anotar a senha nova — ela passa a valer.",
                  "esperadoHtml": "sucesso.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 737,
                  "ordem": 3
                },
                {
                  "key": "ROTEIRO-01/J-033.W/P4",
                  "id": "P4",
                  "hash": "0b47d4b0",
                  "textoHtml": "Repetir a <strong>mesma</strong> chamada com o <strong>mesmo</strong> token.",
                  "comoHtml": "Clicar em <strong>Send</strong> de novo, sem mudar nada. Como a senha atual agora é outra, o request está errado por dois motivos — mas o que importa é <strong>qual erro vem</strong>: tem de ser 403 por token consumido. Este é o coração da jornada: o token vale para <strong>uma</strong> operação.",
                  "textoBusca": "repetir a mesma chamada com o mesmo token. clicar em send de novo, sem mudar nada. como a senha atual agora é outra, o request está errado por dois motivos — mas o que importa é qual erro vem: tem de ser 403 por token consumido. este é o coração da jornada: o token vale para uma operação.",
                  "esperadoHtml": "<strong>403</strong>. Token já consumido.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 742,
                  "ordem": 4
                },
                {
                  "key": "ROTEIRO-01/J-033.W/P5",
                  "id": "P5",
                  "hash": "8cba3d4f",
                  "textoHtml": "Emitir um token novo, aguardar <strong>mais de 5 minutos</strong> e usá-lo.",
                  "comoHtml": "Repetir P1 e P2 para obter um token novo, <strong>anotar o horário</strong> e ir fazer outra coisa por 6 minutos (dá para adiantar outra jornada e voltar). Depois, enviar o request do P3 com esse token. Não tem atalho: o tempo é a variável testada.",
                  "textoBusca": "emitir um token novo, aguardar mais de 5 minutos e usá-lo. repetir p1 e p2 para obter um token novo, anotar o horário e ir fazer outra coisa por 6 minutos (dá para adiantar outra jornada e voltar). depois, enviar o request do p3 com esse token. não tem atalho: o tempo é a variável testada.",
                  "esperadoHtml": "<strong>403</strong> por expiração.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 747,
                  "ordem": 5
                },
                {
                  "key": "ROTEIRO-01/J-033.W/P6",
                  "id": "P6",
                  "hash": "989eedc4",
                  "textoHtml": "Conferir o corpo dos 403 de P4 e P5.",
                  "comoHtml": "Ler o corpo das duas respostas 403 no painel do Insomnia. O que se procura é o que <strong>não</strong> pode estar lá: id de usuário, nome de classe Java, caminho de arquivo, stack trace, ou explicação do tipo &quot;token expirado em tal horário&quot;. Mensagem detalhada demais ensina o atacante a ajustar o ataque.",
                  "textoBusca": "conferir o corpo dos 403 de p4 e p5. ler o corpo das duas respostas 403 no painel do insomnia. o que se procura é o que não pode estar lá: id de usuário, nome de classe java, caminho de arquivo, stack trace, ou explicação do tipo \"token expirado em tal horário\". mensagem detalhada demais ensina o atacante a ajustar o ataque.",
                  "esperadoHtml": "mensagem genérica (&quot;Acesso negado&quot;), <strong>sem</strong> UUID, stack trace ou detalhe interno.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 752,
                  "ordem": 6
                }
              ]
            }
          ],
          "assercoes": [],
          "linha": 705,
          "stats": {
            "passos": 6,
            "na": 0,
            "assercoes": 0
          }
        },
        {
          "key": "ROTEIRO-01/J-045.M",
          "id": "J-045.M",
          "escopoId": "J-045.M",
          "kind": "jornada",
          "nivel": 3,
          "titulo": "Usuário FINANCEIRO autentica no mobile",
          "anchor": "j-045m---usurio-financeiro-autentica-no-mobile",
          "ordem": 15,
          "meta": [
            {
              "chave": "ID",
              "texto": "J-045.M",
              "html": "<code>J-045.M</code>"
            },
            {
              "chave": "Tipo",
              "texto": "Positiva — documenta limitação conhecida",
              "html": "Positiva — documenta <strong>limitação conhecida</strong>"
            },
            {
              "chave": "Persona",
              "texto": "financeiro — FINANCEIRO",
              "html": "<code>financeiro</code> — FINANCEIRO"
            },
            {
              "chave": "Superfície",
              "texto": "Mobile",
              "html": "Mobile"
            },
            {
              "chave": "Pré-condições",
              "texto": "PRE-01 PRE-03 PRE-04 PRE-06",
              "html": "<code>PRE-01</code> <code>PRE-03</code> <code>PRE-04</code> <code>PRE-06</code>"
            },
            {
              "chave": "Nota",
              "texto": "O sep-mobile tipa UsuarioRole como `'ADMIN' \\",
              "html": "O <code>sep-mobile</code> tipa <code>UsuarioRole</code> como `'ADMIN' \\"
            }
          ],
          "metaIndex": {
            "ID": "J-045.M",
            "Tipo": "Positiva — documenta limitação conhecida",
            "Persona": "financeiro — FINANCEIRO",
            "Superfície": "Mobile",
            "Pré-condições": "PRE-01 PRE-03 PRE-04 PRE-06",
            "Nota": "O sep-mobile tipa UsuarioRole como `'ADMIN' \\"
          },
          "notas": [
            "A distinção entre P2 e P3 é o ponto desta jornada: barra vazia é limitação aceita; tela branca ou loop de navegação é bug. Não registre os dois como &quot;esperado&quot;."
          ],
          "grupos": [
            {
              "id": "g1",
              "tituloHtml": null,
              "tela": null,
              "implicito": true,
              "passos": [
                {
                  "key": "ROTEIRO-01/J-045.M/P1",
                  "id": "P1",
                  "hash": "cc9c701e",
                  "textoHtml": "Autenticar como <code>financeiro@sep.test</code> no mobile.",
                  "comoHtml": "Em <code>http://localhost:8100/login</code>, com emulação de dispositivo ligada. Senha <code>roteiro-manual-sep-2026</code>, e o código TOTP da conta <code>financeiro</code> (habilitado no §6.2 do ROTEIRO-00). O login funcionar já é o primeiro achado: o backend não impede o FINANCEIRO de entrar no app.",
                  "textoBusca": "autenticar como financeiro@sep.test no mobile. em http://localhost:8100/login, com emulação de dispositivo ligada. senha roteiro-manual-sep-2026, e o código totp da conta financeiro (habilitado no §6.2 do roteiro-00). o login funcionar já é o primeiro achado: o backend não impede o financeiro de entrar no app.",
                  "esperadoHtml": "login <strong>conclui</strong> — o backend aceita normalmente.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 775,
                  "ordem": 1
                },
                {
                  "key": "ROTEIRO-01/J-045.M/P2",
                  "id": "P2",
                  "hash": "7cdea372",
                  "textoHtml": "Observar a barra de tabs.",
                  "comoHtml": "Olhar o rodapé. Com <code>cliente-a</code> havia quatro abas; aqui a barra fica <strong>vazia</strong>, porque o app mobile só conhece os perfis Cliente e Administrador. Tirar um screenshot (<code>Ctrl+Shift+P</code> no DevTools &gt; &quot;Capture screenshot&quot;) e anexar à ocorrência, se registrar alguma. Isto é <strong>limitação conhecida</strong>, não defeito — marcar o passo normalmente.",
                  "textoBusca": "observar a barra de tabs. olhar o rodapé. com cliente-a havia quatro abas; aqui a barra fica vazia, porque o app mobile só conhece os perfis cliente e administrador. tirar um screenshot (ctrl+shift+p no devtools > \"capture screenshot\") e anexar à ocorrência, se registrar alguma. isto é limitação conhecida, não defeito — marcar o passo normalmente.",
                  "esperadoHtml": "<strong>vazia</strong>. Capturar screenshot. Este é o comportamento atual documentado.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 781,
                  "ordem": 2
                },
                {
                  "key": "ROTEIRO-01/J-045.M/P3",
                  "id": "P3",
                  "hash": "05383d50",
                  "textoHtml": "Abrir <code>/app/propostas</code> por URL direta.",
                  "comoHtml": "Colar <code>http://localhost:8100/app/propostas</code> na barra. <strong>É aqui que a jornada separa limitação de defeito</strong>: qualquer resposta clara serve (negar, mandar para <code>/welcome</code>, mostrar aviso). O que <strong>não</strong> pode é tela totalmente branca ou o endereço ficar trocando sozinho num ciclo — isso é bug e vira ocorrência.",
                  "textoBusca": "abrir /app/propostas por url direta. colar http://localhost:8100/app/propostas na barra. é aqui que a jornada separa limitação de defeito: qualquer resposta clara serve (negar, mandar para /welcome, mostrar aviso). o que não pode é tela totalmente branca ou o endereço ficar trocando sozinho num ciclo — isso é bug e vira ocorrência.",
                  "esperadoHtml": "negado ou redirecionado. <strong>Sem</strong> tela em branco e <strong>sem</strong> loop de navegação.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 787,
                  "ordem": 3
                },
                {
                  "key": "ROTEIRO-01/J-045.M/P4",
                  "id": "P4",
                  "hash": "099d8808",
                  "textoHtml": "Repetir <strong>P1</strong> a <strong>P3</strong> com <code>backoffice@sep.test</code>.",
                  "comoHtml": "Sair e refazer os três passos com <code>backoffice@sep.test</code> / <code>roteiro-manual-sep-2026</code>. Se você executou a <a href=\"#j-030w---habilitar-mfa-totp\" rel=\"noreferrer\"><code>J-030.W</code></a>, esta conta agora pede código TOTP no login.",
                  "textoBusca": "repetir p1 a p3 com backoffice@sep.test. sair e refazer os três passos com backoffice@sep.test / roteiro-manual-sep-2026. se você executou a j-030.w, esta conta agora pede código totp no login.",
                  "esperadoHtml": "mesmo comportamento.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 793,
                  "ordem": 4
                }
              ]
            }
          ],
          "assercoes": [
            {
              "key": "ROTEIRO-01/J-045.M/#b235f9b2",
              "id": null,
              "hash": "aef03826",
              "textoHtml": "P2 confirma a limitação conhecida (esperado)",
              "comoHtml": null,
              "textoBusca": "p2 confirma a limitação conhecida (esperado)",
              "esperadoHtml": null,
              "blocos": [],
              "na": false,
              "naMotivo": null,
              "marcadoNaFonte": false,
              "linha": 801,
              "ordem": 1
            },
            {
              "key": "ROTEIRO-01/J-045.M/#313f487d",
              "id": null,
              "hash": "88ed6b58",
              "textoHtml": "P3 <strong>não</strong> pode resultar em tela branca ou loop — isso seria defeito, não limitação",
              "comoHtml": null,
              "textoBusca": "p3 não pode resultar em tela branca ou loop — isso seria defeito, não limitação",
              "esperadoHtml": null,
              "blocos": [],
              "na": false,
              "naMotivo": null,
              "marcadoNaFonte": false,
              "linha": 802,
              "ordem": 2
            }
          ],
          "linha": 762,
          "stats": {
            "passos": 4,
            "na": 0,
            "assercoes": 2
          }
        }
      ],
      "ocorrenciasColunas": [
        "#",
        "Jornada",
        "Passo",
        "O que aconteceu",
        "Esperado",
        "Issue"
      ],
      "registroCampos": [
        {
          "chave": "executado_por",
          "rotulo": "Executado por",
          "tipo": "texto"
        },
        {
          "chave": "data_hora",
          "rotulo": "Data / hora",
          "tipo": "texto"
        },
        {
          "chave": "commit_sep_api",
          "rotulo": "Commit sep-api",
          "tipo": "texto"
        },
        {
          "chave": "commit_sep_app",
          "rotulo": "Commit sep-app",
          "tipo": "texto"
        },
        {
          "chave": "commit_sep_mobile",
          "rotulo": "Commit sep-mobile",
          "tipo": "texto"
        },
        {
          "chave": "jornadas_ok",
          "rotulo": "Jornadas OK",
          "tipo": "texto"
        },
        {
          "chave": "jornadas_nok",
          "rotulo": "Jornadas NOK",
          "tipo": "texto"
        },
        {
          "chave": "jornadas_bloqueado",
          "rotulo": "Jornadas BLOQUEADO",
          "tipo": "texto"
        },
        {
          "chave": "observacoes",
          "rotulo": "Observações",
          "tipo": "textarea"
        }
      ]
    },
    {
      "id": "ROTEIRO-02",
      "arquivo": "ROTEIRO-02-GOVERNANCA.md",
      "hash": "e599290a",
      "titulo": "Roteiro 02 - Governança, usuários e parâmetros",
      "tipo": "jornadas",
      "ordem": 12,
      "atualizadoEm": "2026-08-20",
      "resumoHtml": "",
      "escopos": [
        {
          "key": "ROTEIRO-02/J-040.W",
          "id": "J-040.W",
          "escopoId": "J-040.W",
          "kind": "jornada",
          "nivel": 3,
          "titulo": "ADMIN consulta usuários e roles",
          "anchor": "j-040w---admin-consulta-usurios-e-roles",
          "ordem": 1,
          "meta": [
            {
              "chave": "ID",
              "texto": "J-040.W",
              "html": "<code>J-040.W</code>"
            },
            {
              "chave": "Tipo",
              "texto": "Positiva — leitura",
              "html": "Positiva — leitura"
            },
            {
              "chave": "Persona",
              "texto": "admin",
              "html": "<code>admin</code>"
            },
            {
              "chave": "Superfície",
              "texto": "Web",
              "html": "Web"
            },
            {
              "chave": "Pré-condições",
              "texto": "PRE-01 PRE-02 PRE-04 PRE-05 PRE-06",
              "html": "<code>PRE-01</code> <code>PRE-02</code> <code>PRE-04</code> <code>PRE-05</code> <code>PRE-06</code>"
            },
            {
              "chave": "Endpoints tocados",
              "texto": "GET /usuarios, GET /usuarios/{id}, GET /usuarios/{id}/roles",
              "html": "<code>GET /usuarios</code>, <code>GET /usuarios/{id}</code>, <code>GET /usuarios/{id}/roles</code>"
            },
            {
              "chave": "Step-up",
              "texto": "não — leitura",
              "html": "não — leitura"
            },
            {
              "chave": "Duração",
              "texto": "6 min",
              "html": "6 min"
            },
            {
              "chave": "Automação equivalente",
              "texto": "governanca.spec.ts, admin-flow.spec.ts (Playwright, contra MSW)",
              "html": "<code>governanca.spec.ts</code>, <code>admin-flow.spec.ts</code> (Playwright, contra MSW)"
            },
            {
              "chave": "Só o manual cobre",
              "texto": "Backend real, precedência da role principal sobre dados reais",
              "html": "Backend real, precedência da role principal sobre dados reais"
            }
          ],
          "metaIndex": {
            "ID": "J-040.W",
            "Tipo": "Positiva — leitura",
            "Persona": "admin",
            "Superfície": "Web",
            "Pré-condições": "PRE-01 PRE-02 PRE-04 PRE-05 PRE-06",
            "Endpoints tocados": "GET /usuarios, GET /usuarios/{id}, GET /usuarios/{id}/roles",
            "Step-up": "não — leitura",
            "Duração": "6 min",
            "Automação equivalente": "governanca.spec.ts, admin-flow.spec.ts (Playwright, contra MSW)",
            "Só o manual cobre": "Backend real, precedência da role principal sobre dados reais"
          },
          "notas": [
            "Família <code>J-040</code> a <code>J-049</code>: administração de usuários, roles cumulativas, parâmetros operacionais governados e negação de acesso à área administrativa. Requer <a href=\"./ROTEIRO-00-AMBIENTE-E-MASSA.md\" rel=\"noreferrer\"><code>ROTEIRO-00</code></a> concluído. Hub: <a href=\"./CENARIOS-TESTE-JORNADAS-USUARIO.md\" rel=\"noreferrer\"><code>CENARIOS-TESTE-JORNADAS-USUARIO.md</code></a>.",
            "<strong>Execute pelo <a href=\"./app/index.html\" rel=\"noreferrer\">app</a></strong>, não editando este arquivo — as caixas aqui ficam sempre vazias. Desvio não vira caixa marcada: vira <strong>ocorrência</strong> registrada no passo.",
            "<strong>Não use <code>credito.valor.maximo.pf</code> como cobaia.</strong> Ele tem gêmeo no <code>application.yml</code> com o mesmo valor, e deixá-lo divergente atrapalha a leitura do <code>ROTEIRO-04</code> por quem vier depois. O parâmetro de webhook é <code>INTEGER</code> como ele, serve para os mesmos testes e não induz ninguém a erro."
          ],
          "grupos": [
            {
              "id": "g2",
              "tituloHtml": "Tela <code>/app/admin</code>",
              "tela": "/app/admin",
              "implicito": false,
              "passos": [
                {
                  "key": "ROTEIRO-02/J-040.W/P1",
                  "id": "P1",
                  "hash": "b6d3d13e",
                  "textoHtml": "Abrir a área administrativa.",
                  "comoHtml": "Logado como <code>admin@sep.test</code>, procurar <strong>Administração</strong> no menu.",
                  "textoBusca": "abrir a área administrativa. logado como admin@sep.test, procurar administração no menu.",
                  "esperadoHtml": "<code>/app/admin</code> abre com os acessos de governança de usuários e parâmetros.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 123,
                  "ordem": 1
                },
                {
                  "key": "ROTEIRO-02/J-040.W/P2",
                  "id": "P2",
                  "hash": "7ef2b666",
                  "textoHtml": "Conferir o que ainda não existe.",
                  "comoHtml": "Ler os cartões da tela inicial. Pelo menos um anuncia <strong>&quot;Disponivel em breve&quot;</strong>. Anotar <strong>quais</strong>: card de administração que promete e não entrega é ocorrência de produto, e o registro serve de linha de base para a próxima execução.",
                  "textoBusca": "conferir o que ainda não existe. ler os cartões da tela inicial. pelo menos um anuncia \"disponivel em breve\". anotar quais: card de administração que promete e não entrega é ocorrência de produto, e o registro serve de linha de base para a próxima execução.",
                  "esperadoHtml": "os cartões indisponíveis estão rotulados como tal, e não levam a tela vazia ou a erro.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 126,
                  "ordem": 2
                }
              ]
            },
            {
              "id": "g3",
              "tituloHtml": "Tela <code>/app/admin/users</code>",
              "tela": "/app/admin/users",
              "implicito": false,
              "passos": [
                {
                  "key": "ROTEIRO-02/J-040.W/P3",
                  "id": "P3",
                  "hash": "d61aabf4",
                  "textoHtml": "Listar os usuários.",
                  "comoHtml": "Abrir <strong>Usuários</strong>. Devem aparecer as seis personas do <code>ROTEIRO-00</code> mais o que outras jornadas tiverem criado.",
                  "textoBusca": "listar os usuários. abrir usuários. devem aparecer as seis personas do roteiro-00 mais o que outras jornadas tiverem criado.",
                  "esperadoHtml": "tabela com e-mail, perfil, criado em e modificado em.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 135,
                  "ordem": 1
                },
                {
                  "key": "ROTEIRO-02/J-040.W/P4",
                  "id": "P4",
                  "hash": "13ce016d",
                  "textoHtml": "Filtrar por e-mail.",
                  "comoHtml": "Usar o campo de filtro com um trecho do e-mail do <code>financeiro</code>.",
                  "textoBusca": "filtrar por e-mail. usar o campo de filtro com um trecho do e-mail do financeiro.",
                  "esperadoHtml": "a lista reduz; nenhum erro com filtro sem resultado.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 139,
                  "ordem": 2
                },
                {
                  "key": "ROTEIRO-02/J-040.W/P5",
                  "id": "P5",
                  "hash": "73b176a0",
                  "textoHtml": "Conferir a coluna <strong>Perfil</strong> contra a precedência.",
                  "comoHtml": "O <code>admin</code> do <code>ROTEIRO-00</code> tem duas roles (ADMIN + CLIENTE). A coluna Perfil mostra a role <strong>principal</strong>, derivada por precedência (<code>ADMIN &gt; FINANCEIRO &gt; BACKOFFICE &gt; CLIENTE</code>), e não a lista inteira.",
                  "textoBusca": "conferir a coluna perfil contra a precedência. o admin do roteiro-00 tem duas roles (admin + cliente). a coluna perfil mostra a role principal, derivada por precedência (admin > financeiro > backoffice > cliente), e não a lista inteira.",
                  "esperadoHtml": "<code>admin</code> aparece como <code>ADMIN</code>, não como <code>CLIENTE</code> nem como duas linhas.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 142,
                  "ordem": 3
                }
              ]
            },
            {
              "id": "g4",
              "tituloHtml": "Tela <code>/app/admin/users/:id</code>",
              "tela": "/app/admin/users/:id",
              "implicito": false,
              "passos": [
                {
                  "key": "ROTEIRO-02/J-040.W/P6",
                  "id": "P6",
                  "hash": "9c1f67fa",
                  "textoHtml": "Abrir o detalhe do <code>admin</code> e ler o bloco de roles.",
                  "comoHtml": "Clicar no próprio <code>admin</code>. O detalhe traz identificação, auditoria e o bloco <strong>Roles cumulativas</strong>.",
                  "textoBusca": "abrir o detalhe do admin e ler o bloco de roles. clicar no próprio admin. o detalhe traz identificação, auditoria e o bloco roles cumulativas.",
                  "esperadoHtml": "as duas roles listadas, e um aviso de que <strong>você não pode alterar as próprias roles</strong> — a tela antecipa a regra que a <a href=\"#j-041w-n1---limites-da-gestão-de-roles\" rel=\"noreferrer\"><code>J-041.W-N1</code></a> prova no backend.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 150,
                  "ordem": 1
                },
                {
                  "key": "ROTEIRO-02/J-040.W/P7",
                  "id": "P7",
                  "hash": "15f28bd8",
                  "textoHtml": "Conferir o conjunto pelo banco.",
                  "comoHtml": "Terminal do banco. A tabela <code>usuario_role</code> é a fonte autoritativa; a coluna <code>usuario.role</code> é derivada. As duas têm de contar a mesma história.",
                  "textoBusca": "conferir o conjunto pelo banco. terminal do banco. a tabela usuariorole é a fonte autoritativa; a coluna usuario.role é derivada. as duas têm de contar a mesma história.",
                  "esperadoHtml": "para cada usuário, a principal é a de maior precedência dentro das cumulativas. Divergência aqui é defeito de sincronização.",
                  "blocos": [
                    {
                      "tipo": "codigo",
                      "lang": "bash",
                      "regiao": "como",
                      "conteudo": "docker exec sep-postgres psql -U sep -d sep_dev \\\n  -c \"SELECT u.username, u.role AS principal, string_agg(ur.role, ',' ORDER BY ur.role) AS cumulativas\n      FROM usuario u LEFT JOIN usuario_role ur ON ur.usuario_id = u.id\n      GROUP BY u.username, u.role ORDER BY u.username;\""
                    }
                  ],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 155,
                  "ordem": 2
                }
              ]
            }
          ],
          "assercoes": [
            {
              "key": "ROTEIRO-02/J-040.W/#a00fe6a4",
              "id": null,
              "hash": "f456b46a",
              "textoHtml": "Lista, detalhe e roles conferem com o banco, e a role principal segue a precedência",
              "comoHtml": null,
              "textoBusca": "lista, detalhe e roles conferem com o banco, e a role principal segue a precedência",
              "esperadoHtml": null,
              "blocos": [],
              "na": false,
              "naMotivo": null,
              "marcadoNaFonte": false,
              "linha": 169,
              "ordem": 1
            }
          ],
          "linha": 104,
          "stats": {
            "passos": 7,
            "na": 0,
            "assercoes": 1
          }
        },
        {
          "key": "ROTEIRO-02/J-040.W-N1",
          "id": "J-040.W-N1",
          "escopoId": "J-040.W-N1",
          "kind": "jornada",
          "nivel": 3,
          "titulo": "Área administrativa negada a não-ADMIN",
          "anchor": "j-040w-n1---rea-administrativa-negada-a-no-admin",
          "ordem": 2,
          "meta": [
            {
              "chave": "ID",
              "texto": "J-040.W-N1",
              "html": "<code>J-040.W-N1</code>"
            },
            {
              "chave": "Tipo",
              "texto": "Negativa — RBAC",
              "html": "Negativa — RBAC"
            },
            {
              "chave": "Persona",
              "texto": "financeiro, backoffice e cliente-a",
              "html": "<code>financeiro</code>, <code>backoffice</code> e <code>cliente-a</code>"
            },
            {
              "chave": "Superfície",
              "texto": "Web + API",
              "html": "Web + API"
            },
            {
              "chave": "Vetor",
              "texto": "Alcançar governança sem ser ADMIN, por menu e por URL direta",
              "html": "Alcançar governança sem ser ADMIN, por menu e por URL direta"
            },
            {
              "chave": "Comportamento seguro esperado",
              "texto": "Negação no backend; sumiço no menu é só conveniência",
              "html": "Negação no backend; sumiço no menu é só conveniência"
            },
            {
              "chave": "Pré-condições",
              "texto": "PRE-01 PRE-02 PRE-04 PRE-06 PRE-07",
              "html": "<code>PRE-01</code> <code>PRE-02</code> <code>PRE-04</code> <code>PRE-06</code> <code>PRE-07</code>"
            }
          ],
          "metaIndex": {
            "ID": "J-040.W-N1",
            "Tipo": "Negativa — RBAC",
            "Persona": "financeiro, backoffice e cliente-a",
            "Superfície": "Web + API",
            "Vetor": "Alcançar governança sem ser ADMIN, por menu e por URL direta",
            "Comportamento seguro esperado": "Negação no backend; sumiço no menu é só conveniência",
            "Pré-condições": "PRE-01 PRE-02 PRE-04 PRE-06 PRE-07"
          },
          "notas": [
            "A matriz completa de rota × role é o <code>ROTEIRO-10</code>. Aqui está só o recorte de governança, que é o mais sensível: quem entra aqui promove a si mesmo."
          ],
          "grupos": [
            {
              "id": "g1",
              "tituloHtml": null,
              "tela": null,
              "implicito": true,
              "passos": [
                {
                  "key": "ROTEIRO-02/J-040.W-N1/P1",
                  "id": "P1",
                  "hash": "9273d4a7",
                  "textoHtml": "Como <code>financeiro</code>, conferir que <strong>Administração</strong> não aparece no menu.",
                  "comoHtml": "Entrar como <code>financeiro@sep.test</code> (vai pedir TOTP) e percorrer o menu lateral.",
                  "textoBusca": "como financeiro, conferir que administração não aparece no menu. entrar como financeiro@sep.test (vai pedir totp) e percorrer o menu lateral.",
                  "esperadoHtml": "nenhum item de administração.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 190,
                  "ordem": 1
                },
                {
                  "key": "ROTEIRO-02/J-040.W-N1/P2",
                  "id": "P2",
                  "hash": "7994759b",
                  "textoHtml": "Alcançar <code>/app/admin</code> pela URL direta.",
                  "comoHtml": "<strong>Este é o passo que importa</strong> — o P1 só mostrou que o menu esconde, e esconder não é bloquear. Digitar <code>http://localhost:4200/app/admin</code> na barra de endereço.",
                  "textoBusca": "alcançar /app/admin pela url direta. este é o passo que importa — o p1 só mostrou que o menu esconde, e esconder não é bloquear. digitar http://localhost:4200/app/admin na barra de endereço.",
                  "esperadoHtml": "negado pelo <code>roleGuard</code>; cai em acesso negado, <strong>não</strong> na tela de administração nem numa tela vazia.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 193,
                  "ordem": 2
                },
                {
                  "key": "ROTEIRO-02/J-040.W-N1/P3",
                  "id": "P3",
                  "hash": "26a39b11",
                  "textoHtml": "Repetir o P2 com <code>backoffice</code> e com <code>cliente-a</code>.",
                  "comoHtml": "Mesma URL, uma persona de cada vez. Três roles diferentes, três negações.",
                  "textoBusca": "repetir o p2 com backoffice e com cliente-a. mesma url, uma persona de cada vez. três roles diferentes, três negações.",
                  "esperadoHtml": "negado para as três.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 198,
                  "ordem": 3
                },
                {
                  "key": "ROTEIRO-02/J-040.W-N1/P4",
                  "id": "P4",
                  "hash": "7a5ef919",
                  "textoHtml": "Chamar os endpoints de governança direto na API.",
                  "comoHtml": "No Insomnia, com o token do <code>financeiro</code>, chamar <code>GET /api/v1/usuarios</code>, <code>GET /api/v1/usuarios/{id}/roles</code> e <code>GET /api/v1/governanca/parametros</code>. O guard do front não protege a API.",
                  "textoBusca": "chamar os endpoints de governança direto na api. no insomnia, com o token do financeiro, chamar get /api/v1/usuarios, get /api/v1/usuarios/{id}/roles e get /api/v1/governanca/parametros. o guard do front não protege a api.",
                  "esperadoHtml": "<code>403</code> nos três. Um <code>200</code> aqui é bloqueio de go-live.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 201,
                  "ordem": 4
                },
                {
                  "key": "ROTEIRO-02/J-040.W-N1/P5",
                  "id": "P5",
                  "hash": "54f22008",
                  "textoHtml": "Tentar a promoção direto na API, sem ser ADMIN.",
                  "comoHtml": "Com o token do <code>financeiro</code>, <code>POST /api/v1/usuarios/{id}/roles/ADMIN</code> apontando para o próprio id. É a escalada de privilégio óbvia.",
                  "textoBusca": "tentar a promoção direto na api, sem ser admin. com o token do financeiro, post /api/v1/usuarios/{id}/roles/admin apontando para o próprio id. é a escalada de privilégio óbvia.",
                  "esperadoHtml": "<code>403</code>. Conferir depois, pelo banco, que o conjunto de roles do <code>financeiro</code> não mudou.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 206,
                  "ordem": 5
                }
              ]
            }
          ],
          "assercoes": [],
          "linha": 173,
          "stats": {
            "passos": 5,
            "na": 0,
            "assercoes": 0
          }
        },
        {
          "key": "ROTEIRO-02/J-041.W",
          "id": "J-041.W",
          "escopoId": "J-041.W",
          "kind": "jornada",
          "nivel": 3,
          "titulo": "Criar usuário interno e gerenciar roles cumulativas",
          "anchor": "j-041w---criar-usurio-interno-e-gerenciar-roles-cumulativas",
          "ordem": 3,
          "meta": [
            {
              "chave": "ID",
              "texto": "J-041.W",
              "html": "<code>J-041.W</code>"
            },
            {
              "chave": "Tipo",
              "texto": "Positiva",
              "html": "Positiva"
            },
            {
              "chave": "Persona",
              "texto": "admin (com TOTP — PRE-05 + autenticador)",
              "html": "<code>admin</code> (com TOTP — <code>PRE-05</code> + autenticador)"
            },
            {
              "chave": "Superfície",
              "texto": "Web + API",
              "html": "Web + API"
            },
            {
              "chave": "Pré-condições",
              "texto": "PRE-01 PRE-02 PRE-04 PRE-05 PRE-10",
              "html": "<code>PRE-01</code> <code>PRE-02</code> <code>PRE-04</code> <code>PRE-05</code> <code>PRE-10</code>"
            },
            {
              "chave": "Endpoints tocados",
              "texto": "POST /admin/usuarios, POST /usuarios/{id}/roles/{role}, DELETE /usuarios/{id}/roles/{role}, GET /usuarios/{id}/roles",
              "html": "<code>POST /admin/usuarios</code>, <code>POST /usuarios/{id}/roles/{role}</code>, <code>DELETE /usuarios/{id}/roles/{role}</code>, <code>GET /usuarios/{id}/roles</code>"
            },
            {
              "chave": "Step-up",
              "texto": "sim nas mutações de role",
              "html": "<strong>sim</strong> nas mutações de role"
            },
            {
              "chave": "Duração",
              "texto": "12 min",
              "html": "12 min"
            },
            {
              "chave": "Automação equivalente",
              "texto": "admin-flow.spec.ts (parcial, contra MSW)",
              "html": "<code>admin-flow.spec.ts</code> (parcial, contra MSW)"
            },
            {
              "chave": "Só o manual cobre",
              "texto": "Step-up com TOTP real, sincronização da role principal, auditoria",
              "html": "Step-up com TOTP real, sincronização da role principal, auditoria"
            }
          ],
          "metaIndex": {
            "ID": "J-041.W",
            "Tipo": "Positiva",
            "Persona": "admin (com TOTP — PRE-05 + autenticador)",
            "Superfície": "Web + API",
            "Pré-condições": "PRE-01 PRE-02 PRE-04 PRE-05 PRE-10",
            "Endpoints tocados": "POST /admin/usuarios, POST /usuarios/{id}/roles/{role}, DELETE /usuarios/{id}/roles/{role}, GET /usuarios/{id}/roles",
            "Step-up": "sim nas mutações de role",
            "Duração": "12 min",
            "Automação equivalente": "admin-flow.spec.ts (parcial, contra MSW)",
            "Só o manual cobre": "Step-up com TOTP real, sincronização da role principal, auditoria"
          },
          "notas": [
            "<strong>O <code>admin</code> precisa de TOTP habilitado.</strong> Se o <code>ROTEIRO-00</code> §6.2 não habilitou para ele, as mutações de role param no step-up. Habilite antes de começar — nenhuma jornada deste roteiro contorna isso."
          ],
          "grupos": [
            {
              "id": "g1",
              "tituloHtml": null,
              "tela": null,
              "implicito": true,
              "passos": [
                {
                  "key": "ROTEIRO-02/J-041.W/P1",
                  "id": "P1",
                  "hash": "47e29206",
                  "textoHtml": "Criar um usuário interno descartável.",
                  "comoHtml": "Pela API, <code>POST /api/v1/admin/usuarios</code> com o token do <code>admin</code>. Este endpoint só aceita <code>ADMIN</code> ou <code>CLIENTE</code> — <code>FINANCEIRO</code> e <code>BACKOFFICE</code> <strong>não</strong> podem ser atribuídos no cadastro, só por promoção. Usar a data de hoje no e-mail.",
                  "textoBusca": "criar um usuário interno descartável. pela api, post /api/v1/admin/usuarios com o token do admin. este endpoint só aceita admin ou cliente — financeiro e backoffice não podem ser atribuídos no cadastro, só por promoção. usar a data de hoje no e-mail.",
                  "esperadoHtml": "<code>201</code>. <strong>Anotar o id.</strong>",
                  "blocos": [
                    {
                      "tipo": "codigo",
                      "lang": "json",
                      "regiao": "como",
                      "conteudo": "{ \"username\": \"governanca-<AAAA-MM-DD>@sep.test\",\n  \"password\": \"jornada-governanca-sep-2026\",\n  \"role\": \"CLIENTE\" }"
                    }
                  ],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 235,
                  "ordem": 1
                },
                {
                  "key": "ROTEIRO-02/J-041.W/P2",
                  "id": "P2",
                  "hash": "7852d48f",
                  "textoHtml": "Tentar criar já como <code>FINANCEIRO</code>.",
                  "comoHtml": "Repetir o P1 com <code>\"role\": \"FINANCEIRO\"</code> e outro e-mail. A restrição é deliberada: role interna se conquista por promoção auditada, não por cadastro.",
                  "textoBusca": "tentar criar já como financeiro. repetir o p1 com \"role\": \"financeiro\" e outro e-mail. a restrição é deliberada: role interna se conquista por promoção auditada, não por cadastro.",
                  "esperadoHtml": "recusado com <code>400</code>, código <code>USR-400-002</code>, mensagem mandando promover pelo endpoint de role. Nenhum usuário criado. &gt; <strong>O código <code>USR-400-002</code> é ambíguo.</strong> Ele identifica <strong>duas</strong> regras sem relação: esta, e &gt; &quot;usuário deve manter ao menos uma role&quot; (<code>J-041.W-N1</code> P2). Quem ramificar tratamento de &gt; erro por código no front vai acertar a mensagem errada. Ver §Divergências.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 245,
                  "ordem": 2
                },
                {
                  "key": "ROTEIRO-02/J-041.W/P3",
                  "id": "P3",
                  "hash": "16cb1ae7",
                  "textoHtml": "Abrir o detalhe do novo usuário no web.",
                  "comoHtml": "<code>/app/admin/users</code>, filtrar pelo e-mail criado, abrir o detalhe.",
                  "textoBusca": "abrir o detalhe do novo usuário no web. /app/admin/users, filtrar pelo e-mail criado, abrir o detalhe.",
                  "esperadoHtml": "Perfil <code>CLIENTE</code>, uma role cumulativa (<code>CLIENTE</code>), e <strong>sem</strong> o aviso de autoalteração — ele não é você.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 253,
                  "ordem": 3
                },
                {
                  "key": "ROTEIRO-02/J-041.W/P4",
                  "id": "P4",
                  "hash": "cb4a9e12",
                  "textoHtml": "Adicionar a role <code>FINANCEIRO</code>, passando pelo step-up.",
                  "comoHtml": "No bloco de roles, adicionar <code>FINANCEIRO</code>. O step-up é o padrão da fase: <strong>Iniciar</strong>, código TOTP do <code>admin</code>, <strong>Confirmar</strong>.",
                  "textoBusca": "adicionar a role financeiro, passando pelo step-up. no bloco de roles, adicionar financeiro. o step-up é o padrão da fase: iniciar, código totp do admin, confirmar.",
                  "esperadoHtml": "<code>200</code>; o conjunto passa a ter <code>CLIENTE</code> e <code>FINANCEIRO</code>.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 257,
                  "ordem": 4
                },
                {
                  "key": "ROTEIRO-02/J-041.W/P5",
                  "id": "P5",
                  "hash": "e4067154",
                  "textoHtml": "Conferir que a coluna <strong>Perfil</strong> mudou sozinha.",
                  "comoHtml": "Voltar à lista. Ninguém editou o campo Perfil, mas ele é derivado por precedência, e <code>FINANCEIRO</code> ganha de <code>CLIENTE</code>.",
                  "textoBusca": "conferir que a coluna perfil mudou sozinha. voltar à lista. ninguém editou o campo perfil, mas ele é derivado por precedência, e financeiro ganha de cliente.",
                  "esperadoHtml": "Perfil agora é <code>FINANCEIRO</code>, com as duas roles preservadas no detalhe.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 261,
                  "ordem": 5
                },
                {
                  "key": "ROTEIRO-02/J-041.W/P6",
                  "id": "P6",
                  "hash": "1c75ad1e",
                  "textoHtml": "Adicionar <code>BACKOFFICE</code> e conferir que a principal <strong>não</strong> muda.",
                  "comoHtml": "Repetir o P4 com <code>BACKOFFICE</code>. Agora são três roles, e <code>FINANCEIRO</code> continua tendo precedência sobre <code>BACKOFFICE</code>. É o passo que separa &quot;acumula&quot; de &quot;substitui&quot;.",
                  "textoBusca": "adicionar backoffice e conferir que a principal não muda. repetir o p4 com backoffice. agora são três roles, e financeiro continua tendo precedência sobre backoffice. é o passo que separa \"acumula\" de \"substitui\".",
                  "esperadoHtml": "três roles no conjunto; Perfil segue <code>FINANCEIRO</code>.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 265,
                  "ordem": 6
                },
                {
                  "key": "ROTEIRO-02/J-041.W/P7",
                  "id": "P7",
                  "hash": "16acdd83",
                  "textoHtml": "Remover <code>FINANCEIRO</code> e ver a principal recuar.",
                  "comoHtml": "Remover a role, com step-up.",
                  "textoBusca": "remover financeiro e ver a principal recuar. remover a role, com step-up.",
                  "esperadoHtml": "duas roles (<code>CLIENTE</code>, <code>BACKOFFICE</code>); Perfil passa a <code>BACKOFFICE</code>.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 269,
                  "ordem": 7
                },
                {
                  "key": "ROTEIRO-02/J-041.W/P8",
                  "id": "P8",
                  "hash": "980b84a5",
                  "textoHtml": "Conferir a trilha de auditoria.",
                  "comoHtml": "Terminal do banco. Mudança de privilégio sem trilha é achado de compliance.",
                  "textoBusca": "conferir a trilha de auditoria. terminal do banco. mudança de privilégio sem trilha é achado de compliance.",
                  "esperadoHtml": "um evento por mutação — três, se você fez P4, P6 e P7.",
                  "blocos": [
                    {
                      "tipo": "codigo",
                      "lang": "bash",
                      "regiao": "como",
                      "conteudo": "docker exec sep-postgres psql -U sep -d sep_dev \\\n  -c \"SELECT tipo, data_evento FROM audit_log_seguranca\n      WHERE tipo IN ('USUARIO_ROLES_ALTERADAS','ROLE_ALTERADO')\n      ORDER BY data_evento DESC LIMIT 6;\""
                    }
                  ],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 272,
                  "ordem": 8
                },
                {
                  "key": "ROTEIRO-02/J-041.W/P9",
                  "id": "P9",
                  "hash": "8cd49838",
                  "textoHtml": "Conferir o estado final nas duas tabelas.",
                  "comoHtml": "Terminal do banco, mesma consulta do <a href=\"#j-040w---admin-consulta-usuários-e-roles\" rel=\"noreferrer\"><code>J-040.W</code></a> P7, filtrando pelo novo usuário.",
                  "textoBusca": "conferir o estado final nas duas tabelas. terminal do banco, mesma consulta do j-040.w p7, filtrando pelo novo usuário.",
                  "esperadoHtml": "<code>usuario_role</code> com <code>CLIENTE</code> e <code>BACKOFFICE</code>; <code>usuario.role</code> = <code>BACKOFFICE</code>.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 281,
                  "ordem": 9
                }
              ]
            }
          ],
          "assercoes": [
            {
              "key": "ROTEIRO-02/J-041.W/#8e9fd903",
              "id": null,
              "hash": "97b8f78f",
              "textoHtml": "Usuário de governança criado, roles acumuladas e removidas com step-up, principal derivada corretamente; anotar o e-mail usado",
              "comoHtml": null,
              "textoBusca": "usuário de governança criado, roles acumuladas e removidas com step-up, principal derivada corretamente; anotar o e-mail usado",
              "esperadoHtml": null,
              "blocos": [],
              "na": false,
              "naMotivo": null,
              "marcadoNaFonte": false,
              "linha": 288,
              "ordem": 1
            }
          ],
          "linha": 214,
          "stats": {
            "passos": 9,
            "na": 0,
            "assercoes": 1
          }
        },
        {
          "key": "ROTEIRO-02/J-041.W-N1",
          "id": "J-041.W-N1",
          "escopoId": "J-041.W-N1",
          "kind": "jornada",
          "nivel": 3,
          "titulo": "Limites da gestão de roles",
          "anchor": "j-041w-n1---limites-da-gesto-de-roles",
          "ordem": 4,
          "meta": [
            {
              "chave": "ID",
              "texto": "J-041.W-N1",
              "html": "<code>J-041.W-N1</code>"
            },
            {
              "chave": "Tipo",
              "texto": "Negativa — regra de negócio e segurança",
              "html": "Negativa — regra de negócio e segurança"
            },
            {
              "chave": "Persona",
              "texto": "admin",
              "html": "<code>admin</code>"
            },
            {
              "chave": "Superfície",
              "texto": "API",
              "html": "API"
            },
            {
              "chave": "Vetor",
              "texto": "Autopromoção, usuário sem role e mutação sem step-up",
              "html": "Autopromoção, usuário sem role e mutação sem step-up"
            },
            {
              "chave": "Comportamento seguro esperado",
              "texto": "Recusa com código próprio, sem alterar estado",
              "html": "Recusa com código próprio, sem alterar estado"
            },
            {
              "chave": "Pré-condições",
              "texto": "PRE-01 PRE-04 PRE-05 PRE-10 + J-041.W concluída",
              "html": "<code>PRE-01</code> <code>PRE-04</code> <code>PRE-05</code> <code>PRE-10</code> + <code>J-041.W</code> concluída"
            }
          ],
          "metaIndex": {
            "ID": "J-041.W-N1",
            "Tipo": "Negativa — regra de negócio e segurança",
            "Persona": "admin",
            "Superfície": "API",
            "Vetor": "Autopromoção, usuário sem role e mutação sem step-up",
            "Comportamento seguro esperado": "Recusa com código próprio, sem alterar estado",
            "Pré-condições": "PRE-01 PRE-04 PRE-05 PRE-10 + J-041.W concluída"
          },
          "notas": [],
          "grupos": [
            {
              "id": "g1",
              "tituloHtml": null,
              "tela": null,
              "implicito": true,
              "passos": [
                {
                  "key": "ROTEIRO-02/J-041.W-N1/P1",
                  "id": "P1",
                  "hash": "57c9a5b2",
                  "textoHtml": "Tentar alterar as <strong>próprias</strong> roles.",
                  "comoHtml": "Com o token do <code>admin</code> e step-up válido, <code>POST /api/v1/usuarios/{idDoProprioAdmin}/roles/FINANCEIRO</code>. Um ADMIN que se rebaixa por engano tranca a própria governança; um que se promove burla a segregação. A regra existe para os dois casos.",
                  "textoBusca": "tentar alterar as próprias roles. com o token do admin e step-up válido, post /api/v1/usuarios/{iddoproprioadmin}/roles/financeiro. um admin que se rebaixa por engano tranca a própria governança; um que se promove burla a segregação. a regra existe para os dois casos.",
                  "esperadoHtml": "<code>403</code> com código <code>USR-403-002</code>, mensagem sobre não alterar as próprias roles.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 307,
                  "ordem": 1
                },
                {
                  "key": "ROTEIRO-02/J-041.W-N1/P2",
                  "id": "P2",
                  "hash": "e83b7a24",
                  "textoHtml": "Tentar remover a <strong>última</strong> role de um usuário.",
                  "comoHtml": "No usuário de governança, remover as roles até sobrar uma e tentar remover essa. Usuário sem role nenhuma não consegue nem autenticar direito.",
                  "textoBusca": "tentar remover a última role de um usuário. no usuário de governança, remover as roles até sobrar uma e tentar remover essa. usuário sem role nenhuma não consegue nem autenticar direito.",
                  "esperadoHtml": "<code>400</code> com código <code>USR-400-002</code>.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 312,
                  "ordem": 2
                },
                {
                  "key": "ROTEIRO-02/J-041.W-N1/P3",
                  "id": "P3",
                  "hash": "28009433",
                  "textoHtml": "Tentar uma mutação de role <strong>sem</strong> o header de step-up.",
                  "comoHtml": "Repetir o <code>POST .../roles/FINANCEIRO</code> no usuário de governança, com token de ADMIN válido mas <strong>sem</strong> <code>X-Step-Up-Token</code>.",
                  "textoBusca": "tentar uma mutação de role sem o header de step-up. repetir o post .../roles/financeiro no usuário de governança, com token de admin válido mas sem x-step-up-token.",
                  "esperadoHtml": "<code>403</code>. Alteração de privilégio nunca passa só com o token de sessão.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 316,
                  "ordem": 3
                },
                {
                  "key": "ROTEIRO-02/J-041.W-N1/P4",
                  "id": "P4",
                  "hash": "3cd3d6a0",
                  "textoHtml": "Repetir o P3 no endpoint <strong>legado</strong> de role.",
                  "comoHtml": "<code>POST /api/v1/usuarios/{id}/role</code>, sem step-up. Este endpoint é da Sprint 8 e substitui o conjunto inteiro por uma role só — o caminho mais destrutivo dos dois. Ele <strong>também</strong> exige step-up; o passo confere que a proteção não ficou só no endpoint novo.",
                  "textoBusca": "repetir o p3 no endpoint legado de role. post /api/v1/usuarios/{id}/role, sem step-up. este endpoint é da sprint 8 e substitui o conjunto inteiro por uma role só — o caminho mais destrutivo dos dois. ele também exige step-up; o passo confere que a proteção não ficou só no endpoint novo.",
                  "esperadoHtml": "<code>403</code> sem step-up. Um <code>200</code> aqui é escalada de privilégio por endpoint esquecido.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 320,
                  "ordem": 4
                },
                {
                  "key": "ROTEIRO-02/J-041.W-N1/P5",
                  "id": "P5",
                  "hash": "bf0e33d1",
                  "textoHtml": "Conferir que nada mudou.",
                  "comoHtml": "<code>GET /api/v1/usuarios/{id}/roles</code> no usuário de governança e na conta do <code>admin</code>.",
                  "textoBusca": "conferir que nada mudou. get /api/v1/usuarios/{id}/roles no usuário de governança e na conta do admin.",
                  "esperadoHtml": "os dois conjuntos iguais aos do fim da <code>J-041.W</code>.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 326,
                  "ordem": 5
                }
              ]
            }
          ],
          "assercoes": [],
          "linha": 293,
          "stats": {
            "passos": 5,
            "na": 0,
            "assercoes": 0
          }
        },
        {
          "key": "ROTEIRO-02/J-042.W",
          "id": "J-042.W",
          "escopoId": "J-042.W",
          "kind": "jornada",
          "nivel": 3,
          "titulo": "Promoção não vale na sessão já aberta",
          "anchor": "j-042w---promoo-no-vale-na-sesso-j-aberta",
          "ordem": 5,
          "meta": [
            {
              "chave": "ID",
              "texto": "J-042.W",
              "html": "<code>J-042.W</code>"
            },
            {
              "chave": "Tipo",
              "texto": "Positiva — comportamento de sessão",
              "html": "Positiva — comportamento de sessão"
            },
            {
              "chave": "Persona",
              "texto": "admin + usuário de governança da J-041.W",
              "html": "<code>admin</code> + usuário de governança da <code>J-041.W</code>"
            },
            {
              "chave": "Superfície",
              "texto": "Web (duas sessões)",
              "html": "Web (duas sessões)"
            },
            {
              "chave": "Pré-condições",
              "texto": "PRE-01 PRE-02 PRE-04 PRE-05 PRE-10 + J-041.W concluída",
              "html": "<code>PRE-01</code> <code>PRE-02</code> <code>PRE-04</code> <code>PRE-05</code> <code>PRE-10</code> + <code>J-041.W</code> concluída"
            },
            {
              "chave": "Endpoints tocados",
              "texto": "POST /usuarios/{id}/roles/{role}, POST /auth/login, POST /auth/refresh",
              "html": "<code>POST /usuarios/{id}/roles/{role}</code>, <code>POST /auth/login</code>, <code>POST /auth/refresh</code>"
            },
            {
              "chave": "Step-up",
              "texto": "sim, na promoção",
              "html": "sim, na promoção"
            },
            {
              "chave": "Duração",
              "texto": "10 min",
              "html": "10 min"
            },
            {
              "chave": "Automação equivalente",
              "texto": "nenhuma — exige duas sessões simultâneas contra backend real",
              "html": "nenhuma — exige duas sessões simultâneas contra backend real"
            },
            {
              "chave": "Só o manual cobre",
              "texto": "Efeito temporal da claim de roles no JWT",
              "html": "Efeito temporal da claim de roles no JWT"
            }
          ],
          "metaIndex": {
            "ID": "J-042.W",
            "Tipo": "Positiva — comportamento de sessão",
            "Persona": "admin + usuário de governança da J-041.W",
            "Superfície": "Web (duas sessões)",
            "Pré-condições": "PRE-01 PRE-02 PRE-04 PRE-05 PRE-10 + J-041.W concluída",
            "Endpoints tocados": "POST /usuarios/{id}/roles/{role}, POST /auth/login, POST /auth/refresh",
            "Step-up": "sim, na promoção",
            "Duração": "10 min",
            "Automação equivalente": "nenhuma — exige duas sessões simultâneas contra backend real",
            "Só o manual cobre": "Efeito temporal da claim de roles no JWT"
          },
          "notas": [
            "<strong>Por que isto é jornada, e não detalhe.</strong> O backend resolve permissão pela claim <code>roles</code> do token, sem reler o banco a cada request. Então uma promoção <strong>não</strong> alcança quem já está logado: o access token velho continua valendo até expirar (15 minutos por padrão) ou até um refresh, que <strong>relê o usuário</strong> e emite token novo. Quem não souber disso vai reportar &quot;promovi e não funcionou&quot; como defeito."
          ],
          "grupos": [
            {
              "id": "g1",
              "tituloHtml": null,
              "tela": null,
              "implicito": true,
              "passos": [
                {
                  "key": "ROTEIRO-02/J-042.W/P1",
                  "id": "P1",
                  "hash": "ca734871",
                  "textoHtml": "Abrir duas sessões, em janelas separadas.",
                  "comoHtml": "Janela normal com o <code>admin</code>; <strong>janela anônima</strong> com o usuário de governança (<code>jornada-governanca-sep-2026</code>). Anônima evita que as duas sessões briguem pelo mesmo storage.",
                  "textoBusca": "abrir duas sessões, em janelas separadas. janela normal com o admin; janela anônima com o usuário de governança (jornada-governanca-sep-2026). anônima evita que as duas sessões briguem pelo mesmo storage.",
                  "esperadoHtml": "as duas autenticadas ao mesmo tempo.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 355,
                  "ordem": 1
                },
                {
                  "key": "ROTEIRO-02/J-042.W/P2",
                  "id": "P2",
                  "hash": "7c1992ad",
                  "textoHtml": "Na janela do usuário comum, tentar <code>/app/admin</code>.",
                  "comoHtml": "URL direta. Ele está como <code>CLIENTE</code>/<code>BACKOFFICE</code> no fim da <code>J-041.W</code>.",
                  "textoBusca": "na janela do usuário comum, tentar /app/admin. url direta. ele está como cliente/backoffice no fim da j-041.w.",
                  "esperadoHtml": "negado.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 360,
                  "ordem": 2
                },
                {
                  "key": "ROTEIRO-02/J-042.W/P3",
                  "id": "P3",
                  "hash": "dc174ffb",
                  "textoHtml": "Na janela do <code>admin</code>, promover o usuário a <code>ADMIN</code>.",
                  "comoHtml": "<code>/app/admin/users/:id</code>, adicionar a role <code>ADMIN</code>, com step-up.",
                  "textoBusca": "na janela do admin, promover o usuário a admin. /app/admin/users/:id, adicionar a role admin, com step-up.",
                  "esperadoHtml": "<code>200</code>; o conjunto passa a incluir <code>ADMIN</code>; Perfil vira <code>ADMIN</code>.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 363,
                  "ordem": 3
                },
                {
                  "key": "ROTEIRO-02/J-042.W/P4",
                  "id": "P4",
                  "hash": "75d5739c",
                  "textoHtml": "Na janela do usuário, <strong>sem recarregar nem sair</strong>, tentar <code>/app/admin</code> de novo.",
                  "comoHtml": "Repetir o P2 imediatamente. <strong>O esperado aqui é continuar negado</strong> — o token dessa sessão foi emitido antes da promoção e carrega as roles antigas.",
                  "textoBusca": "na janela do usuário, sem recarregar nem sair, tentar /app/admin de novo. repetir o p2 imediatamente. o esperado aqui é continuar negado — o token dessa sessão foi emitido antes da promoção e carrega as roles antigas.",
                  "esperadoHtml": "ainda negado. Se passar de imediato, o backend está consultando o banco por request em vez de confiar na claim, e a premissa de sessão do sistema é outra: registre como ocorrência, porque muda a análise de segurança.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 366,
                  "ordem": 4
                },
                {
                  "key": "ROTEIRO-02/J-042.W/P5",
                  "id": "P5",
                  "hash": "e8cc16e8",
                  "textoHtml": "Sair e entrar de novo na janela do usuário.",
                  "comoHtml": "Logout e login com as mesmas credenciais. É o caminho curto; o longo é esperar o access token expirar e o refresh acontecer sozinho.",
                  "textoBusca": "sair e entrar de novo na janela do usuário. logout e login com as mesmas credenciais. é o caminho curto; o longo é esperar o access token expirar e o refresh acontecer sozinho.",
                  "esperadoHtml": "agora <code>/app/admin</code> abre, e o item de administração aparece no menu.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 372,
                  "ordem": 5
                },
                {
                  "key": "ROTEIRO-02/J-042.W/P6",
                  "id": "P6",
                  "hash": "e96eab7c",
                  "textoHtml": "Conferir a claim do token novo.",
                  "comoHtml": "Na aba <strong>Network</strong>, copiar o <code>accessToken</code> da resposta de login e colar em <a href=\"https://jwt.io\" rel=\"noreferrer\">jwt.io</a> — ou decodificar o miolo em base64 no terminal. Interessa a claim <code>roles</code>.",
                  "textoBusca": "conferir a claim do token novo. na aba network, copiar o accesstoken da resposta de login e colar em jwt.io — ou decodificar o miolo em base64 no terminal. interessa a claim roles.",
                  "esperadoHtml": "<code>roles</code> contém <code>ADMIN</code>. É a prova direta de onde a permissão vem.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 376,
                  "ordem": 6
                },
                {
                  "key": "ROTEIRO-02/J-042.W/P7",
                  "id": "P7",
                  "hash": "a3047d10",
                  "textoHtml": "Desfazer a promoção.",
                  "comoHtml": "Na janela do <code>admin</code>, remover a role <code>ADMIN</code> do usuário de governança, com step-up. <strong>Não deixe um ADMIN extra vivo</strong> ao fim da execução.",
                  "textoBusca": "desfazer a promoção. na janela do admin, remover a role admin do usuário de governança, com step-up. não deixe um admin extra vivo ao fim da execução.",
                  "esperadoHtml": "conjunto volta ao do fim da <code>J-041.W</code>.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 381,
                  "ordem": 7
                }
              ]
            }
          ],
          "assercoes": [
            {
              "key": "ROTEIRO-02/J-042.W/#f27dabe8",
              "id": null,
              "hash": "c96f86fa",
              "textoHtml": "Promoção só valeu depois de novo token; ADMIN extra removido ao final",
              "comoHtml": null,
              "textoBusca": "promoção só valeu depois de novo token; admin extra removido ao final",
              "esperadoHtml": null,
              "blocos": [],
              "na": false,
              "naMotivo": null,
              "marcadoNaFonte": false,
              "linha": 388,
              "ordem": 1
            }
          ],
          "linha": 332,
          "stats": {
            "passos": 7,
            "na": 0,
            "assercoes": 1
          }
        },
        {
          "key": "ROTEIRO-02/J-043.W",
          "id": "J-043.W",
          "escopoId": "J-043.W",
          "kind": "jornada",
          "nivel": 3,
          "titulo": "Alterar parâmetro operacional com step-up e histórico",
          "anchor": "j-043w---alterar-parmetro-operacional-com-step-up-e-histrico",
          "ordem": 6,
          "meta": [
            {
              "chave": "ID",
              "texto": "J-043.W",
              "html": "<code>J-043.W</code>"
            },
            {
              "chave": "Tipo",
              "texto": "Positiva",
              "html": "Positiva"
            },
            {
              "chave": "Persona",
              "texto": "admin",
              "html": "<code>admin</code>"
            },
            {
              "chave": "Superfície",
              "texto": "Web",
              "html": "Web"
            },
            {
              "chave": "Pré-condições",
              "texto": "PRE-01 PRE-02 PRE-04 PRE-05 PRE-10",
              "html": "<code>PRE-01</code> <code>PRE-02</code> <code>PRE-04</code> <code>PRE-05</code> <code>PRE-10</code>"
            },
            {
              "chave": "Endpoints tocados",
              "texto": "GET /governanca/parametros, GET /governanca/parametros/{chave}, PATCH /governanca/parametros/{chave}",
              "html": "<code>GET /governanca/parametros</code>, <code>GET /governanca/parametros/{chave}</code>, <code>PATCH /governanca/parametros/{chave}</code>"
            },
            {
              "chave": "Step-up",
              "texto": "sim",
              "html": "<strong>sim</strong>"
            },
            {
              "chave": "Duração",
              "texto": "12 min",
              "html": "12 min"
            },
            {
              "chave": "Automação equivalente",
              "texto": "governanca.spec.ts (contra MSW)",
              "html": "<code>governanca.spec.ts</code> (contra MSW)"
            },
            {
              "chave": "Só o manual cobre",
              "texto": "Versionamento real, histórico persistido e a ausência de efeito no motor",
              "html": "Versionamento real, histórico persistido e a <strong>ausência de efeito</strong> no motor"
            }
          ],
          "metaIndex": {
            "ID": "J-043.W",
            "Tipo": "Positiva",
            "Persona": "admin",
            "Superfície": "Web",
            "Pré-condições": "PRE-01 PRE-02 PRE-04 PRE-05 PRE-10",
            "Endpoints tocados": "GET /governanca/parametros, GET /governanca/parametros/{chave}, PATCH /governanca/parametros/{chave}",
            "Step-up": "sim",
            "Duração": "12 min",
            "Automação equivalente": "governanca.spec.ts (contra MSW)",
            "Só o manual cobre": "Versionamento real, histórico persistido e a ausência de efeito no motor"
          },
          "notas": [
            "<strong>Leia o §&quot;O achado&quot; antes deste bloco.</strong> A alteração é registrada com rigor — versão, valor anterior, justificativa, ator, auditoria — e <strong>não muda comportamento de nenhum motor</strong>. Esta jornada mede o registro e <strong>declara</strong> a ausência de efeito; ela não finge que o parâmetro é aplicado."
          ],
          "grupos": [
            {
              "id": "g2",
              "tituloHtml": "Tela <code>/app/admin/parametros</code>",
              "tela": "/app/admin/parametros",
              "implicito": false,
              "passos": [
                {
                  "key": "ROTEIRO-02/J-043.W/P1",
                  "id": "P1",
                  "hash": "8c4a6bd2",
                  "textoHtml": "Listar os parâmetros governados.",
                  "comoHtml": "Abrir <strong>Parâmetros</strong> na administração.",
                  "textoBusca": "listar os parâmetros governados. abrir parâmetros na administração.",
                  "esperadoHtml": "11 parâmetros, com chave, tipo, valor e versão. Todos em versão <code>1</code> se nenhuma execução anterior mexeu.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 416,
                  "ordem": 1
                },
                {
                  "key": "ROTEIRO-02/J-043.W/P2",
                  "id": "P2",
                  "hash": "0d35a003",
                  "textoHtml": "Abrir o detalhe de <code>backoffice.webhook.pendente.horas</code>.",
                  "comoHtml": "Clicar na linha. O detalhe traz tipo, valor atual, versão, descrição, o formulário de alteração e o histórico.",
                  "textoBusca": "abrir o detalhe de backoffice.webhook.pendente.horas. clicar na linha. o detalhe traz tipo, valor atual, versão, descrição, o formulário de alteração e o histórico.",
                  "esperadoHtml": "tipo <code>INTEGER</code>, valor <code>1</code>, versão <code>1</code>, e histórico dizendo que <strong>não há alterações registradas</strong>.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 420,
                  "ordem": 2
                }
              ]
            },
            {
              "id": "g3",
              "tituloHtml": "Alteração",
              "tela": null,
              "implicito": false,
              "passos": [
                {
                  "key": "ROTEIRO-02/J-043.W/P3",
                  "id": "P3",
                  "hash": "65b5baa9",
                  "textoHtml": "Alterar o valor sem preencher a justificativa.",
                  "comoHtml": "Informar o novo valor <code>6</code> e tentar salvar deixando a justificativa em branco. A justificativa é obrigatória por contrato, não só por educação — ela é persistida no histórico e é o que explica a mudança meses depois.",
                  "textoBusca": "alterar o valor sem preencher a justificativa. informar o novo valor 6 e tentar salvar deixando a justificativa em branco. a justificativa é obrigatória por contrato, não só por educação — ela é persistida no histórico e é o que explica a mudança meses depois.",
                  "esperadoHtml": "recusado, com a mensagem pedindo a justificativa.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 428,
                  "ordem": 1
                },
                {
                  "key": "ROTEIRO-02/J-043.W/P4",
                  "id": "P4",
                  "hash": "60377a29",
                  "textoHtml": "Alterar com justificativa, passando pelo step-up.",
                  "comoHtml": "Novo valor <code>6</code>, justificativa reconhecível (por exemplo <code>roteiro-02 execucao &lt;data&gt;</code>), salvar. Step-up: <strong>Iniciar</strong>, TOTP do <code>admin</code>, <strong>Confirmar</strong>.",
                  "textoBusca": "alterar com justificativa, passando pelo step-up. novo valor 6, justificativa reconhecível (por exemplo roteiro-02 execucao <data>), salvar. step-up: iniciar, totp do admin, confirmar.",
                  "esperadoHtml": "<code>200</code>; valor passa a <code>6</code> e a <strong>versão vai para 2</strong>.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 433,
                  "ordem": 2
                },
                {
                  "key": "ROTEIRO-02/J-043.W/P5",
                  "id": "P5",
                  "hash": "53c02662",
                  "textoHtml": "Conferir o histórico na tela.",
                  "comoHtml": "Ler o bloco <strong>Histórico de versões</strong>.",
                  "textoBusca": "conferir o histórico na tela. ler o bloco histórico de versões.",
                  "esperadoHtml": "uma entrada com versão, valor anterior <code>1</code>, valor novo <code>6</code>, sua justificativa e a data. Valor anterior ausente ou justificativa truncada é ocorrência.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 437,
                  "ordem": 3
                },
                {
                  "key": "ROTEIRO-02/J-043.W/P6",
                  "id": "P6",
                  "hash": "7e7835bb",
                  "textoHtml": "Conferir o histórico no banco.",
                  "comoHtml": "Terminal do banco. A tela pode estar montando o histórico a partir do que ela mesma acabou de enviar; esta consulta prova que ele foi persistido.",
                  "textoBusca": "conferir o histórico no banco. terminal do banco. a tela pode estar montando o histórico a partir do que ela mesma acabou de enviar; esta consulta prova que ele foi persistido.",
                  "esperadoHtml": "parâmetro em <code>6</code>/versão 2, e uma linha de histórico com <code>1</code> → <code>6</code>.",
                  "blocos": [
                    {
                      "tipo": "codigo",
                      "lang": "bash",
                      "regiao": "como",
                      "conteudo": "docker exec sep-postgres psql -U sep -d sep_dev \\\n  -c \"SELECT p.chave, p.valor, p.versao, v.valor_anterior, v.valor_novo, v.justificativa\n      FROM parametro_operacional p\n      LEFT JOIN versao_parametro_operacional v ON v.parametro_id = p.id\n      WHERE p.chave = 'backoffice.webhook.pendente.horas' ORDER BY v.versao;\""
                    }
                  ],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 441,
                  "ordem": 4
                },
                {
                  "key": "ROTEIRO-02/J-043.W/P7",
                  "id": "P7",
                  "hash": "15178d9b",
                  "textoHtml": "Conferir a auditoria.",
                  "comoHtml": "Terminal do banco.",
                  "textoBusca": "conferir a auditoria. terminal do banco.",
                  "esperadoHtml": "um evento, com o id do <code>admin</code> como ator.",
                  "blocos": [
                    {
                      "tipo": "codigo",
                      "lang": "bash",
                      "regiao": "como",
                      "conteudo": "docker exec sep-postgres psql -U sep -d sep_dev \\\n  -c \"SELECT tipo, usuario_id, data_evento FROM audit_log_seguranca\n      WHERE tipo = 'PARAMETRO_OPERACIONAL_ALTERADO' ORDER BY data_evento DESC LIMIT 3;\""
                    }
                  ],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 452,
                  "ordem": 5
                },
                {
                  "key": "ROTEIRO-02/J-043.W/P8",
                  "id": "P8",
                  "hash": "7323d9fe",
                  "textoHtml": "Confirmar que o valor efetivo do backend <strong>não</strong> mudou.",
                  "comoHtml": "Este é o passo do achado. O valor que o <code>VerificadorPendenciasJob</code> usa vem de <code>app.backoffice.verificador.webhook-falhou-horas</code>, no <code>application.yml</code> do <code>sep-api</code> — não da tabela. Abrir o arquivo e comparar com o que a tela mostra.",
                  "textoBusca": "confirmar que o valor efetivo do backend não mudou. este é o passo do achado. o valor que o verificadorpendenciasjob usa vem de app.backoffice.verificador.webhook-falhou-horas, no application.yml do sep-api — não da tabela. abrir o arquivo e comparar com o que a tela mostra.",
                  "esperadoHtml": "o <code>yml</code> continua em <code>1</code> enquanto a tela mostra <code>6</code>. <strong>Divergência é o resultado correto desta execução</strong> e a evidência do achado: a governança registrou uma decisão que o sistema não aplica. Registrar como ocorrência de produto, uma vez por execução.",
                  "blocos": [
                    {
                      "tipo": "codigo",
                      "lang": "bash",
                      "regiao": "como",
                      "conteudo": "grep -n \"webhook-falhou-horas\" \\\n  /home/mauricio/workspaces/workspace-sep/sep-api/src/main/resources/application.yml"
                    }
                  ],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 460,
                  "ordem": 6
                },
                {
                  "key": "ROTEIRO-02/J-043.W/P9",
                  "id": "P9",
                  "hash": "755117fb",
                  "textoHtml": "Reverter o parâmetro.",
                  "comoHtml": "Alterar de volta para <code>1</code>, com justificativa (<code>reversao roteiro-02</code>). Deixar valor divergente atrapalha quem executar o <code>ROTEIRO-08</code> depois.",
                  "textoBusca": "reverter o parâmetro. alterar de volta para 1, com justificativa (reversao roteiro-02). deixar valor divergente atrapalha quem executar o roteiro-08 depois.",
                  "esperadoHtml": "valor <code>1</code>, <strong>versão 3</strong> — reverter não apaga histórico, acrescenta. Três entradas no histórico ao final.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 471,
                  "ordem": 7
                }
              ]
            }
          ],
          "assercoes": [
            {
              "key": "ROTEIRO-02/J-043.W/#999689cb",
              "id": null,
              "hash": "abc90dbc",
              "textoHtml": "Alteração versionada, justificada e auditada; ausência de efeito registrada; valor revertido",
              "comoHtml": null,
              "textoBusca": "alteração versionada, justificada e auditada; ausência de efeito registrada; valor revertido",
              "esperadoHtml": null,
              "blocos": [],
              "na": false,
              "naMotivo": null,
              "marcadoNaFonte": false,
              "linha": 479,
              "ordem": 1
            }
          ],
          "linha": 392,
          "stats": {
            "passos": 9,
            "na": 0,
            "assercoes": 1
          }
        },
        {
          "key": "ROTEIRO-02/J-043.W-N1",
          "id": "J-043.W-N1",
          "escopoId": "J-043.W-N1",
          "kind": "jornada",
          "nivel": 3,
          "titulo": "Recusas na alteração de parâmetro",
          "anchor": "j-043w-n1---recusas-na-alterao-de-parmetro",
          "ordem": 7,
          "meta": [
            {
              "chave": "ID",
              "texto": "J-043.W-N1",
              "html": "<code>J-043.W-N1</code>"
            },
            {
              "chave": "Tipo",
              "texto": "Negativa — validação e segurança",
              "html": "Negativa — validação e segurança"
            },
            {
              "chave": "Persona",
              "texto": "admin e financeiro",
              "html": "<code>admin</code> e <code>financeiro</code>"
            },
            {
              "chave": "Superfície",
              "texto": "Web + API",
              "html": "Web + API"
            },
            {
              "chave": "Vetor",
              "texto": "Valor incompatível com o tipo, chave inexistente e alteração sem step-up",
              "html": "Valor incompatível com o tipo, chave inexistente e alteração sem step-up"
            },
            {
              "chave": "Comportamento seguro esperado",
              "texto": "Recusa sem gravar versão nem incrementar contador",
              "html": "Recusa sem gravar versão nem incrementar contador"
            },
            {
              "chave": "Pré-condições",
              "texto": "PRE-01 PRE-04 PRE-05 PRE-06 PRE-10",
              "html": "<code>PRE-01</code> <code>PRE-04</code> <code>PRE-05</code> <code>PRE-06</code> <code>PRE-10</code>"
            }
          ],
          "metaIndex": {
            "ID": "J-043.W-N1",
            "Tipo": "Negativa — validação e segurança",
            "Persona": "admin e financeiro",
            "Superfície": "Web + API",
            "Vetor": "Valor incompatível com o tipo, chave inexistente e alteração sem step-up",
            "Comportamento seguro esperado": "Recusa sem gravar versão nem incrementar contador",
            "Pré-condições": "PRE-01 PRE-04 PRE-05 PRE-06 PRE-10"
          },
          "notas": [],
          "grupos": [
            {
              "id": "g1",
              "tituloHtml": null,
              "tela": null,
              "implicito": true,
              "passos": [
                {
                  "key": "ROTEIRO-02/J-043.W-N1/P1",
                  "id": "P1",
                  "hash": "8acdcf04",
                  "textoHtml": "Enviar texto num parâmetro <code>INTEGER</code>.",
                  "comoHtml": "Em <code>backoffice.webhook.pendente.horas</code>, novo valor <code>seis</code>, com justificativa.",
                  "textoBusca": "enviar texto num parâmetro integer. em backoffice.webhook.pendente.horas, novo valor seis, com justificativa.",
                  "esperadoHtml": "<code>400</code>; a validação é por tipo do parâmetro, não por máscara de tela.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 497,
                  "ordem": 1
                },
                {
                  "key": "ROTEIRO-02/J-043.W-N1/P2",
                  "id": "P2",
                  "hash": "e3e4c79a",
                  "textoHtml": "Enviar decimal num parâmetro <code>INTEGER</code>.",
                  "comoHtml": "Mesmo parâmetro, valor <code>1.5</code>. <code>INTEGER</code> recusa; <code>DECIMAL</code> aceitaria.",
                  "textoBusca": "enviar decimal num parâmetro integer. mesmo parâmetro, valor 1.5. integer recusa; decimal aceitaria.",
                  "esperadoHtml": "<code>400</code>.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 500,
                  "ordem": 2
                },
                {
                  "key": "ROTEIRO-02/J-043.W-N1/P3",
                  "id": "P3",
                  "hash": "311f0b4c",
                  "textoHtml": "Enviar valor vazio.",
                  "comoHtml": "Pela API, <code>PATCH</code> com <code>\"novoValor\": \"\"</code>.",
                  "textoBusca": "enviar valor vazio. pela api, patch com \"novovalor\": \"\".",
                  "esperadoHtml": "<code>400</code> por validação de contrato, antes de qualquer regra de tipo.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 503,
                  "ordem": 3
                },
                {
                  "key": "ROTEIRO-02/J-043.W-N1/P4",
                  "id": "P4",
                  "hash": "14a439fb",
                  "textoHtml": "Alterar uma chave que não existe.",
                  "comoHtml": "<code>PATCH /api/v1/governanca/parametros/chave.que.nao.existe</code> com corpo válido.",
                  "textoBusca": "alterar uma chave que não existe. patch /api/v1/governanca/parametros/chave.que.nao.existe com corpo válido.",
                  "esperadoHtml": "<code>404</code>. Não pode criar parâmetro novo por <code>PATCH</code>.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 506,
                  "ordem": 4
                },
                {
                  "key": "ROTEIRO-02/J-043.W-N1/P5",
                  "id": "P5",
                  "hash": "466c2867",
                  "textoHtml": "Alterar <strong>sem</strong> step-up.",
                  "comoHtml": "<code>PATCH</code> válido, token de ADMIN, <strong>sem</strong> <code>X-Step-Up-Token</code>.",
                  "textoBusca": "alterar sem step-up. patch válido, token de admin, sem x-step-up-token.",
                  "esperadoHtml": "<code>403</code>.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 509,
                  "ordem": 5
                },
                {
                  "key": "ROTEIRO-02/J-043.W-N1/P6",
                  "id": "P6",
                  "hash": "cfdb0b24",
                  "textoHtml": "Alterar como <code>financeiro</code>.",
                  "comoHtml": "<code>PATCH</code> válido com o token do <code>financeiro</code>, mesmo com step-up dele.",
                  "textoBusca": "alterar como financeiro. patch válido com o token do financeiro, mesmo com step-up dele.",
                  "esperadoHtml": "<code>403</code>. Parâmetro operacional é exclusividade de ADMIN.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 512,
                  "ordem": 6
                },
                {
                  "key": "ROTEIRO-02/J-043.W-N1/P7",
                  "id": "P7",
                  "hash": "e27ec71d",
                  "textoHtml": "Conferir que nenhuma tentativa gravou versão.",
                  "comoHtml": "Terminal do banco. Seis recusas não podem ter deixado rastro de alteração.",
                  "textoBusca": "conferir que nenhuma tentativa gravou versão. terminal do banco. seis recusas não podem ter deixado rastro de alteração.",
                  "esperadoHtml": "valor <code>1</code> e versão <code>3</code>, exatamente como a <code>J-043.W</code> P9 deixou.",
                  "blocos": [
                    {
                      "tipo": "codigo",
                      "lang": "bash",
                      "regiao": "como",
                      "conteudo": "docker exec sep-postgres psql -U sep -d sep_dev \\\n  -c \"SELECT chave, valor, versao FROM parametro_operacional\n      WHERE chave = 'backoffice.webhook.pendente.horas';\""
                    }
                  ],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 515,
                  "ordem": 7
                }
              ]
            }
          ],
          "assercoes": [],
          "linha": 483,
          "stats": {
            "passos": 7,
            "na": 0,
            "assercoes": 0
          }
        },
        {
          "key": "ROTEIRO-02/J-044.M-N1",
          "id": "J-044.M-N1",
          "escopoId": "J-044.M-N1",
          "kind": "jornada",
          "nivel": 3,
          "titulo": "Administração no mobile é placeholder",
          "anchor": "j-044m-n1---administrao-no-mobile--placeholder",
          "ordem": 8,
          "meta": [
            {
              "chave": "ID",
              "texto": "J-044.M-N1",
              "html": "<code>J-044.M-N1</code>"
            },
            {
              "chave": "Tipo",
              "texto": "Negativa — cobertura de superfície",
              "html": "Negativa — cobertura de superfície"
            },
            {
              "chave": "Persona",
              "texto": "admin e cliente-a",
              "html": "<code>admin</code> e <code>cliente-a</code>"
            },
            {
              "chave": "Superfície",
              "texto": "Mobile (PWA)",
              "html": "Mobile (PWA)"
            },
            {
              "chave": "Vetor",
              "texto": "Esperar governança no mobile",
              "html": "Esperar governança no mobile"
            },
            {
              "chave": "Comportamento seguro esperado",
              "texto": "Rota guardada por ADMIN e conteúdo honesto sobre não existir",
              "html": "Rota guardada por ADMIN e conteúdo honesto sobre não existir"
            },
            {
              "chave": "Pré-condições",
              "texto": "PRE-01 PRE-03 PRE-04 PRE-05",
              "html": "<code>PRE-01</code> <code>PRE-03</code> <code>PRE-04</code> <code>PRE-05</code>"
            }
          ],
          "metaIndex": {
            "ID": "J-044.M-N1",
            "Tipo": "Negativa — cobertura de superfície",
            "Persona": "admin e cliente-a",
            "Superfície": "Mobile (PWA)",
            "Vetor": "Esperar governança no mobile",
            "Comportamento seguro esperado": "Rota guardada por ADMIN e conteúdo honesto sobre não existir",
            "Pré-condições": "PRE-01 PRE-03 PRE-04 PRE-05"
          },
          "notas": [
            "A rota <code>/app/admin</code> <strong>existe</strong> no <code>sep-mobile</code>, com <code>roleGuard</code> de ADMIN, mas carrega um componente de placeholder. Ou seja: o guard é real e a funcionalidade não. A jornada registra as duas metades, para a matriz do <code>ROTEIRO-10</code> não marcar cobertura que não existe."
          ],
          "grupos": [
            {
              "id": "g1",
              "tituloHtml": null,
              "tela": null,
              "implicito": true,
              "passos": [
                {
                  "key": "ROTEIRO-02/J-044.M-N1/P1",
                  "id": "P1",
                  "hash": "c29e2476",
                  "textoHtml": "Como <code>cliente-a</code>, tentar <code>/app/admin</code> no mobile.",
                  "comoHtml": "Em <code>http://localhost:8100</code>, emulação ligada, logado como <code>cliente-a</code>, digitar a rota na barra de endereço.",
                  "textoBusca": "como cliente-a, tentar /app/admin no mobile. em http://localhost:8100, emulação ligada, logado como cliente-a, digitar a rota na barra de endereço.",
                  "esperadoHtml": "negado pelo <code>roleGuard</code>.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 544,
                  "ordem": 1
                },
                {
                  "key": "ROTEIRO-02/J-044.M-N1/P2",
                  "id": "P2",
                  "hash": "8e48afff",
                  "textoHtml": "Como <code>admin</code>, abrir <code>/app/admin</code> no mobile.",
                  "comoHtml": "Sair, entrar como <code>admin@sep.test</code> e repetir.",
                  "textoBusca": "como admin, abrir /app/admin no mobile. sair, entrar como admin@sep.test e repetir.",
                  "esperadoHtml": "a rota abre e mostra <strong>placeholder</strong> — sem lista de usuários, sem parâmetros e sem ação de mutação.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 548,
                  "ordem": 2
                },
                {
                  "key": "ROTEIRO-02/J-044.M-N1/P3",
                  "id": "P3",
                  "hash": "bbbada2b",
                  "textoHtml": "Confirmar que não há caminho de mutação escondido.",
                  "comoHtml": "Percorrer a tela inteira, inclusive rolando até o fim, procurando qualquer botão de promoção, alteração de role ou de parâmetro.",
                  "textoBusca": "confirmar que não há caminho de mutação escondido. percorrer a tela inteira, inclusive rolando até o fim, procurando qualquer botão de promoção, alteração de role ou de parâmetro.",
                  "esperadoHtml": "nenhum. Governança no mobile <strong>não existe</strong>; se aparecer qualquer ação de mutação num placeholder, é ocorrência grave.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 552,
                  "ordem": 3
                },
                {
                  "key": "ROTEIRO-02/J-044.M-N1/P4",
                  "id": "P4",
                  "hash": "e014b28a",
                  "textoHtml": "Registrar a lacuna.",
                  "comoHtml": "Anotar em ocorrências, uma vez por execução, que a administração mobile está como placeholder. É informação de planejamento, não defeito de código.",
                  "textoBusca": "registrar a lacuna. anotar em ocorrências, uma vez por execução, que a administração mobile está como placeholder. é informação de planejamento, não defeito de código.",
                  "esperadoHtml": "lacuna registrada com a data da execução.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 557,
                  "ordem": 4
                }
              ]
            }
          ],
          "assercoes": [],
          "linha": 526,
          "stats": {
            "passos": 4,
            "na": 0,
            "assercoes": 0
          }
        }
      ],
      "ocorrenciasColunas": [
        "#",
        "Jornada",
        "Passo",
        "O que aconteceu",
        "Esperado",
        "Issue"
      ],
      "registroCampos": [
        {
          "chave": "executado_por",
          "rotulo": "Executado por",
          "tipo": "texto"
        },
        {
          "chave": "data_hora",
          "rotulo": "Data / hora",
          "tipo": "texto"
        },
        {
          "chave": "commit_sep_api",
          "rotulo": "Commit sep-api",
          "tipo": "texto"
        },
        {
          "chave": "commit_sep_app",
          "rotulo": "Commit sep-app",
          "tipo": "texto"
        },
        {
          "chave": "commit_sep_mobile",
          "rotulo": "Commit sep-mobile",
          "tipo": "texto"
        },
        {
          "chave": "usuario_de_governanca_criado",
          "rotulo": "Usuário de governança criado",
          "tipo": "texto"
        },
        {
          "chave": "parametro_alterado_e_revertido",
          "rotulo": "Parâmetro alterado e revertido",
          "tipo": "texto"
        },
        {
          "chave": "cards_disponivel_em_breve_encontrados",
          "rotulo": "Cards \"Disponivel em breve\" encontrados",
          "tipo": "texto"
        },
        {
          "chave": "jornadas_ok",
          "rotulo": "Jornadas OK",
          "tipo": "texto"
        },
        {
          "chave": "jornadas_nok",
          "rotulo": "Jornadas NOK",
          "tipo": "texto"
        },
        {
          "chave": "jornadas_bloqueado",
          "rotulo": "Jornadas BLOQUEADO",
          "tipo": "texto"
        },
        {
          "chave": "observacoes",
          "rotulo": "Observações",
          "tipo": "textarea"
        }
      ]
    },
    {
      "id": "ROTEIRO-03",
      "arquivo": "ROTEIRO-03-ONBOARDING.md",
      "hash": "e49bfcc4",
      "titulo": "Roteiro 03 - Onboarding KYC PF, KYB PJ e PLD",
      "tipo": "jornadas",
      "ordem": 13,
      "atualizadoEm": "2026-08-20",
      "resumoHtml": "",
      "escopos": [
        {
          "key": "ROTEIRO-03/J-050.W",
          "id": "J-050.W",
          "escopoId": "J-050.W",
          "kind": "jornada",
          "nivel": 3,
          "titulo": "Tomador conclui o onboarding KYC PF",
          "anchor": "j-050w---tomador-conclui-o-onboarding-kyc-pf",
          "ordem": 1,
          "meta": [
            {
              "chave": "ID",
              "texto": "J-050.W",
              "html": "<code>J-050.W</code>"
            },
            {
              "chave": "Tipo",
              "texto": "Positiva",
              "html": "Positiva"
            },
            {
              "chave": "Persona",
              "texto": "cliente-a — CLIENTE sem onboarding ativo",
              "html": "<code>cliente-a</code> — CLIENTE sem onboarding ativo"
            },
            {
              "chave": "Superfície",
              "texto": "Web",
              "html": "Web"
            },
            {
              "chave": "Pré-condições",
              "texto": "PRE-01 PRE-02 PRE-04 PRE-05",
              "html": "<code>PRE-01</code> <code>PRE-02</code> <code>PRE-04</code> <code>PRE-05</code>"
            },
            {
              "chave": "Endpoints tocados",
              "texto": "POST /onboarding/pessoa, POST /{id}/documentos, POST /{id}/verificar, GET /{id}",
              "html": "<code>POST /onboarding/pessoa</code>, <code>POST /{id}/documentos</code>, <code>POST /{id}/verificar</code>, <code>GET /{id}</code>"
            },
            {
              "chave": "Step-up",
              "texto": "não",
              "html": "não"
            },
            {
              "chave": "Duração",
              "texto": "12 min (mais a J-051.A)",
              "html": "12 min (mais a <code>J-051.A</code>)"
            },
            {
              "chave": "Automação equivalente",
              "texto": "onboarding.spec.ts (Playwright, contra MSW)",
              "html": "<code>onboarding.spec.ts</code> (Playwright, contra MSW)"
            },
            {
              "chave": "Só o manual cobre",
              "texto": "Provider real do backend, transição por webhook, PLD automático, trilha de auditoria",
              "html": "Provider real do backend, transição por webhook, PLD automático, trilha de auditoria"
            }
          ],
          "metaIndex": {
            "ID": "J-050.W",
            "Tipo": "Positiva",
            "Persona": "cliente-a — CLIENTE sem onboarding ativo",
            "Superfície": "Web",
            "Pré-condições": "PRE-01 PRE-02 PRE-04 PRE-05",
            "Endpoints tocados": "POST /onboarding/pessoa, POST /{id}/documentos, POST /{id}/verificar, GET /{id}",
            "Step-up": "não",
            "Duração": "12 min (mais a J-051.A)",
            "Automação equivalente": "onboarding.spec.ts (Playwright, contra MSW)",
            "Só o manual cobre": "Provider real do backend, transição por webhook, PLD automático, trilha de auditoria"
          },
          "notas": [
            "Família <code>J-050</code> a <code>J-059</code>: solicitação de onboarding, documentos cadastrais, verificação nos providers, webhooks e PLD. Requer <a href=\"./ROTEIRO-00-AMBIENTE-E-MASSA.md\" rel=\"noreferrer\"><code>ROTEIRO-00</code></a> concluído. Hub: <a href=\"./CENARIOS-TESTE-JORNADAS-USUARIO.md\" rel=\"noreferrer\"><code>CENARIOS-TESTE-JORNADAS-USUARIO.md</code></a>.",
            "<strong>Execute pelo <a href=\"./app/index.html\" rel=\"noreferrer\">app</a></strong>, não editando este arquivo — as caixas aqui ficam sempre vazias. Desvio não vira caixa marcada: vira <strong>ocorrência</strong> registrada no passo.",
            "<strong><code>PRE-11</code> diz &quot;KYC aprovado&quot; e isso é impreciso.</strong> O gate real do crédito é <code>APROVADO_FINAL</code>, que só existe <strong>depois do PLD</strong>. <code>APROVADO</code> puro é KYC aprovado e PLD ainda não consolidado — e a criação de proposta recusa com <code>422</code> nesse estado (<code>RegraOnboardingAprovado</code>). Se você parar em <code>APROVADO</code> achando que terminou, o <code>ROTEIRO-04</code> falha e parece defeito de crédito."
          ],
          "grupos": [
            {
              "id": "g2",
              "tituloHtml": "Tela <code>/app/onboarding</code>",
              "tela": "/app/onboarding",
              "implicito": false,
              "passos": [
                {
                  "key": "ROTEIRO-03/J-050.W/P1",
                  "id": "P1",
                  "hash": "8d23c1b6",
                  "textoHtml": "Abrir <strong>Onboarding</strong> no menu e escolher pessoa física.",
                  "comoHtml": "Logado como <code>cliente-a@sep.test</code>, menu lateral, grupo <strong>Jornadas</strong>, item <strong>Onboarding</strong>. A tela oferece dois cartões de escolha; abrir o de pessoa física.",
                  "textoBusca": "abrir onboarding no menu e escolher pessoa física. logado como cliente-a@sep.test, menu lateral, grupo jornadas, item onboarding. a tela oferece dois cartões de escolha; abrir o de pessoa física.",
                  "esperadoHtml": "vai para <code>/app/onboarding/pessoa</code> com o formulário de início.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 138,
                  "ordem": 1
                }
              ]
            },
            {
              "id": "g3",
              "tituloHtml": "Tela <code>/app/onboarding/pessoa</code>",
              "tela": "/app/onboarding/pessoa",
              "implicito": false,
              "passos": [
                {
                  "key": "ROTEIRO-03/J-050.W/P2",
                  "id": "P2",
                  "hash": "5323bdee",
                  "textoHtml": "Preencher CPF, nome completo e data de nascimento e iniciar.",
                  "comoHtml": "CPF <code>52998224725</code>, nome completo qualquer, data de nascimento qualquer. <strong>Anotar o id</strong> que aparece no endereço depois do redirecionamento (<code>/app/onboarding/pessoa/&lt;id&gt;</code>) — o resto deste roteiro depende dele, e a <a href=\"#j-051a---webhook-kyc-fecha-a-verificação-pf\" rel=\"noreferrer\"><code>J-051.A</code></a> não roda sem ele.",
                  "textoBusca": "preencher cpf, nome completo e data de nascimento e iniciar. cpf 52998224725, nome completo qualquer, data de nascimento qualquer. anotar o id que aparece no endereço depois do redirecionamento (/app/onboarding/pessoa/<id>) — o resto deste roteiro depende dele, e a j-051.a não roda sem ele.",
                  "esperadoHtml": "<code>201</code>; redireciona para o detalhe da solicitação.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 145,
                  "ordem": 1
                }
              ]
            },
            {
              "id": "g4",
              "tituloHtml": "Tela <code>/app/onboarding/pessoa/:id</code>",
              "tela": "/app/onboarding/pessoa/:id",
              "implicito": false,
              "passos": [
                {
                  "key": "ROTEIRO-03/J-050.W/P3",
                  "id": "P3",
                  "hash": "c0249ab1",
                  "textoHtml": "Conferir o status inicial.",
                  "comoHtml": "Ler o badge de status no painel <strong>Status</strong>. Ele mostra o valor <strong>cru</strong> do backend, sem tradução — é assim de propósito, para o teste manual ver exatamente o que a API devolveu.",
                  "textoBusca": "conferir o status inicial. ler o badge de status no painel status. ele mostra o valor cru do backend, sem tradução — é assim de propósito, para o teste manual ver exatamente o que a api devolveu.",
                  "esperadoHtml": "<code>INICIADO</code>, e a lista de documentos diz que não há nenhum enviado.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 154,
                  "ordem": 1
                },
                {
                  "key": "ROTEIRO-03/J-050.W/P4",
                  "id": "P4",
                  "hash": "e9eba1d9",
                  "textoHtml": "Enviar um documento de identidade.",
                  "comoHtml": "No bloco <strong>Enviar documento</strong>, escolher tipo <code>RG</code> (ou <code>CNH</code>, ou <code>PASSAPORTE</code>) e anexar o arquivo. O rótulo do campo já declara a política: PDF, JPEG ou PNG, até 10MB.",
                  "textoBusca": "enviar um documento de identidade. no bloco enviar documento, escolher tipo rg (ou cnh, ou passaporte) e anexar o arquivo. o rótulo do campo já declara a política: pdf, jpeg ou png, até 10mb.",
                  "esperadoHtml": "<code>204</code>; o documento aparece na lista e o status <strong>vira</strong> <code>DOCUMENTOS_RECEBIDOS</code> — a transição acontece no primeiro upload, não no último.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 159,
                  "ordem": 2
                },
                {
                  "key": "ROTEIRO-03/J-050.W/P5",
                  "id": "P5",
                  "hash": "61054923",
                  "textoHtml": "Enviar a selfie.",
                  "comoHtml": "Mesmo bloco, tipo <code>SELFIE</code>. <strong>Os dois são obrigatórios</strong>: 1 identidade + 1 selfie. Enviar só um deixa a verificação bloqueada — é o que a <a href=\"#j-052w-n1---verificação-sem-os-documentos-mínimos\" rel=\"noreferrer\"><code>J-052.W-N1</code></a> prova.",
                  "textoBusca": "enviar a selfie. mesmo bloco, tipo selfie. os dois são obrigatórios: 1 identidade + 1 selfie. enviar só um deixa a verificação bloqueada — é o que a j-052.w-n1 prova.",
                  "esperadoHtml": "<code>204</code>; dois documentos na lista.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 164,
                  "ordem": 3
                },
                {
                  "key": "ROTEIRO-03/J-050.W/P6",
                  "id": "P6",
                  "hash": "eb86ccee",
                  "textoHtml": "Enviar para verificação.",
                  "comoHtml": "Bloco <strong>Verificação</strong>, botão <strong>Enviar para verificação</strong>.",
                  "textoBusca": "enviar para verificação. bloco verificação, botão enviar para verificação.",
                  "esperadoHtml": "<code>202</code>; status vai para <code>EM_VERIFICACAO</code>.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 169,
                  "ordem": 4
                },
                {
                  "key": "ROTEIRO-03/J-050.W/P7",
                  "id": "P7",
                  "hash": "cbbce537",
                  "textoHtml": "Clicar <strong>Atualizar</strong> duas ou três vezes e confirmar que <strong>nada muda</strong>.",
                  "comoHtml": "Este passo parece perda de tempo e é o oposto disso: ele fixa a expectativa correta. O provider fake não devolve resultado sozinho, então <code>EM_VERIFICACAO</code> é estado <strong>estável</strong>, não &quot;carregando&quot;. Confirmar na aba <strong>Network</strong> que cada clique dispara <strong>um</strong> <code>GET</code> e que a tela não faz chamadas repetidas em intervalo fixo por conta própria.",
                  "textoBusca": "clicar atualizar duas ou três vezes e confirmar que nada muda. este passo parece perda de tempo e é o oposto disso: ele fixa a expectativa correta. o provider fake não devolve resultado sozinho, então emverificacao é estado estável, não \"carregando\". confirmar na aba network que cada clique dispara um get e que a tela não faz chamadas repetidas em intervalo fixo por conta própria.",
                  "esperadoHtml": "status permanece <code>EM_VERIFICACAO</code>; sem polling automático.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 172,
                  "ordem": 5
                },
                {
                  "key": "ROTEIRO-03/J-050.W/P8",
                  "id": "P8",
                  "hash": "ba2752b9",
                  "textoHtml": "Executar a <a href=\"#j-051a---webhook-kyc-fecha-a-verificação-pf\" rel=\"noreferrer\"><code>J-051.A</code></a> com <strong>este</strong> id e voltar para esta tela.",
                  "comoHtml": "A jornada do webhook é o que fecha a verificação. Volte aqui e clique <strong>Atualizar</strong> uma vez.",
                  "textoBusca": "executar a j-051.a com este id e voltar para esta tela. a jornada do webhook é o que fecha a verificação. volte aqui e clique atualizar uma vez.",
                  "esperadoHtml": "status <strong><code>APROVADO_FINAL</code></strong>, não <code>APROVADO</code>. O PLD roda automaticamente logo depois do KYC e, com o provider fake, sai limpo — os dois saltos acontecem antes de o webhook responder <code>202</code>.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 178,
                  "ordem": 6
                },
                {
                  "key": "ROTEIRO-03/J-050.W/P9",
                  "id": "P9",
                  "hash": "8d9e5dec",
                  "textoHtml": "Conferir a trilha de auditoria.",
                  "comoHtml": "Terminal do banco. Onboarding é ato sob a CMN 4.656/2018: cada etapa precisa de registro próprio.",
                  "textoBusca": "conferir a trilha de auditoria. terminal do banco. onboarding é ato sob a cmn 4.656/2018: cada etapa precisa de registro próprio.",
                  "esperadoHtml": "na ordem inversa da lista, <code>KYC_INICIADO</code>, <code>KYC_DOCUMENTO_ENVIADO</code> (duas vezes), <code>KYC_VERIFICACAO_DISPARADA</code>, <code>KYC_FINALIZADO_APROVADO</code>, <code>PLD_INICIADO</code>, <code>PLD_LIMPO</code> e <code>PLD_FINALIZADO</code>.",
                  "blocos": [
                    {
                      "tipo": "codigo",
                      "lang": "bash",
                      "regiao": "como",
                      "conteudo": "docker exec sep-postgres psql -U sep -d sep_dev \\\n  -c \"SELECT tipo, data_evento FROM audit_log_seguranca\n      WHERE tipo LIKE 'KYC%' OR tipo LIKE 'PLD%'\n      ORDER BY data_evento DESC LIMIT 12;\""
                    }
                  ],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 185,
                  "ordem": 7
                },
                {
                  "key": "ROTEIRO-03/J-050.W/P10",
                  "id": "P10",
                  "hash": "5301a031",
                  "textoHtml": "Conferir o estado persistido.",
                  "comoHtml": "Terminal do banco. A tela pode estar mostrando cache; esta consulta é a verdade.",
                  "textoBusca": "conferir o estado persistido. terminal do banco. a tela pode estar mostrando cache; esta consulta é a verdade.",
                  "esperadoHtml": "uma linha, <code>APROVADO_FINAL</code>, <code>id_verificacao_externa</code> começando com <code>fake-</code>, e <code>docs = 2</code>.",
                  "blocos": [
                    {
                      "tipo": "codigo",
                      "lang": "bash",
                      "regiao": "como",
                      "conteudo": "docker exec sep-postgres psql -U sep -d sep_dev \\\n  -c \"SELECT s.status, s.id_verificacao_externa, count(d.id) AS docs\n      FROM solicitacao_onboarding s\n      LEFT JOIN documento_cadastral d ON d.solicitacao_id = s.id\n      JOIN usuario u ON u.id = s.usuario_id\n      WHERE u.username = 'cliente-a@sep.test'\n      GROUP BY s.id, s.status, s.id_verificacao_externa;\""
                    }
                  ],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 197,
                  "ordem": 8
                }
              ]
            }
          ],
          "assercoes": [
            {
              "key": "ROTEIRO-03/J-050.W/#afad7816",
              "id": null,
              "hash": "3bc98369",
              "textoHtml": "<code>cliente-a</code> em <code>APROVADO_FINAL</code>: <strong><code>PRE-11</code> satisfeito</strong>; anotar o id da solicitação",
              "comoHtml": null,
              "textoBusca": "cliente-a em aprovadofinal: pre-11 satisfeito; anotar o id da solicitação",
              "esperadoHtml": null,
              "blocos": [],
              "na": false,
              "naMotivo": null,
              "marcadoNaFonte": false,
              "linha": 213,
              "ordem": 1
            }
          ],
          "linha": 119,
          "stats": {
            "passos": 10,
            "na": 0,
            "assercoes": 1
          }
        },
        {
          "key": "ROTEIRO-03/J-050.W-N1",
          "id": "J-050.W-N1",
          "escopoId": "J-050.W-N1",
          "kind": "jornada",
          "nivel": 3,
          "titulo": "CPF inválido e CPF já em uso",
          "anchor": "j-050w-n1---cpf-invlido-e-cpf-j-em-uso",
          "ordem": 2,
          "meta": [
            {
              "chave": "ID",
              "texto": "J-050.W-N1",
              "html": "<code>J-050.W-N1</code>"
            },
            {
              "chave": "Tipo",
              "texto": "Negativa — validação e conflito",
              "html": "Negativa — validação e conflito"
            },
            {
              "chave": "Persona",
              "texto": "cliente-a",
              "html": "<code>cliente-a</code>"
            },
            {
              "chave": "Superfície",
              "texto": "Web + API",
              "html": "Web + API"
            },
            {
              "chave": "Vetor",
              "texto": "Documento malformado e segunda solicitação para o mesmo CPF",
              "html": "Documento malformado e segunda solicitação para o mesmo CPF"
            },
            {
              "chave": "Comportamento seguro esperado",
              "texto": "Recusa no backend, com código de erro próprio",
              "html": "Recusa no backend, com código de erro próprio"
            },
            {
              "chave": "Pré-condições",
              "texto": "PRE-01 PRE-02 PRE-04 + J-050.W concluída",
              "html": "<code>PRE-01</code> <code>PRE-02</code> <code>PRE-04</code> + <code>J-050.W</code> concluída"
            }
          ],
          "metaIndex": {
            "ID": "J-050.W-N1",
            "Tipo": "Negativa — validação e conflito",
            "Persona": "cliente-a",
            "Superfície": "Web + API",
            "Vetor": "Documento malformado e segunda solicitação para o mesmo CPF",
            "Comportamento seguro esperado": "Recusa no backend, com código de erro próprio",
            "Pré-condições": "PRE-01 PRE-02 PRE-04 + J-050.W concluída"
          },
          "notas": [],
          "grupos": [
            {
              "id": "g1",
              "tituloHtml": null,
              "tela": null,
              "implicito": true,
              "passos": [
                {
                  "key": "ROTEIRO-03/J-050.W-N1/P1",
                  "id": "P1",
                  "hash": "243a81be",
                  "textoHtml": "Tentar iniciar um onboarding com CPF de dígito verificador errado.",
                  "comoHtml": "Abrir <code>/app/onboarding/pessoa</code> de novo e enviar o formulário com CPF <code>52998224726</code> — é o CPF do <code>cliente-a</code> com o último dígito trocado. O backend calcula o DV; um CPF que &quot;parece certo&quot; tem de ser recusado igual.",
                  "textoBusca": "tentar iniciar um onboarding com cpf de dígito verificador errado. abrir /app/onboarding/pessoa de novo e enviar o formulário com cpf 52998224726 — é o cpf do cliente-a com o último dígito trocado. o backend calcula o dv; um cpf que \"parece certo\" tem de ser recusado igual.",
                  "esperadoHtml": "recusado, código <code>ONB-400-002</code>. Nenhuma solicitação criada.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 231,
                  "ordem": 1
                },
                {
                  "key": "ROTEIRO-03/J-050.W-N1/P2",
                  "id": "P2",
                  "hash": "fb9b83c3",
                  "textoHtml": "Repetir com <code>11111111111</code>.",
                  "comoHtml": "Sequência repetida tem DV matematicamente válido e é recusada por uma regra <strong>separada</strong>. Vale testar os dois porque são dois caminhos diferentes no código, e um pode quebrar sem o outro.",
                  "textoBusca": "repetir com 11111111111. sequência repetida tem dv matematicamente válido e é recusada por uma regra separada. vale testar os dois porque são dois caminhos diferentes no código, e um pode quebrar sem o outro.",
                  "esperadoHtml": "recusado, mesmo código <code>ONB-400-002</code>, mensagem falando de sequência repetida.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 236,
                  "ordem": 2
                },
                {
                  "key": "ROTEIRO-03/J-050.W-N1/P3",
                  "id": "P3",
                  "hash": "c18840af",
                  "textoHtml": "Tentar iniciar de novo com o CPF <strong>válido</strong> que já foi usado na <code>J-050.W</code>.",
                  "comoHtml": "Enviar o formulário com <code>52998224725</code>. Como a solicitação anterior está em <code>APROVADO_FINAL</code> — status que continua prendendo o documento — o backend precisa recusar. A tela tem mensagem própria para este caso, com link para voltar e consultar a solicitação existente.",
                  "textoBusca": "tentar iniciar de novo com o cpf válido que já foi usado na j-050.w. enviar o formulário com 52998224725. como a solicitação anterior está em aprovadofinal — status que continua prendendo o documento — o backend precisa recusar. a tela tem mensagem própria para este caso, com link para voltar e consultar a solicitação existente.",
                  "esperadoHtml": "<code>409</code>, código <code>ONB-409-001</code>; a UI oferece voltar e consultar a existente.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 241,
                  "ordem": 3
                },
                {
                  "key": "ROTEIRO-03/J-050.W-N1/P4",
                  "id": "P4",
                  "hash": "18702e8b",
                  "textoHtml": "Repetir o P3 direto na API.",
                  "comoHtml": "<strong>Este é o passo que importa.</strong> No Insomnia, login como <code>cliente-a</code>, e <code>POST /api/v1/onboarding/pessoa</code> com o mesmo payload que a tela enviou. Se a tela recusa e a API aceita, existe caminho para duas solicitações ativas no mesmo CPF.",
                  "textoBusca": "repetir o p3 direto na api. este é o passo que importa. no insomnia, login como cliente-a, e post /api/v1/onboarding/pessoa com o mesmo payload que a tela enviou. se a tela recusa e a api aceita, existe caminho para duas solicitações ativas no mesmo cpf.",
                  "esperadoHtml": "<code>409</code> vindo do backend, não da tela.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 247,
                  "ordem": 4
                },
                {
                  "key": "ROTEIRO-03/J-050.W-N1/P5",
                  "id": "P5",
                  "hash": "40874320",
                  "textoHtml": "Conferir que continua havendo <strong>uma</strong> solicitação para o CPF.",
                  "comoHtml": "Terminal do banco.",
                  "textoBusca": "conferir que continua havendo uma solicitação para o cpf. terminal do banco.",
                  "esperadoHtml": "<code>1</code>.",
                  "blocos": [
                    {
                      "tipo": "codigo",
                      "lang": "bash",
                      "regiao": "como",
                      "conteudo": "docker exec sep-postgres psql -U sep -d sep_dev \\\n  -c \"SELECT count(*) FROM solicitacao_onboarding WHERE documento = '52998224725';\""
                    }
                  ],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 252,
                  "ordem": 5
                }
              ]
            }
          ],
          "assercoes": [],
          "linha": 217,
          "stats": {
            "passos": 5,
            "na": 0,
            "assercoes": 0
          }
        },
        {
          "key": "ROTEIRO-03/J-051.A",
          "id": "J-051.A",
          "escopoId": "J-051.A",
          "kind": "jornada",
          "nivel": 3,
          "titulo": "Webhook KYC fecha a verificação PF",
          "anchor": "j-051a---webhook-kyc-fecha-a-verificao-pf",
          "ordem": 3,
          "meta": [
            {
              "chave": "ID",
              "texto": "J-051.A",
              "html": "<code>J-051.A</code>"
            },
            {
              "chave": "Tipo",
              "texto": "Positiva",
              "html": "Positiva"
            },
            {
              "chave": "Persona",
              "texto": "Provider externo (simulado)",
              "html": "Provider externo (simulado)"
            },
            {
              "chave": "Superfície",
              "texto": "API",
              "html": "API"
            },
            {
              "chave": "Pré-condições",
              "texto": "PRE-01 + solicitação PF em EMVERIFICACAO (J-050.W até o P6)",
              "html": "<code>PRE-01</code> + solicitação PF em <code>EM_VERIFICACAO</code> (<code>J-050.W</code> até o P6)"
            },
            {
              "chave": "Endpoints tocados",
              "texto": "POST /api/v1/webhooks/celcoin/kyc",
              "html": "<code>POST /api/v1/webhooks/celcoin/kyc</code>"
            },
            {
              "chave": "Step-up",
              "texto": "não — endpoint público autenticado por HMAC",
              "html": "não — endpoint público autenticado por HMAC"
            },
            {
              "chave": "Duração",
              "texto": "8 min",
              "html": "8 min"
            },
            {
              "chave": "Automação equivalente",
              "texto": "ITs do backend; nenhuma spec de front chega aqui",
              "html": "ITs do backend; <strong>nenhuma spec de front</strong> chega aqui"
            },
            {
              "chave": "Só o manual cobre",
              "texto": "HMAC real, idempotência do outbox, encadeamento KYC → PLD ponta a ponta",
              "html": "HMAC real, idempotência do outbox, encadeamento KYC → PLD ponta a ponta"
            }
          ],
          "metaIndex": {
            "ID": "J-051.A",
            "Tipo": "Positiva",
            "Persona": "Provider externo (simulado)",
            "Superfície": "API",
            "Pré-condições": "PRE-01 + solicitação PF em EMVERIFICACAO (J-050.W até o P6)",
            "Endpoints tocados": "POST /api/v1/webhooks/celcoin/kyc",
            "Step-up": "não — endpoint público autenticado por HMAC",
            "Duração": "8 min",
            "Automação equivalente": "ITs do backend; nenhuma spec de front chega aqui",
            "Só o manual cobre": "HMAC real, idempotência do outbox, encadeamento KYC → PLD ponta a ponta"
          },
          "notas": [
            "<strong>Esta jornada é o elo que falta na execução local.</strong> Sem ela, todo onboarding PF fica preso em <code>EM_VERIFICACAO</code> e parece defeito de UI. O provider fake nunca chama de volta."
          ],
          "grupos": [
            {
              "id": "g1",
              "tituloHtml": null,
              "tela": null,
              "implicito": true,
              "passos": [
                {
                  "key": "ROTEIRO-03/J-051.A/P1",
                  "id": "P1",
                  "hash": "8b357dc2",
                  "textoHtml": "Disparar o webhook com status aprovado.",
                  "comoHtml": "No terminal, com o id da solicitação da <code>J-050.W</code>. O <code>verification_id</code> <strong>tem</strong> de ser <code>fake-&lt;id&gt;</code>: é esse o identificador externo que o provider fake gerou, e a busca no backend é por ele. A assinatura é HMAC-SHA256 <strong>hex puro</strong> do corpo cru, sem prefixo <code>sha256=</code>. Trocar um espaço no corpo invalida a assinatura.",
                  "textoBusca": "disparar o webhook com status aprovado. no terminal, com o id da solicitação da j-050.w. o verificationid tem de ser fake-<id>: é esse o identificador externo que o provider fake gerou, e a busca no backend é por ele. a assinatura é hmac-sha256 hex puro do corpo cru, sem prefixo sha256=. trocar um espaço no corpo invalida a assinatura.",
                  "esperadoHtml": "<code>202</code>, corpo vazio. &gt; Se o ambiente sobrescreveu o secret, ele está em <code>APP_WEBHOOK_SECRET_CELCOIN_KYC</code>; o &gt; default do <code>application.yml</code> é o usado acima. O mesmo request existe no Insomnia &gt; (<code>POST /webhooks/celcoin/kyc — APPROVED (202)</code>), faltando só preencher a variável de &gt; assinatura.",
                  "blocos": [
                    {
                      "tipo": "codigo",
                      "lang": "bash",
                      "regiao": "como",
                      "conteudo": "SOLICITACAO_ID=<id-da-J-050.W>\nSECRET=dev-kyc-webhook-secret-change-me\nBODY=\"{\\\"verification_id\\\":\\\"fake-$SOLICITACAO_ID\\\",\\\"status\\\":\\\"APPROVED\\\",\\\"reason\\\":null}\"\nSIG=$(printf '%s' \"$BODY\" | openssl dgst -sha256 -hmac \"$SECRET\" -r | cut -d' ' -f1)\n\ncurl -i -X POST http://localhost:8080/api/v1/webhooks/celcoin/kyc \\\n  -H 'Content-Type: application/json' \\\n  -H \"Idempotency-Key: kyc-$SOLICITACAO_ID\" \\\n  -H \"X-Webhook-Signature: $SIG\" \\\n  --data-binary \"$BODY\""
                    }
                  ],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 282,
                  "ordem": 1
                },
                {
                  "key": "ROTEIRO-03/J-051.A/P2",
                  "id": "P2",
                  "hash": "160e4f51",
                  "textoHtml": "Conferir que o status pulou <strong>dois</strong> degraus.",
                  "comoHtml": "Consultar a solicitação como <code>cliente-a</code>, ou clicar <strong>Atualizar</strong> na tela. O esperado não é <code>APROVADO</code>: o <code>PldOrchestrationListener</code> roda depois do commit do KYC e, no fake, o PLD volta limpo na mesma sequência.",
                  "textoBusca": "conferir que o status pulou dois degraus. consultar a solicitação como cliente-a, ou clicar atualizar na tela. o esperado não é aprovado: o pldorchestrationlistener roda depois do commit do kyc e, no fake, o pld volta limpo na mesma sequência.",
                  "esperadoHtml": "<code>APROVADO_FINAL</code>. Parar em <code>APROVADO</code> é ocorrência — significa que o PLD não disparou.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 304,
                  "ordem": 2
                },
                {
                  "key": "ROTEIRO-03/J-051.A/P3",
                  "id": "P3",
                  "hash": "767bd478",
                  "textoHtml": "Reenviar o <strong>mesmo</strong> request, sem mudar nada.",
                  "comoHtml": "Seta para cima e enter. Mesma <code>Idempotency-Key</code>, mesmo corpo, mesma assinatura. Webhook de provider é reenviado na vida real; a segunda entrega não pode reprocessar nem quebrar.",
                  "textoBusca": "reenviar o mesmo request, sem mudar nada. seta para cima e enter. mesma idempotency-key, mesmo corpo, mesma assinatura. webhook de provider é reenviado na vida real; a segunda entrega não pode reprocessar nem quebrar.",
                  "esperadoHtml": "<code>202</code> de novo; status continua <code>APROVADO_FINAL</code>. A chave repetida <strong>não gera linha nova</strong> no outbox — o registro é a própria trava de idempotência, e o P5 confere isso.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 310,
                  "ordem": 3
                },
                {
                  "key": "ROTEIRO-03/J-051.A/P4",
                  "id": "P4",
                  "hash": "7d895725",
                  "textoHtml": "Reenviar com <code>Idempotency-Key</code> <strong>diferente</strong> e status <strong>conflitante</strong>.",
                  "comoHtml": "Trocar a chave para <code>kyc-$SOLICITACAO_ID-b</code> e o <code>status</code> para <code>\"REJECTED\"</code>, recalculando a assinatura (o corpo mudou). Este é o callback tardio contraditório: o provider mandando resultado diferente depois de o caso já ter fechado. O backend aceita a entrega mas <strong>não pode reescrever</strong> o resultado.",
                  "textoBusca": "reenviar com idempotency-key diferente e status conflitante. trocar a chave para kyc-$solicitacaoid-b e o status para \"rejected\", recalculando a assinatura (o corpo mudou). este é o callback tardio contraditório: o provider mandando resultado diferente depois de o caso já ter fechado. o backend aceita a entrega mas não pode reescrever o resultado.",
                  "esperadoHtml": "<code>202</code>; status permanece <code>APROVADO_FINAL</code>; o evento fica marcado como <code>FALHOU</code> no outbox.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 316,
                  "ordem": 4
                },
                {
                  "key": "ROTEIRO-03/J-051.A/P5",
                  "id": "P5",
                  "hash": "2240de2f",
                  "textoHtml": "Conferir o outbox de webhooks.",
                  "comoHtml": "Terminal do banco. <strong>São três entregas e duas linhas</strong> — e essa diferença é o passo. A entrega do P3 reusou a chave do P1, então ela não foi gravada nem reprocessada; a do P4 trouxe chave nova, foi gravada e recusada no conteúdo.",
                  "textoBusca": "conferir o outbox de webhooks. terminal do banco. são três entregas e duas linhas — e essa diferença é o passo. a entrega do p3 reusou a chave do p1, então ela não foi gravada nem reprocessada; a do p4 trouxe chave nova, foi gravada e recusada no conteúdo.",
                  "esperadoHtml": "duas linhas — a chave do P1 em <code>PROCESSADO</code> e a do P4 em <code>FALHOU</code>, com o motivo do conflito preenchido em <code>erro</code>. Três linhas significaria que a chave repetida passou, ou seja, idempotência quebrada.",
                  "blocos": [
                    {
                      "tipo": "codigo",
                      "lang": "bash",
                      "regiao": "como",
                      "conteudo": "docker exec sep-postgres psql -U sep -d sep_dev \\\n  -c \"SELECT idempotency_key, status, erro FROM webhook_event_log\n      WHERE provider = 'celcoin-kyc'\n      ORDER BY data_recebimento DESC LIMIT 5;\""
                    }
                  ],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 323,
                  "ordem": 5
                }
              ]
            }
          ],
          "assercoes": [
            {
              "key": "ROTEIRO-03/J-051.A/#56d6ad53",
              "id": null,
              "hash": "43086374",
              "textoHtml": "Solicitação PF em <code>APROVADO_FINAL</code> e webhook idempotente comprovado",
              "comoHtml": null,
              "textoBusca": "solicitação pf em aprovadofinal e webhook idempotente comprovado",
              "esperadoHtml": null,
              "blocos": [],
              "na": false,
              "naMotivo": null,
              "marcadoNaFonte": false,
              "linha": 339,
              "ordem": 1
            }
          ],
          "linha": 262,
          "stats": {
            "passos": 5,
            "na": 0,
            "assercoes": 1
          }
        },
        {
          "key": "ROTEIRO-03/J-051.A-N1",
          "id": "J-051.A-N1",
          "escopoId": "J-051.A-N1",
          "kind": "jornada",
          "nivel": 3,
          "titulo": "Webhook com assinatura inválida",
          "anchor": "j-051a-n1---webhook-com-assinatura-invlida",
          "ordem": 4,
          "meta": [
            {
              "chave": "ID",
              "texto": "J-051.A-N1",
              "html": "<code>J-051.A-N1</code>"
            },
            {
              "chave": "Tipo",
              "texto": "Negativa — segurança",
              "html": "Negativa — segurança"
            },
            {
              "chave": "Persona",
              "texto": "Atacante sem o secret",
              "html": "Atacante sem o secret"
            },
            {
              "chave": "Superfície",
              "texto": "API",
              "html": "API"
            },
            {
              "chave": "Vetor",
              "texto": "Forjar resultado de KYC sem conhecer o HMAC",
              "html": "Forjar resultado de KYC sem conhecer o HMAC"
            },
            {
              "chave": "Comportamento seguro esperado",
              "texto": "401 antes de qualquer efeito, e nada persistido",
              "html": "<code>401</code> antes de qualquer efeito, e nada persistido"
            },
            {
              "chave": "Pré-condições",
              "texto": "PRE-01 + solicitação PF em EMVERIFICACAO",
              "html": "<code>PRE-01</code> + solicitação PF em <code>EM_VERIFICACAO</code>"
            }
          ],
          "metaIndex": {
            "ID": "J-051.A-N1",
            "Tipo": "Negativa — segurança",
            "Persona": "Atacante sem o secret",
            "Superfície": "API",
            "Vetor": "Forjar resultado de KYC sem conhecer o HMAC",
            "Comportamento seguro esperado": "401 antes de qualquer efeito, e nada persistido",
            "Pré-condições": "PRE-01 + solicitação PF em EMVERIFICACAO"
          },
          "notas": [
            "Se esta jornada passar quando deveria negar, qualquer um na rede aprova o próprio KYC. É bloqueio de go-live, não achado menor."
          ],
          "grupos": [
            {
              "id": "g1",
              "tituloHtml": null,
              "tela": null,
              "implicito": true,
              "passos": [
                {
                  "key": "ROTEIRO-03/J-051.A-N1/P1",
                  "id": "P1",
                  "hash": "83421319",
                  "textoHtml": "Enviar um payload perfeitamente válido com assinatura falsa.",
                  "comoHtml": "Precisa ser uma solicitação <strong>ainda em <code>EM_VERIFICACAO</code></strong> — use a de outra persona, ou repita a <code>J-050.W</code> até o P6 com outro CPF. O corpo é o mesmo que funcionaria.",
                  "textoBusca": "enviar um payload perfeitamente válido com assinatura falsa. precisa ser uma solicitação ainda em emverificacao — use a de outra persona, ou repita a j-050.w até o p6 com outro cpf. o corpo é o mesmo que funcionaria.",
                  "esperadoHtml": "<code>401</code>. Não <code>403</code>, não <code>202</code>, não <code>500</code>.",
                  "blocos": [
                    {
                      "tipo": "codigo",
                      "lang": "bash",
                      "regiao": "como",
                      "conteudo": "curl -i -X POST http://localhost:8080/api/v1/webhooks/celcoin/kyc \\\n  -H 'Content-Type: application/json' \\\n  -H 'Idempotency-Key: forjado-001' \\\n  -H 'X-Webhook-Signature: sha256=INVALIDA' \\\n  --data-binary '{\"verification_id\":\"fake-<id>\",\"status\":\"APPROVED\"}'"
                    }
                  ],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 360,
                  "ordem": 1
                },
                {
                  "key": "ROTEIRO-03/J-051.A-N1/P2",
                  "id": "P2",
                  "hash": "4f827538",
                  "textoHtml": "Enviar <strong>sem</strong> o header de assinatura.",
                  "comoHtml": "Repetir o P1 removendo o <code>X-Webhook-Signature</code>. Ausência de header e header errado são caminhos distintos no código.",
                  "textoBusca": "enviar sem o header de assinatura. repetir o p1 removendo o x-webhook-signature. ausência de header e header errado são caminhos distintos no código.",
                  "esperadoHtml": "recusado; nenhuma transição de status.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 371,
                  "ordem": 2
                },
                {
                  "key": "ROTEIRO-03/J-051.A-N1/P3",
                  "id": "P3",
                  "hash": "2db4ce7e",
                  "textoHtml": "Conferir que o status não mudou.",
                  "comoHtml": "Consultar a solicitação. Um <code>401</code> na resposta não prova que nada aconteceu antes da validação — esta consulta prova.",
                  "textoBusca": "conferir que o status não mudou. consultar a solicitação. um 401 na resposta não prova que nada aconteceu antes da validação — esta consulta prova.",
                  "esperadoHtml": "continua <code>EM_VERIFICACAO</code>.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 375,
                  "ordem": 3
                },
                {
                  "key": "ROTEIRO-03/J-051.A-N1/P4",
                  "id": "P4",
                  "hash": "2a518968",
                  "textoHtml": "Conferir que a tentativa não virou aprovação silenciosa no audit.",
                  "comoHtml": "Terminal do banco.",
                  "textoBusca": "conferir que a tentativa não virou aprovação silenciosa no audit. terminal do banco.",
                  "esperadoHtml": "nenhum evento novo de finalização depois da hora do P1.",
                  "blocos": [
                    {
                      "tipo": "codigo",
                      "lang": "bash",
                      "regiao": "como",
                      "conteudo": "docker exec sep-postgres psql -U sep -d sep_dev \\\n  -c \"SELECT tipo, data_evento FROM audit_log_seguranca\n      WHERE tipo LIKE 'KYC_FINALIZADO%' ORDER BY data_evento DESC LIMIT 3;\""
                    }
                  ],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 379,
                  "ordem": 4
                }
              ]
            }
          ],
          "assercoes": [],
          "linha": 343,
          "stats": {
            "passos": 4,
            "na": 0,
            "assercoes": 0
          }
        },
        {
          "key": "ROTEIRO-03/J-051.M",
          "id": "J-051.M",
          "escopoId": "J-051.M",
          "kind": "jornada",
          "nivel": 3,
          "titulo": "Resultado do webhook observado pelo mobile",
          "anchor": "j-051m---resultado-do-webhook-observado-pelo-mobile",
          "ordem": 5,
          "meta": [
            {
              "chave": "ID",
              "texto": "J-051.M",
              "html": "<code>J-051.M</code>"
            },
            {
              "chave": "Tipo",
              "texto": "Positiva",
              "html": "Positiva"
            },
            {
              "chave": "Persona",
              "texto": "Conta criada na J-003.M",
              "html": "Conta criada na <a href=\"./ROTEIRO-01-ACESSO-E-SESSAO.md#j-003m---visitante-cria-conta-de-cliente\" rel=\"noreferrer\"><code>J-003.M</code></a>"
            },
            {
              "chave": "Superfície",
              "texto": "Mobile (PWA) + API para o disparo do webhook",
              "html": "Mobile (PWA) + API para o disparo do webhook"
            },
            {
              "chave": "Pré-condições",
              "texto": "PRE-01 PRE-02 PRE-03 PRE-04 + J-003.M concluída",
              "html": "<code>PRE-01</code> <code>PRE-02</code> <code>PRE-03</code> <code>PRE-04</code> + <code>J-003.M</code> concluída"
            },
            {
              "chave": "Endpoints tocados",
              "texto": "POST /onboarding/pessoa, POST /{id}/documentos, POST /{id}/verificar, GET /{id}, POST /webhooks/celcoin/kyc",
              "html": "<code>POST /onboarding/pessoa</code>, <code>POST /{id}/documentos</code>, <code>POST /{id}/verificar</code>, <code>GET /{id}</code>, <code>POST /webhooks/celcoin/kyc</code>"
            },
            {
              "chave": "Step-up",
              "texto": "não",
              "html": "não"
            },
            {
              "chave": "Duração",
              "texto": "12 min",
              "html": "12 min"
            },
            {
              "chave": "Automação equivalente",
              "texto": "nenhuma — o MSW resolve o KYC sozinho, então nenhuma spec exercita a espera",
              "html": "nenhuma — o MSW resolve o KYC sozinho, então nenhuma spec exercita a espera"
            },
            {
              "chave": "Só o manual cobre",
              "texto": "Ausência de polling, atualização por gesto e a rotulagem dos dois \"aprovado\"",
              "html": "Ausência de polling, atualização por gesto e a rotulagem dos dois &quot;aprovado&quot;"
            }
          ],
          "metaIndex": {
            "ID": "J-051.M",
            "Tipo": "Positiva",
            "Persona": "Conta criada na J-003.M",
            "Superfície": "Mobile (PWA) + API para o disparo do webhook",
            "Pré-condições": "PRE-01 PRE-02 PRE-03 PRE-04 + J-003.M concluída",
            "Endpoints tocados": "POST /onboarding/pessoa, POST /{id}/documentos, POST /{id}/verificar, GET /{id}, POST /webhooks/celcoin/kyc",
            "Step-up": "não",
            "Duração": "12 min",
            "Automação equivalente": "nenhuma — o MSW resolve o KYC sozinho, então nenhuma spec exercita a espera",
            "Só o manual cobre": "Ausência de polling, atualização por gesto e a rotulagem dos dois \"aprovado\""
          },
          "notas": [
            "<strong>O mobile não dispara nem recebe o webhook.</strong> Ele é a superfície que <strong>observa o efeito</strong>: o provider resolve por fora e o app só descobre quando o usuário pede. Esta jornada mede exatamente esse intervalo — o que a tela faz enquanto o resultado não chegou, e o que ela mostra quando chega."
          ],
          "grupos": [
            {
              "id": "g1",
              "tituloHtml": null,
              "tela": null,
              "implicito": true,
              "passos": [
                {
                  "key": "ROTEIRO-03/J-051.M/P1",
                  "id": "P1",
                  "hash": "0f49ad76",
                  "textoHtml": "Abrir uma solicitação PF nova no mobile e levá-la até <code>EM_VERIFICACAO</code>.",
                  "comoHtml": "Em <code>http://localhost:8100</code>, emulação ligada, logado com a conta da <code>J-003.M</code>. Se o app retomar a jornada anterior, usar <strong>Ver status do cadastro</strong> &gt; <strong>Recomecar cadastro</strong> para voltar à escolha (isso só esquece a jornada local; ver <a href=\"#j-059m---onboarding-pj-no-mobile\" rel=\"noreferrer\"><code>J-059.M</code></a> P3). Escolher pessoa física, CPF <code>12345678909</code>, enviar identidade e selfie e, na etapa <strong>Status</strong>, tocar <strong>Iniciar verificacao</strong>. <strong>Anotar o id</strong> da solicitação.",
                  "textoBusca": "abrir uma solicitação pf nova no mobile e levá-la até emverificacao. em http://localhost:8100, emulação ligada, logado com a conta da j-003.m. se o app retomar a jornada anterior, usar ver status do cadastro > recomecar cadastro para voltar à escolha (isso só esquece a jornada local; ver j-059.m p3). escolher pessoa física, cpf 12345678909, enviar identidade e selfie e, na etapa status, tocar iniciar verificacao. anotar o id da solicitação.",
                  "esperadoHtml": "badge <strong>Em verificacao</strong>. &gt; O id não aparece na tela do mobile. Pegue-o na aba <strong>Network</strong>, na resposta do <code>POST</code> de &gt; criação (campo <code>id</code>) ou na URL das chamadas seguintes — o P5 precisa dele.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 412,
                  "ordem": 1
                },
                {
                  "key": "ROTEIRO-03/J-051.M/P2",
                  "id": "P2",
                  "hash": "d69249ec",
                  "textoHtml": "Com o app <strong>aberto e parado</strong> na etapa Status, resolver o KYC por fora.",
                  "comoHtml": "Sem tocar no aparelho emulado, disparar o webhook aprovado no terminal, com o id deste onboarding — mesmo procedimento da <a href=\"#j-051a---webhook-kyc-fecha-a-verificação-pf\" rel=\"noreferrer\"><code>J-051.A</code></a> P1. Depois <strong>esperar uns 30 segundos sem encostar na tela</strong>, de olho na aba Network.",
                  "textoBusca": "com o app aberto e parado na etapa status, resolver o kyc por fora. sem tocar no aparelho emulado, disparar o webhook aprovado no terminal, com o id deste onboarding — mesmo procedimento da j-051.a p1. depois esperar uns 30 segundos sem encostar na tela, de olho na aba network.",
                  "esperadoHtml": "o webhook responde <code>202</code> e <strong>a tela do mobile não muda</strong>. Nenhuma requisição nova aparece na Network nesses 30 segundos. &gt; <strong>Este é o passo que importa e ele passa não acontecendo nada.</strong> A tela mudar sozinha &gt; aqui significaria polling — carga desnecessária no backend e bateria no aparelho. A &gt; ausência de atualização automática é a decisão de projeto, não uma falha.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 422,
                  "ordem": 2
                },
                {
                  "key": "ROTEIRO-03/J-051.M/P3",
                  "id": "P3",
                  "hash": "ee3f6966",
                  "textoHtml": "Atualizar por gesto.",
                  "comoHtml": "Tocar <strong>Atualizar</strong>. &quot;Por gesto&quot; quer dizer que <strong>você</strong> pede; a tela não busca sozinha.",
                  "textoBusca": "atualizar por gesto. tocar atualizar. \"por gesto\" quer dizer que você pede; a tela não busca sozinha.",
                  "esperadoHtml": "uma única chamada <code>GET</code> na Network e o badge salta para <strong>Aprovado</strong>.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 432,
                  "ordem": 3
                },
                {
                  "key": "ROTEIRO-03/J-051.M/P4",
                  "id": "P4",
                  "hash": "eeaaf1f9",
                  "textoHtml": "Ler o rótulo com atenção — são <strong>dois</strong> aprovados diferentes.",
                  "comoHtml": "O mobile traduz o status, e a tradução distingue os dois estados: <code>APROVADO</code> (KYC feito, PLD pendente) aparece como <strong>&quot;Aprovado (KYC/KYB)&quot;</strong>, e <code>APROVADO_FINAL</code> aparece como <strong>&quot;Aprovado&quot;</strong>, sem sufixo. <strong>As duas usam a mesma cor</strong>, então o sufixo é o único sinal visual — e só o segundo libera crédito.",
                  "textoBusca": "ler o rótulo com atenção — são dois aprovados diferentes. o mobile traduz o status, e a tradução distingue os dois estados: aprovado (kyc feito, pld pendente) aparece como \"aprovado (kyc/kyb)\", e aprovadofinal aparece como \"aprovado\", sem sufixo. as duas usam a mesma cor, então o sufixo é o único sinal visual — e só o segundo libera crédito.",
                  "esperadoHtml": "badge exatamente <strong>&quot;Aprovado&quot;</strong>. Se aparecer <strong>&quot;Aprovado (KYC/KYB)&quot;</strong>, o PLD não rodou: é <code>APROVADO</code> puro, e a proposta de crédito vai recusar com <code>422</code>.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 436,
                  "ordem": 4
                },
                {
                  "key": "ROTEIRO-03/J-051.M/P5",
                  "id": "P5",
                  "hash": "22bb6e0b",
                  "textoHtml": "Conferir a linha de resultado logo abaixo do badge.",
                  "comoHtml": "Ela mostra o <code>statusFinal</code> <strong>cru</strong>, vindo do resultado da verificação, que é <strong>pré-PLD</strong>. Então a combinação correta nesta tela é badge traduzido dizendo &quot;Aprovado&quot; e a linha de baixo dizendo <code>APROVADO</code>. Parece contradição e não é: são dois campos com significados diferentes.",
                  "textoBusca": "conferir a linha de resultado logo abaixo do badge. ela mostra o statusfinal cru, vindo do resultado da verificação, que é pré-pld. então a combinação correta nesta tela é badge traduzido dizendo \"aprovado\" e a linha de baixo dizendo aprovado. parece contradição e não é: são dois campos com significados diferentes.",
                  "esperadoHtml": "<code>Resultado: APROVADO</code> sob o badge <strong>Aprovado</strong>. Registrar como ocorrência de usabilidade se você — que conhece a máquina de estados — precisar parar para interpretar.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 443,
                  "ordem": 5
                },
                {
                  "key": "ROTEIRO-03/J-051.M/P6",
                  "id": "P6",
                  "hash": "f7dd4772",
                  "textoHtml": "Comparar com o web, que <strong>não</strong> traduz.",
                  "comoHtml": "Em <code>http://localhost:4200</code>, com a <strong>mesma conta</strong>, abrir <code>/app/onboarding/pessoa/&lt;id&gt;</code> colando o id anotado no P1. O web renderiza o valor cru do backend.",
                  "textoBusca": "comparar com o web, que não traduz. em http://localhost:4200, com a mesma conta, abrir /app/onboarding/pessoa/<id> colando o id anotado no p1. o web renderiza o valor cru do backend.",
                  "esperadoHtml": "o web mostra <code>APROVADO_FINAL</code> e o mobile mostra <code>Aprovado</code>, <strong>para o mesmo dado</strong>. É divergência de apresentação deliberada, não defeito — mas quem lê relatório de teste precisa saber que o vocabulário muda com a superfície.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 450,
                  "ordem": 6
                },
                {
                  "key": "ROTEIRO-03/J-051.M/P7",
                  "id": "P7",
                  "hash": "4a87986a",
                  "textoHtml": "Repetir o webhook e confirmar que a tela continua estável.",
                  "comoHtml": "Disparar de novo o <strong>mesmo</strong> request do P2, sem mudar chave nem corpo, e tocar <strong>Atualizar</strong> no mobile.",
                  "textoBusca": "repetir o webhook e confirmar que a tela continua estável. disparar de novo o mesmo request do p2, sem mudar chave nem corpo, e tocar atualizar no mobile.",
                  "esperadoHtml": "<code>202</code> no webhook, <code>APROVADO_FINAL</code> inalterado no app. Entrega repetida de provider não pode mexer no que o usuário vê.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 457,
                  "ordem": 7
                },
                {
                  "key": "ROTEIRO-03/J-051.M/P8",
                  "id": "P8",
                  "hash": "075c7109",
                  "textoHtml": "Conferir a trilha do lado do servidor.",
                  "comoHtml": "Terminal do banco. O app é só a janela; a prova de que o encadeamento KYC → PLD aconteceu está no audit.",
                  "textoBusca": "conferir a trilha do lado do servidor. terminal do banco. o app é só a janela; a prova de que o encadeamento kyc → pld aconteceu está no audit.",
                  "esperadoHtml": "os três eventos, com hora posterior ao disparo do P2.",
                  "blocos": [
                    {
                      "tipo": "codigo",
                      "lang": "bash",
                      "regiao": "como",
                      "conteudo": "docker exec sep-postgres psql -U sep -d sep_dev \\\n  -c \"SELECT tipo, data_evento FROM audit_log_seguranca\n      WHERE tipo IN ('KYC_FINALIZADO_APROVADO','PLD_LIMPO','PLD_FINALIZADO')\n      ORDER BY data_evento DESC LIMIT 6;\""
                    }
                  ],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 462,
                  "ordem": 8
                }
              ]
            }
          ],
          "assercoes": [
            {
              "key": "ROTEIRO-03/J-051.M/#33cb5fc2",
              "id": null,
              "hash": "cf955891",
              "textoHtml": "Mobile refletiu <code>APROVADO_FINAL</code> <strong>só depois do gesto</strong>, e sem nenhuma atualização automática",
              "comoHtml": null,
              "textoBusca": "mobile refletiu aprovadofinal só depois do gesto, e sem nenhuma atualização automática",
              "esperadoHtml": null,
              "blocos": [],
              "na": false,
              "naMotivo": null,
              "marcadoNaFonte": false,
              "linha": 475,
              "ordem": 1
            }
          ],
          "linha": 390,
          "stats": {
            "passos": 8,
            "na": 0,
            "assercoes": 1
          }
        },
        {
          "key": "ROTEIRO-03/J-051.M-N1",
          "id": "J-051.M-N1",
          "escopoId": "J-051.M-N1",
          "kind": "jornada",
          "nivel": 3,
          "titulo": "Pendência de KYC é terminal e prende o CPF",
          "anchor": "j-051m-n1---pendncia-de-kyc--terminal-e-prende-o-cpf",
          "ordem": 6,
          "meta": [
            {
              "chave": "ID",
              "texto": "J-051.M-N1",
              "html": "<code>J-051.M-N1</code>"
            },
            {
              "chave": "Tipo",
              "texto": "Negativa — desfecho sem saída",
              "html": "Negativa — desfecho sem saída"
            },
            {
              "chave": "Persona",
              "texto": "Conta criada na J-003.M",
              "html": "Conta criada na <a href=\"./ROTEIRO-01-ACESSO-E-SESSAO.md#j-003m---visitante-cria-conta-de-cliente\" rel=\"noreferrer\"><code>J-003.M</code></a>"
            },
            {
              "chave": "Superfície",
              "texto": "Mobile (PWA) + API",
              "html": "Mobile (PWA) + API"
            },
            {
              "chave": "Vetor",
              "texto": "Provider devolve PENDING — nem aprovação, nem recusa",
              "html": "Provider devolve <code>PENDING</code> — nem aprovação, nem recusa"
            },
            {
              "chave": "Comportamento seguro esperado",
              "texto": "Estado final honesto na tela, sem caminho de correção improvisado no cliente",
              "html": "Estado final honesto na tela, sem caminho de correção improvisado no cliente"
            },
            {
              "chave": "Pré-condições",
              "texto": "PRE-01 PRE-03 PRE-04 + J-003.M concluída",
              "html": "<code>PRE-01</code> <code>PRE-03</code> <code>PRE-04</code> + <code>J-003.M</code> concluída"
            }
          ],
          "metaIndex": {
            "ID": "J-051.M-N1",
            "Tipo": "Negativa — desfecho sem saída",
            "Persona": "Conta criada na J-003.M",
            "Superfície": "Mobile (PWA) + API",
            "Vetor": "Provider devolve PENDING — nem aprovação, nem recusa",
            "Comportamento seguro esperado": "Estado final honesto na tela, sem caminho de correção improvisado no cliente",
            "Pré-condições": "PRE-01 PRE-03 PRE-04 + J-003.M concluída"
          },
          "notas": [
            "<strong>Esta jornada consome um CPF em definitivo.</strong> <code>PENDENCIA</code> é status <strong>final</strong> e ao mesmo tempo conta como <strong>ativo</strong>: não aceita documento novo, não aceita nova verificação e continua bloqueando o CPF, sem nenhum endpoint de reabertura. Use <strong><code>98765432100</code></strong>, que existe na massa só para isso. Se ele já tiver sido queimado numa execução anterior, use <code>24681357928</code> ou <code>13579246828</code> e anote qual foi no registro da execução. <strong>Não use o CPF do <code>cliente-a</code>.</strong>",
            "<strong>O que esta jornada prova, e o que ela expõe.</strong> O backend se comporta como projetado: não reescreve decisão de KYC e não deixa o cliente contornar um estado final. O que falta é produto — <strong>não existe jornada de correção de pendência</strong>, nem no app nem no backoffice, e o CPF fica retido sem prazo. Registrar como ocorrência de produto, com esta jornada como evidência, e anotar no registro qual CPF foi consumido."
          ],
          "grupos": [
            {
              "id": "g1",
              "tituloHtml": null,
              "tela": null,
              "implicito": true,
              "passos": [
                {
                  "key": "ROTEIRO-03/J-051.M-N1/P1",
                  "id": "P1",
                  "hash": "da27fe8b",
                  "textoHtml": "Abrir uma solicitação PF nova no mobile e levá-la até <code>EM_VERIFICACAO</code>.",
                  "comoHtml": "Mesmo caminho da <a href=\"#j-051m---resultado-do-webhook-observado-pelo-mobile\" rel=\"noreferrer\"><code>J-051.M</code></a> P1 — <strong>Ver status do cadastro</strong> &gt; <strong>Recomecar cadastro</strong> se o app retomar a jornada anterior, pessoa física, identidade e selfie, <strong>Iniciar verificacao</strong>. CPF <strong><code>98765432100</code></strong>. <strong>Anotar o id</strong> na aba Network.",
                  "textoBusca": "abrir uma solicitação pf nova no mobile e levá-la até emverificacao. mesmo caminho da j-051.m p1 — ver status do cadastro > recomecar cadastro se o app retomar a jornada anterior, pessoa física, identidade e selfie, iniciar verificacao. cpf 98765432100. anotar o id na aba network.",
                  "esperadoHtml": "badge <strong>Em verificacao</strong>.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 499,
                  "ordem": 1
                },
                {
                  "key": "ROTEIRO-03/J-051.M-N1/P2",
                  "id": "P2",
                  "hash": "3eeca9ab",
                  "textoHtml": "Resolver o KYC como pendência, com motivo.",
                  "comoHtml": "Disparar o webhook com <code>\"status\":\"PENDING\"</code> e um <code>reason</code> reconhecível — o texto abaixo serve. O <code>reason</code> do provider vira o <code>motivo</code> persistido e precisa chegar à tela sem edição.",
                  "textoBusca": "resolver o kyc como pendência, com motivo. disparar o webhook com \"status\":\"pending\" e um reason reconhecível — o texto abaixo serve. o reason do provider vira o motivo persistido e precisa chegar à tela sem edição.",
                  "esperadoHtml": "<code>202</code>.",
                  "blocos": [
                    {
                      "tipo": "codigo",
                      "lang": "bash",
                      "regiao": "como",
                      "conteudo": "SOLICITACAO_ID=<id-do-P1>\nSECRET=dev-kyc-webhook-secret-change-me\nBODY=\"{\\\"verification_id\\\":\\\"fake-$SOLICITACAO_ID\\\",\\\"status\\\":\\\"PENDING\\\",\\\"reason\\\":\\\"selfie ilegivel\\\"}\"\nSIG=$(printf '%s' \"$BODY\" | openssl dgst -sha256 -hmac \"$SECRET\" -r | cut -d' ' -f1)\n\ncurl -i -X POST http://localhost:8080/api/v1/webhooks/celcoin/kyc \\\n  -H 'Content-Type: application/json' \\\n  -H \"Idempotency-Key: kyc-pend-$SOLICITACAO_ID\" \\\n  -H \"X-Webhook-Signature: $SIG\" \\\n  --data-binary \"$BODY\""
                    }
                  ],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 505,
                  "ordem": 2
                },
                {
                  "key": "ROTEIRO-03/J-051.M-N1/P3",
                  "id": "P3",
                  "hash": "687dbd13",
                  "textoHtml": "Atualizar por gesto e ler o desfecho.",
                  "comoHtml": "No mobile, tocar <strong>Atualizar</strong>.",
                  "textoBusca": "atualizar por gesto e ler o desfecho. no mobile, tocar atualizar.",
                  "esperadoHtml": "badge <strong>Pendencia</strong>, e a linha abaixo mostrando <code>Resultado: PENDENCIA - selfie ilegivel</code>. O motivo tem de aparecer <strong>na íntegra</strong>: pendência sem motivo visível deixa o usuário sem saber o que corrigir, e isso é ocorrência.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 522,
                  "ordem": 3
                },
                {
                  "key": "ROTEIRO-03/J-051.M-N1/P4",
                  "id": "P4",
                  "hash": "0cfcd743",
                  "textoHtml": "Confirmar que o PLD <strong>não</strong> rodou.",
                  "comoHtml": "Terminal do banco. O PLD só é disparado quando o KYC fecha em <code>APROVADO</code>; pendência não avança para triagem. Se houver evento de PLD posterior ao P2, a orquestração está avançando estado que não deveria.",
                  "textoBusca": "confirmar que o pld não rodou. terminal do banco. o pld só é disparado quando o kyc fecha em aprovado; pendência não avança para triagem. se houver evento de pld posterior ao p2, a orquestração está avançando estado que não deveria.",
                  "esperadoHtml": "nenhum evento de PLD com hora posterior ao disparo do P2.",
                  "blocos": [
                    {
                      "tipo": "codigo",
                      "lang": "bash",
                      "regiao": "como",
                      "conteudo": "docker exec sep-postgres psql -U sep -d sep_dev \\\n  -c \"SELECT tipo, data_evento FROM audit_log_seguranca\n      WHERE tipo LIKE 'PLD%' ORDER BY data_evento DESC LIMIT 5;\""
                    }
                  ],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 527,
                  "ordem": 4
                },
                {
                  "key": "ROTEIRO-03/J-051.M-N1/P5",
                  "id": "P5",
                  "hash": "88a372bd",
                  "textoHtml": "Tentar corrigir enviando um documento novo.",
                  "comoHtml": "É o que qualquer usuário tentaria depois de ler &quot;selfie ilegível&quot;. Na etapa <strong>Status</strong>, tocar <strong>Voltar aos documentos</strong> e enviar outra selfie.",
                  "textoBusca": "tentar corrigir enviando um documento novo. é o que qualquer usuário tentaria depois de ler \"selfie ilegível\". na etapa status, tocar voltar aos documentos e enviar outra selfie.",
                  "esperadoHtml": "recusado com <code>ONB-400-001</code>, e a mensagem de erro aparece no bloco de upload. <strong>Não existe correção de pendência</strong>: o estado é final.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 537,
                  "ordem": 5
                },
                {
                  "key": "ROTEIRO-03/J-051.M-N1/P6",
                  "id": "P6",
                  "hash": "0abdbf1a",
                  "textoHtml": "Tentar reenviar para verificação.",
                  "comoHtml": "Voltar à etapa <strong>Status</strong> e tocar <strong>Iniciar verificacao</strong> de novo.",
                  "textoBusca": "tentar reenviar para verificação. voltar à etapa status e tocar iniciar verificacao de novo.",
                  "esperadoHtml": "recusado com <code>ONB-400-001</code>. A tela <strong>oferece</strong> o botão mesmo num estado que não o aceita — registrar como ocorrência de usabilidade: ação impossível não deveria estar habilitada.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 542,
                  "ordem": 6
                },
                {
                  "key": "ROTEIRO-03/J-051.M-N1/P7",
                  "id": "P7",
                  "hash": "705db32f",
                  "textoHtml": "Tentar recomeçar pelo próprio app.",
                  "comoHtml": "<strong>Recomecar cadastro</strong> e iniciar um PF novo com o <strong>mesmo</strong> CPF <code>98765432100</code>. O botão limpa só a jornada local (ver <a href=\"#j-059m---onboarding-pj-no-mobile\" rel=\"noreferrer\"><code>J-059.M</code></a> P3), então o bloqueio do servidor continua de pé.",
                  "textoBusca": "tentar recomeçar pelo próprio app. recomecar cadastro e iniciar um pf novo com o mesmo cpf 98765432100. o botão limpa só a jornada local (ver j-059.m p3), então o bloqueio do servidor continua de pé.",
                  "esperadoHtml": "<code>409</code> com <code>ONB-409-001</code>. <strong>O CPF está queimado</strong>: o usuário não tem, por nenhum caminho de UI, como refazer o onboarding.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 547,
                  "ordem": 7
                },
                {
                  "key": "ROTEIRO-03/J-051.M-N1/P8",
                  "id": "P8",
                  "hash": "e3aed141",
                  "textoHtml": "Tentar &quot;consertar&quot; por fora, com um webhook de aprovação.",
                  "comoHtml": "Repetir o disparo do P2 com <code>\"status\":\"APPROVED\"</code>, <strong>chave de idempotência nova</strong> (<code>kyc-resgate-$SOLICITACAO_ID</code>) e assinatura recalculada. É a tentativa óbvia de resgate, e ela <strong>não pode</strong> funcionar: resultado já finalizado não se reescreve por callback tardio.",
                  "textoBusca": "tentar \"consertar\" por fora, com um webhook de aprovação. repetir o disparo do p2 com \"status\":\"approved\", chave de idempotência nova (kyc-resgate-$solicitacaoid) e assinatura recalculada. é a tentativa óbvia de resgate, e ela não pode funcionar: resultado já finalizado não se reescreve por callback tardio.",
                  "esperadoHtml": "<code>202</code> na resposta — o webhook aceita a entrega — mas o status <strong>continua <code>PENDENCIA</code></strong>. Se virar <code>APROVADO</code>, um callback tardio está reescrevendo decisão de KYC: ocorrência grave.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 554,
                  "ordem": 8
                },
                {
                  "key": "ROTEIRO-03/J-051.M-N1/P9",
                  "id": "P9",
                  "hash": "4c945a6f",
                  "textoHtml": "Conferir estado e outbox.",
                  "comoHtml": "Terminal do banco. A entrega do P8 tem de estar registrada como falha, com o motivo do conflito — aceitar a entrega e recusar o conteúdo são coisas diferentes.",
                  "textoBusca": "conferir estado e outbox. terminal do banco. a entrega do p8 tem de estar registrada como falha, com o motivo do conflito — aceitar a entrega e recusar o conteúdo são coisas diferentes.",
                  "esperadoHtml": "uma solicitação em <code>PENDENCIA</code>; no outbox, a chave do P2 em <code>PROCESSADO</code> e a do P8 em <code>FALHOU</code>, com o conflito descrito em <code>erro</code>.",
                  "blocos": [
                    {
                      "tipo": "codigo",
                      "lang": "bash",
                      "regiao": "como",
                      "conteudo": "docker exec sep-postgres psql -U sep -d sep_dev \\\n  -c \"SELECT status, id_verificacao_externa FROM solicitacao_onboarding\n      WHERE documento = '98765432100';\"\ndocker exec sep-postgres psql -U sep -d sep_dev \\\n  -c \"SELECT idempotency_key, status, erro FROM webhook_event_log\n      WHERE provider = 'celcoin-kyc' ORDER BY data_recebimento DESC LIMIT 3;\""
                    }
                  ],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 561,
                  "ordem": 9
                }
              ]
            }
          ],
          "assercoes": [
            {
              "key": "ROTEIRO-03/J-051.M-N1/#0b08a6a9",
              "id": null,
              "hash": "2586f1a3",
              "textoHtml": "<code>PENDENCIA</code> confirmada como terminal, sem correção por UI e sem resgate por webhook",
              "comoHtml": null,
              "textoBusca": "pendencia confirmada como terminal, sem correção por ui e sem resgate por webhook",
              "esperadoHtml": null,
              "blocos": [],
              "na": false,
              "naMotivo": null,
              "marcadoNaFonte": false,
              "linha": 583,
              "ordem": 1
            }
          ],
          "linha": 479,
          "stats": {
            "passos": 9,
            "na": 0,
            "assercoes": 1
          }
        },
        {
          "key": "ROTEIRO-03/J-052.W-N1",
          "id": "J-052.W-N1",
          "escopoId": "J-052.W-N1",
          "kind": "jornada",
          "nivel": 3,
          "titulo": "Verificação sem os documentos mínimos",
          "anchor": "j-052w-n1---verificao-sem-os-documentos-mnimos",
          "ordem": 7,
          "meta": [
            {
              "chave": "ID",
              "texto": "J-052.W-N1",
              "html": "<code>J-052.W-N1</code>"
            },
            {
              "chave": "Tipo",
              "texto": "Negativa — regra de negócio",
              "html": "Negativa — regra de negócio"
            },
            {
              "chave": "Persona",
              "texto": "cliente-b",
              "html": "<code>cliente-b</code>"
            },
            {
              "chave": "Superfície",
              "texto": "Web + API",
              "html": "Web + API"
            },
            {
              "chave": "Vetor",
              "texto": "Disparar KYC sem identidade ou sem selfie",
              "html": "Disparar KYC sem identidade ou sem selfie"
            },
            {
              "chave": "Comportamento seguro esperado",
              "texto": "400 do backend, sem chamar o provider",
              "html": "<code>400</code> do backend, sem chamar o provider"
            },
            {
              "chave": "Pré-condições",
              "texto": "PRE-01 PRE-02 PRE-04 PRE-09",
              "html": "<code>PRE-01</code> <code>PRE-02</code> <code>PRE-04</code> <code>PRE-09</code>"
            }
          ],
          "metaIndex": {
            "ID": "J-052.W-N1",
            "Tipo": "Negativa — regra de negócio",
            "Persona": "cliente-b",
            "Superfície": "Web + API",
            "Vetor": "Disparar KYC sem identidade ou sem selfie",
            "Comportamento seguro esperado": "400 do backend, sem chamar o provider",
            "Pré-condições": "PRE-01 PRE-02 PRE-04 PRE-09"
          },
          "notas": [],
          "grupos": [
            {
              "id": "g1",
              "tituloHtml": null,
              "tela": null,
              "implicito": true,
              "passos": [
                {
                  "key": "ROTEIRO-03/J-052.W-N1/P1",
                  "id": "P1",
                  "hash": "9d0d004f",
                  "textoHtml": "Iniciar um onboarding para <code>cliente-b</code> e <strong>não</strong> enviar documento nenhum.",
                  "comoHtml": "Entrar como <code>cliente-b@sep.test</code> — atenção: se você executou a <code>J-022.W-N1</code> no <code>ROTEIRO-01</code>, a senha dele mudou. CPF <code>39053344705</code>. Parar logo depois do <code>201</code>.",
                  "textoBusca": "iniciar um onboarding para cliente-b e não enviar documento nenhum. entrar como cliente-b@sep.test — atenção: se você executou a j-022.w-n1 no roteiro-01, a senha dele mudou. cpf 39053344705. parar logo depois do 201.",
                  "esperadoHtml": "solicitação em <code>INICIADO</code>.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 601,
                  "ordem": 1
                },
                {
                  "key": "ROTEIRO-03/J-052.W-N1/P2",
                  "id": "P2",
                  "hash": "8c87b785",
                  "textoHtml": "Clicar <strong>Enviar para verificação</strong> sem documentos.",
                  "comoHtml": "Ir direto ao bloco <strong>Verificação</strong>. O status ainda é <code>INICIADO</code>, e a verificação só pode sair de <code>DOCUMENTOS_RECEBIDOS</code>.",
                  "textoBusca": "clicar enviar para verificação sem documentos. ir direto ao bloco verificação. o status ainda é iniciado, e a verificação só pode sair de documentosrecebidos.",
                  "esperadoHtml": "recusado, código <code>ONB-400-001</code> (operação inválida no status atual).",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 605,
                  "ordem": 2
                },
                {
                  "key": "ROTEIRO-03/J-052.W-N1/P3",
                  "id": "P3",
                  "hash": "f3b21aeb",
                  "textoHtml": "Enviar <strong>só</strong> a selfie e tentar de novo.",
                  "comoHtml": "Tipo <code>SELFIE</code>, um arquivo. Agora o status é <code>DOCUMENTOS_RECEBIDOS</code>, então a regra que barra é outra: falta o documento de identidade. <strong>São dois erros diferentes</strong> e é isso que o passo separa.",
                  "textoBusca": "enviar só a selfie e tentar de novo. tipo selfie, um arquivo. agora o status é documentosrecebidos, então a regra que barra é outra: falta o documento de identidade. são dois erros diferentes e é isso que o passo separa.",
                  "esperadoHtml": "recusado por documentos mínimos ausentes, com mensagem citando RG/CNH/PASSAPORTE + SELFIE.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 609,
                  "ordem": 3
                },
                {
                  "key": "ROTEIRO-03/J-052.W-N1/P4",
                  "id": "P4",
                  "hash": "1f3d85e5",
                  "textoHtml": "Repetir o P3 direto na API.",
                  "comoHtml": "No Insomnia, <code>POST /api/v1/onboarding/pessoa/{id}/verificar</code> com o token do <code>cliente-b</code>. A tela pode estar apenas escondendo o botão; a recusa tem de vir do backend.",
                  "textoBusca": "repetir o p3 direto na api. no insomnia, post /api/v1/onboarding/pessoa/{id}/verificar com o token do cliente-b. a tela pode estar apenas escondendo o botão; a recusa tem de vir do backend.",
                  "esperadoHtml": "<code>400</code>, não <code>202</code>.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 615,
                  "ordem": 4
                },
                {
                  "key": "ROTEIRO-03/J-052.W-N1/P5",
                  "id": "P5",
                  "hash": "df3d781a",
                  "textoHtml": "Conferir que nenhuma verificação externa foi disparada.",
                  "comoHtml": "Terminal do banco. Se o provider tivesse sido chamado, haveria <code>id_verificacao_externa</code> preenchido e evento de disparo no audit.",
                  "textoBusca": "conferir que nenhuma verificação externa foi disparada. terminal do banco. se o provider tivesse sido chamado, haveria idverificacaoexterna preenchido e evento de disparo no audit.",
                  "esperadoHtml": "<code>DOCUMENTOS_RECEBIDOS</code> e <code>id_verificacao_externa</code> nulo.",
                  "blocos": [
                    {
                      "tipo": "codigo",
                      "lang": "bash",
                      "regiao": "como",
                      "conteudo": "docker exec sep-postgres psql -U sep -d sep_dev \\\n  -c \"SELECT status, id_verificacao_externa FROM solicitacao_onboarding\n      WHERE documento = '39053344705';\""
                    }
                  ],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 619,
                  "ordem": 5
                }
              ]
            }
          ],
          "assercoes": [],
          "linha": 587,
          "stats": {
            "passos": 5,
            "na": 0,
            "assercoes": 0
          }
        },
        {
          "key": "ROTEIRO-03/J-052.W-N2",
          "id": "J-052.W-N2",
          "escopoId": "J-052.W-N2",
          "kind": "jornada",
          "nivel": 3,
          "titulo": "Arquivo fora da política de upload",
          "anchor": "j-052w-n2---arquivo-fora-da-poltica-de-upload",
          "ordem": 8,
          "meta": [
            {
              "chave": "ID",
              "texto": "J-052.W-N2",
              "html": "<code>J-052.W-N2</code>"
            },
            {
              "chave": "Tipo",
              "texto": "Negativa — validação",
              "html": "Negativa — validação"
            },
            {
              "chave": "Persona",
              "texto": "cliente-b",
              "html": "<code>cliente-b</code>"
            },
            {
              "chave": "Superfície",
              "texto": "Web + API",
              "html": "Web + API"
            },
            {
              "chave": "Vetor",
              "texto": "Subir arquivo de tipo ou tamanho não permitido",
              "html": "Subir arquivo de tipo ou tamanho não permitido"
            },
            {
              "chave": "Comportamento seguro esperado",
              "texto": "400 do backend, nada gravado",
              "html": "<code>400</code> do backend, nada gravado"
            },
            {
              "chave": "Pré-condições",
              "texto": "PRE-01 PRE-02 PRE-04 + solicitação da J-052.W-N1",
              "html": "<code>PRE-01</code> <code>PRE-02</code> <code>PRE-04</code> + solicitação da <code>J-052.W-N1</code>"
            }
          ],
          "metaIndex": {
            "ID": "J-052.W-N2",
            "Tipo": "Negativa — validação",
            "Persona": "cliente-b",
            "Superfície": "Web + API",
            "Vetor": "Subir arquivo de tipo ou tamanho não permitido",
            "Comportamento seguro esperado": "400 do backend, nada gravado",
            "Pré-condições": "PRE-01 PRE-02 PRE-04 + solicitação da J-052.W-N1"
          },
          "notas": [],
          "grupos": [
            {
              "id": "g1",
              "tituloHtml": null,
              "tela": null,
              "implicito": true,
              "passos": [
                {
                  "key": "ROTEIRO-03/J-052.W-N2/P1",
                  "id": "P1",
                  "hash": "f0555e97",
                  "textoHtml": "Tentar anexar um arquivo de tipo não aceito.",
                  "comoHtml": "O campo de arquivo da tela filtra por PDF, JPEG e PNG, então <strong>o teste real é pela API</strong>: no Insomnia, <code>POST /{id}/documentos</code> em multipart com um <code>.txt</code> ou <code>.zip</code>. Filtro de <code>accept</code> no HTML é conveniência, não controle.",
                  "textoBusca": "tentar anexar um arquivo de tipo não aceito. o campo de arquivo da tela filtra por pdf, jpeg e png, então o teste real é pela api: no insomnia, post /{id}/documentos em multipart com um .txt ou .zip. filtro de accept no html é conveniência, não controle.",
                  "esperadoHtml": "<code>400</code>, código <code>ONB-400-003</code>, mensagem listando os MIMEs aceitos.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 645,
                  "ordem": 1
                },
                {
                  "key": "ROTEIRO-03/J-052.W-N2/P2",
                  "id": "P2",
                  "hash": "92040afd",
                  "textoHtml": "Tentar anexar arquivo acima de 10MB.",
                  "comoHtml": "Gerar um PDF/JPEG grande (<code>head -c 11000000 /dev/urandom &gt; grande.jpg</code> serve para testar o limite; o conteúdo não é analisado). Enviar pela tela ou pela API.",
                  "textoBusca": "tentar anexar arquivo acima de 10mb. gerar um pdf/jpeg grande (head -c 11000000 /dev/urandom > grande.jpg serve para testar o limite; o conteúdo não é analisado). enviar pela tela ou pela api.",
                  "esperadoHtml": "<code>400</code>, código <code>ONB-400-004</code>.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 650,
                  "ordem": 2
                },
                {
                  "key": "ROTEIRO-03/J-052.W-N2/P3",
                  "id": "P3",
                  "hash": "3029cba3",
                  "textoHtml": "Tentar enviar o campo de arquivo vazio.",
                  "comoHtml": "Pela API, multipart com <code>tipo=RG</code> e sem parte de arquivo, ou com arquivo de zero byte.",
                  "textoBusca": "tentar enviar o campo de arquivo vazio. pela api, multipart com tipo=rg e sem parte de arquivo, ou com arquivo de zero byte.",
                  "esperadoHtml": "<code>400</code>, código <code>ONB-400-007</code>.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 654,
                  "ordem": 3
                },
                {
                  "key": "ROTEIRO-03/J-052.W-N2/P4",
                  "id": "P4",
                  "hash": "a34b2fc9",
                  "textoHtml": "Conferir que nada foi persistido.",
                  "comoHtml": "Terminal do banco. O documento tem <code>conteudo</code> gravado como binário na tabela; um upload recusado não pode deixar linha.",
                  "textoBusca": "conferir que nada foi persistido. terminal do banco. o documento tem conteudo gravado como binário na tabela; um upload recusado não pode deixar linha.",
                  "esperadoHtml": "só a selfie da <code>J-052.W-N1</code>; nenhuma linha das tentativas acima.",
                  "blocos": [
                    {
                      "tipo": "codigo",
                      "lang": "bash",
                      "regiao": "como",
                      "conteudo": "docker exec sep-postgres psql -U sep -d sep_dev \\\n  -c \"SELECT tipo, mime_type, tamanho_bytes FROM documento_cadastral d\n      JOIN solicitacao_onboarding s ON s.id = d.solicitacao_id\n      WHERE s.documento = '39053344705';\""
                    }
                  ],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 658,
                  "ordem": 4
                }
              ]
            }
          ],
          "assercoes": [],
          "linha": 631,
          "stats": {
            "passos": 4,
            "na": 0,
            "assercoes": 0
          }
        },
        {
          "key": "ROTEIRO-03/J-053.A-N1",
          "id": "J-053.A-N1",
          "escopoId": "J-053.A-N1",
          "kind": "jornada",
          "nivel": 3,
          "titulo": "Leitura de onboarding alheio",
          "anchor": "j-053a-n1---leitura-de-onboarding-alheio",
          "ordem": 9,
          "meta": [
            {
              "chave": "ID",
              "texto": "J-053.A-N1",
              "html": "<code>J-053.A-N1</code>"
            },
            {
              "chave": "Tipo",
              "texto": "Negativa — ownership",
              "html": "Negativa — ownership"
            },
            {
              "chave": "Persona",
              "texto": "cliente-b tentando ler dados do cliente-a",
              "html": "<code>cliente-b</code> tentando ler dados do <code>cliente-a</code>"
            },
            {
              "chave": "Superfície",
              "texto": "API",
              "html": "API"
            },
            {
              "chave": "Vetor",
              "texto": "Trocar o id na URL para ver KYC de outra pessoa",
              "html": "Trocar o id na URL para ver KYC de outra pessoa"
            },
            {
              "chave": "Comportamento seguro esperado",
              "texto": "403, sem vazar nome, CPF ou status",
              "html": "<code>403</code>, sem vazar nome, CPF ou status"
            },
            {
              "chave": "Pré-condições",
              "texto": "PRE-01 PRE-04 PRE-09 + J-050.W concluída",
              "html": "<code>PRE-01</code> <code>PRE-04</code> <code>PRE-09</code> + <code>J-050.W</code> concluída"
            }
          ],
          "metaIndex": {
            "ID": "J-053.A-N1",
            "Tipo": "Negativa — ownership",
            "Persona": "cliente-b tentando ler dados do cliente-a",
            "Superfície": "API",
            "Vetor": "Trocar o id na URL para ver KYC de outra pessoa",
            "Comportamento seguro esperado": "403, sem vazar nome, CPF ou status",
            "Pré-condições": "PRE-01 PRE-04 PRE-09 + J-050.W concluída"
          },
          "notas": [
            "Onboarding guarda nome completo, CPF, data de nascimento e imagens de documento. Vazamento aqui é incidente de LGPD, não bug de tela."
          ],
          "grupos": [
            {
              "id": "g1",
              "tituloHtml": null,
              "tela": null,
              "implicito": true,
              "passos": [
                {
                  "key": "ROTEIRO-03/J-053.A-N1/P1",
                  "id": "P1",
                  "hash": "9c00170a",
                  "textoHtml": "Como <code>cliente-b</code>, consultar a solicitação do <code>cliente-a</code>.",
                  "comoHtml": "No Insomnia, login como <code>cliente-b</code>, e <code>GET /api/v1/onboarding/pessoa/{id}</code> com o id anotado na <code>J-050.W</code>.",
                  "textoBusca": "como cliente-b, consultar a solicitação do cliente-a. no insomnia, login como cliente-b, e get /api/v1/onboarding/pessoa/{id} com o id anotado na j-050.w.",
                  "esperadoHtml": "<code>403</code>. Nada do corpo pode conter nome, CPF ou status da solicitação alheia.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 688,
                  "ordem": 1
                },
                {
                  "key": "ROTEIRO-03/J-053.A-N1/P2",
                  "id": "P2",
                  "hash": "8cceff20",
                  "textoHtml": "Tentar anexar documento na solicitação alheia.",
                  "comoHtml": "<code>POST /{id}/documentos</code> com o token do <code>cliente-b</code>. Leitura negada e escrita permitida seria pior que o contrário.",
                  "textoBusca": "tentar anexar documento na solicitação alheia. post /{id}/documentos com o token do cliente-b. leitura negada e escrita permitida seria pior que o contrário.",
                  "esperadoHtml": "<code>403</code>; nenhum documento novo na solicitação do <code>cliente-a</code>.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 692,
                  "ordem": 2
                },
                {
                  "key": "ROTEIRO-03/J-053.A-N1/P3",
                  "id": "P3",
                  "hash": "43a010ae",
                  "textoHtml": "Tentar disparar a verificação da solicitação alheia.",
                  "comoHtml": "<code>POST /{id}/verificar</code> com o token do <code>cliente-b</code>.",
                  "textoBusca": "tentar disparar a verificação da solicitação alheia. post /{id}/verificar com o token do cliente-b.",
                  "esperadoHtml": "<code>403</code>.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 696,
                  "ordem": 3
                },
                {
                  "key": "ROTEIRO-03/J-053.A-N1/P4",
                  "id": "P4",
                  "hash": "8e341c28",
                  "textoHtml": "Conferir pelo web que o <code>cliente-a</code> não perdeu nada.",
                  "comoHtml": "Entrar como <code>cliente-a</code> e abrir a solicitação. Contar os documentos.",
                  "textoBusca": "conferir pelo web que o cliente-a não perdeu nada. entrar como cliente-a e abrir a solicitação. contar os documentos.",
                  "esperadoHtml": "<code>APROVADO_FINAL</code> e dois documentos, como no fim da <code>J-050.W</code>.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 699,
                  "ordem": 4
                },
                {
                  "key": "ROTEIRO-03/J-053.A-N1/P5",
                  "id": "P5",
                  "hash": "7bc7d31c",
                  "textoHtml": "Confirmar que o <code>admin</code> <strong>pode</strong> ler.",
                  "comoHtml": "Repetir o P1 com o token do <code>admin</code>. O backend admite ADMIN como leitor legítimo — é o contraponto que prova que o <code>403</code> do P1 veio da regra de dono e não de erro genérico.",
                  "textoBusca": "confirmar que o admin pode ler. repetir o p1 com o token do admin. o backend admite admin como leitor legítimo — é o contraponto que prova que o 403 do p1 veio da regra de dono e não de erro genérico.",
                  "esperadoHtml": "<code>200</code> com o status da solicitação.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 702,
                  "ordem": 5
                }
              ]
            }
          ],
          "assercoes": [],
          "linha": 671,
          "stats": {
            "passos": 5,
            "na": 0,
            "assercoes": 0
          }
        },
        {
          "key": "ROTEIRO-03/J-054.W-N1",
          "id": "J-054.W-N1",
          "escopoId": "J-054.W-N1",
          "kind": "jornada",
          "nivel": 3,
          "titulo": "KYC reprovado e liberação do CPF",
          "anchor": "j-054w-n1---kyc-reprovado-e-liberao-do-cpf",
          "ordem": 10,
          "meta": [
            {
              "chave": "ID",
              "texto": "J-054.W-N1",
              "html": "<code>J-054.W-N1</code>"
            },
            {
              "chave": "Tipo",
              "texto": "Negativa — desfecho de negócio",
              "html": "Negativa — desfecho de negócio"
            },
            {
              "chave": "Persona",
              "texto": "cliente-b",
              "html": "<code>cliente-b</code>"
            },
            {
              "chave": "Superfície",
              "texto": "Web + API",
              "html": "Web + API"
            },
            {
              "chave": "Vetor",
              "texto": "Resultado de KYC negativo do provider",
              "html": "Resultado de KYC negativo do provider"
            },
            {
              "chave": "Comportamento seguro esperado",
              "texto": "REPROVADO, sem PLD, e o CPF volta a ficar disponível",
              "html": "<code>REPROVADO</code>, sem PLD, e o CPF volta a ficar disponível"
            },
            {
              "chave": "Pré-condições",
              "texto": "PRE-01 PRE-02 PRE-04 PRE-09 + solicitação da J-052.W-N1",
              "html": "<code>PRE-01</code> <code>PRE-02</code> <code>PRE-04</code> <code>PRE-09</code> + solicitação da <code>J-052.W-N1</code>"
            }
          ],
          "metaIndex": {
            "ID": "J-054.W-N1",
            "Tipo": "Negativa — desfecho de negócio",
            "Persona": "cliente-b",
            "Superfície": "Web + API",
            "Vetor": "Resultado de KYC negativo do provider",
            "Comportamento seguro esperado": "REPROVADO, sem PLD, e o CPF volta a ficar disponível",
            "Pré-condições": "PRE-01 PRE-02 PRE-04 PRE-09 + solicitação da J-052.W-N1"
          },
          "notas": [
            "<strong>Deixe o <code>cliente-b</code> assim.</strong> O <code>ROTEIRO-04</code> usa essa persona exatamente por ela <strong>não</strong> estar em <code>APROVADO_FINAL</code> (<code>J-061.W-N1</code>). Não conclua o onboarding dele."
          ],
          "grupos": [
            {
              "id": "g1",
              "tituloHtml": null,
              "tela": null,
              "implicito": true,
              "passos": [
                {
                  "key": "ROTEIRO-03/J-054.W-N1/P1",
                  "id": "P1",
                  "hash": "2d9c338b",
                  "textoHtml": "Completar os documentos do <code>cliente-b</code> e disparar a verificação.",
                  "comoHtml": "Na solicitação criada na <code>J-052.W-N1</code>, que já tem a selfie, anexar um <code>RG</code> e clicar <strong>Enviar para verificação</strong>.",
                  "textoBusca": "completar os documentos do cliente-b e disparar a verificação. na solicitação criada na j-052.w-n1, que já tem a selfie, anexar um rg e clicar enviar para verificação.",
                  "esperadoHtml": "<code>202</code>; status <code>EM_VERIFICACAO</code>.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 724,
                  "ordem": 1
                },
                {
                  "key": "ROTEIRO-03/J-054.W-N1/P2",
                  "id": "P2",
                  "hash": "f2e47898",
                  "textoHtml": "Disparar o webhook com resultado <strong>reprovado</strong>.",
                  "comoHtml": "Mesmo procedimento da <a href=\"#j-051a---webhook-kyc-fecha-a-verificação-pf\" rel=\"noreferrer\"><code>J-051.A</code></a>, trocando o status do corpo para <code>REJECTED</code> e recalculando a assinatura, com o id da solicitação do <code>cliente-b</code>.",
                  "textoBusca": "disparar o webhook com resultado reprovado. mesmo procedimento da j-051.a, trocando o status do corpo para rejected e recalculando a assinatura, com o id da solicitação do cliente-b.",
                  "esperadoHtml": "<code>202</code>.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 728,
                  "ordem": 2
                },
                {
                  "key": "ROTEIRO-03/J-054.W-N1/P3",
                  "id": "P3",
                  "hash": "1c366b1d",
                  "textoHtml": "Conferir o status e a <strong>ausência</strong> de PLD.",
                  "comoHtml": "Atualizar a tela. Aqui o ponto não é só o <code>REPROVADO</code>: PLD <strong>não pode</strong> ter rodado, porque reprovado no KYC não avança para triagem.",
                  "textoBusca": "conferir o status e a ausência de pld. atualizar a tela. aqui o ponto não é só o reprovado: pld não pode ter rodado, porque reprovado no kyc não avança para triagem.",
                  "esperadoHtml": "<code>REPROVADO</code>, e a tela mostra o resultado com o motivo, quando houver. <em>Esperado:</em> nenhum evento de PLD com hora posterior ao P2.",
                  "blocos": [
                    {
                      "tipo": "codigo",
                      "lang": "bash",
                      "regiao": "esperado",
                      "conteudo": "docker exec sep-postgres psql -U sep -d sep_dev \\\n  -c \"SELECT tipo, data_evento FROM audit_log_seguranca\n      WHERE tipo LIKE 'PLD%' ORDER BY data_evento DESC LIMIT 5;\""
                    }
                  ],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 733,
                  "ordem": 3
                },
                {
                  "key": "ROTEIRO-03/J-054.W-N1/P4",
                  "id": "P4",
                  "hash": "41905c83",
                  "textoHtml": "Iniciar um <strong>novo</strong> onboarding com o mesmo CPF.",
                  "comoHtml": "Voltar a <code>/app/onboarding/pessoa</code> como <code>cliente-b</code> e enviar <code>39053344705</code> de novo. <code>REPROVADO</code> é status final mas <strong>libera</strong> o documento — é a regra que permite recomeçar depois de uma recusa, e ela é o oposto da do <code>409</code> na <code>J-050.W-N1</code>.",
                  "textoBusca": "iniciar um novo onboarding com o mesmo cpf. voltar a /app/onboarding/pessoa como cliente-b e enviar 39053344705 de novo. reprovado é status final mas libera o documento — é a regra que permite recomeçar depois de uma recusa, e ela é o oposto da do 409 na j-050.w-n1.",
                  "esperadoHtml": "<code>201</code>, nova solicitação em <code>INICIADO</code>. <strong>Não</strong> é <code>409</code>.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 743,
                  "ordem": 4
                },
                {
                  "key": "ROTEIRO-03/J-054.W-N1/P5",
                  "id": "P5",
                  "hash": "a5b6bd66",
                  "textoHtml": "Conferir que agora existem duas solicitações para o CPF, uma só ativa.",
                  "comoHtml": "Terminal do banco.",
                  "textoBusca": "conferir que agora existem duas solicitações para o cpf, uma só ativa. terminal do banco.",
                  "esperadoHtml": "duas linhas — <code>REPROVADO</code> e <code>INICIADO</code>.",
                  "blocos": [
                    {
                      "tipo": "codigo",
                      "lang": "bash",
                      "regiao": "como",
                      "conteudo": "docker exec sep-postgres psql -U sep -d sep_dev \\\n  -c \"SELECT status, data_criacao FROM solicitacao_onboarding\n      WHERE documento = '39053344705' ORDER BY data_criacao;\""
                    }
                  ],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 748,
                  "ordem": 5
                }
              ]
            }
          ],
          "assercoes": [],
          "linha": 710,
          "stats": {
            "passos": 5,
            "na": 0,
            "assercoes": 0
          }
        },
        {
          "key": "ROTEIRO-03/J-055.M",
          "id": "J-055.M",
          "escopoId": "J-055.M",
          "kind": "jornada",
          "nivel": 3,
          "titulo": "Onboarding PF no mobile",
          "anchor": "j-055m---onboarding-pf-no-mobile",
          "ordem": 11,
          "meta": [
            {
              "chave": "ID",
              "texto": "J-055.M",
              "html": "<code>J-055.M</code>"
            },
            {
              "chave": "Tipo",
              "texto": "Positiva",
              "html": "Positiva"
            },
            {
              "chave": "Persona",
              "texto": "Conta criada na J-003.M",
              "html": "Conta criada na <a href=\"./ROTEIRO-01-ACESSO-E-SESSAO.md#j-003m---visitante-cria-conta-de-cliente\" rel=\"noreferrer\"><code>J-003.M</code></a>"
            },
            {
              "chave": "Superfície",
              "texto": "Mobile (PWA)",
              "html": "Mobile (PWA)"
            },
            {
              "chave": "Pré-condições",
              "texto": "PRE-01 PRE-03 PRE-04 + J-003.M concluída",
              "html": "<code>PRE-01</code> <code>PRE-03</code> <code>PRE-04</code> + <code>J-003.M</code> concluída"
            },
            {
              "chave": "Endpoints tocados",
              "texto": "os mesmos do PF",
              "html": "os mesmos do PF"
            },
            {
              "chave": "Step-up",
              "texto": "não",
              "html": "não"
            },
            {
              "chave": "Duração",
              "texto": "10 min",
              "html": "10 min"
            },
            {
              "chave": "Automação equivalente",
              "texto": "onboarding-mobile.spec.ts (Playwright, contra MSW)",
              "html": "<code>onboarding-mobile.spec.ts</code> (Playwright, contra MSW)"
            },
            {
              "chave": "Só o manual cobre",
              "texto": "Layout a 320px, backend real, paridade de contrato entre superfícies",
              "html": "Layout a 320px, backend real, paridade de contrato entre superfícies"
            }
          ],
          "metaIndex": {
            "ID": "J-055.M",
            "Tipo": "Positiva",
            "Persona": "Conta criada na J-003.M",
            "Superfície": "Mobile (PWA)",
            "Pré-condições": "PRE-01 PRE-03 PRE-04 + J-003.M concluída",
            "Endpoints tocados": "os mesmos do PF",
            "Step-up": "não",
            "Duração": "10 min",
            "Automação equivalente": "onboarding-mobile.spec.ts (Playwright, contra MSW)",
            "Só o manual cobre": "Layout a 320px, backend real, paridade de contrato entre superfícies"
          },
          "notas": [
            "Persona separada de propósito: o <code>cliente-a</code> já tem onboarding ativo e receberia <code>409</code>. A conta da <code>J-003.M</code> é um CLIENTE limpo."
          ],
          "grupos": [
            {
              "id": "g1",
              "tituloHtml": null,
              "tela": null,
              "implicito": true,
              "passos": [
                {
                  "key": "ROTEIRO-03/J-055.M/P1",
                  "id": "P1",
                  "hash": "010aadf6",
                  "textoHtml": "Abrir o onboarding no mobile.",
                  "comoHtml": "Em <code>http://localhost:8100</code>, com a emulação de dispositivo ligada (<code>Ctrl+Shift+M</code>), logado com a conta da <code>J-003.M</code>. A navegação é por abas no rodapé; o onboarding fica sob a aba <strong>Início</strong>.",
                  "textoBusca": "abrir o onboarding no mobile. em http://localhost:8100, com a emulação de dispositivo ligada (ctrl+shift+m), logado com a conta da j-003.m. a navegação é por abas no rodapé; o onboarding fica sob a aba início.",
                  "esperadoHtml": "tela de onboarding com o indicador de etapas <strong>Dados → Documentos → Status</strong> e a escolha entre pessoa física e empresa.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 782,
                  "ordem": 1
                },
                {
                  "key": "ROTEIRO-03/J-055.M/P2",
                  "id": "P2",
                  "hash": "2c95f882",
                  "textoHtml": "Conferir os tipos de documento oferecidos para pessoa física.",
                  "comoHtml": "Escolher pessoa física, preencher CPF <code>11144477735</code>, nome e data, avançar até a etapa de documentos e abrir a lista de tipos.",
                  "textoBusca": "conferir os tipos de documento oferecidos para pessoa física. escolher pessoa física, preencher cpf 11144477735, nome e data, avançar até a etapa de documentos e abrir a lista de tipos.",
                  "esperadoHtml": "<code>RG</code>, <code>CNH</code>, <code>PASSAPORTE</code> e <code>SELFIE</code>. <strong>O mobile não oferece <code>COMPROVANTE_ENDERECO</code> para PF e o web oferece</strong> — divergência conhecida entre as superfícies. Nenhuma das duas quebra o backend (o comprovante não entra no mínimo exigido), mas confirme que a lista é essa; se mudou, é ocorrência de contrato.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 788,
                  "ordem": 2
                },
                {
                  "key": "ROTEIRO-03/J-055.M/P3",
                  "id": "P3",
                  "hash": "77ecfef0",
                  "textoHtml": "Enviar identidade e selfie e disparar a verificação.",
                  "comoHtml": "Mesmos dois documentos mínimos do web.",
                  "textoBusca": "enviar identidade e selfie e disparar a verificação. mesmos dois documentos mínimos do web.",
                  "esperadoHtml": "etapa <strong>Status</strong> com <code>EM_VERIFICACAO</code>.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 795,
                  "ordem": 3
                },
                {
                  "key": "ROTEIRO-03/J-055.M/P4",
                  "id": "P4",
                  "hash": "879950d2",
                  "textoHtml": "Conferir o layout a 320px.",
                  "comoHtml": "<strong>Este passo é sobre o layout mobile</strong>, que nenhum teste automatizado cobre. No DevTools, trocar o preset para 320px de largura e percorrer as três etapas. Procurar barra de rolagem <strong>horizontal</strong>, botão cortado na borda e rótulo truncado.",
                  "textoBusca": "conferir o layout a 320px. este passo é sobre o layout mobile, que nenhum teste automatizado cobre. no devtools, trocar o preset para 320px de largura e percorrer as três etapas. procurar barra de rolagem horizontal, botão cortado na borda e rótulo truncado.",
                  "esperadoHtml": "sem scroll horizontal e sem corte a 320px.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 798,
                  "ordem": 4
                },
                {
                  "key": "ROTEIRO-03/J-055.M/P5",
                  "id": "P5",
                  "hash": "c7dd30fa",
                  "textoHtml": "Fechar pelo webhook e reconsultar por gesto.",
                  "comoHtml": "Executar a <a href=\"#j-051a---webhook-kyc-fecha-a-verificação-pf\" rel=\"noreferrer\"><code>J-051.A</code></a> com o id desta solicitação. Voltar ao app e atualizar <strong>por gesto</strong> — recarregar ou reentrar na tela. A tela não busca sozinha.",
                  "textoBusca": "fechar pelo webhook e reconsultar por gesto. executar a j-051.a com o id desta solicitação. voltar ao app e atualizar por gesto — recarregar ou reentrar na tela. a tela não busca sozinha.",
                  "esperadoHtml": "<code>APROVADO_FINAL</code>; sem chamadas repetidas em intervalo fixo na aba Network.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 803,
                  "ordem": 5
                },
                {
                  "key": "ROTEIRO-03/J-055.M/P6",
                  "id": "P6",
                  "hash": "5daf0746",
                  "textoHtml": "Conferir a consistência entre superfícies.",
                  "comoHtml": "Abrir a <strong>mesma</strong> solicitação no web (<code>localhost:4200</code>) com a mesma conta, lado a lado com o mobile. As duas leem o mesmo backend e têm de concordar.",
                  "textoBusca": "conferir a consistência entre superfícies. abrir a mesma solicitação no web (localhost:4200) com a mesma conta, lado a lado com o mobile. as duas leem o mesmo backend e têm de concordar.",
                  "esperadoHtml": "mesmo status e mesma lista de documentos nas duas telas.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 808,
                  "ordem": 6
                }
              ]
            }
          ],
          "assercoes": [],
          "linha": 762,
          "stats": {
            "passos": 6,
            "na": 0,
            "assercoes": 0
          }
        },
        {
          "key": "ROTEIRO-03/J-056.W",
          "id": "J-056.W",
          "escopoId": "J-056.W",
          "kind": "jornada",
          "nivel": 3,
          "titulo": "Credora conclui o onboarding KYB PJ",
          "anchor": "j-056w---credora-conclui-o-onboarding-kyb-pj",
          "ordem": 12,
          "meta": [
            {
              "chave": "ID",
              "texto": "J-056.W",
              "html": "<code>J-056.W</code>"
            },
            {
              "chave": "Tipo",
              "texto": "Positiva",
              "html": "Positiva"
            },
            {
              "chave": "Persona",
              "texto": "credora — CLIENTE que ainda não é credora",
              "html": "<code>credora</code> — CLIENTE que ainda não é credora"
            },
            {
              "chave": "Superfície",
              "texto": "Web",
              "html": "Web"
            },
            {
              "chave": "Pré-condições",
              "texto": "PRE-01 PRE-02 PRE-04 PRE-05",
              "html": "<code>PRE-01</code> <code>PRE-02</code> <code>PRE-04</code> <code>PRE-05</code>"
            },
            {
              "chave": "Endpoints tocados",
              "texto": "POST /onboarding/empresa, POST /{id}/documentos, POST /{id}/verificar, GET /{id}",
              "html": "<code>POST /onboarding/empresa</code>, <code>POST /{id}/documentos</code>, <code>POST /{id}/verificar</code>, <code>GET /{id}</code>"
            },
            {
              "chave": "Step-up",
              "texto": "não",
              "html": "não"
            },
            {
              "chave": "Duração",
              "texto": "10 min",
              "html": "10 min"
            },
            {
              "chave": "Automação equivalente",
              "texto": "onboarding.spec.ts (parcial, contra MSW)",
              "html": "<code>onboarding.spec.ts</code> (parcial, contra MSW)"
            },
            {
              "chave": "Só o manual cobre",
              "texto": "KYB síncrono real, consulta de CNPJ persistida, PLD multi-alvo",
              "html": "KYB síncrono real, consulta de CNPJ persistida, PLD multi-alvo"
            }
          ],
          "metaIndex": {
            "ID": "J-056.W",
            "Tipo": "Positiva",
            "Persona": "credora — CLIENTE que ainda não é credora",
            "Superfície": "Web",
            "Pré-condições": "PRE-01 PRE-02 PRE-04 PRE-05",
            "Endpoints tocados": "POST /onboarding/empresa, POST /{id}/documentos, POST /{id}/verificar, GET /{id}",
            "Step-up": "não",
            "Duração": "10 min",
            "Automação equivalente": "onboarding.spec.ts (parcial, contra MSW)",
            "Só o manual cobre": "KYB síncrono real, consulta de CNPJ persistida, PLD multi-alvo"
          },
          "notas": [
            "Produz a <strong>base</strong> do <code>PRE-13</code>. Virar credora de fato exige também o cadastro em <code>/app/credora/cadastro</code>, que é jornada do roteiro de credora — até lá o <code>credoraPresenceGuard</code> continua bloqueando."
          ],
          "grupos": [
            {
              "id": "g1",
              "tituloHtml": null,
              "tela": null,
              "implicito": true,
              "passos": [
                {
                  "key": "ROTEIRO-03/J-056.W/P1",
                  "id": "P1",
                  "hash": "153db338",
                  "textoHtml": "Abrir o onboarding de empresa.",
                  "comoHtml": "Logado como <code>credora@sep.test</code>, menu <strong>Jornadas</strong> &gt; <strong>Onboarding</strong>, cartão de empresa.",
                  "textoBusca": "abrir o onboarding de empresa. logado como credora@sep.test, menu jornadas > onboarding, cartão de empresa.",
                  "esperadoHtml": "formulário em <code>/app/onboarding/empresa</code>.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 836,
                  "ordem": 1
                },
                {
                  "key": "ROTEIRO-03/J-056.W/P2",
                  "id": "P2",
                  "hash": "9664575c",
                  "textoHtml": "Tentar iniciar com CNPJ de DV errado.",
                  "comoHtml": "Enviar <code>11222333000180</code>. Mesma lógica do CPF: o DV é validado no backend.",
                  "textoBusca": "tentar iniciar com cnpj de dv errado. enviar 11222333000180. mesma lógica do cpf: o dv é validado no backend.",
                  "esperadoHtml": "recusado, código <code>ONB-400-006</code>.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 840,
                  "ordem": 2
                },
                {
                  "key": "ROTEIRO-03/J-056.W/P3",
                  "id": "P3",
                  "hash": "723a8a40",
                  "textoHtml": "Iniciar com os dados válidos.",
                  "comoHtml": "CNPJ <code>11222333000181</code>, razão social qualquer. <strong>Tipo societário e porte são opcionais</strong> — o formulário diz isso no rótulo; deixe pelo menos um em branco de propósito para confirmar que o <code>201</code> sai mesmo assim. <strong>Anotar o id.</strong>",
                  "textoBusca": "iniciar com os dados válidos. cnpj 11222333000181, razão social qualquer. tipo societário e porte são opcionais — o formulário diz isso no rótulo; deixe pelo menos um em branco de propósito para confirmar que o 201 sai mesmo assim. anotar o id.",
                  "esperadoHtml": "<code>201</code>; vai para o detalhe.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 843,
                  "ordem": 3
                },
                {
                  "key": "ROTEIRO-03/J-056.W/P4",
                  "id": "P4",
                  "hash": "1ea4740e",
                  "textoHtml": "Enviar os dois documentos mínimos de PJ.",
                  "comoHtml": "1 de identificação societária (<code>CONTRATO_SOCIAL</code> ou <code>CCMEI</code>) <strong>e</strong> 1 <code>COMPROVANTE_ENDERECO</code>. O mínimo de PJ é diferente do de PF; enviar dois contratos sociais não satisfaz.",
                  "textoBusca": "enviar os dois documentos mínimos de pj. 1 de identificação societária (contratosocial ou ccmei) e 1 comprovanteendereco. o mínimo de pj é diferente do de pf; enviar dois contratos sociais não satisfaz.",
                  "esperadoHtml": "<code>204</code> nos dois; status <code>DOCUMENTOS_RECEBIDOS</code>.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 848,
                  "ordem": 4
                },
                {
                  "key": "ROTEIRO-03/J-056.W/P5",
                  "id": "P5",
                  "hash": "67d33d11",
                  "textoHtml": "Enviar para verificação e <strong>não</strong> disparar webhook nenhum.",
                  "comoHtml": "Clicar <strong>Enviar para verificação</strong> e clicar <strong>Atualizar</strong> logo em seguida. Aqui é onde PJ se separa de PF: o KYB é <strong>síncrono</strong>, então a resposta do próprio <code>POST</code> já finalizou a verificação, e o PLD dos alvos rodou depois do commit.",
                  "textoBusca": "enviar para verificação e não disparar webhook nenhum. clicar enviar para verificação e clicar atualizar logo em seguida. aqui é onde pj se separa de pf: o kyb é síncrono, então a resposta do próprio post já finalizou a verificação, e o pld dos alvos rodou depois do commit.",
                  "esperadoHtml": "<strong><code>APROVADO_FINAL</code> sem nenhum webhook</strong>. Se parar em <code>EM_VERIFICACAO</code>, é ocorrência — no PJ isso não é estado estável.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 853,
                  "ordem": 5
                },
                {
                  "key": "ROTEIRO-03/J-056.W/P6",
                  "id": "P6",
                  "hash": "253d357c",
                  "textoHtml": "Conferir os dados cadastrais que o provider devolveu.",
                  "comoHtml": "Na tela de detalhe, ler o bloco de dados da empresa e a lista de representantes.",
                  "textoBusca": "conferir os dados cadastrais que o provider devolveu. na tela de detalhe, ler o bloco de dados da empresa e a lista de representantes.",
                  "esperadoHtml": "razão social preenchida e <strong>um</strong> representante legal listado — o fake devolve sempre um. CNPJ, razão social, nome fantasia, tipo societário e porte são os únicos dados de empresa expostos.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 859,
                  "ordem": 6
                },
                {
                  "key": "ROTEIRO-03/J-056.W/P7",
                  "id": "P7",
                  "hash": "60da15d1",
                  "textoHtml": "Conferir a consulta de CNPJ persistida.",
                  "comoHtml": "Terminal do banco. A consulta ao provider tem de deixar registro próprio, com a situação cadastral que motivou a decisão.",
                  "textoBusca": "conferir a consulta de cnpj persistida. terminal do banco. a consulta ao provider tem de deixar registro próprio, com a situação cadastral que motivou a decisão.",
                  "esperadoHtml": "<code>APROVADO_FINAL</code> e situação cadastral <code>ATIVA</code>.",
                  "blocos": [
                    {
                      "tipo": "codigo",
                      "lang": "bash",
                      "regiao": "como",
                      "conteudo": "docker exec sep-postgres psql -U sep -d sep_dev \\\n  -c \"SELECT k.cnpj, s.status, c.situacao_cadastral\n      FROM kyb_empresa k\n      JOIN solicitacao_onboarding s ON s.id = k.solicitacao_id\n      LEFT JOIN consulta_cnpj c ON c.kyb_empresa_id = k.id\n      WHERE k.cnpj = '11222333000181';\""
                    }
                  ],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 864,
                  "ordem": 7
                },
                {
                  "key": "ROTEIRO-03/J-056.W/P8",
                  "id": "P8",
                  "hash": "eafd5373",
                  "textoHtml": "Conferir a trilha de KYB.",
                  "comoHtml": "Terminal do banco.",
                  "textoBusca": "conferir a trilha de kyb. terminal do banco.",
                  "esperadoHtml": "<code>KYB_INICIADO</code> e <code>KYB_FINALIZADO_APROVADO</code>.",
                  "blocos": [
                    {
                      "tipo": "codigo",
                      "lang": "bash",
                      "regiao": "como",
                      "conteudo": "docker exec sep-postgres psql -U sep -d sep_dev \\\n  -c \"SELECT tipo, data_evento FROM audit_log_seguranca\n      WHERE tipo LIKE 'KYB%' ORDER BY data_evento DESC LIMIT 5;\""
                    }
                  ],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 876,
                  "ordem": 8
                }
              ]
            }
          ],
          "assercoes": [
            {
              "key": "ROTEIRO-03/J-056.W/#3ea39581",
              "id": null,
              "hash": "96b4283b",
              "textoHtml": "<code>credora</code> com PJ em <code>APROVADO_FINAL</code>; anotar o id para o roteiro de credora",
              "comoHtml": null,
              "textoBusca": "credora com pj em aprovadofinal; anotar o id para o roteiro de credora",
              "esperadoHtml": null,
              "blocos": [],
              "na": false,
              "naMotivo": null,
              "marcadoNaFonte": false,
              "linha": 887,
              "ordem": 1
            }
          ],
          "linha": 815,
          "stats": {
            "passos": 8,
            "na": 0,
            "assercoes": 1
          }
        },
        {
          "key": "ROTEIRO-03/J-057.A",
          "id": "J-057.A",
          "escopoId": "J-057.A",
          "kind": "jornada",
          "nivel": 3,
          "titulo": "Representantes legais com CPF mascarado",
          "anchor": "j-057a---representantes-legais-com-cpf-mascarado",
          "ordem": 13,
          "meta": [
            {
              "chave": "ID",
              "texto": "J-057.A",
              "html": "<code>J-057.A</code>"
            },
            {
              "chave": "Tipo",
              "texto": "Positiva — minimização de dado pessoal",
              "html": "Positiva — minimização de dado pessoal"
            },
            {
              "chave": "Persona",
              "texto": "credora",
              "html": "<code>credora</code>"
            },
            {
              "chave": "Superfície",
              "texto": "API",
              "html": "API"
            },
            {
              "chave": "Pré-condições",
              "texto": "PRE-01 PRE-04 + J-056.W concluída",
              "html": "<code>PRE-01</code> <code>PRE-04</code> + <code>J-056.W</code> concluída"
            },
            {
              "chave": "Endpoints tocados",
              "texto": "GET /onboarding/empresa/{id}/representantes",
              "html": "<code>GET /onboarding/empresa/{id}/representantes</code>"
            },
            {
              "chave": "Step-up",
              "texto": "não",
              "html": "não"
            },
            {
              "chave": "Duração",
              "texto": "5 min",
              "html": "5 min"
            },
            {
              "chave": "Automação equivalente",
              "texto": "ITs do backend",
              "html": "ITs do backend"
            },
            {
              "chave": "Só o manual cobre",
              "texto": "Resposta real do endpoint, e não o mock",
              "html": "Resposta real do endpoint, e não o mock"
            }
          ],
          "metaIndex": {
            "ID": "J-057.A",
            "Tipo": "Positiva — minimização de dado pessoal",
            "Persona": "credora",
            "Superfície": "API",
            "Pré-condições": "PRE-01 PRE-04 + J-056.W concluída",
            "Endpoints tocados": "GET /onboarding/empresa/{id}/representantes",
            "Step-up": "não",
            "Duração": "5 min",
            "Automação equivalente": "ITs do backend",
            "Só o manual cobre": "Resposta real do endpoint, e não o mock"
          },
          "notas": [],
          "grupos": [
            {
              "id": "g1",
              "tituloHtml": null,
              "tela": null,
              "implicito": true,
              "passos": [
                {
                  "key": "ROTEIRO-03/J-057.A/P1",
                  "id": "P1",
                  "hash": "2c3b05c1",
                  "textoHtml": "Listar os representantes da empresa.",
                  "comoHtml": "No Insomnia, login como <code>credora</code>, <code>GET /api/v1/onboarding/empresa/{id}/representantes</code>.",
                  "textoBusca": "listar os representantes da empresa. no insomnia, login como credora, get /api/v1/onboarding/empresa/{id}/representantes.",
                  "esperadoHtml": "<code>200</code> com um representante.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 908,
                  "ordem": 1
                },
                {
                  "key": "ROTEIRO-03/J-057.A/P2",
                  "id": "P2",
                  "hash": "b5ecbc38",
                  "textoHtml": "Conferir que o CPF vem <strong>mascarado</strong>.",
                  "comoHtml": "Ler o campo do CPF no JSON. A máscara mantém os 3 primeiros e os 2 últimos dígitos e esconde os 6 do meio (formato <code>529****4725</code>). CPF em claro aqui é ocorrência de LGPD, não de formatação.",
                  "textoBusca": "conferir que o cpf vem mascarado. ler o campo do cpf no json. a máscara mantém os 3 primeiros e os 2 últimos dígitos e esconde os 6 do meio (formato 5294725). cpf em claro aqui é ocorrência de lgpd, não de formatação.",
                  "esperadoHtml": "<code>cpfMascarado</code> no formato acima; <strong>nenhum campo</strong> com o CPF completo.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 912,
                  "ordem": 2
                },
                {
                  "key": "ROTEIRO-03/J-057.A/P3",
                  "id": "P3",
                  "hash": "1c554245",
                  "textoHtml": "Conferir que o dado completo existe no banco, mas não na resposta.",
                  "comoHtml": "Terminal do banco. O ponto do passo é separar &quot;não armazena&quot; de &quot;não expõe&quot;: o backend <strong>armazena</strong> o CPF e <strong>mascara na borda</strong>. Saber disso muda o que se checa numa auditoria.",
                  "textoBusca": "conferir que o dado completo existe no banco, mas não na resposta. terminal do banco. o ponto do passo é separar \"não armazena\" de \"não expõe\": o backend armazena o cpf e mascara na borda. saber disso muda o que se checa numa auditoria.",
                  "esperadoHtml": "11 dígitos no banco, mascarado na API.",
                  "blocos": [
                    {
                      "tipo": "codigo",
                      "lang": "bash",
                      "regiao": "como",
                      "conteudo": "docker exec sep-postgres psql -U sep -d sep_dev \\\n  -c \"SELECT nome, cargo, length(cpf) FROM representante_legal LIMIT 5;\""
                    }
                  ],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 917,
                  "ordem": 3
                },
                {
                  "key": "ROTEIRO-03/J-057.A/P4",
                  "id": "P4",
                  "hash": "d5843ee6",
                  "textoHtml": "Repetir o P1 com o token do <code>cliente-b</code>.",
                  "comoHtml": "Mesma URL, token de outra persona.",
                  "textoBusca": "repetir o p1 com o token do cliente-b. mesma url, token de outra persona.",
                  "esperadoHtml": "<code>403</code>. Lista de representantes é dado de terceiro.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 926,
                  "ordem": 4
                }
              ]
            }
          ],
          "assercoes": [],
          "linha": 891,
          "stats": {
            "passos": 4,
            "na": 0,
            "assercoes": 0
          }
        },
        {
          "key": "ROTEIRO-03/J-058.A",
          "id": "J-058.A",
          "escopoId": "J-058.A",
          "kind": "jornada",
          "nivel": 3,
          "titulo": "PLD consolidado e trilha de auditoria",
          "anchor": "j-058a---pld-consolidado-e-trilha-de-auditoria",
          "ordem": 14,
          "meta": [
            {
              "chave": "ID",
              "texto": "J-058.A",
              "html": "<code>J-058.A</code>"
            },
            {
              "chave": "Tipo",
              "texto": "Positiva",
              "html": "Positiva"
            },
            {
              "chave": "Persona",
              "texto": "Operação (leitura de banco)",
              "html": "Operação (leitura de banco)"
            },
            {
              "chave": "Superfície",
              "texto": "API + banco",
              "html": "API + banco"
            },
            {
              "chave": "Pré-condições",
              "texto": "PRE-01 + J-050.W e J-056.W concluídas",
              "html": "<code>PRE-01</code> + <code>J-050.W</code> e <code>J-056.W</code> concluídas"
            },
            {
              "chave": "Endpoints tocados",
              "texto": "nenhum — PLD não tem endpoint de leitura pública",
              "html": "nenhum — PLD não tem endpoint de leitura pública"
            },
            {
              "chave": "Step-up",
              "texto": "não",
              "html": "não"
            },
            {
              "chave": "Duração",
              "texto": "8 min",
              "html": "8 min"
            },
            {
              "chave": "Automação equivalente",
              "texto": "ITs do backend",
              "html": "ITs do backend"
            },
            {
              "chave": "Só o manual cobre",
              "texto": "Cobertura de bases por alvo no fluxo real, e não em fixture",
              "html": "Cobertura de bases por alvo no fluxo real, e não em fixture"
            }
          ],
          "metaIndex": {
            "ID": "J-058.A",
            "Tipo": "Positiva",
            "Persona": "Operação (leitura de banco)",
            "Superfície": "API + banco",
            "Pré-condições": "PRE-01 + J-050.W e J-056.W concluídas",
            "Endpoints tocados": "nenhum — PLD não tem endpoint de leitura pública",
            "Step-up": "não",
            "Duração": "8 min",
            "Automação equivalente": "ITs do backend",
            "Só o manual cobre": "Cobertura de bases por alvo no fluxo real, e não em fixture"
          },
          "notas": [
            "Os dois <code>N/A</code> acima são limitação de ambiente declarada, <strong>não</strong> cobertura assumida. Enquanto valerem, os desfechos negativos de PLD e de KYB estão provados apenas por teste automatizado do backend, nunca ponta a ponta."
          ],
          "grupos": [
            {
              "id": "g1",
              "tituloHtml": null,
              "tela": null,
              "implicito": true,
              "passos": [
                {
                  "key": "ROTEIRO-03/J-058.A/P1",
                  "id": "P1",
                  "hash": "bbff5c73",
                  "textoHtml": "Conferir que o PLD rodou nos dois onboardings.",
                  "comoHtml": "Terminal do banco. Cada consulta guarda o payload do provider.",
                  "textoBusca": "conferir que o pld rodou nos dois onboardings. terminal do banco. cada consulta guarda o payload do provider.",
                  "esperadoHtml": "quatro bases obrigatórias por alvo — <code>COAF</code>, <code>OFAC</code>, <code>INTERPOL</code> e <code>MTE</code> — todas com <code>hit = false</code>. Se faltar base, o backend deveria ter recusado a consolidação; base faltando <strong>com</strong> status <code>APROVADO_FINAL</code> é ocorrência grave.",
                  "blocos": [
                    {
                      "tipo": "codigo",
                      "lang": "bash",
                      "regiao": "como",
                      "conteudo": "docker exec sep-postgres psql -U sep -d sep_dev \\\n  -c \"SELECT alvo_tipo, base, hit FROM consulta_pld ORDER BY data_consulta DESC LIMIT 20;\""
                    }
                  ],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 949,
                  "ordem": 1
                },
                {
                  "key": "ROTEIRO-03/J-058.A/P2",
                  "id": "P2",
                  "hash": "daf72564",
                  "textoHtml": "Conferir a contagem de alvos por tipo de onboarding.",
                  "comoHtml": "O PF tem <strong>1</strong> alvo (<code>PESSOA</code>); o PJ tem <code>EMPRESA</code> <strong>mais um alvo por representante legal</strong> — com o fake, dois no total. É a diferença estrutural entre os dois fluxos e o lugar onde uma regressão passaria despercebida.",
                  "textoBusca": "conferir a contagem de alvos por tipo de onboarding. o pf tem 1 alvo (pessoa); o pj tem empresa mais um alvo por representante legal — com o fake, dois no total. é a diferença estrutural entre os dois fluxos e o lugar onde uma regressão passaria despercebida.",
                  "esperadoHtml": "para o PF, uma linha <code>PESSOA</code> com 4 bases (4 registros no total); para o PJ, uma linha <code>EMPRESA</code> e uma <code>REPRESENTANTE</code>, 4 bases cada — 8 no total. Representante sem consulta é falha de cobertura de PLD, mesmo com o onboarding <code>APROVADO_FINAL</code>.",
                  "blocos": [
                    {
                      "tipo": "codigo",
                      "lang": "bash",
                      "regiao": "como",
                      "conteudo": "docker exec sep-postgres psql -U sep -d sep_dev \\\n  -c \"SELECT s.tipo, c.alvo_tipo, count(*) AS bases\n      FROM consulta_pld c JOIN solicitacao_onboarding s ON s.id = c.solicitacao_id\n      GROUP BY s.tipo, c.alvo_tipo ORDER BY s.tipo;\""
                    }
                  ],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 958,
                  "ordem": 2
                },
                {
                  "key": "ROTEIRO-03/J-058.A/P3",
                  "id": "P3",
                  "hash": "f7daf451",
                  "textoHtml": "Conferir os eventos de PLD no audit.",
                  "comoHtml": "Terminal do banco. Repare que estes eventos têm <code>usuario_id</code> nulo — o PLD é ato da plataforma, não do usuário — então uma consulta filtrada por usuário não os encontra.",
                  "textoBusca": "conferir os eventos de pld no audit. terminal do banco. repare que estes eventos têm usuarioid nulo — o pld é ato da plataforma, não do usuário — então uma consulta filtrada por usuário não os encontra.",
                  "esperadoHtml": "<code>PLD_INICIADO</code> e <code>PLD_LIMPO</code> com usuário nulo; <code>PLD_FINALIZADO</code> com o usuário dono da solicitação.",
                  "blocos": [
                    {
                      "tipo": "codigo",
                      "lang": "bash",
                      "regiao": "como",
                      "conteudo": "docker exec sep-postgres psql -U sep -d sep_dev \\\n  -c \"SELECT tipo, usuario_id, data_evento FROM audit_log_seguranca\n      WHERE tipo LIKE 'PLD%' ORDER BY data_evento DESC LIMIT 10;\""
                    }
                  ],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 971,
                  "ordem": 3
                },
                {
                  "key": "ROTEIRO-03/J-058.A/P4",
                  "id": "P4",
                  "hash": "b0d2e6ef",
                  "textoHtml": "Conferir que detalhe de hit não vaza para o audit.",
                  "comoHtml": "Nenhum evento de PLD pode conter CPF/CNPJ completo no campo de detalhes. Ler os detalhes dos eventos do P3.",
                  "textoBusca": "conferir que detalhe de hit não vaza para o audit. nenhum evento de pld pode conter cpf/cnpj completo no campo de detalhes. ler os detalhes dos eventos do p3.",
                  "esperadoHtml": "documentos mascarados; nenhum documento completo.",
                  "blocos": [
                    {
                      "tipo": "codigo",
                      "lang": "bash",
                      "regiao": "como",
                      "conteudo": "docker exec sep-postgres psql -U sep -d sep_dev \\\n  -c \"SELECT tipo, detalhes FROM audit_log_seguranca\n      WHERE tipo LIKE 'PLD%' ORDER BY data_evento DESC LIMIT 5;\""
                    }
                  ],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 981,
                  "ordem": 4
                },
                {
                  "key": "ROTEIRO-03/J-058.A/P5",
                  "id": "P5",
                  "hash": "7a5486b7",
                  "textoHtml": "Provar o desfecho <code>REPROVADO_PLD</code> com hit em base restritiva",
                  "comoHtml": null,
                  "textoBusca": "provar o desfecho reprovadopld com hit em base restritiva",
                  "esperadoHtml": null,
                  "blocos": [],
                  "na": true,
                  "naMotivo": "não alcançável com provider fake por HTTP. O FakeBackgroundCheckProvider só produz hit por um gancho estático de teste, sem rota; e o webhook de PLD não serve de atalho, porque quando ele chega a solicitação já consolidou em APROVADOFINAL e o callback tardio é descartado por idempotência. Reativa quando houver app.pld.provider=celcoin com WireMock ou sandbox, cenário previsto na suíte de IT do backend.",
                  "marcadoNaFonte": true,
                  "linha": 990,
                  "ordem": 5
                },
                {
                  "key": "ROTEIRO-03/J-058.A/P6",
                  "id": "P6",
                  "hash": "80be08d5",
                  "textoHtml": "Provar o desfecho <code>REPROVADO</code> de KYB com situação cadastral não ativa",
                  "comoHtml": null,
                  "textoBusca": "provar o desfecho reprovado de kyb com situação cadastral não ativa",
                  "esperadoHtml": null,
                  "blocos": [],
                  "na": true,
                  "naMotivo": "mesma limitação. O fake devolve ATIVA para qualquer CNPJ, exceto por gancho estático de teste. Reativa com provider real ou WireMock.",
                  "marcadoNaFonte": true,
                  "linha": 996,
                  "ordem": 6
                }
              ]
            }
          ],
          "assercoes": [],
          "linha": 932,
          "stats": {
            "passos": 6,
            "na": 2,
            "assercoes": 0
          }
        },
        {
          "key": "ROTEIRO-03/J-059.M",
          "id": "J-059.M",
          "escopoId": "J-059.M",
          "kind": "jornada",
          "nivel": 3,
          "titulo": "Onboarding PJ no mobile",
          "anchor": "j-059m---onboarding-pj-no-mobile",
          "ordem": 15,
          "meta": [
            {
              "chave": "ID",
              "texto": "J-059.M",
              "html": "<code>J-059.M</code>"
            },
            {
              "chave": "Tipo",
              "texto": "Positiva",
              "html": "Positiva"
            },
            {
              "chave": "Persona",
              "texto": "Conta criada na J-003.M — a mesma da J-055.M",
              "html": "Conta criada na <a href=\"./ROTEIRO-01-ACESSO-E-SESSAO.md#j-003m---visitante-cria-conta-de-cliente\" rel=\"noreferrer\"><code>J-003.M</code></a> — a mesma da <code>J-055.M</code>"
            },
            {
              "chave": "Superfície",
              "texto": "Mobile (PWA)",
              "html": "Mobile (PWA)"
            },
            {
              "chave": "Pré-condições",
              "texto": "PRE-01 PRE-03 PRE-04 + J-055.M concluída",
              "html": "<code>PRE-01</code> <code>PRE-03</code> <code>PRE-04</code> + <code>J-055.M</code> concluída"
            },
            {
              "chave": "Endpoints tocados",
              "texto": "POST /onboarding/empresa, POST /{id}/documentos, POST /{id}/verificar, GET /{id}",
              "html": "<code>POST /onboarding/empresa</code>, <code>POST /{id}/documentos</code>, <code>POST /{id}/verificar</code>, <code>GET /{id}</code>"
            },
            {
              "chave": "Step-up",
              "texto": "não",
              "html": "não"
            },
            {
              "chave": "Duração",
              "texto": "12 min",
              "html": "12 min"
            },
            {
              "chave": "Automação equivalente",
              "texto": "onboarding-mobile.spec.ts (parcial, contra MSW)",
              "html": "<code>onboarding-mobile.spec.ts</code> (parcial, contra MSW)"
            },
            {
              "chave": "Só o manual cobre",
              "texto": "KYB síncrono real, representantes vindos do provider, jornada local sobrevivendo entre PF e PJ",
              "html": "KYB síncrono real, representantes vindos do provider, jornada local sobrevivendo entre PF e PJ"
            }
          ],
          "metaIndex": {
            "ID": "J-059.M",
            "Tipo": "Positiva",
            "Persona": "Conta criada na J-003.M — a mesma da J-055.M",
            "Superfície": "Mobile (PWA)",
            "Pré-condições": "PRE-01 PRE-03 PRE-04 + J-055.M concluída",
            "Endpoints tocados": "POST /onboarding/empresa, POST /{id}/documentos, POST /{id}/verificar, GET /{id}",
            "Step-up": "não",
            "Duração": "12 min",
            "Automação equivalente": "onboarding-mobile.spec.ts (parcial, contra MSW)",
            "Só o manual cobre": "KYB síncrono real, representantes vindos do provider, jornada local sobrevivendo entre PF e PJ"
          },
          "notas": [
            "<strong>O mobile não abre solicitação criada em outra superfície.</strong> Não existe endpoint de listagem por usuário — só <code>GET /{id}</code> —, e o app descobre o id apenas pelo que ele mesmo gravou em <code>Preferences</code> (chave <code>sep.onboarding.journey</code>). Por isso esta jornada <strong>cria</strong> um PJ próprio no mobile, com CNPJ diferente do usado na <code>J-056.W</code>, em vez de reaproveitar aquele."
          ],
          "grupos": [
            {
              "id": "g1",
              "tituloHtml": null,
              "tela": null,
              "implicito": true,
              "passos": [
                {
                  "key": "ROTEIRO-03/J-059.M/P1",
                  "id": "P1",
                  "hash": "618ef66e",
                  "textoHtml": "Abrir o onboarding e reparar que ele <strong>não pergunta o tipo</strong>.",
                  "comoHtml": "Em <code>http://localhost:8100</code>, emulação ligada, logado com a conta da <code>J-003.M</code>, aba <strong>Início</strong> &gt; onboarding. Como a <code>J-055.M</code> deixou uma jornada PF gravada, o app a retoma e abre direto na etapa <strong>Documentos</strong>. <strong>A escolha &quot;Pessoa fisica / Empresa&quot; some</strong> — a chave do <code>Preferences</code> é <strong>uma só</strong>, então só existe uma jornada local por vez.",
                  "textoBusca": "abrir o onboarding e reparar que ele não pergunta o tipo. em http://localhost:8100, emulação ligada, logado com a conta da j-003.m, aba início > onboarding. como a j-055.m deixou uma jornada pf gravada, o app a retoma e abre direto na etapa documentos. a escolha \"pessoa fisica / empresa\" some — a chave do preferences é uma só, então só existe uma jornada local por vez.",
                  "esperadoHtml": "etapa <strong>Documentos</strong> da jornada PF, sem a tela de escolha. &gt; Se você não executou a <code>J-055.M</code>, a tela já mostra a escolha: pule para o <strong>P4</strong>.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 1028,
                  "ordem": 1
                },
                {
                  "key": "ROTEIRO-03/J-059.M/P2",
                  "id": "P2",
                  "hash": "3a44fae1",
                  "textoHtml": "Recomeçar o cadastro.",
                  "comoHtml": "O botão <strong>Recomecar cadastro</strong> só existe na etapa <strong>Status</strong> — tocar em <strong>Ver status do cadastro</strong> primeiro, depois em <strong>Recomecar cadastro</strong>.",
                  "textoBusca": "recomeçar o cadastro. o botão recomecar cadastro só existe na etapa status — tocar em ver status do cadastro primeiro, depois em recomecar cadastro.",
                  "esperadoHtml": "volta para a escolha entre pessoa física e empresa.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 1035,
                  "ordem": 2
                },
                {
                  "key": "ROTEIRO-03/J-059.M/P3",
                  "id": "P3",
                  "hash": "60020073",
                  "textoHtml": "Confirmar que &quot;recomeçar&quot; <strong>não</strong> cancelou nada no backend.",
                  "comoHtml": "Este é o passo que importa do bloco. <code>Recomecar cadastro</code> apaga a chave local e nada mais: a solicitação PF continua viva e continua prendendo o CPF. Conferir no banco e, em seguida, tentar iniciar um PF novo com <code>11144477735</code> pelo próprio app.",
                  "textoBusca": "confirmar que \"recomeçar\" não cancelou nada no backend. este é o passo que importa do bloco. recomecar cadastro apaga a chave local e nada mais: a solicitação pf continua viva e continua prendendo o cpf. conferir no banco e, em seguida, tentar iniciar um pf novo com 11144477735 pelo próprio app.",
                  "esperadoHtml": "<code>PESSOA</code> / <code>APROVADO_FINAL</code> no banco, e a tentativa de novo PF recusada com <code>409</code>. Se o <code>409</code> não vier, o botão está apagando dado do servidor — ocorrência grave.",
                  "blocos": [
                    {
                      "tipo": "codigo",
                      "lang": "bash",
                      "regiao": "como",
                      "conteudo": "docker exec sep-postgres psql -U sep -d sep_dev \\\n  -c \"SELECT tipo, status FROM solicitacao_onboarding WHERE documento = '11144477735';\""
                    }
                  ],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 1039,
                  "ordem": 3
                },
                {
                  "key": "ROTEIRO-03/J-059.M/P4",
                  "id": "P4",
                  "hash": "8b5d686a",
                  "textoHtml": "Escolher <strong>Empresa</strong>.",
                  "comoHtml": "No cartão de escolha, ler a descrição antes de tocar. Ela anuncia o escopo do KYB.",
                  "textoBusca": "escolher empresa. no cartão de escolha, ler a descrição antes de tocar. ela anuncia o escopo do kyb.",
                  "esperadoHtml": "cartão descreve &quot;dados da empresa, representantes e documentos&quot;; abre o formulário de PJ na etapa <strong>Dados</strong>.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 1049,
                  "ordem": 4
                },
                {
                  "key": "ROTEIRO-03/J-059.M/P5",
                  "id": "P5",
                  "hash": "008681e1",
                  "textoHtml": "Enviar um CNPJ com dígito verificador errado.",
                  "comoHtml": "CNPJ <code>33344455000180</code> e uma razão social qualquer. <strong>A máscara do formulário só confere o formato</strong> (14 dígitos, pontuação opcional) — ela não calcula DV. Então o botão libera o envio e a recusa precisa vir do backend. É exatamente o que o passo mede: o mobile não decide validade de documento.",
                  "textoBusca": "enviar um cnpj com dígito verificador errado. cnpj 33344455000180 e uma razão social qualquer. a máscara do formulário só confere o formato (14 dígitos, pontuação opcional) — ela não calcula dv. então o botão libera o envio e a recusa precisa vir do backend. é exatamente o que o passo mede: o mobile não decide validade de documento.",
                  "esperadoHtml": "formulário aceita enviar; backend recusa com <code>ONB-400-006</code> e a mensagem aparece abaixo do formulário. Nenhuma solicitação criada.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 1053,
                  "ordem": 5
                },
                {
                  "key": "ROTEIRO-03/J-059.M/P6",
                  "id": "P6",
                  "hash": "997db90a",
                  "textoHtml": "Enviar os dados válidos.",
                  "comoHtml": "CNPJ <code>33344455000183</code>, razão social qualquer. <strong>Deixar tipo societário e porte sem tocar</strong> — são opcionais e o <code>201</code> tem de sair mesmo assim.",
                  "textoBusca": "enviar os dados válidos. cnpj 33344455000183, razão social qualquer. deixar tipo societário e porte sem tocar — são opcionais e o 201 tem de sair mesmo assim.",
                  "esperadoHtml": "<code>201</code>; avança para a etapa <strong>Documentos</strong>. &gt; <strong>Sem volta nos dois selects.</strong> Diferente do web, que tem a opção <strong>Selecione</strong>, os &gt; selects de tipo societário e porte do mobile não têm entrada vazia: uma vez escolhido um &gt; valor, não há como voltar a &quot;não informado&quot; sem recomeçar. Registrar como ocorrência de &gt; usabilidade se atrapalhar a execução.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 1060,
                  "ordem": 6
                },
                {
                  "key": "ROTEIRO-03/J-059.M/P7",
                  "id": "P7",
                  "hash": "dd91c63f",
                  "textoHtml": "Conferir que os tipos de documento <strong>mudaram</strong> com o tipo de cadastro.",
                  "comoHtml": "Abrir a lista de tipos no bloco de upload. A lista de PJ é outra, e é o ponto onde um bug de estado apareceria: se sobrar <code>RG</code> ou <code>SELFIE</code> aqui, a tela ficou com o tipo da jornada anterior.",
                  "textoBusca": "conferir que os tipos de documento mudaram com o tipo de cadastro. abrir a lista de tipos no bloco de upload. a lista de pj é outra, e é o ponto onde um bug de estado apareceria: se sobrar rg ou selfie aqui, a tela ficou com o tipo da jornada anterior.",
                  "esperadoHtml": "exatamente <code>CONTRATO_SOCIAL</code>, <code>CCMEI</code> e <code>COMPROVANTE_ENDERECO</code>.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 1068,
                  "ordem": 7
                },
                {
                  "key": "ROTEIRO-03/J-059.M/P8",
                  "id": "P8",
                  "hash": "0824dcd9",
                  "textoHtml": "Enviar os dois documentos mínimos de PJ.",
                  "comoHtml": "1 de identificação societária (<code>CONTRATO_SOCIAL</code> ou <code>CCMEI</code>) <strong>e</strong> 1 <code>COMPROVANTE_ENDERECO</code> — dois contratos sociais não satisfazem o mínimo.",
                  "textoBusca": "enviar os dois documentos mínimos de pj. 1 de identificação societária (contratosocial ou ccmei) e 1 comprovanteendereco — dois contratos sociais não satisfazem o mínimo.",
                  "esperadoHtml": "<code>204</code> nos dois; os dois aparecem em <strong>Documentos enviados</strong>.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 1073,
                  "ordem": 8
                },
                {
                  "key": "ROTEIRO-03/J-059.M/P9",
                  "id": "P9",
                  "hash": "df4fc879",
                  "textoHtml": "Disparar a verificação e conferir que ela fecha <strong>sem webhook</strong>.",
                  "comoHtml": "Tocar <strong>Ver status do cadastro</strong> e, na etapa <strong>Status</strong>, <strong>Iniciar verificacao</strong>. Repare que no mobile o botão mora na etapa de status, não na de documentos. Não dispare webhook nenhum: o KYB é síncrono e o PLD roda logo depois do commit.",
                  "textoBusca": "disparar a verificação e conferir que ela fecha sem webhook. tocar ver status do cadastro e, na etapa status, iniciar verificacao. repare que no mobile o botão mora na etapa de status, não na de documentos. não dispare webhook nenhum: o kyb é síncrono e o pld roda logo depois do commit.",
                  "esperadoHtml": "<strong><code>APROVADO_FINAL</code></strong> já na primeira leitura. Parar em <code>EM_VERIFICACAO</code> é ocorrência — no PJ esse não é estado estável.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 1077,
                  "ordem": 9
                },
                {
                  "key": "ROTEIRO-03/J-059.M/P10",
                  "id": "P10",
                  "hash": "094a6abe",
                  "textoHtml": "Conferir o bloco <strong>Representantes</strong>.",
                  "comoHtml": "Ler o card do representante que o provider devolveu. O ponto do passo é o que <strong>não</strong> pode estar ali: motivo de hit, severidade e CPF. O resumo público de PLD expõe só o status consolidado e a data da consulta.",
                  "textoBusca": "conferir o bloco representantes. ler o card do representante que o provider devolveu. o ponto do passo é o que não pode estar ali: motivo de hit, severidade e cpf. o resumo público de pld expõe só o status consolidado e a data da consulta.",
                  "esperadoHtml": "um representante com nome, cargo e <code>PLD: LIMPO</code>. <strong>Nenhum CPF</strong> e nenhum detalhe de PLD na tela.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 1083,
                  "ordem": 10
                },
                {
                  "key": "ROTEIRO-03/J-059.M/P11",
                  "id": "P11",
                  "hash": "879950d2",
                  "textoHtml": "Conferir o layout a 320px.",
                  "comoHtml": "<strong>Este passo é sobre o layout mobile</strong>, que nenhum teste automatizado cobre. No DevTools, 320px de largura, percorrer as três etapas e o bloco de representantes. Procurar rolagem <strong>horizontal</strong>, texto cortado na borda e nome de representante estourando o card.",
                  "textoBusca": "conferir o layout a 320px. este passo é sobre o layout mobile, que nenhum teste automatizado cobre. no devtools, 320px de largura, percorrer as três etapas e o bloco de representantes. procurar rolagem horizontal, texto cortado na borda e nome de representante estourando o card.",
                  "esperadoHtml": "sem scroll horizontal e sem corte a 320px.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 1089,
                  "ordem": 11
                },
                {
                  "key": "ROTEIRO-03/J-059.M/P12",
                  "id": "P12",
                  "hash": "858ec9fc",
                  "textoHtml": "Recarregar o app e confirmar que a jornada PJ é retomada.",
                  "comoHtml": "<code>F5</code> na aba. A jornada fica no <code>Preferences</code>, que sobrevive ao reload — agora com a PJ no lugar da PF.",
                  "textoBusca": "recarregar o app e confirmar que a jornada pj é retomada. f5 na aba. a jornada fica no preferences, que sobrevive ao reload — agora com a pj no lugar da pf.",
                  "esperadoHtml": "volta na jornada <strong>PJ</strong>, não na PF nem na tela de escolha.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 1094,
                  "ordem": 12
                },
                {
                  "key": "ROTEIRO-03/J-059.M/P13",
                  "id": "P13",
                  "hash": "428d4e4e",
                  "textoHtml": "Conferir o estado persistido das duas jornadas do mesmo usuário.",
                  "comoHtml": "Terminal do banco. O <code>409</code> é por documento, não por usuário, então a mesma conta termina com um PF e um PJ — e os dois precisam ter consolidado.",
                  "textoBusca": "conferir o estado persistido das duas jornadas do mesmo usuário. terminal do banco. o 409 é por documento, não por usuário, então a mesma conta termina com um pf e um pj — e os dois precisam ter consolidado.",
                  "esperadoHtml": "duas linhas, <code>EMPRESA</code> e <code>PESSOA</code>, ambas <code>APROVADO_FINAL</code>.",
                  "blocos": [
                    {
                      "tipo": "codigo",
                      "lang": "bash",
                      "regiao": "como",
                      "conteudo": "docker exec sep-postgres psql -U sep -d sep_dev \\\n  -c \"SELECT s.tipo, s.documento, s.status FROM solicitacao_onboarding s\n      WHERE s.documento IN ('11144477735', '33344455000183') ORDER BY s.tipo;\""
                    }
                  ],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 1098,
                  "ordem": 13
                }
              ]
            }
          ],
          "assercoes": [
            {
              "key": "ROTEIRO-03/J-059.M/#14d1e9bd",
              "id": null,
              "hash": "04fb4653",
              "textoHtml": "PJ criado no mobile em <code>APROVADO_FINAL</code>, com representante <code>LIMPO</code> e sem webhook",
              "comoHtml": null,
              "textoBusca": "pj criado no mobile em aprovadofinal, com representante limpo e sem webhook",
              "esperadoHtml": null,
              "blocos": [],
              "na": false,
              "naMotivo": null,
              "marcadoNaFonte": false,
              "linha": 1110,
              "ordem": 1
            }
          ],
          "linha": 1006,
          "stats": {
            "passos": 13,
            "na": 0,
            "assercoes": 1
          }
        }
      ],
      "ocorrenciasColunas": [
        "#",
        "Jornada",
        "Passo",
        "O que aconteceu",
        "Esperado",
        "Issue"
      ],
      "registroCampos": [
        {
          "chave": "executado_por",
          "rotulo": "Executado por",
          "tipo": "texto"
        },
        {
          "chave": "data_hora",
          "rotulo": "Data / hora",
          "tipo": "texto"
        },
        {
          "chave": "commit_sep_api",
          "rotulo": "Commit sep-api",
          "tipo": "texto"
        },
        {
          "chave": "commit_sep_app",
          "rotulo": "Commit sep-app",
          "tipo": "texto"
        },
        {
          "chave": "commit_sep_mobile",
          "rotulo": "Commit sep-mobile",
          "tipo": "texto"
        },
        {
          "chave": "solicitacaoid_pf_cliente_a_usado",
          "rotulo": "solicitacaoId PF (cliente-a) usado",
          "tipo": "texto"
        },
        {
          "chave": "solicitacaoid_pj_credora_usado",
          "rotulo": "solicitacaoId PJ (credora) usado",
          "tipo": "texto"
        },
        {
          "chave": "cpf_consumido_pela_j_051_m_n1",
          "rotulo": "CPF consumido pela J-051.M-N1",
          "tipo": "texto"
        },
        {
          "chave": "jornadas_ok",
          "rotulo": "Jornadas OK",
          "tipo": "texto"
        },
        {
          "chave": "jornadas_nok",
          "rotulo": "Jornadas NOK",
          "tipo": "texto"
        },
        {
          "chave": "jornadas_bloqueado",
          "rotulo": "Jornadas BLOQUEADO",
          "tipo": "texto"
        },
        {
          "chave": "observacoes",
          "rotulo": "Observações",
          "tipo": "textarea"
        }
      ]
    },
    {
      "id": "ROTEIRO-04",
      "arquivo": "ROTEIRO-04-CREDITO-FORMALIZACAO.md",
      "hash": "50bf528d",
      "titulo": "Roteiro 04 - Crédito e formalização",
      "tipo": "jornadas",
      "ordem": 14,
      "atualizadoEm": "2026-07-21",
      "resumoHtml": "",
      "escopos": [
        {
          "key": "ROTEIRO-04/J-060.W",
          "id": "J-060.W",
          "escopoId": "J-060.W",
          "kind": "jornada",
          "nivel": 3,
          "titulo": "Tomador cria proposta de crédito",
          "anchor": "j-060w---tomador-cria-proposta-de-crdito",
          "ordem": 1,
          "meta": [
            {
              "chave": "ID",
              "texto": "J-060.W",
              "html": "<code>J-060.W</code>"
            },
            {
              "chave": "Tipo",
              "texto": "Positiva",
              "html": "Positiva"
            },
            {
              "chave": "Persona",
              "texto": "cliente-a — CLIENTE com onboarding APROVADOFINAL",
              "html": "<code>cliente-a</code> — CLIENTE com onboarding <code>APROVADO_FINAL</code>"
            },
            {
              "chave": "Superfície",
              "texto": "Web",
              "html": "Web"
            },
            {
              "chave": "Pré-condições",
              "texto": "PRE-01 PRE-02 PRE-04 PRE-07 PRE-11",
              "html": "<code>PRE-01</code> <code>PRE-02</code> <code>PRE-04</code> <code>PRE-07</code> <code>PRE-11</code>"
            },
            {
              "chave": "Endpoints tocados",
              "texto": "POST /api/v1/credito/propostas, GET /propostas/{id}",
              "html": "<code>POST /api/v1/credito/propostas</code>, <code>GET /propostas/{id}</code>"
            },
            {
              "chave": "Step-up",
              "texto": "não",
              "html": "não"
            },
            {
              "chave": "Duração",
              "texto": "8 min",
              "html": "8 min"
            },
            {
              "chave": "Automação equivalente",
              "texto": "nenhuma spec cobre a criação contra backend real",
              "html": "nenhuma spec cobre a criação contra backend real"
            },
            {
              "chave": "Só o manual cobre",
              "texto": "Motor de regras avaliando dados reais, não fixture",
              "html": "Motor de regras avaliando dados reais, não fixture"
            }
          ],
          "metaIndex": {
            "ID": "J-060.W",
            "Tipo": "Positiva",
            "Persona": "cliente-a — CLIENTE com onboarding APROVADOFINAL",
            "Superfície": "Web",
            "Pré-condições": "PRE-01 PRE-02 PRE-04 PRE-07 PRE-11",
            "Endpoints tocados": "POST /api/v1/credito/propostas, GET /propostas/{id}",
            "Step-up": "não",
            "Duração": "8 min",
            "Automação equivalente": "nenhuma spec cobre a criação contra backend real",
            "Só o manual cobre": "Motor de regras avaliando dados reais, não fixture"
          },
          "notas": [
            "Família <code>J-060</code> a <code>J-079</code>: proposta, motor de regras, parecer, Open Finance, contrato, aceite, assinatura, CCB e cancelamento. Requer <a href=\"./ROTEIRO-00-AMBIENTE-E-MASSA.md\" rel=\"noreferrer\"><code>ROTEIRO-00</code></a> concluído. Hub: <a href=\"./CENARIOS-TESTE-JORNADAS-USUARIO.md\" rel=\"noreferrer\"><code>CENARIOS-TESTE-JORNADAS-USUARIO.md</code></a>.",
            "<strong>Execute pelo <a href=\"./app/index.html\" rel=\"noreferrer\">app</a></strong>, não editando este arquivo — as caixas aqui ficam sempre vazias. Desvio não vira caixa marcada: vira <strong>ocorrência</strong> registrada no passo.",
            "<strong>Divergência documental conhecida.</strong> O <a href=\"../docs-SEP/repos/sep-api/CONTRATOS.md\" rel=\"noreferrer\"><code>CONTRATOS.md</code></a> ainda descreve o aceite com <code>@RequireStepUp</code> (texto da Sprint 10). O <code>ContratoController</code> usa <code>@RequireStepUpEstrito</code> desde a Sprint 27. O <strong>código</strong> e a referência; o doc operacional precisa de correção.",
            "<strong>Esta jornada exige <code>PRE-11</code></strong> — <code>cliente-a</code> em <code>APROVADO_FINAL</code>, que é produzido pelo <a href=\"./ROTEIRO-03-ONBOARDING.md\" rel=\"noreferrer\"><code>ROTEIRO-03</code></a>, não pelo preparo do ROTEIRO-00. Sem isso, o comportamento correto é o da <a href=\"#j-061w-n1---proposta-sem-onboarding-aprovado\" rel=\"noreferrer\"><code>J-061.W-N1</code></a>: a UI manda você para o onboarding. Se for esse o caso, execute o onboarding antes e volte."
          ],
          "grupos": [
            {
              "id": "g2",
              "tituloHtml": "Tela <code>/app/credito/propostas/nova</code>",
              "tela": "/app/credito/propostas/nova",
              "implicito": false,
              "passos": [
                {
                  "key": "ROTEIRO-04/J-060.W/P1",
                  "id": "P1",
                  "hash": "0c938cea",
                  "textoHtml": "Abrir <strong>Crédito</strong> no menu e iniciar nova proposta.",
                  "comoHtml": "Logado como <code>cliente-a</code> (senha <code>jornada-tomador-sep-2026-v2</code> se você executou a <code>J-022.W</code>), abrir o menu lateral, grupo <strong>Jornadas</strong>, item <strong>Crédito</strong>. Procurar a ação de criar uma proposta nova.",
                  "textoBusca": "abrir crédito no menu e iniciar nova proposta. logado como cliente-a (senha jornada-tomador-sep-2026-v2 se você executou a j-022.w), abrir o menu lateral, grupo jornadas, item crédito. procurar a ação de criar uma proposta nova.",
                  "esperadoHtml": "formulário com valor, prazo e finalidade.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 88,
                  "ordem": 1
                },
                {
                  "key": "ROTEIRO-04/J-060.W/P2",
                  "id": "P2",
                  "hash": "2715346e",
                  "textoHtml": "Enviar com valor fora da faixa permitida.",
                  "comoHtml": "Digitar um valor absurdo de propósito — <code>1</code> ou <code>99999999</code> — e enviar. A recusa é o resultado correto. Conferir que a mensagem diz <strong>qual</strong> é a faixa aceita: erro que não orienta é erro pela metade, e vale registrar como ocorrência de usabilidade.",
                  "textoBusca": "enviar com valor fora da faixa permitida. digitar um valor absurdo de propósito — 1 ou 99999999 — e enviar. a recusa é o resultado correto. conferir que a mensagem diz qual é a faixa aceita: erro que não orienta é erro pela metade, e vale registrar como ocorrência de usabilidade.",
                  "esperadoHtml": "recusado com mensagem de validação; nenhuma proposta criada.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 93,
                  "ordem": 2
                },
                {
                  "key": "ROTEIRO-04/J-060.W/P3",
                  "id": "P3",
                  "hash": "f1eeee42",
                  "textoHtml": "Preencher valores válidos e enviar.",
                  "comoHtml": "Usar um valor dentro da faixa que a mensagem do P2 indicou, um prazo qualquer oferecido e uma finalidade. <strong>Anotar o <code>propostaId</code></strong> que aparece no endereço depois do redirecionamento (<code>/app/credito/propostas/&lt;id&gt;</code>) — praticamente todas as jornadas seguintes deste roteiro dependem dele.",
                  "textoBusca": "preencher valores válidos e enviar. usar um valor dentro da faixa que a mensagem do p2 indicou, um prazo qualquer oferecido e uma finalidade. anotar o propostaid que aparece no endereço depois do redirecionamento (/app/credito/propostas/<id>) — praticamente todas as jornadas seguintes deste roteiro dependem dele.",
                  "esperadoHtml": "<code>201</code>; redireciona para o detalhe da proposta.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 98,
                  "ordem": 3
                }
              ]
            },
            {
              "id": "g3",
              "tituloHtml": "Tela <code>/app/credito/propostas/:id</code>",
              "tela": "/app/credito/propostas/:id",
              "implicito": false,
              "passos": [
                {
                  "key": "ROTEIRO-04/J-060.W/P4",
                  "id": "P4",
                  "hash": "fa490375",
                  "textoHtml": "Conferir o status logo após a criação.",
                  "comoHtml": "Na tela de detalhe, localizar o status da proposta. Qualquer um dos três valores esperados serve — inclusive <code>REJEITADA</code>, que não é falha do teste. O defeito seria status vazio, &quot;carregando&quot; que nunca termina, ou um valor fora dessa lista.",
                  "textoBusca": "conferir o status logo após a criação. na tela de detalhe, localizar o status da proposta. qualquer um dos três valores esperados serve — inclusive rejeitada, que não é falha do teste. o defeito seria status vazio, \"carregando\" que nunca termina, ou um valor fora dessa lista.",
                  "esperadoHtml": "o motor de regras já avaliou: <code>PRE_APROVADA</code>, <code>EM_ANALISE</code> ou <code>REJEITADA</code>. <strong>Não</strong> fica em branco nem em estado intermediário indefinido.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 107,
                  "ordem": 1
                },
                {
                  "key": "ROTEIRO-04/J-060.W/P5",
                  "id": "P5",
                  "hash": "f5e436ac",
                  "textoHtml": "Conferir que nenhuma regra de decisão foi calculada no front.",
                  "comoHtml": "Na aba <strong>Network</strong>, abrir a resposta da chamada que trouxe a proposta e conferir que o status <strong>já vem pronto no JSON</strong>, igual ao que a tela mostra. Se o JSON não trouxesse status e a tela mostrasse um, a decisão de crédito estaria sendo tomada no navegador — onde o usuário pode alterá-la. Ocorrência grave.",
                  "textoBusca": "conferir que nenhuma regra de decisão foi calculada no front. na aba network, abrir a resposta da chamada que trouxe a proposta e conferir que o status já vem pronto no json, igual ao que a tela mostra. se o json não trouxesse status e a tela mostrasse um, a decisão de crédito estaria sendo tomada no navegador — onde o usuário pode alterá-la. ocorrência grave.",
                  "esperadoHtml": "o status vem da API; a tela apenas exibe.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 113,
                  "ordem": 2
                },
                {
                  "key": "ROTEIRO-04/J-060.W/P6",
                  "id": "P6",
                  "hash": "a2598c6d",
                  "textoHtml": "Conferir o audit log:",
                  "comoHtml": "Terminal do banco. Os dois eventos precisam existir: um registra que a proposta foi criada, o outro que o motor de regras a avaliou. Decisão de crédito sem trilha é problema de compliance.",
                  "textoBusca": "conferir o audit log: terminal do banco. os dois eventos precisam existir: um registra que a proposta foi criada, o outro que o motor de regras a avaliou. decisão de crédito sem trilha é problema de compliance.",
                  "esperadoHtml": "<code>PROPOSTA_CRIADA</code> e <code>PROPOSTA_AVALIADA_MOTOR</code> registrados.",
                  "blocos": [
                    {
                      "tipo": "codigo",
                      "lang": "bash",
                      "regiao": "como",
                      "conteudo": "docker exec sep-postgres psql -U sep -d sep_dev \\\n  -c \"SELECT tipo, data_evento FROM audit_log_seguranca\n      WHERE tipo IN ('PROPOSTA_CRIADA','PROPOSTA_AVALIADA_MOTOR')\n      ORDER BY data_evento DESC LIMIT 5;\""
                    }
                  ],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 119,
                  "ordem": 3
                }
              ]
            }
          ],
          "assercoes": [
            {
              "key": "ROTEIRO-04/J-060.W/#084e1411",
              "id": null,
              "hash": "f95a6d76",
              "textoHtml": "Proposta criada e avaliada pelo motor; anotar o <code>propostaId</code> para as proximas jornadas",
              "comoHtml": null,
              "textoBusca": "proposta criada e avaliada pelo motor; anotar o propostaid para as proximas jornadas",
              "esperadoHtml": null,
              "blocos": [],
              "na": false,
              "naMotivo": null,
              "marcadoNaFonte": false,
              "linha": 133,
              "ordem": 1
            }
          ],
          "linha": 64,
          "stats": {
            "passos": 6,
            "na": 0,
            "assercoes": 1
          }
        },
        {
          "key": "ROTEIRO-04/J-061.W-N1",
          "id": "J-061.W-N1",
          "escopoId": "J-061.W-N1",
          "kind": "jornada",
          "nivel": 3,
          "titulo": "Proposta sem onboarding aprovado",
          "anchor": "j-061w-n1---proposta-sem-onboarding-aprovado",
          "ordem": 2,
          "meta": [
            {
              "chave": "ID",
              "texto": "J-061.W-N1",
              "html": "<code>J-061.W-N1</code>"
            },
            {
              "chave": "Tipo",
              "texto": "Negativa — regra de negócio",
              "html": "Negativa — regra de negócio"
            },
            {
              "chave": "Persona",
              "texto": "cliente-b — CLIENTE sem onboarding APROVADOFINAL",
              "html": "<code>cliente-b</code> — CLIENTE <strong>sem</strong> onboarding <code>APROVADO_FINAL</code>"
            },
            {
              "chave": "Superfície",
              "texto": "Web + API",
              "html": "Web + API"
            },
            {
              "chave": "Vetor",
              "texto": "Tentar contratar crédito sem KYC concluído",
              "html": "Tentar contratar crédito sem KYC concluído"
            },
            {
              "chave": "Comportamento seguro esperado",
              "texto": "Bloqueio no backend, com orientação na UI",
              "html": "Bloqueio no backend, com orientação na UI"
            },
            {
              "chave": "Pré-condições",
              "texto": "PRE-01 PRE-02 PRE-04 PRE-09",
              "html": "<code>PRE-01</code> <code>PRE-02</code> <code>PRE-04</code> <code>PRE-09</code>"
            }
          ],
          "metaIndex": {
            "ID": "J-061.W-N1",
            "Tipo": "Negativa — regra de negócio",
            "Persona": "cliente-b — CLIENTE sem onboarding APROVADOFINAL",
            "Superfície": "Web + API",
            "Vetor": "Tentar contratar crédito sem KYC concluído",
            "Comportamento seguro esperado": "Bloqueio no backend, com orientação na UI",
            "Pré-condições": "PRE-01 PRE-02 PRE-04 PRE-09"
          },
          "notas": [
            "<strong>P2 e o passo que importa.</strong> Bloquear só na UI não e bloquear. Se a API aceitar, há contratação sem KYC — violação direta da CMN 4.656/2018."
          ],
          "grupos": [
            {
              "id": "g1",
              "tituloHtml": null,
              "tela": null,
              "implicito": true,
              "passos": [
                {
                  "key": "ROTEIRO-04/J-061.W-N1/P1",
                  "id": "P1",
                  "hash": "118a335e",
                  "textoHtml": "Como <code>cliente-b</code>, abrir <strong>Crédito</strong>.",
                  "comoHtml": "Entrar como <code>cliente-b@sep.test</code> — atenção: se você executou a <code>J-022.W-N1</code>, a senha dele agora é <code>jornada-ownership-sep-2026-v2</code>. Abrir <strong>Crédito</strong> no menu. Esta persona nunca fez onboarding, então a tela deve orientar a fazê-lo em vez de oferecer o formulário de proposta.",
                  "textoBusca": "como cliente-b, abrir crédito. entrar como cliente-b@sep.test — atenção: se você executou a j-022.w-n1, a senha dele agora é jornada-ownership-sep-2026-v2. abrir crédito no menu. esta persona nunca fez onboarding, então a tela deve orientar a fazê-lo em vez de oferecer o formulário de proposta.",
                  "esperadoHtml": "a UI direciona para o onboarding em vez de oferecer a proposta.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 151,
                  "ordem": 1
                },
                {
                  "key": "ROTEIRO-04/J-061.W-N1/P2",
                  "id": "P2",
                  "hash": "d5ac4dc9",
                  "textoHtml": "Chamar <code>POST /api/v1/credito/propostas</code> direto na API, com payload válido.",
                  "comoHtml": "<strong>Este é o passo que importa</strong> — o P1 só mostrou que a tela esconde o caminho, e esconder não é bloquear. No Insomnia, fazer login como <code>cliente-b</code>, guardar o token, e enviar o request de criação de proposta com um payload perfeitamente válido (pode copiar o que funcionou na <code>J-060.W</code>). A recusa tem de vir do <strong>backend</strong>.",
                  "textoBusca": "chamar post /api/v1/credito/propostas direto na api, com payload válido. este é o passo que importa — o p1 só mostrou que a tela esconde o caminho, e esconder não é bloquear. no insomnia, fazer login como cliente-b, guardar o token, e enviar o request de criação de proposta com um payload perfeitamente válido (pode copiar o que funcionou na j-060.w). a recusa tem de vir do backend.",
                  "esperadoHtml": "recusado pela regra <code>RegraOnboardingAprovado</code>. Nenhuma proposta criada.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 157,
                  "ordem": 2
                },
                {
                  "key": "ROTEIRO-04/J-061.W-N1/P3",
                  "id": "P3",
                  "hash": "85f60859",
                  "textoHtml": "Conferir no banco que nada foi persistido.",
                  "comoHtml": "Terminal do banco. Um 4xx na resposta não prova que nada foi gravado — pode ter criado a linha e falhado depois. Esta consulta fecha essa dúvida: a contagem tem de ser zero.",
                  "textoBusca": "conferir no banco que nada foi persistido. terminal do banco. um 4xx na resposta não prova que nada foi gravado — pode ter criado a linha e falhado depois. esta consulta fecha essa dúvida: a contagem tem de ser zero.",
                  "esperadoHtml": "nenhuma proposta para <code>cliente-b</code>.",
                  "blocos": [
                    {
                      "tipo": "codigo",
                      "lang": "bash",
                      "regiao": "como",
                      "conteudo": "docker exec sep-postgres psql -U sep -d sep_dev \\\n  -c \"SELECT count(*) FROM proposta_credito p JOIN usuario u ON u.id = p.tomador_id\n      WHERE u.username = 'cliente-b@sep.test';\""
                    }
                  ],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 163,
                  "ordem": 3
                }
              ]
            }
          ],
          "assercoes": [],
          "linha": 137,
          "stats": {
            "passos": 3,
            "na": 0,
            "assercoes": 0
          }
        },
        {
          "key": "ROTEIRO-04/J-062.W",
          "id": "J-062.W",
          "escopoId": "J-062.W",
          "kind": "jornada",
          "nivel": 3,
          "titulo": "Autorizar Open Finance e reavaliar",
          "anchor": "j-062w---autorizar-open-finance-e-reavaliar",
          "ordem": 3,
          "meta": [
            {
              "chave": "ID",
              "texto": "J-062.W",
              "html": "<code>J-062.W</code>"
            },
            {
              "chave": "Tipo",
              "texto": "Positiva",
              "html": "Positiva"
            },
            {
              "chave": "Persona",
              "texto": "cliente-a com proposta em EMANALISE",
              "html": "<code>cliente-a</code> com proposta em <code>EM_ANALISE</code>"
            },
            {
              "chave": "Superfície",
              "texto": "Web",
              "html": "Web"
            },
            {
              "chave": "Pré-condições",
              "texto": "PRE-01 PRE-02 PRE-04 + J-060.W concluída",
              "html": "<code>PRE-01</code> <code>PRE-02</code> <code>PRE-04</code> + <code>J-060.W</code> concluída"
            },
            {
              "chave": "Endpoints tocados",
              "texto": "POST /credito/propostas/{id}/open-finance/consentimento, GET .../open-finance",
              "html": "<code>POST /credito/propostas/{id}/open-finance/consentimento</code>, <code>GET .../open-finance</code>"
            },
            {
              "chave": "Provider",
              "texto": "FakeOpenFinanceProvider (default)",
              "html": "<code>FakeOpenFinanceProvider</code> (default)"
            },
            {
              "chave": "Duração",
              "texto": "6 min",
              "html": "6 min"
            }
          ],
          "metaIndex": {
            "ID": "J-062.W",
            "Tipo": "Positiva",
            "Persona": "cliente-a com proposta em EMANALISE",
            "Superfície": "Web",
            "Pré-condições": "PRE-01 PRE-02 PRE-04 + J-060.W concluída",
            "Endpoints tocados": "POST /credito/propostas/{id}/open-finance/consentimento, GET .../open-finance",
            "Provider": "FakeOpenFinanceProvider (default)",
            "Duração": "6 min"
          },
          "notas": [],
          "grupos": [
            {
              "id": "g1",
              "tituloHtml": null,
              "tela": null,
              "implicito": true,
              "passos": [
                {
                  "key": "ROTEIRO-04/J-062.W/P1",
                  "id": "P1",
                  "hash": "10814b8d",
                  "textoHtml": "No detalhe da proposta, iniciar a autorização de Open Finance.",
                  "comoHtml": "Abrir <code>/app/credito/propostas/&lt;propostaId&gt;</code> com o id anotado na <code>J-060.W</code>. Localizar a ação de Open Finance. Aqui não há banco de verdade: o provider é o <code>FakeOpenFinanceProvider</code>, que simula a resposta da instituição.",
                  "textoBusca": "no detalhe da proposta, iniciar a autorização de open finance. abrir /app/credito/propostas/<propostaid> com o id anotado na j-060.w. localizar a ação de open finance. aqui não há banco de verdade: o provider é o fakeopenfinanceprovider, que simula a resposta da instituição.",
                  "esperadoHtml": "vai para <code>/app/credito/propostas/:id/open-finance</code>.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 194,
                  "ordem": 1
                },
                {
                  "key": "ROTEIRO-04/J-062.W/P2",
                  "id": "P2",
                  "hash": "acfcb026",
                  "textoHtml": "Conferir o texto de consentimento antes de autorizar.",
                  "comoHtml": "<strong>Ler o texto na tela, não só clicar.</strong> O que se verifica: está escrito quais dados serão acessados e para quê? Consentimento é exigência regulatória — texto vago, ausente, ou caixa já marcada por padrão são ocorrência.",
                  "textoBusca": "conferir o texto de consentimento antes de autorizar. ler o texto na tela, não só clicar. o que se verifica: está escrito quais dados serão acessados e para quê? consentimento é exigência regulatória — texto vago, ausente, ou caixa já marcada por padrão são ocorrência.",
                  "esperadoHtml": "escopo e finalidade explícitos. Consentimento não pode ser implícito.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 199,
                  "ordem": 2
                },
                {
                  "key": "ROTEIRO-04/J-062.W/P3",
                  "id": "P3",
                  "hash": "f6269be4",
                  "textoHtml": "Autorizar.",
                  "comoHtml": "Confirmar a autorização. O endereço muda para <code>.../open-finance/retorno</code> — é a simulação do retorno da instituição financeira.",
                  "textoBusca": "autorizar. confirmar a autorização. o endereço muda para .../open-finance/retorno — é a simulação do retorno da instituição financeira.",
                  "esperadoHtml": "redireciona para <code>.../open-finance/retorno</code> (mesmo componente com <code>data.retorno = true</code>); consentimento registrado.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 204,
                  "ordem": 3
                },
                {
                  "key": "ROTEIRO-04/J-062.W/P4",
                  "id": "P4",
                  "hash": "529248bc",
                  "textoHtml": "Voltar ao detalhe da proposta e reconsultar por gesto.",
                  "comoHtml": "&quot;Por gesto&quot; quer dizer: <strong>você</strong> aciona a atualização (botão de recarregar da tela, ou <code>F5</code>), a tela não se atualiza sozinha. Com a aba <strong>Network</strong> aberta, ficar parado uns 30 segundos e conferir que <strong>não aparecem chamadas repetidas</strong> — isso seria polling, que a arquitetura do projeto evita de propósito.",
                  "textoBusca": "voltar ao detalhe da proposta e reconsultar por gesto. \"por gesto\" quer dizer: você aciona a atualização (botão de recarregar da tela, ou f5), a tela não se atualiza sozinha. com a aba network aberta, ficar parado uns 30 segundos e conferir que não aparecem chamadas repetidas — isso seria polling, que a arquitetura do projeto evita de propósito.",
                  "esperadoHtml": "dados do Open Finance refletidos; sem polling automático na aba de rede.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 209,
                  "ordem": 4
                },
                {
                  "key": "ROTEIRO-04/J-062.W/P5",
                  "id": "P5",
                  "hash": "386d38f1",
                  "textoHtml": "Repetir a autorização para a <strong>mesma</strong> proposta.",
                  "comoHtml": "Percorrer P1 a P3 de novo na mesma proposta. O sistema tem de absorver a repetição sem criar um segundo consentimento — é o que garante que um duplo clique ou um retry de rede não gere registro duplicado. Conferir no detalhe que continua havendo um consentimento só.",
                  "textoBusca": "repetir a autorização para a mesma proposta. percorrer p1 a p3 de novo na mesma proposta. o sistema tem de absorver a repetição sem criar um segundo consentimento — é o que garante que um duplo clique ou um retry de rede não gere registro duplicado. conferir no detalhe que continua havendo um consentimento só.",
                  "esperadoHtml": "tratado de forma idempotente; não duplica consentimento.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 215,
                  "ordem": 5
                }
              ]
            }
          ],
          "assercoes": [],
          "linha": 179,
          "stats": {
            "passos": 5,
            "na": 0,
            "assercoes": 0
          }
        },
        {
          "key": "ROTEIRO-04/J-063.W",
          "id": "J-063.W",
          "escopoId": "J-063.W",
          "kind": "jornada",
          "nivel": 3,
          "titulo": "FINANCEIRO registra parecer e aprova",
          "anchor": "j-063w---financeiro-registra-parecer-e-aprova",
          "ordem": 4,
          "meta": [
            {
              "chave": "ID",
              "texto": "J-063.W",
              "html": "<code>J-063.W</code>"
            },
            {
              "chave": "Tipo",
              "texto": "Positiva",
              "html": "Positiva"
            },
            {
              "chave": "Persona",
              "texto": "financeiro — FINANCEIRO com TOTP habilitado",
              "html": "<code>financeiro</code> — FINANCEIRO com TOTP habilitado"
            },
            {
              "chave": "Superfície",
              "texto": "Web",
              "html": "Web"
            },
            {
              "chave": "Pré-condições",
              "texto": "PRE-01 PRE-02 PRE-04 PRE-06 PRE-08 PRE-10 + J-060.W",
              "html": "<code>PRE-01</code> <code>PRE-02</code> <code>PRE-04</code> <code>PRE-06</code> <code>PRE-08</code> <code>PRE-10</code> + <code>J-060.W</code>"
            },
            {
              "chave": "Endpoints tocados",
              "texto": "POST /credito/propostas/{id}/parecer, GET /propostas/{id}/regras",
              "html": "<code>POST /credito/propostas/{id}/parecer</code>, <code>GET /propostas/{id}/regras</code>"
            },
            {
              "chave": "Step-up",
              "texto": "@RequireStepUp legado — como financeiro tem MFA, exige token",
              "html": "<code>@RequireStepUp</code> legado — como <code>financeiro</code> tem MFA, <strong>exige</strong> token"
            },
            {
              "chave": "Duração",
              "texto": "8 min",
              "html": "8 min"
            },
            {
              "chave": "Só o manual cobre",
              "texto": "O parecer real que dispara a geração do contrato pelo listener",
              "html": "O parecer real que dispara a geração do contrato pelo listener"
            }
          ],
          "metaIndex": {
            "ID": "J-063.W",
            "Tipo": "Positiva",
            "Persona": "financeiro — FINANCEIRO com TOTP habilitado",
            "Superfície": "Web",
            "Pré-condições": "PRE-01 PRE-02 PRE-04 PRE-06 PRE-08 PRE-10 + J-060.W",
            "Endpoints tocados": "POST /credito/propostas/{id}/parecer, GET /propostas/{id}/regras",
            "Step-up": "@RequireStepUp legado — como financeiro tem MFA, exige token",
            "Duração": "8 min",
            "Só o manual cobre": "O parecer real que dispara a geração do contrato pelo listener"
          },
          "notas": [],
          "grupos": [
            {
              "id": "g1",
              "tituloHtml": null,
              "tela": null,
              "implicito": true,
              "passos": [
                {
                  "key": "ROTEIRO-04/J-063.W/P1",
                  "id": "P1",
                  "hash": "0e04b3bc",
                  "textoHtml": "Autenticar como <code>financeiro</code> e localizar a proposta de <code>J-060.W</code>.",
                  "comoHtml": "<strong>Sair da sessão de <code>cliente-a</code> antes</strong> — esta jornada é do outro lado do balcão. Entrar como <code>financeiro@sep.test</code> / <code>roteiro-manual-sep-2026</code> (com código TOTP). O menu agora mostra o grupo <strong>Operação</strong>, que o cliente não via. Localizar a proposta pelo <code>propostaId</code> anotado.",
                  "textoBusca": "autenticar como financeiro e localizar a proposta de j-060.w. sair da sessão de cliente-a antes — esta jornada é do outro lado do balcão. entrar como financeiro@sep.test / roteiro-manual-sep-2026 (com código totp). o menu agora mostra o grupo operação, que o cliente não via. localizar a proposta pelo propostaid anotado.",
                  "esperadoHtml": "FINANCEIRO enxerga propostas de qualquer tomador, com filtros.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 240,
                  "ordem": 1
                },
                {
                  "key": "ROTEIRO-04/J-063.W/P2",
                  "id": "P2",
                  "hash": "a58a6b3a",
                  "textoHtml": "Abrir a trilha de regras avaliadas.",
                  "comoHtml": "Procurar na tela a seção que lista as regras que o motor aplicou. O que se verifica é <strong>coerência</strong>: se o status é <code>PRE_APROVADA</code>, as regras listadas têm de sustentar isso. Trilha vazia ou que contradiz o status é ocorrência — é ela que justifica a decisão para o regulador.",
                  "textoBusca": "abrir a trilha de regras avaliadas. procurar na tela a seção que lista as regras que o motor aplicou. o que se verifica é coerência: se o status é preaprovada, as regras listadas têm de sustentar isso. trilha vazia ou que contradiz o status é ocorrência — é ela que justifica a decisão para o regulador.",
                  "esperadoHtml": "regras, score e sugestão do motor visíveis e coerentes com o status.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 246,
                  "ordem": 2
                },
                {
                  "key": "ROTEIRO-04/J-063.W/P3",
                  "id": "P3",
                  "hash": "cc6ac98b",
                  "textoHtml": "Registrar parecer com decisão <code>PENDENCIA</code>.",
                  "comoHtml": "Escolher <code>PENDENCIA</code> e escrever uma justificativa. <strong>A justificativa tem tamanho mínimo e máximo</strong> (10 a 500 caracteres) — escrever uma frase de verdade, não &quot;teste&quot;. <code>PENDENCIA</code> é estado intermediário: a proposta continua viva e pode voltar a andar.",
                  "textoBusca": "registrar parecer com decisão pendencia. escolher pendencia e escrever uma justificativa. a justificativa tem tamanho mínimo e máximo (10 a 500 caracteres) — escrever uma frase de verdade, não \"teste\". pendencia é estado intermediário: a proposta continua viva e pode voltar a andar.",
                  "esperadoHtml": "status vai para <code>PENDENCIA</code>; <strong>não</strong> é estado final.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 252,
                  "ordem": 3
                },
                {
                  "key": "ROTEIRO-04/J-063.W/P4",
                  "id": "P4",
                  "hash": "9e946e02",
                  "textoHtml": "Registrar parecer com decisão <code>APROVAR</code>, passando pelo step-up.",
                  "comoHtml": "Novo parecer, agora <code>APROVAR</code>. Como <code>financeiro</code> tem MFA, aparece a tela <strong>Confirmação adicional</strong>: clicar em <strong>Iniciar</strong>, digitar o código TOTP <strong>da conta <code>financeiro</code></strong> e <strong>Confirmar</strong>. Este é o passo que dispara a geração do contrato, em segundo plano.",
                  "textoBusca": "registrar parecer com decisão aprovar, passando pelo step-up. novo parecer, agora aprovar. como financeiro tem mfa, aparece a tela confirmação adicional: clicar em iniciar, digitar o código totp da conta financeiro e confirmar. este é o passo que dispara a geração do contrato, em segundo plano.",
                  "esperadoHtml": "status <code>APROVADA</code> (final).",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 257,
                  "ordem": 4
                },
                {
                  "key": "ROTEIRO-04/J-063.W/P5",
                  "id": "P5",
                  "hash": "56ae7f03",
                  "textoHtml": "Tentar registrar um novo parecer na proposta já <code>APROVADA</code>.",
                  "comoHtml": "Tentar registrar mais um parecer na mesma proposta. A recusa é o resultado certo: <code>APROVADA</code> é estado final e não tem saída. Se aceitasse, uma proposta aprovada poderia ser revertida sem trilha.",
                  "textoBusca": "tentar registrar um novo parecer na proposta já aprovada. tentar registrar mais um parecer na mesma proposta. a recusa é o resultado certo: aprovada é estado final e não tem saída. se aceitasse, uma proposta aprovada poderia ser revertida sem trilha.",
                  "esperadoHtml": "recusado — <code>APROVADA</code> é final, sem transição de saída.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 263,
                  "ordem": 5
                },
                {
                  "key": "ROTEIRO-04/J-063.W/P6",
                  "id": "P6",
                  "hash": "81f853d2",
                  "textoHtml": "Aguardar o <code>PropostaAprovadaListener</code> (AFTER_COMMIT) e consultar <code>GET /api/v1/contratos/proposta/{propostaId}</code>.",
                  "comoHtml": "O contrato <strong>não</strong> nasce junto com a aprovação: um processo em segundo plano o cria logo depois. Por isso a primeira consulta pode vir vazia — isso é normal. Esperar alguns segundos e consultar de novo (pelo Insomnia ou pela tela de formalização) até o contrato aparecer. Se depois de um minuto não aparecer, aí sim é ocorrência.",
                  "textoBusca": "aguardar o propostaaprovadalistener (aftercommit) e consultar get /api/v1/contratos/proposta/{propostaid}. o contrato não nasce junto com a aprovação: um processo em segundo plano o cria logo depois. por isso a primeira consulta pode vir vazia — isso é normal. esperar alguns segundos e consultar de novo (pelo insomnia ou pela tela de formalização) até o contrato aparecer. se depois de um minuto não aparecer, aí sim é ocorrência.",
                  "esperadoHtml": "contrato gerado em <strong><code>AGUARDANDO_ACEITE</code></strong>. Reconsultar até aparecer; a geração é assíncrona.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 268,
                  "ordem": 6
                },
                {
                  "key": "ROTEIRO-04/J-063.W/P7",
                  "id": "P7",
                  "hash": "a8f5b437",
                  "textoHtml": "Anotar o <code>contratoId</code>.",
                  "comoHtml": "Copiar o <code>id</code> do contrato da resposta e guardar junto do <code>propostaId</code>. As jornadas <code>J-070.W</code>, <code>J-070.W-N2</code>, <code>J-071.A</code> e <code>J-073.M</code> todas dependem dele — perder esse valor significa refazer a cadeia inteira.",
                  "textoBusca": "anotar o contratoid. copiar o id do contrato da resposta e guardar junto do propostaid. as jornadas j-070.w, j-070.w-n2, j-071.a e j-073.m todas dependem dele — perder esse valor significa refazer a cadeia inteira.",
                  "esperadoHtml": null,
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 276,
                  "ordem": 7
                }
              ]
            }
          ],
          "assercoes": [],
          "linha": 224,
          "stats": {
            "passos": 7,
            "na": 0,
            "assercoes": 0
          }
        },
        {
          "key": "ROTEIRO-04/J-070.W",
          "id": "J-070.W",
          "escopoId": "J-070.W",
          "kind": "jornada",
          "nivel": 3,
          "titulo": "Tomador aceita o contrato com step-up estrito",
          "anchor": "j-070w---tomador-aceita-o-contrato-com-step-up-estrito",
          "ordem": 5,
          "meta": [
            {
              "chave": "ID",
              "texto": "J-070.W",
              "html": "<code>J-070.W</code>"
            },
            {
              "chave": "Tipo",
              "texto": "Positiva",
              "html": "Positiva"
            },
            {
              "chave": "Persona",
              "texto": "cliente-a — CLIENTE dono, com TOTP habilitado",
              "html": "<code>cliente-a</code> — CLIENTE dono, <strong>com</strong> TOTP habilitado"
            },
            {
              "chave": "Superfície",
              "texto": "Web",
              "html": "Web"
            },
            {
              "chave": "Pré-condições",
              "texto": "PRE-01 PRE-02 PRE-04 PRE-07 PRE-10 + J-063.W",
              "html": "<code>PRE-01</code> <code>PRE-02</code> <code>PRE-04</code> <code>PRE-07</code> <code>PRE-10</code> + <code>J-063.W</code>"
            },
            {
              "chave": "Endpoints tocados",
              "texto": "PATCH /api/v1/contratos/{id}/aceite",
              "html": "<code>PATCH /api/v1/contratos/{id}/aceite</code>"
            },
            {
              "chave": "Step-up",
              "texto": "Estrito — sem MFA, nega 403 antes de validar o token",
              "html": "<strong>Estrito</strong> — sem MFA, nega 403 antes de validar o token"
            },
            {
              "chave": "Duração",
              "texto": "10 min",
              "html": "10 min"
            },
            {
              "chave": "Automação equivalente",
              "texto": "golden-path.spec.ts (parcial, com step-up mockado)",
              "html": "<a href=\"../sep-app/e2e/golden-path.spec.ts\" rel=\"noreferrer\"><code>golden-path.spec.ts</code></a> (parcial, com step-up mockado)"
            },
            {
              "chave": "Só o manual cobre",
              "texto": "TOTP real, consumo único do token, integridade do hash SHA-256",
              "html": "TOTP real, consumo único do token, integridade do hash SHA-256"
            }
          ],
          "metaIndex": {
            "ID": "J-070.W",
            "Tipo": "Positiva",
            "Persona": "cliente-a — CLIENTE dono, com TOTP habilitado",
            "Superfície": "Web",
            "Pré-condições": "PRE-01 PRE-02 PRE-04 PRE-07 PRE-10 + J-063.W",
            "Endpoints tocados": "PATCH /api/v1/contratos/{id}/aceite",
            "Step-up": "Estrito — sem MFA, nega 403 antes de validar o token",
            "Duração": "10 min",
            "Automação equivalente": "golden-path.spec.ts (parcial, com step-up mockado)",
            "Só o manual cobre": "TOTP real, consumo único do token, integridade do hash SHA-256"
          },
          "notas": [],
          "grupos": [
            {
              "id": "g2",
              "tituloHtml": "Tela <code>/app/formalizacao/proposta/{propostaId}</code>",
              "tela": "/app/formalizacao/proposta/{propostaId}",
              "implicito": false,
              "passos": [
                {
                  "key": "ROTEIRO-04/J-070.W/P1",
                  "id": "P1",
                  "hash": "a59b0fe5",
                  "textoHtml": "Como <code>cliente-a</code>, abrir <strong>Formalização</strong> e localizar a proposta.",
                  "comoHtml": "Sair da sessão do <code>financeiro</code> e entrar como <code>cliente-a</code>. Menu lateral, grupo <strong>Jornadas</strong>, item <strong>Formalização</strong>. O contrato que aparece aqui é o que o <code>financeiro</code> gerou ao aprovar, na <code>J-063.W</code>.",
                  "textoBusca": "como cliente-a, abrir formalização e localizar a proposta. sair da sessão do financeiro e entrar como cliente-a. menu lateral, grupo jornadas, item formalização. o contrato que aparece aqui é o que o financeiro gerou ao aprovar, na j-063.w.",
                  "esperadoHtml": "contrato vinculado em <code>AGUARDANDO_ACEITE</code>.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 302,
                  "ordem": 1
                },
                {
                  "key": "ROTEIRO-04/J-070.W/P2",
                  "id": "P2",
                  "hash": "2cbf29a9",
                  "textoHtml": "Abrir o contrato e ler a minuta.",
                  "comoHtml": "<strong>Ler de verdade, comparando com a proposta.</strong> O valor e o prazo têm de bater com o que foi aprovado. Este é o documento que a pessoa vai assinar juridicamente: campo vazio, <code>null</code>, <code>undefined</code> ou <code>[object Object]</code> na tela é ocorrência séria, mesmo que a tela &quot;funcione&quot;.",
                  "textoBusca": "abrir o contrato e ler a minuta. ler de verdade, comparando com a proposta. o valor e o prazo têm de bater com o que foi aprovado. este é o documento que a pessoa vai assinar juridicamente: campo vazio, null, undefined ou [object object] na tela é ocorrência séria, mesmo que a tela \"funcione\".",
                  "esperadoHtml": "valor, prazo e cláusulas conferem com a proposta aprovada. Nenhum campo vazio ou <code>null</code> na tela.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 307,
                  "ordem": 2
                },
                {
                  "key": "ROTEIRO-04/J-070.W/P3",
                  "id": "P3",
                  "hash": "f66b5682",
                  "textoHtml": "Conferir a lista de versões (<code>GET /contratos/{id}/versoes</code>).",
                  "comoHtml": "Pelo Insomnia ou pela própria tela, se ela exibir versões. O hash é uma sequência de 64 caracteres entre letras e números — <strong>contar os caracteres</strong> se estiver em dúvida. Ele é a impressão digital do documento: serve para provar depois que o contrato assinado é exatamente este, sem alteração.",
                  "textoBusca": "conferir a lista de versões (get /contratos/{id}/versoes). pelo insomnia ou pela própria tela, se ela exibir versões. o hash é uma sequência de 64 caracteres entre letras e números — contar os caracteres se estiver em dúvida. ele é a impressão digital do documento: serve para provar depois que o contrato assinado é exatamente este, sem alteração.",
                  "esperadoHtml": "ordem ascendente; a versão vigente tem hash SHA-256 de 64 caracteres.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 314,
                  "ordem": 3
                }
              ]
            },
            {
              "id": "g3",
              "tituloHtml": "Tela <code>/app/formalizacao/contratos/{contratoId}</code>",
              "tela": "/app/formalizacao/contratos/{contratoId}",
              "implicito": false,
              "passos": [
                {
                  "key": "ROTEIRO-04/J-070.W/P4",
                  "id": "P4",
                  "hash": "6c6c538b",
                  "textoHtml": "Clicar em <strong>Aceitar contrato</strong>.",
                  "comoHtml": "O botão fica no fim da minuta; rolar a página até alcançá-lo. <strong>Conferir o status antes de prosseguir</strong>: ele tem de continuar <code>AGUARDANDO_ACEITE</code>. Se mudasse já no clique, o aceite estaria sendo registrado antes da confirmação de identidade — que é exatamente o que esta jornada existe para impedir.",
                  "textoBusca": "clicar em aceitar contrato. o botão fica no fim da minuta; rolar a página até alcançá-lo. conferir o status antes de prosseguir: ele tem de continuar aguardandoaceite. se mudasse já no clique, o aceite estaria sendo registrado antes da confirmação de identidade — que é exatamente o que esta jornada existe para impedir.",
                  "esperadoHtml": "vai para o step-up. O status <strong>continua</strong> <code>AGUARDANDO_ACEITE</code> — nenhuma mutação ocorreu ainda.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 323,
                  "ordem": 1
                },
                {
                  "key": "ROTEIRO-04/J-070.W/P5",
                  "id": "P5",
                  "hash": "49564063",
                  "textoHtml": "Informar o código TOTP corrente.",
                  "comoHtml": "Na tela <strong>Confirmação adicional</strong>: <strong>Iniciar</strong>, código da conta <code>cliente-a</code>, <strong>Confirmar</strong>. Ao voltar, <strong>olhar o status de novo</strong>: ainda tem de ser <code>AGUARDANDO_ACEITE</code>. Passar no step-up dá permissão para aceitar; não é o aceite.",
                  "textoBusca": "informar o código totp corrente. na tela confirmação adicional: iniciar, código da conta cliente-a, confirmar. ao voltar, olhar o status de novo: ainda tem de ser aguardandoaceite. passar no step-up dá permissão para aceitar; não é o aceite.",
                  "esperadoHtml": "volta à tela de origem preservando o contexto. <strong>O retorno do step-up não pode, sozinho, registrar o aceite.</strong>",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 330,
                  "ordem": 2
                },
                {
                  "key": "ROTEIRO-04/J-070.W/P6",
                  "id": "P6",
                  "hash": "f4491905",
                  "textoHtml": "Confirmar o aceite.",
                  "comoHtml": "Agora sim, confirmar. Com o DevTools na aba <strong>Network</strong>, clicar na chamada de aceite e conferir em <strong>Headers</strong> que existe o <code>X-Step-Up-Token</code>. <strong>Anotar o horário</strong> — ajuda a localizar o evento no audit log do P9.",
                  "textoBusca": "confirmar o aceite. agora sim, confirmar. com o devtools na aba network, clicar na chamada de aceite e conferir em headers que existe o x-step-up-token. anotar o horário — ajuda a localizar o evento no audit log do p9.",
                  "esperadoHtml": "<code>PATCH .../aceite</code> sai com <code>X-Step-Up-Token</code>; <code>200</code> com <code>status = ACEITO</code>.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 336,
                  "ordem": 3
                },
                {
                  "key": "ROTEIRO-04/J-070.W/P7",
                  "id": "P7",
                  "hash": "9a2440b3",
                  "textoHtml": "Reconsultar <code>GET /api/v1/contratos/{id}/assinatura/status</code>.",
                  "comoHtml": "Outro processo assíncrono, como o do <code>J-063.W</code> P6: aceitar dispara o envio para o provedor de assinatura em segundo plano. Consultar pelo Insomnia, repetindo até o status mudar. <strong>Anotar o <code>idEnvelopeExterno</code></strong> — a <code>J-071.A</code> precisa dele para simular o webhook de assinatura.",
                  "textoBusca": "reconsultar get /api/v1/contratos/{id}/assinatura/status. outro processo assíncrono, como o do j-063.w p6: aceitar dispara o envio para o provedor de assinatura em segundo plano. consultar pelo insomnia, repetindo até o status mudar. anotar o idenvelopeexterno — a j-071.a precisa dele para simular o webhook de assinatura.",
                  "esperadoHtml": "após o <code>ContratoAceitoListener</code>, <code>statusContrato = EM_ASSINATURA</code> e <code>statusEnvelope = ENVIADO</code>. Anotar o <code>idEnvelopeExterno</code> (formato <code>fake-env-&lt;idempotencyKey&gt;</code> no provider Fake).",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 341,
                  "ordem": 4
                },
                {
                  "key": "ROTEIRO-04/J-070.W/P8",
                  "id": "P8",
                  "hash": "532cd11c",
                  "textoHtml": "Tentar aceitar o <strong>mesmo</strong> contrato de novo.",
                  "comoHtml": "Voltar à tela do contrato e tentar aceitar outra vez (se o botão sumiu, repetir a chamada pelo Insomnia). O <strong>409</strong> é o resultado correto: o contrato já saiu de <code>AGUARDANDO_ACEITE</code>, e aceitar duas vezes criaria dois atos jurídicos para uma dívida só.",
                  "textoBusca": "tentar aceitar o mesmo contrato de novo. voltar à tela do contrato e tentar aceitar outra vez (se o botão sumiu, repetir a chamada pelo insomnia). o 409 é o resultado correto: o contrato já saiu de aguardandoaceite, e aceitar duas vezes criaria dois atos jurídicos para uma dívida só.",
                  "esperadoHtml": "<strong>409</strong> de estado inválido — <code>AGUARDANDO_ACEITE</code> era pré-condição.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 349,
                  "ordem": 5
                },
                {
                  "key": "ROTEIRO-04/J-070.W/P9",
                  "id": "P9",
                  "hash": "9e67c738",
                  "textoHtml": "Conferir o audit log.",
                  "comoHtml": "Terminal do banco. Procurar o evento de aceite no horário anotado no P6. Além de existir, ele precisa carregar <strong>evidência técnica</strong> — hash do documento, IP e user-agent. É o que permite provar mais tarde quem aceitou, o quê e de onde.",
                  "textoBusca": "conferir o audit log. terminal do banco. procurar o evento de aceite no horário anotado no p6. além de existir, ele precisa carregar evidência técnica — hash do documento, ip e user-agent. é o que permite provar mais tarde quem aceitou, o quê e de onde.",
                  "esperadoHtml": "aceite registrado com evidência técnica (hash, IP, user-agent).",
                  "blocos": [
                    {
                      "tipo": "codigo",
                      "lang": "bash",
                      "regiao": "como",
                      "conteudo": "docker exec sep-postgres psql -U sep -d sep_dev \\\n  -c \"SELECT tipo, data_evento FROM audit_log_seguranca ORDER BY data_evento DESC LIMIT 5;\""
                    }
                  ],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 355,
                  "ordem": 6
                }
              ]
            }
          ],
          "assercoes": [
            {
              "key": "ROTEIRO-04/J-070.W/#bed1b9ae",
              "id": null,
              "hash": "b4a19841",
              "textoHtml": "Contrato em <code>EM_ASSINATURA</code> com envelope criado",
              "comoHtml": null,
              "textoBusca": "contrato em emassinatura com envelope criado",
              "esperadoHtml": null,
              "blocos": [],
              "na": false,
              "naMotivo": null,
              "marcadoNaFonte": false,
              "linha": 367,
              "ordem": 1
            },
            {
              "key": "ROTEIRO-04/J-070.W/#45848496",
              "id": null,
              "hash": "a731021e",
              "textoHtml": "Um único aceite registrado, mesmo com P8",
              "comoHtml": null,
              "textoBusca": "um único aceite registrado, mesmo com p8",
              "esperadoHtml": null,
              "blocos": [],
              "na": false,
              "naMotivo": null,
              "marcadoNaFonte": false,
              "linha": 368,
              "ordem": 2
            }
          ],
          "linha": 283,
          "stats": {
            "passos": 9,
            "na": 0,
            "assercoes": 2
          }
        },
        {
          "key": "ROTEIRO-04/J-070.W-N1",
          "id": "J-070.W-N1",
          "escopoId": "J-070.W-N1",
          "kind": "jornada",
          "nivel": 3,
          "titulo": "Aceite negado para usuário sem MFA",
          "anchor": "j-070w-n1---aceite-negado-para-usurio-sem-mfa",
          "ordem": 6,
          "meta": [
            {
              "chave": "ID",
              "texto": "J-070.W-N1",
              "html": "<code>J-070.W-N1</code>"
            },
            {
              "chave": "Tipo",
              "texto": "Negativa — controle de acesso",
              "html": "Negativa — controle de acesso"
            },
            {
              "chave": "Jornada pai",
              "texto": "J-070.W",
              "html": "<a href=\"#j-070w---tomador-aceita-o-contrato-com-step-up-estrito\" rel=\"noreferrer\"><code>J-070.W</code></a>"
            },
            {
              "chave": "Persona",
              "texto": "cliente-b — CLIENTE, sem TOTP",
              "html": "<code>cliente-b</code> — CLIENTE, <strong>sem</strong> TOTP"
            },
            {
              "chave": "Superfície",
              "texto": "Web + API",
              "html": "Web + API"
            },
            {
              "chave": "Vetor",
              "texto": "@RequireStepUpEstrito sem MFA cadastrado",
              "html": "<code>@RequireStepUpEstrito</code> sem MFA cadastrado"
            },
            {
              "chave": "Comportamento seguro esperado",
              "texto": "403, nenhuma mutação, corpo genérico",
              "html": "<strong>403</strong>, nenhuma mutação, corpo genérico"
            },
            {
              "chave": "Pré-condições",
              "texto": "PRE-01 PRE-04 PRE-09 + contrato próprio de cliente-b em AGUARDANDOACEITE",
              "html": "<code>PRE-01</code> <code>PRE-04</code> <code>PRE-09</code> + contrato próprio de <code>cliente-b</code> em <code>AGUARDANDO_ACEITE</code>"
            },
            {
              "chave": "Automação equivalente",
              "texto": "ContratoControllerTest (unitário); nenhuma E2E",
              "html": "<code>ContratoControllerTest</code> (unitário); nenhuma E2E"
            }
          ],
          "metaIndex": {
            "ID": "J-070.W-N1",
            "Tipo": "Negativa — controle de acesso",
            "Jornada pai": "J-070.W",
            "Persona": "cliente-b — CLIENTE, sem TOTP",
            "Superfície": "Web + API",
            "Vetor": "@RequireStepUpEstrito sem MFA cadastrado",
            "Comportamento seguro esperado": "403, nenhuma mutação, corpo genérico",
            "Pré-condições": "PRE-01 PRE-04 PRE-09 + contrato próprio de cliente-b em AGUARDANDOACEITE",
            "Automação equivalente": "ContratoControllerTest (unitário); nenhuma E2E"
          },
          "notas": [
            "Esta jornada <strong>fecha o bloqueio de go-live da Sprint 27</strong>. Se ela passar (aceite concluído sem MFA), o bypass pré-MFA voltou e o ato legal esta desprotegido.",
            "<strong>Esta jornada precisa de um contrato do próprio <code>cliente-b</code> em <code>AGUARDANDO_ACEITE</code></strong> — não serve o do <code>cliente-a</code>, senão você estaria testando ownership (que é a <a href=\"#j-070w-n2---aceite-de-contrato-alheio\" rel=\"noreferrer\"><code>J-070.W-N2</code></a>) e não ausência de MFA. Para produzi-lo: <code>cliente-b</code> precisa de onboarding aprovado e de uma proposta aprovada pelo <code>financeiro</code>, repetindo <code>J-060.W</code> e <code>J-063.W</code> com essa persona. <strong><code>cliente-b</code> tem de continuar sem TOTP</strong> — é a condição do teste."
          ],
          "grupos": [
            {
              "id": "g1",
              "tituloHtml": null,
              "tela": null,
              "implicito": true,
              "passos": [
                {
                  "key": "ROTEIRO-04/J-070.W-N1/P1",
                  "id": "P1",
                  "hash": "0d8b2fe5",
                  "textoHtml": "Autenticar como <code>cliente-b</code> e abrir o próprio contrato.",
                  "comoHtml": "Entrar como <code>cliente-b</code> (senha <code>jornada-ownership-sep-2026-v2</code> se a <code>J-022.W-N1</code> já rodou) e abrir a formalização do contrato dele. <strong>Ler o contrato funciona sem MFA</strong> — a proteção é sobre o ato de aceitar, não sobre a leitura.",
                  "textoBusca": "autenticar como cliente-b e abrir o próprio contrato. entrar como cliente-b (senha jornada-ownership-sep-2026-v2 se a j-022.w-n1 já rodou) e abrir a formalização do contrato dele. ler o contrato funciona sem mfa — a proteção é sobre o ato de aceitar, não sobre a leitura.",
                  "esperadoHtml": "tela carrega normalmente — leitura não exige step-up.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 398,
                  "ordem": 1
                },
                {
                  "key": "ROTEIRO-04/J-070.W-N1/P2",
                  "id": "P2",
                  "hash": "ba8ed1f6",
                  "textoHtml": "Clicar em <strong>Aceitar contrato</strong>.",
                  "comoHtml": "Aqui o 403 é o resultado desejado. Além do erro, avaliar a <strong>mensagem</strong>: ela deve orientar a habilitar a verificação em duas etapas. O que não pode existir é qualquer atalho oferecido ali — &quot;continuar mesmo assim&quot;, &quot;pular esta etapa&quot; — que permita aceitar sem MFA.",
                  "textoBusca": "clicar em aceitar contrato. aqui o 403 é o resultado desejado. além do erro, avaliar a mensagem: ela deve orientar a habilitar a verificação em duas etapas. o que não pode existir é qualquer atalho oferecido ali — \"continuar mesmo assim\", \"pular esta etapa\" — que permita aceitar sem mfa.",
                  "esperadoHtml": "<strong>403</strong>. A mensagem orienta habilitar MFA e <strong>não</strong> oferece caminho alternativo que burle o step-up.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 403,
                  "ordem": 2
                },
                {
                  "key": "ROTEIRO-04/J-070.W-N1/P3",
                  "id": "P3",
                  "hash": "43e96a65",
                  "textoHtml": "Conferir o status do contrato após o erro.",
                  "comoHtml": "Recarregar a tela do contrato. Uma negação não pode deixar rastro: se o status tivesse mudado, a operação teria acontecido pela metade.",
                  "textoBusca": "conferir o status do contrato após o erro. recarregar a tela do contrato. uma negação não pode deixar rastro: se o status tivesse mudado, a operação teria acontecido pela metade.",
                  "esperadoHtml": "segue <code>AGUARDANDO_ACEITE</code>. A negação não pode ter efeito colateral.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 410,
                  "ordem": 3
                },
                {
                  "key": "ROTEIRO-04/J-070.W-N1/P4",
                  "id": "P4",
                  "hash": "2bc56ba1",
                  "textoHtml": "Chamar <code>PATCH /api/v1/contratos/{id}/aceite</code> direto na API, sem <code>X-Step-Up-Token</code>.",
                  "comoHtml": "Pelo Insomnia, autenticado como <code>cliente-b</code>, sem o header de step-up. Repete a lógica do P2 sem passar pela tela — porque bloquear só na interface não é bloquear.",
                  "textoBusca": "chamar patch /api/v1/contratos/{id}/aceite direto na api, sem x-step-up-token. pelo insomnia, autenticado como cliente-b, sem o header de step-up. repete a lógica do p2 sem passar pela tela — porque bloquear só na interface não é bloquear.",
                  "esperadoHtml": "<strong>403</strong>.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 414,
                  "ordem": 4
                },
                {
                  "key": "ROTEIRO-04/J-070.W-N1/P5",
                  "id": "P5",
                  "hash": "603cfe09",
                  "textoHtml": "Emitir um step-up token por <code>initiate</code> + <code>complete</code> e repetir <strong>P4</strong> com o header preenchido.",
                  "comoHtml": "<strong>Este é o passo decisivo da jornada, e o mais fácil de executar errado.</strong> <code>cliente-b</code> não tem TOTP, então o <code>complete</code> provavelmente falha — se falhar, registre isso e o passo está cumprido: sem MFA não há como obter o token. Se por algum motivo você conseguir um token e a chamada <strong>ainda assim</strong> der 403, é o resultado ideal: o estrito recusa por ausência de MFA <strong>antes</strong> de olhar o token. O que seria falha grave é a chamada dar <code>200</code>.",
                  "textoBusca": "emitir um step-up token por initiate + complete e repetir p4 com o header preenchido. este é o passo decisivo da jornada, e o mais fácil de executar errado. cliente-b não tem totp, então o complete provavelmente falha — se falhar, registre isso e o passo está cumprido: sem mfa não há como obter o token. se por algum motivo você conseguir um token e a chamada ainda assim der 403, é o resultado ideal: o estrito recusa por ausência de mfa antes de olhar o token. o que seria falha grave é a chamada dar 200.",
                  "esperadoHtml": "ainda <strong>403</strong> — o estrito nega por ausência de MFA <strong>antes</strong> de validar o token. Este é o passo que distingue estrito de legado.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 419,
                  "ordem": 5
                },
                {
                  "key": "ROTEIRO-04/J-070.W-N1/P6",
                  "id": "P6",
                  "hash": "258ae285",
                  "textoHtml": "Conferir o corpo dos 403.",
                  "comoHtml": "Ler o corpo das respostas 403 no Insomnia. Não pode vazar id de usuário, nome de classe, caminho de arquivo nem explicação do tipo &quot;usuário não possui MFA&quot; — mensagem detalhada demais ensina o atacante a ajustar a tentativa.",
                  "textoBusca": "conferir o corpo dos 403. ler o corpo das respostas 403 no insomnia. não pode vazar id de usuário, nome de classe, caminho de arquivo nem explicação do tipo \"usuário não possui mfa\" — mensagem detalhada demais ensina o atacante a ajustar a tentativa.",
                  "esperadoHtml": "genérico (&quot;Acesso negado&quot;), sem UUID, sem stack trace, sem detalhe interno.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 429,
                  "ordem": 6
                }
              ]
            }
          ],
          "assercoes": [],
          "linha": 372,
          "stats": {
            "passos": 6,
            "na": 0,
            "assercoes": 0
          }
        },
        {
          "key": "ROTEIRO-04/J-070.W-N2",
          "id": "J-070.W-N2",
          "escopoId": "J-070.W-N2",
          "kind": "jornada",
          "nivel": 3,
          "titulo": "Aceite de contrato alheio",
          "anchor": "j-070w-n2---aceite-de-contrato-alheio",
          "ordem": 7,
          "meta": [
            {
              "chave": "ID",
              "texto": "J-070.W-N2",
              "html": "<code>J-070.W-N2</code>"
            },
            {
              "chave": "Tipo",
              "texto": "Negativa — ownership",
              "html": "Negativa — ownership"
            },
            {
              "chave": "Jornada pai",
              "texto": "J-070.W",
              "html": "<a href=\"#j-070w---tomador-aceita-o-contrato-com-step-up-estrito\" rel=\"noreferrer\"><code>J-070.W</code></a>"
            },
            {
              "chave": "Persona",
              "texto": "cliente-b agindo sobre o contrato de cliente-a",
              "html": "<code>cliente-b</code> agindo sobre o contrato de <code>cliente-a</code>"
            },
            {
              "chave": "Superfície",
              "texto": "API",
              "html": "API"
            },
            {
              "chave": "Vetor",
              "texto": "IDOR — manipular o contratoId na URL",
              "html": "IDOR — manipular o <code>contratoId</code> na URL"
            },
            {
              "chave": "Comportamento seguro esperado",
              "texto": "403 de ownership, sem vazar dado do titular",
              "html": "<strong>403</strong> de ownership, sem vazar dado do titular"
            },
            {
              "chave": "Pré-condições",
              "texto": "PRE-01 PRE-04 + contratoId de cliente-a (de J-063.W)",
              "html": "<code>PRE-01</code> <code>PRE-04</code> + <code>contratoId</code> de <code>cliente-a</code> (de <code>J-063.W</code>)"
            }
          ],
          "metaIndex": {
            "ID": "J-070.W-N2",
            "Tipo": "Negativa — ownership",
            "Jornada pai": "J-070.W",
            "Persona": "cliente-b agindo sobre o contrato de cliente-a",
            "Superfície": "API",
            "Vetor": "IDOR — manipular o contratoId na URL",
            "Comportamento seguro esperado": "403 de ownership, sem vazar dado do titular",
            "Pré-condições": "PRE-01 PRE-04 + contratoId de cliente-a (de J-063.W)"
          },
          "notas": [],
          "grupos": [
            {
              "id": "g1",
              "tituloHtml": null,
              "tela": null,
              "implicito": true,
              "passos": [
                {
                  "key": "ROTEIRO-04/J-070.W-N2/P1",
                  "id": "P1",
                  "hash": "fa93d3da",
                  "textoHtml": "Autenticado como <code>cliente-b</code>, chamar <code>GET /api/v1/contratos/{contratoId-do-cliente-a}</code>.",
                  "comoHtml": "<strong>IDOR</strong> é isto: trocar um identificador na URL para alcançar dado de outra pessoa. No Insomnia, autenticar como <code>cliente-b</code> e colocar na URL o <code>contratoId</code> do <code>cliente-a</code> (o da <code>J-063.W</code> P7). Além do 403, <strong>ler o corpo da resposta</strong>: nem um pedaço do dado alheio pode aparecer ali — nem valor, nem nome, nem documento.",
                  "textoBusca": "autenticado como cliente-b, chamar get /api/v1/contratos/{contratoid-do-cliente-a}. idor é isto: trocar um identificador na url para alcançar dado de outra pessoa. no insomnia, autenticar como cliente-b e colocar na url o contratoid do cliente-a (o da j-063.w p7). além do 403, ler o corpo da resposta: nem um pedaço do dado alheio pode aparecer ali — nem valor, nem nome, nem documento.",
                  "esperadoHtml": "<strong>403</strong>. O corpo <strong>não</strong> pode conter valor, CPF ou nome do <code>cliente-a</code>.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 452,
                  "ordem": 1
                },
                {
                  "key": "ROTEIRO-04/J-070.W-N2/P2",
                  "id": "P2",
                  "hash": "1175047f",
                  "textoHtml": "Chamar <code>PATCH .../aceite</code> no mesmo contrato, com step-up válido do <code>cliente-b</code>.",
                  "comoHtml": "Se <code>cliente-b</code> não tem MFA, use <code>cliente-a</code>... <strong>não</strong> — a persona tem de ser <code>cliente-b</code> mesmo. O ponto do passo é que um step-up legítimo <strong>da pessoa errada</strong> não dá acesso: identidade confirmada e permissão sobre o recurso são coisas diferentes. Se não conseguir emitir o token por falta de MFA, registre isso; o passo continua provando o que precisa.",
                  "textoBusca": "chamar patch .../aceite no mesmo contrato, com step-up válido do cliente-b. se cliente-b não tem mfa, use cliente-a... não — a persona tem de ser cliente-b mesmo. o ponto do passo é que um step-up legítimo da pessoa errada não dá acesso: identidade confirmada e permissão sobre o recurso são coisas diferentes. se não conseguir emitir o token por falta de mfa, registre isso; o passo continua provando o que precisa.",
                  "esperadoHtml": "<strong>403</strong> de ownership. Token válido <strong>não</strong> compensa ownership ausente.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 459,
                  "ordem": 2
                },
                {
                  "key": "ROTEIRO-04/J-070.W-N2/P3",
                  "id": "P3",
                  "hash": "d38a8ed0",
                  "textoHtml": "Repetir <strong>P1</strong> pela URL do web (<code>/app/formalizacao/contratos/{id}</code>).",
                  "comoHtml": "Logado como <code>cliente-b</code> no navegador, colar <code>http://localhost:4200/app/formalizacao/contratos/&lt;contratoId-do-cliente-a&gt;</code>. Observar a tela <strong>no instante do carregamento</strong>: o defeito seria os dados do contrato alheio aparecerem por um segundo antes do erro. Vazamento de um segundo é vazamento.",
                  "textoBusca": "repetir p1 pela url do web (/app/formalizacao/contratos/{id}). logado como cliente-b no navegador, colar http://localhost:4200/app/formalizacao/contratos/<contratoid-do-cliente-a>. observar a tela no instante do carregamento: o defeito seria os dados do contrato alheio aparecerem por um segundo antes do erro. vazamento de um segundo é vazamento.",
                  "esperadoHtml": "acesso negado na UI, sem renderizar dado parcial antes do erro.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 467,
                  "ordem": 3
                },
                {
                  "key": "ROTEIRO-04/J-070.W-N2/P4",
                  "id": "P4",
                  "hash": "46b96c96",
                  "textoHtml": "Como <code>cliente-a</code>, conferir que o contrato segue intacto.",
                  "comoHtml": "Voltar para a sessão de <code>cliente-a</code> e abrir o contrato. As tentativas do <code>cliente-b</code> não podem ter mudado nada — nem status, nem qualquer campo.",
                  "textoBusca": "como cliente-a, conferir que o contrato segue intacto. voltar para a sessão de cliente-a e abrir o contrato. as tentativas do cliente-b não podem ter mudado nada — nem status, nem qualquer campo.",
                  "esperadoHtml": "<code>AGUARDANDO_ACEITE</code> ou <code>EM_ASSINATURA</code>, conforme o ponto do roteiro.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 473,
                  "ordem": 4
                }
              ]
            }
          ],
          "assercoes": [],
          "linha": 437,
          "stats": {
            "passos": 4,
            "na": 0,
            "assercoes": 0
          }
        },
        {
          "key": "ROTEIRO-04/J-071.A",
          "id": "J-071.A",
          "escopoId": "J-071.A",
          "kind": "jornada",
          "nivel": 3,
          "titulo": "Assinatura concluída por webhook e download da CCB",
          "anchor": "j-071a---assinatura-concluda-por-webhook-e-download-da-ccb",
          "ordem": 8,
          "meta": [
            {
              "chave": "ID",
              "texto": "J-071.A",
              "html": "<code>J-071.A</code>"
            },
            {
              "chave": "Tipo",
              "texto": "Positiva",
              "html": "Positiva"
            },
            {
              "chave": "Persona",
              "texto": "Provider de assinatura (simulado) + cliente-a",
              "html": "Provider de assinatura (simulado) + <code>cliente-a</code>"
            },
            {
              "chave": "Superfície",
              "texto": "API + Web",
              "html": "API + Web"
            },
            {
              "chave": "Pré-condições",
              "texto": "PRE-01 PRE-04 + J-070.W concluída (contrato em EMASSINATURA)",
              "html": "<code>PRE-01</code> <code>PRE-04</code> + <code>J-070.W</code> concluída (contrato em <code>EM_ASSINATURA</code>)"
            },
            {
              "chave": "Endpoints tocados",
              "texto": "POST /api/v1/webhooks/assinatura/clicksign, GET /contratos/{id}/assinatura/status, GET /contratos/{id}/documento-assinado",
              "html": "<code>POST /api/v1/webhooks/assinatura/clicksign</code>, <code>GET /contratos/{id}/assinatura/status</code>, <code>GET /contratos/{id}/documento-assinado</code>"
            },
            {
              "chave": "Duração",
              "texto": "10 min",
              "html": "10 min"
            },
            {
              "chave": "Só o manual cobre",
              "texto": "O ciclo completo de callback, dedup e integridade do documento",
              "html": "O ciclo completo de callback, dedup e integridade do documento"
            }
          ],
          "metaIndex": {
            "ID": "J-071.A",
            "Tipo": "Positiva",
            "Persona": "Provider de assinatura (simulado) + cliente-a",
            "Superfície": "API + Web",
            "Pré-condições": "PRE-01 PRE-04 + J-070.W concluída (contrato em EMASSINATURA)",
            "Endpoints tocados": "POST /api/v1/webhooks/assinatura/clicksign, GET /contratos/{id}/assinatura/status, GET /contratos/{id}/documento-assinado",
            "Duração": "10 min",
            "Só o manual cobre": "O ciclo completo de callback, dedup e integridade do documento"
          },
          "notas": [
            "O webhook e público mas exige HMAC. O segredo de desenvolvimento e <code>dev-clicksign-webhook-secret-change-me</code> (default de <code>app.webhooks.secrets</code>); em qualquer ambiente que não seja local ele <strong>precisa</strong> ser trocado. Preencha <code>clicksignWebhookSecret</code> no environment antes de começar — a collection calcula a assinatura a partir dele."
          ],
          "grupos": [
            {
              "id": "g1",
              "tituloHtml": null,
              "tela": null,
              "implicito": true,
              "passos": [
                {
                  "key": "ROTEIRO-04/J-071.A/P1",
                  "id": "P1",
                  "hash": "7336edfb",
                  "textoHtml": "Insomnia &gt; <strong>Webhook Assinatura Digital</strong> &gt; <code>POST /webhooks/assinatura/clicksign — sign (202)</code>, com <code>idEnvelopeExterno</code> preenchido no environment. Body:",
                  "comoHtml": "Você está no papel do provedor de assinatura: este request simula o aviso de &quot;documento assinado&quot; que a empresa de assinatura digital mandaria. Antes de enviar, conferir no environment que <code>idEnvelopeExterno</code> (anotado na <code>J-070.W</code> P7) e <code>clicksignWebhookSecret</code> estão preenchidos — sem o segredo, a assinatura HMAC sai errada e você recebe 401 em vez de 202. Body:",
                  "textoBusca": "insomnia > webhook assinatura digital > post /webhooks/assinatura/clicksign — sign (202), com idenvelopeexterno preenchido no environment. body: você está no papel do provedor de assinatura: este request simula o aviso de \"documento assinado\" que a empresa de assinatura digital mandaria. antes de enviar, conferir no environment que idenvelopeexterno (anotado na j-070.w p7) e clicksignwebhooksecret estão preenchidos — sem o segredo, a assinatura hmac sai errada e você recebe 401 em vez de 202. body:",
                  "esperadoHtml": "<strong>202</strong>.",
                  "blocos": [
                    {
                      "tipo": "codigo",
                      "lang": "json",
                      "regiao": "como",
                      "conteudo": "{\n  \"event\": { \"name\": \"sign\", \"occurred_at\": \"2026-07-21T12:00:00Z\" },\n  \"document\": { \"key\": \"{{ idEnvelopeExterno }}\" }\n}"
                    }
                  ],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 501,
                  "ordem": 1
                },
                {
                  "key": "ROTEIRO-04/J-071.A/P2",
                  "id": "P2",
                  "hash": "be72ff72",
                  "textoHtml": "Insomnia &gt; <strong>Webhook Assinatura Digital</strong> &gt; <code>POST /webhooks/assinatura/clicksign (HMAC invalido) — 401</code>.",
                  "comoHtml": "Este request tem a assinatura propositalmente errada. É o teste de que <strong>qualquer pessoa na internet</strong> pode chamar esse endereço, mas só quem tem o segredo consegue mudar alguma coisa. Se responder 202, qualquer um poderia declarar um contrato como assinado — é a ocorrência mais grave deste roteiro.",
                  "textoBusca": "insomnia > webhook assinatura digital > post /webhooks/assinatura/clicksign (hmac invalido) — 401. este request tem a assinatura propositalmente errada. é o teste de que qualquer pessoa na internet pode chamar esse endereço, mas só quem tem o segredo consegue mudar alguma coisa. se responder 202, qualquer um poderia declarar um contrato como assinado — é a ocorrência mais grave deste roteiro.",
                  "esperadoHtml": "<strong>401</strong>. Webhook sem assinatura válida não muda estado.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 516,
                  "ordem": 2
                },
                {
                  "key": "ROTEIRO-04/J-071.A/P3",
                  "id": "P3",
                  "hash": "14780830",
                  "textoHtml": "Insomnia &gt; <strong>Contratos</strong> &gt; <code>GET /contratos/{id}/assinatura/status</code>.",
                  "comoHtml": "Confirma que o webhook do P1 (e não o do P2) surtiu efeito. Os dois campos têm de estar <code>ASSINADO</code>.",
                  "textoBusca": "insomnia > contratos > get /contratos/{id}/assinatura/status. confirma que o webhook do p1 (e não o do p2) surtiu efeito. os dois campos têm de estar assinado.",
                  "esperadoHtml": "<code>statusContrato = ASSINADO</code> e <code>statusEnvelope = ASSINADO</code>.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 523,
                  "ordem": 3
                },
                {
                  "key": "ROTEIRO-04/J-071.A/P4",
                  "id": "P4",
                  "hash": "1bbb2b7e",
                  "textoHtml": "Reenviar o <strong>mesmo</strong> callback de <strong>P1</strong>, sem alterar nada.",
                  "comoHtml": "Só clicar em <strong>Send</strong> de novo no request do P1. Provedores reenviam callbacks quando não têm certeza de que chegaram — é normal e o sistema tem de aguentar. O segundo envio não pode gerar um segundo evento nem alterar o estado. Conferir no P7 que os eventos não duplicaram.",
                  "textoBusca": "reenviar o mesmo callback de p1, sem alterar nada. só clicar em send de novo no request do p1. provedores reenviam callbacks quando não têm certeza de que chegaram — é normal e o sistema tem de aguentar. o segundo envio não pode gerar um segundo evento nem alterar o estado. conferir no p7 que os eventos não duplicaram.",
                  "esperadoHtml": "deduplicado pela UNIQUE <code>(envelope_id, id_evento_externo)</code>; nenhum evento duplicado e nenhuma mudança de estado.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 527,
                  "ordem": 4
                },
                {
                  "key": "ROTEIRO-04/J-071.A/P5",
                  "id": "P5",
                  "hash": "dcb1b61c",
                  "textoHtml": "Insomnia &gt; <strong>Contratos</strong> &gt; <code>GET /contratos/{id}/documento-assinado</code>.",
                  "comoHtml": "Autenticado como <code>cliente-a</code>. Olhar a aba <strong>Headers</strong> da resposta: tem de haver <code>Content-Disposition</code> (que faz o arquivo baixar em vez de abrir) e <code>X-Document-Hash-Sha256</code> (a impressão digital do documento). Como o provider é Fake, o conteúdo é um PDF de mentira com o texto indicado — isso é esperado, não defeito.",
                  "textoBusca": "insomnia > contratos > get /contratos/{id}/documento-assinado. autenticado como cliente-a. olhar a aba headers da resposta: tem de haver content-disposition (que faz o arquivo baixar em vez de abrir) e x-document-hash-sha256 (a impressão digital do documento). como o provider é fake, o conteúdo é um pdf de mentira com o texto indicado — isso é esperado, não defeito.",
                  "esperadoHtml": "<code>application/pdf</code> com <code>Content-Disposition</code> e <code>X-Document-Hash-Sha256</code>. No provider Fake, o conteúdo é o stub <code>%PDF-1.4 fake-assinado</code>.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 534,
                  "ordem": 5
                },
                {
                  "key": "ROTEIRO-04/J-071.A/P6",
                  "id": "P6",
                  "hash": "74d1b085",
                  "textoHtml": "Repetir <strong>P5</strong> com <code>clienteAccessToken</code> do <code>cliente-b</code>.",
                  "comoHtml": "Trocar o token para o do <code>cliente-b</code> e repetir. A CCB é a dívida de uma pessoa específica: ninguém além do titular pode baixá-la.",
                  "textoBusca": "repetir p5 com clienteaccesstoken do cliente-b. trocar o token para o do cliente-b e repetir. a ccb é a dívida de uma pessoa específica: ninguém além do titular pode baixá-la.",
                  "esperadoHtml": "<strong>403</strong> de ownership.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 541,
                  "ordem": 6
                },
                {
                  "key": "ROTEIRO-04/J-071.A/P7",
                  "id": "P7",
                  "hash": "03daf95c",
                  "textoHtml": "Conferir o audit log:",
                  "comoHtml": "Terminal do banco. Os quatro eventos contam a história completa do documento: gerado, enviado para assinatura, assinado e baixado. <strong>Conferir também que não há duplicata</strong> de <code>ASSINATURA_ASSINADA</code> — se houver duas, a deduplicação do P4 falhou.",
                  "textoBusca": "conferir o audit log: terminal do banco. os quatro eventos contam a história completa do documento: gerado, enviado para assinatura, assinado e baixado. conferir também que não há duplicata de assinaturaassinada — se houver duas, a deduplicação do p4 falhou.",
                  "esperadoHtml": "os quatro eventos registrados.",
                  "blocos": [
                    {
                      "tipo": "codigo",
                      "lang": "bash",
                      "regiao": "como",
                      "conteudo": "docker exec sep-postgres psql -U sep -d sep_dev \\\n  -c \"SELECT tipo, data_evento FROM audit_log_seguranca\n      WHERE tipo IN ('CCB_GERADA','ASSINATURA_ENVIADA','ASSINATURA_ASSINADA','DOCUMENTO_ASSINADO_BAIXADO')\n      ORDER BY data_evento DESC LIMIT 10;\""
                    }
                  ],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 545,
                  "ordem": 7
                },
                {
                  "key": "ROTEIRO-04/J-071.A/P8",
                  "id": "P8",
                  "hash": "47dba7a6",
                  "textoHtml": "Conferir que o payload bruto do webhook <strong>não</strong> foi persistido.",
                  "comoHtml": "Payload de provedor externo costuma trazer dado pessoal; guardar o corpo inteiro no banco seria acumular PII sem necessidade. A coluna guarda no máximo 1000 caracteres. Rodar no terminal do banco e conferir o tamanho.",
                  "textoBusca": "conferir que o payload bruto do webhook não foi persistido. payload de provedor externo costuma trazer dado pessoal; guardar o corpo inteiro no banco seria acumular pii sem necessidade. a coluna guarda no máximo 1000 caracteres. rodar no terminal do banco e conferir o tamanho.",
                  "esperadoHtml": "<code>evento_assinatura.payload_resumo</code> truncado em 1000 chars; nenhum corpo integral no banco.",
                  "blocos": [
                    {
                      "tipo": "codigo",
                      "lang": "bash",
                      "regiao": "como",
                      "conteudo": "docker exec sep-postgres psql -U sep -d sep_dev \\\n  -c \"SELECT length(payload_resumo) FROM evento_assinatura ORDER BY data_evento DESC LIMIT 3;\""
                    }
                  ],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 556,
                  "ordem": 8
                },
                {
                  "key": "ROTEIRO-04/J-071.A/P9",
                  "id": "P9",
                  "hash": "b6a56233",
                  "textoHtml": "No web, como <code>cliente-a</code>, abrir o contrato.",
                  "comoHtml": "Fecha o ciclo pela interface: tudo o que foi feito por API tem de aparecer para o usuário. Abrir a formalização e conferir que o status é <code>ASSINADO</code> e que existe a ação de baixar a CCB. Baixar e abrir o arquivo — é o PDF de mentira do provider Fake.",
                  "textoBusca": "no web, como cliente-a, abrir o contrato. fecha o ciclo pela interface: tudo o que foi feito por api tem de aparecer para o usuário. abrir a formalização e conferir que o status é assinado e que existe a ação de baixar a ccb. baixar e abrir o arquivo — é o pdf de mentira do provider fake.",
                  "esperadoHtml": "status <code>ASSINADO</code> e a CCB disponível para download.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 566,
                  "ordem": 9
                }
              ]
            }
          ],
          "assercoes": [
            {
              "key": "ROTEIRO-04/J-071.A/#656a300a",
              "id": null,
              "hash": "75c3c8d4",
              "textoHtml": "Contrato <code>ASSINADO</code>, CCB acessível pelo titular e negada a terceiros",
              "comoHtml": null,
              "textoBusca": "contrato assinado, ccb acessível pelo titular e negada a terceiros",
              "esperadoHtml": null,
              "blocos": [],
              "na": false,
              "naMotivo": null,
              "marcadoNaFonte": false,
              "linha": 574,
              "ordem": 1
            },
            {
              "key": "ROTEIRO-04/J-071.A/#d716979b",
              "id": null,
              "hash": "4030880d",
              "textoHtml": "<code>ASSINADO</code> é pré-condição das jornadas de cobrança — anotar o <code>contratoId</code>",
              "comoHtml": "Este é o <code>PRE-12</code> que o hub cita na ordem de execução: o roteiro de cobrança só roda com um contrato assinado. Guardar o <code>contratoId</code> num lugar que sobreviva ao fim da sessão de hoje.",
              "textoBusca": "assinado é pré-condição das jornadas de cobrança — anotar o contratoid este é o pre-12 que o hub cita na ordem de execução: o roteiro de cobrança só roda com um contrato assinado. guardar o contratoid num lugar que sobreviva ao fim da sessão de hoje.",
              "esperadoHtml": null,
              "blocos": [],
              "na": false,
              "naMotivo": null,
              "marcadoNaFonte": false,
              "linha": 575,
              "ordem": 2
            }
          ],
          "linha": 480,
          "stats": {
            "passos": 9,
            "na": 0,
            "assercoes": 2
          }
        },
        {
          "key": "ROTEIRO-04/J-072.W",
          "id": "J-072.W",
          "escopoId": "J-072.W",
          "kind": "jornada",
          "nivel": 3,
          "titulo": "FINANCEIRO cancela contrato pré-aceite",
          "anchor": "j-072w---financeiro-cancela-contrato-pr-aceite",
          "ordem": 9,
          "meta": [
            {
              "chave": "ID",
              "texto": "J-072.W",
              "html": "<code>J-072.W</code>"
            },
            {
              "chave": "Tipo",
              "texto": "Positiva + negativa de estado",
              "html": "Positiva + negativa de estado"
            },
            {
              "chave": "Persona",
              "texto": "financeiro — FINANCEIRO com TOTP",
              "html": "<code>financeiro</code> — FINANCEIRO com TOTP"
            },
            {
              "chave": "Superfície",
              "texto": "Web + API",
              "html": "Web + API"
            },
            {
              "chave": "Pré-condições",
              "texto": "PRE-01 PRE-04 PRE-06 PRE-08 PRE-10 + um segundo contrato em AGUARDANDOACEITE",
              "html": "<code>PRE-01</code> <code>PRE-04</code> <code>PRE-06</code> <code>PRE-08</code> <code>PRE-10</code> + um segundo contrato em <code>AGUARDANDO_ACEITE</code>"
            },
            {
              "chave": "Endpoints tocados",
              "texto": "POST /api/v1/contratos/{id}/cancelar",
              "html": "<code>POST /api/v1/contratos/{id}/cancelar</code>"
            },
            {
              "chave": "Step-up",
              "texto": "Estrito",
              "html": "<strong>Estrito</strong>"
            }
          ],
          "metaIndex": {
            "ID": "J-072.W",
            "Tipo": "Positiva + negativa de estado",
            "Persona": "financeiro — FINANCEIRO com TOTP",
            "Superfície": "Web + API",
            "Pré-condições": "PRE-01 PRE-04 PRE-06 PRE-08 PRE-10 + um segundo contrato em AGUARDANDOACEITE",
            "Endpoints tocados": "POST /api/v1/contratos/{id}/cancelar",
            "Step-up": "Estrito"
          },
          "notas": [
            "<strong>Esta jornada precisa de um segundo contrato</strong>, ainda em <code>AGUARDANDO_ACEITE</code> — o da <code>J-070.W</code> já foi aceito e serve só para o P3. Para produzi-lo, repetir <code>J-060.W</code> e <code>J-063.W</code> criando outra proposta para <code>cliente-a</code> e aprovando-a. Fazer isso <strong>antes</strong> de começar os passos abaixo."
          ],
          "grupos": [
            {
              "id": "g1",
              "tituloHtml": null,
              "tela": null,
              "implicito": true,
              "passos": [
                {
                  "key": "ROTEIRO-04/J-072.W/P1",
                  "id": "P1",
                  "hash": "3b30359b",
                  "textoHtml": "Como <code>financeiro</code>, cancelar um contrato em <code>AGUARDANDO_ACEITE</code> com justificativa de menos de 10 caracteres.",
                  "comoHtml": "Entrar como <code>financeiro</code>, abrir o <strong>segundo</strong> contrato (não o aceito) e acionar o cancelamento com uma justificativa curta de propósito, como <code>erro</code>. A recusa é o resultado certo: cancelar contrato é ato relevante e exige motivo registrado de verdade.",
                  "textoBusca": "como financeiro, cancelar um contrato em aguardandoaceite com justificativa de menos de 10 caracteres. entrar como financeiro, abrir o segundo contrato (não o aceito) e acionar o cancelamento com uma justificativa curta de propósito, como erro. a recusa é o resultado certo: cancelar contrato é ato relevante e exige motivo registrado de verdade.",
                  "esperadoHtml": "recusado por validação (justificativa de 10 a 500 chars).",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 601,
                  "ordem": 1
                },
                {
                  "key": "ROTEIRO-04/J-072.W/P2",
                  "id": "P2",
                  "hash": "662aa103",
                  "textoHtml": "Cancelar com justificativa válida, passando pelo step-up.",
                  "comoHtml": "Repetir com uma justificativa real, por exemplo <code>Cancelamento de teste do roteiro manual de formalização</code>. O step-up aqui é <strong>estrito</strong> — é o mesmo mecanismo do aceite: <strong>Iniciar</strong>, código TOTP da conta <code>financeiro</code>, <strong>Confirmar</strong>. <code>CANCELADO</code> é estado final, sem volta.",
                  "textoBusca": "cancelar com justificativa válida, passando pelo step-up. repetir com uma justificativa real, por exemplo cancelamento de teste do roteiro manual de formalização. o step-up aqui é estrito — é o mesmo mecanismo do aceite: iniciar, código totp da conta financeiro, confirmar. cancelado é estado final, sem volta.",
                  "esperadoHtml": "<code>200</code>; status <code>CANCELADO</code> (final).",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 607,
                  "ordem": 2
                },
                {
                  "key": "ROTEIRO-04/J-072.W/P3",
                  "id": "P3",
                  "hash": "e2a47001",
                  "textoHtml": "Tentar cancelar um contrato já <strong><code>ACEITO</code></strong> (o de <code>J-070.W</code>).",
                  "comoHtml": "Agora sobre o primeiro contrato, o que foi aceito. O 409 é o resultado certo: depois do aceite existe um ato jurídico, e desfazê-lo por cancelamento simples apagaria a dívida sem trilha adequada.",
                  "textoBusca": "tentar cancelar um contrato já aceito (o de j-070.w). agora sobre o primeiro contrato, o que foi aceito. o 409 é o resultado certo: depois do aceite existe um ato jurídico, e desfazê-lo por cancelamento simples apagaria a dívida sem trilha adequada.",
                  "esperadoHtml": "<strong>409</strong>. Cancelamento só vale antes do aceite.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 613,
                  "ordem": 3
                },
                {
                  "key": "ROTEIRO-04/J-072.W/P4",
                  "id": "P4",
                  "hash": "c5c99643",
                  "textoHtml": "Como <code>cliente-a</code>, tentar cancelar o próprio contrato.",
                  "comoHtml": "Trocar de sessão para <code>cliente-a</code> e tentar cancelar pela API (a tela dele nem deve oferecer a ação). Mesmo sendo o dono, o tomador não cancela: seria uma saída unilateral da dívida.",
                  "textoBusca": "como cliente-a, tentar cancelar o próprio contrato. trocar de sessão para cliente-a e tentar cancelar pela api (a tela dele nem deve oferecer a ação). mesmo sendo o dono, o tomador não cancela: seria uma saída unilateral da dívida.",
                  "esperadoHtml": "<strong>403</strong>. Cancelamento é de <code>FINANCEIRO</code>/<code>ADMIN</code>, não do tomador.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 618,
                  "ordem": 4
                },
                {
                  "key": "ROTEIRO-04/J-072.W/P5",
                  "id": "P5",
                  "hash": "d36c880c",
                  "textoHtml": "Conferir que a justificativa foi truncada no evento, não no dado.",
                  "comoHtml": "Terminal do banco. A distinção: o <strong>dado</strong> do contrato guarda a justificativa inteira, mas o <strong>evento de auditoria</strong> guarda só um resumo — trilha não é lugar de texto livre irrestrito.",
                  "textoBusca": "conferir que a justificativa foi truncada no evento, não no dado. terminal do banco. a distinção: o dado do contrato guarda a justificativa inteira, mas o evento de auditoria guarda só um resumo — trilha não é lugar de texto livre irrestrito.",
                  "esperadoHtml": "auditoria registra o cancelamento sem expor texto integral irrestrito.",
                  "blocos": [
                    {
                      "tipo": "codigo",
                      "lang": "bash",
                      "regiao": "como",
                      "conteudo": "docker exec sep-postgres psql -U sep -d sep_dev \\\n  -c \"SELECT tipo, length(detalhes::text) FROM audit_log_seguranca ORDER BY data_evento DESC LIMIT 5;\""
                    }
                  ],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 623,
                  "ordem": 5
                }
              ]
            }
          ],
          "assercoes": [],
          "linha": 582,
          "stats": {
            "passos": 5,
            "na": 0,
            "assercoes": 0
          }
        },
        {
          "key": "ROTEIRO-04/J-073.M",
          "id": "J-073.M",
          "escopoId": "J-073.M",
          "kind": "jornada",
          "nivel": 3,
          "titulo": "Formalização no mobile",
          "anchor": "j-073m---formalizao-no-mobile",
          "ordem": 10,
          "meta": [
            {
              "chave": "ID",
              "texto": "J-073.M",
              "html": "<code>J-073.M</code>"
            },
            {
              "chave": "Tipo",
              "texto": "Positiva",
              "html": "Positiva"
            },
            {
              "chave": "Persona",
              "texto": "cliente-a",
              "html": "<code>cliente-a</code>"
            },
            {
              "chave": "Superfície",
              "texto": "Mobile — PWA em localhost:8100 no navegador",
              "html": "Mobile — <strong>PWA em <code>localhost:8100</code> no navegador</strong>"
            },
            {
              "chave": "Pré-condições",
              "texto": "PRE-01 PRE-03 PRE-04 PRE-07 PRE-10 + contrato em AGUARDANDOACEITE",
              "html": "<code>PRE-01</code> <code>PRE-03</code> <code>PRE-04</code> <code>PRE-07</code> <code>PRE-10</code> + contrato em <code>AGUARDANDO_ACEITE</code>"
            },
            {
              "chave": "Automação equivalente",
              "texto": "formalizacao-mobile.spec.ts",
              "html": "<a href=\"../sep-mobile/e2e/formalizacao-mobile.spec.ts\" rel=\"noreferrer\"><code>formalizacao-mobile.spec.ts</code></a>"
            },
            {
              "chave": "Só o manual cobre",
              "texto": "TOTP real no step-up mobile",
              "html": "TOTP real no step-up mobile"
            }
          ],
          "metaIndex": {
            "ID": "J-073.M",
            "Tipo": "Positiva",
            "Persona": "cliente-a",
            "Superfície": "Mobile — PWA em localhost:8100 no navegador",
            "Pré-condições": "PRE-01 PRE-03 PRE-04 PRE-07 PRE-10 + contrato em AGUARDANDOACEITE",
            "Automação equivalente": "formalizacao-mobile.spec.ts",
            "Só o manual cobre": "TOTP real no step-up mobile"
          },
          "notas": [
            "<strong>Esta jornada precisa de um contrato de <code>cliente-a</code> em <code>AGUARDANDO_ACEITE</code>.</strong> Se você já aceitou o da <code>J-070.W</code> pelo web, produza outro (repetir <code>J-060.W</code> + <code>J-063.W</code>) ou use o segundo contrato criado para a <code>J-072.W</code>, desde que não tenha sido cancelado. O ponto da jornada é fazer o aceite <strong>pelo mobile</strong>, então o contrato precisa estar por aceitar."
          ],
          "grupos": [
            {
              "id": "g1",
              "tituloHtml": null,
              "tela": null,
              "implicito": true,
              "passos": [
                {
                  "key": "ROTEIRO-04/J-073.M/P1",
                  "id": "P1",
                  "hash": "869b4ba5",
                  "textoHtml": "Com a emulação de dispositivo ligada, abrir a aba <strong>Propostas</strong> e ir à formalização.",
                  "comoHtml": "Em <code>http://localhost:8100</code>, logado como <code>cliente-a</code>, com <code>Ctrl+Shift+M</code> ligado. A navegação do mobile é por abas no rodapé — tocar em <strong>Propostas</strong> e seguir até a formalização do contrato pendente.",
                  "textoBusca": "com a emulação de dispositivo ligada, abrir a aba propostas e ir à formalização. em http://localhost:8100, logado como cliente-a, com ctrl+shift+m ligado. a navegação do mobile é por abas no rodapé — tocar em propostas e seguir até a formalização do contrato pendente.",
                  "esperadoHtml": "contrato listado com status correto.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 654,
                  "ordem": 1
                },
                {
                  "key": "ROTEIRO-04/J-073.M/P2",
                  "id": "P2",
                  "hash": "6a776681",
                  "textoHtml": "Abrir o contrato e ler a minuta.",
                  "comoHtml": "<strong>Este passo é sobre o layout mobile</strong>, que nenhum teste automatizado cobre. No DevTools, trocar o preset para uma largura de <strong>320px</strong> (o menor telefone comum) e rolar a minuta inteira. Procurar barra de rolagem <strong>horizontal</strong> e texto cortado na borda — qualquer um dos dois é ocorrência.",
                  "textoBusca": "abrir o contrato e ler a minuta. este passo é sobre o layout mobile, que nenhum teste automatizado cobre. no devtools, trocar o preset para uma largura de 320px (o menor telefone comum) e rolar a minuta inteira. procurar barra de rolagem horizontal e texto cortado na borda — qualquer um dos dois é ocorrência.",
                  "esperadoHtml": "texto legível sem scroll horizontal; sem corte a 320px de largura.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 660,
                  "ordem": 2
                },
                {
                  "key": "ROTEIRO-04/J-073.M/P3",
                  "id": "P3",
                  "hash": "0ed082fe",
                  "textoHtml": "Aceitar, passando pelo step-up com TOTP real.",
                  "comoHtml": "Aceitar o contrato. O step-up é o mesmo do web: <strong>Iniciar</strong>, código TOTP da conta <code>cliente-a</code>, <strong>Confirmar</strong>. O mobile sabe <strong>verificar</strong> o código, mas não sabe cadastrar TOTP — por isso o enrollment teve de ser feito no web, no §6.2 do ROTEIRO-00.",
                  "textoBusca": "aceitar, passando pelo step-up com totp real. aceitar o contrato. o step-up é o mesmo do web: iniciar, código totp da conta cliente-a, confirmar. o mobile sabe verificar o código, mas não sabe cadastrar totp — por isso o enrollment teve de ser feito no web, no §6.2 do roteiro-00.",
                  "esperadoHtml": "<code>ACEITO</code>; o mobile <strong>verifica</strong> TOTP normalmente (o que ele não faz é cadastrar).",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 666,
                  "ordem": 3
                },
                {
                  "key": "ROTEIRO-04/J-073.M/P4",
                  "id": "P4",
                  "hash": "15bdb2ef",
                  "textoHtml": "Reconsultar por gesto até <code>ASSINADO</code> (após <code>J-071.A</code>).",
                  "comoHtml": "O status só chega a <code>ASSINADO</code> depois que o webhook da <a href=\"#j-071a---assinatura-concluída-por-webhook-e-download-da-ccb\" rel=\"noreferrer\"><code>J-071.A</code></a> for enviado — se você ainda não fez aquela jornada com <strong>este</strong> contrato, o status para em <code>EM_ASSINATURA</code>, e está correto. &quot;Por gesto&quot; quer dizer que <strong>você</strong> puxa para atualizar ou recarrega; a tela não faz sozinha. Conferir na aba Network que não há chamadas repetidas em intervalo fixo.",
                  "textoBusca": "reconsultar por gesto até assinado (após j-071.a). o status só chega a assinado depois que o webhook da j-071.a for enviado — se você ainda não fez aquela jornada com este contrato, o status para em emassinatura, e está correto. \"por gesto\" quer dizer que você puxa para atualizar ou recarrega; a tela não faz sozinha. conferir na aba network que não há chamadas repetidas em intervalo fixo.",
                  "esperadoHtml": "status atualiza; <strong>sem polling automático</strong>.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 672,
                  "ordem": 4
                },
                {
                  "key": "ROTEIRO-04/J-073.M/P5",
                  "id": "P5",
                  "hash": "380e02c2",
                  "textoHtml": "Baixar o contrato assinado.",
                  "comoHtml": "Acionar o download da CCB. No PWA (navegador), o arquivo cai na pasta de downloads como qualquer download — é o PDF de mentira do provider Fake.",
                  "textoBusca": "baixar o contrato assinado. acionar o download da ccb. no pwa (navegador), o arquivo cai na pasta de downloads como qualquer download — é o pdf de mentira do provider fake.",
                  "esperadoHtml": "download conclui no PWA.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 680,
                  "ordem": 5
                },
                {
                  "key": "ROTEIRO-04/J-073.M/P6",
                  "id": "P6",
                  "hash": "1a8b2f5f",
                  "textoHtml": "Conferir o download em WebView no APK Android",
                  "comoHtml": null,
                  "textoBusca": "conferir o download em webview no apk android",
                  "esperadoHtml": null,
                  "blocos": [],
                  "na": true,
                  "naMotivo": "fora deste ciclo (sem aparelho físico). Reativa quando houver device ou emulador Android.",
                  "marcadoNaFonte": true,
                  "linha": 684,
                  "ordem": 6
                },
                {
                  "key": "ROTEIRO-04/J-073.M/P7",
                  "id": "P7",
                  "hash": "1f7f2082",
                  "textoHtml": "Conferir a consistência entre superfícies.",
                  "comoHtml": "Abrir o <strong>mesmo</strong> contrato no web (<code>localhost:4200</code>) e no mobile (<code>localhost:8100</code>), lado a lado. O status tem de ser idêntico nos dois. Divergência indica cache desatualizado numa das telas — ocorrência, porque as duas leem o mesmo backend e deveriam concordar.",
                  "textoBusca": "conferir a consistência entre superfícies. abrir o mesmo contrato no web (localhost:4200) e no mobile (localhost:8100), lado a lado. o status tem de ser idêntico nos dois. divergência indica cache desatualizado numa das telas — ocorrência, porque as duas leem o mesmo backend e deveriam concordar.",
                  "esperadoHtml": "o mesmo contrato mostra o mesmo status no web e no mobile.",
                  "blocos": [],
                  "na": false,
                  "naMotivo": null,
                  "marcadoNaFonte": false,
                  "linha": 686,
                  "ordem": 7
                }
              ]
            }
          ],
          "assercoes": [],
          "linha": 635,
          "stats": {
            "passos": 7,
            "na": 1,
            "assercoes": 0
          }
        }
      ],
      "ocorrenciasColunas": [
        "#",
        "Jornada",
        "Passo",
        "O que aconteceu",
        "Esperado",
        "Issue"
      ],
      "registroCampos": [
        {
          "chave": "executado_por",
          "rotulo": "Executado por",
          "tipo": "texto"
        },
        {
          "chave": "data_hora",
          "rotulo": "Data / hora",
          "tipo": "texto"
        },
        {
          "chave": "commit_sep_api",
          "rotulo": "Commit sep-api",
          "tipo": "texto"
        },
        {
          "chave": "commit_sep_app",
          "rotulo": "Commit sep-app",
          "tipo": "texto"
        },
        {
          "chave": "commit_sep_mobile",
          "rotulo": "Commit sep-mobile",
          "tipo": "texto"
        },
        {
          "chave": "propostaid_usado",
          "rotulo": "propostaId usado",
          "tipo": "texto"
        },
        {
          "chave": "contratoid_usado",
          "rotulo": "contratoId usado",
          "tipo": "texto"
        },
        {
          "chave": "jornadas_ok",
          "rotulo": "Jornadas OK",
          "tipo": "texto"
        },
        {
          "chave": "jornadas_nok",
          "rotulo": "Jornadas NOK",
          "tipo": "texto"
        },
        {
          "chave": "jornadas_bloqueado",
          "rotulo": "Jornadas BLOQUEADO",
          "tipo": "texto"
        },
        {
          "chave": "observacoes",
          "rotulo": "Observações",
          "tipo": "textarea"
        }
      ]
    }
  ]
};
