# Roteiro 03 - Onboarding KYC PF, KYB PJ e PLD

> Família `J-050` a `J-059`: solicitação de onboarding, documentos cadastrais, verificação nos
> providers, webhooks e PLD. Requer [`ROTEIRO-00`](./ROTEIRO-00-AMBIENTE-E-MASSA.md) concluído.
> Hub: [`CENARIOS-TESTE-JORNADAS-USUARIO.md`](./CENARIOS-TESTE-JORNADAS-USUARIO.md).
>
> **Execute pelo [app](./app/index.html)**, não editando este arquivo — as caixas aqui ficam
> sempre vazias. Desvio não vira caixa marcada: vira **ocorrência** registrada no passo.

_Atualizado em: 2026-08-20._

## Por que este roteiro vem antes dos outros

Ele **produz pré-condição de outro roteiro**, e é o único que faz isso antes do crédito:

- `PRE-11` — `cliente-a` com onboarding `APROVADO_FINAL`, exigido pela
  [`J-060.W`](./ROTEIRO-04-CREDITO-FORMALIZACAO.md) e por toda a família `J-06x`.
- Base do `PRE-13` — a persona `credora` só vira credora depois do **KYB aprovado**; o cadastro
  de credora em si é jornada do roteiro de credora, não daqui.

Sem este roteiro executado, a família de crédito inteira responde `422` e o `ROTEIRO-04` só
consegue rodar a negativa [`J-061.W-N1`](./ROTEIRO-04-CREDITO-FORMALIZACAO.md#j-061w-n1---proposta-sem-onboarding-aprovado).

> **`PRE-11` diz "KYC aprovado" e isso é impreciso.** O gate real do crédito é
> `APROVADO_FINAL`, que só existe **depois do PLD**. `APROVADO` puro é KYC aprovado e PLD ainda
> não consolidado — e a criação de proposta recusa com `422` nesse estado
> (`RegraOnboardingAprovado`). Se você parar em `APROVADO` achando que terminou, o `ROTEIRO-04`
> falha e parece defeito de crédito.

## O que trava a primeira execução: o KYC PF não termina sozinho

Com `app.kyc.provider=fake` (o default), o provider fake **responde `PROCESSING` e nunca mais
volta**. Nada no `sep-api` consulta o resultado depois: não há scheduler, não há polling, e o
método `consultarResultado()` do provider **não tem nenhum chamador em produção**. O único
caminho que tira a solicitação de `EM_VERIFICACAO` é o **webhook** `POST
/api/v1/webhooks/celcoin/kyc`, que em ambiente local **você** precisa disparar.

Consequência prática: a tela do web fica em `EM_VERIFICACAO` e o botão **Atualizar** repete o
mesmo status para sempre. **Isso não é bug** — é a jornada [`J-051.A`](#j-051a---webhook-kyc-fecha-a-verificação-pf) faltando.

## Assimetria PF x PJ — a mais fácil de confundir

| | PF (KYC) | PJ (KYB) |
|---|---|---|
| Chamada ao provider | assíncrona: `POST /verificar` devolve `202` e para | **síncrona**: `POST /verificar` já finaliza |
| Como sai de `EM_VERIFICACAO` | **só por webhook** | sozinho, na mesma request |
| Webhook do provider | **obrigatório** no fluxo local | existe, mas só para callback tardio |
| PLD depois de `APROVADO` | automático (`AFTER_COMMIT`) | automático (`AFTER_COMMIT`) |
| Alvos do PLD | 1 (`PESSOA`) | `EMPRESA` + cada representante legal |

Ou seja: no PJ, um `POST /verificar` leva de `DOCUMENTOS_RECEBIDOS` a `APROVADO_FINAL` numa
tacada. No PF, o mesmo `POST` para no meio do caminho de propósito.

## Máquina de estados

```
INICIADO             -> DOCUMENTOS_RECEBIDOS          (primeiro upload)
DOCUMENTOS_RECEBIDOS -> EM_VERIFICACAO                (POST /verificar)
EM_VERIFICACAO       -> APROVADO | REPROVADO | PENDENCIA
APROVADO             -> APROVADO_FINAL | REPROVADO_PLD   (PLD automatico apos commit)

Finais: REPROVADO, PENDENCIA, APROVADO_FINAL, REPROVADO_PLD
```

Dois detalhes que mudam o roteiro:

1. **`REPROVADO` e `REPROVADO_PLD` liberam o documento**; `APROVADO`, `PENDENCIA` e
   `APROVADO_FINAL` continuam prendendo o CPF/CNPJ. Por isso a negativa de `409` só funciona
   enquanto a solicitação estiver num status ativo, e por isso dá para refazer o onboarding de
   um CPF reprovado sem limpar banco.
2. **`PLD_INICIADO`, `PLD_HIT_DETECTADO` e `PLD_LIMPO` são gravados no audit com
   `usuario_id = NULL`.** Consulta de auditoria filtrada por usuário não enxerga esses três.

## Massa deste roteiro

CPF e CNPJ passam por validação de dígito verificador no backend — número inventado é recusado
antes de qualquer provider. Use estes:

| Uso | Documento | Observação |
|---|---|---|
| `cliente-a` (PF principal) | `52998224725` | produz o `PRE-11` |
| `cliente-b` (PF reprovada) | `39053344705` | usado na `J-054.W-N1` |
| Conta criada na `J-003.M` (PF mobile) | `11144477735` | usado na `J-055.M` |
| `credora` (PJ) | `11222333000181` | produz a base do `PRE-13` |
| CPF inválido (DV errado) | `52998224726` | negativa |
| CPF inválido (sequência repetida) | `11111111111` | negativa |
| Conta da `J-003.M` (PF, webhook) | `12345678909` | usado na `J-051.M` |
| **CPF descartável** (pendência) | `98765432100` | **queimado** pela `J-051.M-N1`; reservas `24681357928` e `13579246828` |
| Conta da `J-003.M` (PJ mobile) | `33344455000183` | usado na `J-059.M` |
| CNPJ inválido (DV errado) | `11222333000180` | negativa, na `J-056.W` |
| CNPJ inválido (DV errado) | `33344455000180` | negativa, na `J-059.M` |

Arquivos: qualquer JPEG, PNG ou PDF de até 10MB serve — o conteúdo não é analisado por nada no
fluxo fake, só o metadado (tipo, tamanho, MIME, SHA-256) é enviado ao provider. Tenha três
arquivos à mão: um "RG", uma "selfie" e um PDF para os documentos de empresa.

## Índice

| ID | Jornada | Superfície |
|---|---|---|
| [`J-050.W`](#j-050w---tomador-conclui-o-onboarding-kyc-pf) | Tomador conclui o onboarding PF | Web |
| [`J-050.W-N1`](#j-050w-n1---cpf-inválido-e-cpf-já-em-uso) | CPF inválido e CPF já em uso | Web + API |
| [`J-051.A`](#j-051a---webhook-kyc-fecha-a-verificação-pf) | Webhook KYC fecha a verificação | API |
| [`J-051.A-N1`](#j-051a-n1---webhook-com-assinatura-inválida) | Webhook com assinatura inválida | API |
| [`J-051.M`](#j-051m---resultado-do-webhook-observado-pelo-mobile) | Resultado do webhook visto no mobile | Mobile |
| [`J-051.M-N1`](#j-051m-n1---pendência-de-kyc-é-terminal-e-prende-o-cpf) | Pendência de KYC é terminal | Mobile + API |
| [`J-052.W-N1`](#j-052w-n1---verificação-sem-os-documentos-mínimos) | Verificação sem documentos mínimos | Web + API |
| [`J-052.W-N2`](#j-052w-n2---arquivo-fora-da-política-de-upload) | Arquivo fora da política de upload | Web + API |
| [`J-053.A-N1`](#j-053a-n1---leitura-de-onboarding-alheio) | Leitura de onboarding alheio | API |
| [`J-054.W-N1`](#j-054w-n1---kyc-reprovado-e-liberação-do-cpf) | KYC reprovado e liberação do CPF | Web + API |
| [`J-055.M`](#j-055m---onboarding-pf-no-mobile) | Onboarding PF no mobile | Mobile |
| [`J-056.W`](#j-056w---credora-conclui-o-onboarding-kyb-pj) | Credora conclui o onboarding PJ | Web |
| [`J-057.A`](#j-057a---representantes-legais-com-cpf-mascarado) | Representantes com CPF mascarado | API |
| [`J-058.A`](#j-058a---pld-consolidado-e-trilha-de-auditoria) | PLD consolidado e trilha | API |
| [`J-059.M`](#j-059m---onboarding-pj-no-mobile) | Onboarding PJ no mobile | Mobile |

---

### J-050.W - Tomador conclui o onboarding KYC PF

| Campo | Valor |
|---|---|
| ID | `J-050.W` |
| Tipo | Positiva |
| Persona | `cliente-a` — CLIENTE sem onboarding ativo |
| Superfície | Web |
| Pré-condições | `PRE-01` `PRE-02` `PRE-04` `PRE-05` |
| Endpoints tocados | `POST /onboarding/pessoa`, `POST /{id}/documentos`, `POST /{id}/verificar`, `GET /{id}` |
| Step-up | não |
| Duração | 12 min (mais a `J-051.A`) |
| Automação equivalente | `onboarding.spec.ts` (Playwright, contra MSW) |
| Só o manual cobre | Provider real do backend, transição por webhook, PLD automático, trilha de auditoria |

**Passos**

#### Tela `/app/onboarding`

- [ ] **P1** — Abrir **Onboarding** no menu e escolher pessoa física.
      _Como:_ Logado como `cliente-a@sep.test`, menu lateral, grupo **Jornadas**, item
      **Onboarding**. A tela oferece dois cartões de escolha; abrir o de pessoa física.
      _Esperado:_ vai para `/app/onboarding/pessoa` com o formulário de início.

#### Tela `/app/onboarding/pessoa`

- [ ] **P2** — Preencher CPF, nome completo e data de nascimento e iniciar.
      _Como:_ CPF `52998224725`, nome completo qualquer, data de nascimento qualquer.
      **Anotar o id** que aparece no endereço depois do redirecionamento
      (`/app/onboarding/pessoa/<id>`) — o resto deste roteiro depende dele, e a
      [`J-051.A`](#j-051a---webhook-kyc-fecha-a-verificação-pf) não roda sem ele.
      _Esperado:_ `201`; redireciona para o detalhe da solicitação.

#### Tela `/app/onboarding/pessoa/:id`

- [ ] **P3** — Conferir o status inicial.
      _Como:_ Ler o badge de status no painel **Status**. Ele mostra o valor **cru** do
      backend, sem tradução — é assim de propósito, para o teste manual ver exatamente o que a
      API devolveu.
      _Esperado:_ `INICIADO`, e a lista de documentos diz que não há nenhum enviado.
- [ ] **P4** — Enviar um documento de identidade.
      _Como:_ No bloco **Enviar documento**, escolher tipo `RG` (ou `CNH`, ou `PASSAPORTE`) e
      anexar o arquivo. O rótulo do campo já declara a política: PDF, JPEG ou PNG, até 10MB.
      _Esperado:_ `204`; o documento aparece na lista e o status **vira**
      `DOCUMENTOS_RECEBIDOS` — a transição acontece no primeiro upload, não no último.
- [ ] **P5** — Enviar a selfie.
      _Como:_ Mesmo bloco, tipo `SELFIE`. **Os dois são obrigatórios**: 1 identidade + 1
      selfie. Enviar só um deixa a verificação bloqueada — é o que a
      [`J-052.W-N1`](#j-052w-n1---verificação-sem-os-documentos-mínimos) prova.
      _Esperado:_ `204`; dois documentos na lista.
- [ ] **P6** — Enviar para verificação.
      _Como:_ Bloco **Verificação**, botão **Enviar para verificação**.
      _Esperado:_ `202`; status vai para `EM_VERIFICACAO`.
- [ ] **P7** — Clicar **Atualizar** duas ou três vezes e confirmar que **nada muda**.
      _Como:_ Este passo parece perda de tempo e é o oposto disso: ele fixa a expectativa
      correta. O provider fake não devolve resultado sozinho, então `EM_VERIFICACAO` é estado
      **estável**, não "carregando". Confirmar na aba **Network** que cada clique dispara **um**
      `GET` e que a tela não faz chamadas repetidas em intervalo fixo por conta própria.
      _Esperado:_ status permanece `EM_VERIFICACAO`; sem polling automático.
- [ ] **P8** — Executar a [`J-051.A`](#j-051a---webhook-kyc-fecha-a-verificação-pf) com **este**
      id e voltar para esta tela.
      _Como:_ A jornada do webhook é o que fecha a verificação. Volte aqui e clique
      **Atualizar** uma vez.
      _Esperado:_ status **`APROVADO_FINAL`**, não `APROVADO`. O PLD roda automaticamente logo
      depois do KYC e, com o provider fake, sai limpo — os dois saltos acontecem antes de o
      webhook responder `202`.
- [ ] **P9** — Conferir a trilha de auditoria.
      _Como:_ Terminal do banco. Onboarding é ato sob a CMN 4.656/2018: cada etapa precisa de
      registro próprio.
      ```bash
      docker exec sep-postgres psql -U sep -d sep_dev \
        -c "SELECT tipo, data_evento FROM audit_log_seguranca
            WHERE tipo LIKE 'KYC%' OR tipo LIKE 'PLD%'
            ORDER BY data_evento DESC LIMIT 12;"
      ```
      _Esperado:_ na ordem inversa da lista, `KYC_INICIADO`, `KYC_DOCUMENTO_ENVIADO` (duas
      vezes), `KYC_VERIFICACAO_DISPARADA`, `KYC_FINALIZADO_APROVADO`, `PLD_INICIADO`,
      `PLD_LIMPO` e `PLD_FINALIZADO`.
- [ ] **P10** — Conferir o estado persistido.
      _Como:_ Terminal do banco. A tela pode estar mostrando cache; esta consulta é a verdade.
      ```bash
      docker exec sep-postgres psql -U sep -d sep_dev \
        -c "SELECT s.status, s.id_verificacao_externa, count(d.id) AS docs
            FROM solicitacao_onboarding s
            LEFT JOIN documento_cadastral d ON d.solicitacao_id = s.id
            JOIN usuario u ON u.id = s.usuario_id
            WHERE u.username = 'cliente-a@sep.test'
            GROUP BY s.id, s.status, s.id_verificacao_externa;"
      ```
      _Esperado:_ uma linha, `APROVADO_FINAL`, `id_verificacao_externa` começando com `fake-`,
      e `docs = 2`.

**Resultado final esperado**

- [ ] `cliente-a` em `APROVADO_FINAL`: **`PRE-11` satisfeito**; anotar o id da solicitação

---

### J-050.W-N1 - CPF inválido e CPF já em uso

| Campo | Valor |
|---|---|
| ID | `J-050.W-N1` |
| Tipo | Negativa — validação e conflito |
| Persona | `cliente-a` |
| Superfície | Web + API |
| Vetor | Documento malformado e segunda solicitação para o mesmo CPF |
| Comportamento seguro esperado | Recusa no backend, com código de erro próprio |
| Pré-condições | `PRE-01` `PRE-02` `PRE-04` + `J-050.W` concluída |

**Passos**

- [ ] **P1** — Tentar iniciar um onboarding com CPF de dígito verificador errado.
      _Como:_ Abrir `/app/onboarding/pessoa` de novo e enviar o formulário com CPF
      `52998224726` — é o CPF do `cliente-a` com o último dígito trocado. O backend calcula o
      DV; um CPF que "parece certo" tem de ser recusado igual.
      _Esperado:_ recusado, código `ONB-400-002`. Nenhuma solicitação criada.
- [ ] **P2** — Repetir com `11111111111`.
      _Como:_ Sequência repetida tem DV matematicamente válido e é recusada por uma regra
      **separada**. Vale testar os dois porque são dois caminhos diferentes no código, e um
      pode quebrar sem o outro.
      _Esperado:_ recusado, mesmo código `ONB-400-002`, mensagem falando de sequência repetida.
- [ ] **P3** — Tentar iniciar de novo com o CPF **válido** que já foi usado na `J-050.W`.
      _Como:_ Enviar o formulário com `52998224725`. Como a solicitação anterior está em
      `APROVADO_FINAL` — status que continua prendendo o documento — o backend precisa recusar.
      A tela tem mensagem própria para este caso, com link para voltar e consultar a
      solicitação existente.
      _Esperado:_ `409`, código `ONB-409-001`; a UI oferece voltar e consultar a existente.
- [ ] **P4** — Repetir o P3 direto na API.
      _Como:_ **Este é o passo que importa.** No Insomnia, login como `cliente-a`, e
      `POST /api/v1/onboarding/pessoa` com o mesmo payload que a tela enviou. Se a tela recusa
      e a API aceita, existe caminho para duas solicitações ativas no mesmo CPF.
      _Esperado:_ `409` vindo do backend, não da tela.
- [ ] **P5** — Conferir que continua havendo **uma** solicitação para o CPF.
      _Como:_ Terminal do banco.
      ```bash
      docker exec sep-postgres psql -U sep -d sep_dev \
        -c "SELECT count(*) FROM solicitacao_onboarding WHERE documento = '52998224725';"
      ```
      _Esperado:_ `1`.

---

### J-051.A - Webhook KYC fecha a verificação PF

| Campo | Valor |
|---|---|
| ID | `J-051.A` |
| Tipo | Positiva |
| Persona | Provider externo (simulado) |
| Superfície | API |
| Pré-condições | `PRE-01` + solicitação PF em `EM_VERIFICACAO` (`J-050.W` até o P6) |
| Endpoints tocados | `POST /api/v1/webhooks/celcoin/kyc` |
| Step-up | não — endpoint público autenticado por HMAC |
| Duração | 8 min |
| Automação equivalente | ITs do backend; **nenhuma spec de front** chega aqui |
| Só o manual cobre | HMAC real, idempotência do outbox, encadeamento KYC → PLD ponta a ponta |

> **Esta jornada é o elo que falta na execução local.** Sem ela, todo onboarding PF fica preso
> em `EM_VERIFICACAO` e parece defeito de UI. O provider fake nunca chama de volta.

**Passos**

- [ ] **P1** — Disparar o webhook com status aprovado.
      _Como:_ No terminal, com o id da solicitação da `J-050.W`. O `verification_id` **tem** de
      ser `fake-<id>`: é esse o identificador externo que o provider fake gerou, e a busca no
      backend é por ele. A assinatura é HMAC-SHA256 **hex puro** do corpo cru, sem prefixo
      `sha256=`. Trocar um espaço no corpo invalida a assinatura.
      ```bash
      SOLICITACAO_ID=<id-da-J-050.W>
      SECRET=dev-kyc-webhook-secret-change-me
      BODY="{\"verification_id\":\"fake-$SOLICITACAO_ID\",\"status\":\"APPROVED\",\"reason\":null}"
      SIG=$(printf '%s' "$BODY" | openssl dgst -sha256 -hmac "$SECRET" -r | cut -d' ' -f1)

      curl -i -X POST http://localhost:8080/api/v1/webhooks/celcoin/kyc \
        -H 'Content-Type: application/json' \
        -H "Idempotency-Key: kyc-$SOLICITACAO_ID" \
        -H "X-Webhook-Signature: $SIG" \
        --data-binary "$BODY"
      ```
      _Esperado:_ `202`, corpo vazio.
      > Se o ambiente sobrescreveu o secret, ele está em `APP_WEBHOOK_SECRET_CELCOIN_KYC`; o
      > default do `application.yml` é o usado acima. O mesmo request existe no Insomnia
      > (`POST /webhooks/celcoin/kyc — APPROVED (202)`), faltando só preencher a variável de
      > assinatura.
- [ ] **P2** — Conferir que o status pulou **dois** degraus.
      _Como:_ Consultar a solicitação como `cliente-a`, ou clicar **Atualizar** na tela. O
      esperado não é `APROVADO`: o `PldOrchestrationListener` roda depois do commit do KYC e,
      no fake, o PLD volta limpo na mesma sequência.
      _Esperado:_ `APROVADO_FINAL`. Parar em `APROVADO` é ocorrência — significa que o PLD não
      disparou.
- [ ] **P3** — Reenviar o **mesmo** request, sem mudar nada.
      _Como:_ Seta para cima e enter. Mesma `Idempotency-Key`, mesmo corpo, mesma assinatura.
      Webhook de provider é reenviado na vida real; a segunda entrega não pode reprocessar nem
      quebrar.
      _Esperado:_ `202` de novo; status continua `APROVADO_FINAL`. A chave repetida **não gera
      linha nova** no outbox — o registro é a própria trava de idempotência, e o P5 confere isso.
- [ ] **P4** — Reenviar com `Idempotency-Key` **diferente** e status **conflitante**.
      _Como:_ Trocar a chave para `kyc-$SOLICITACAO_ID-b` e o `status` para `"REJECTED"`,
      recalculando a assinatura (o corpo mudou). Este é o callback tardio contraditório: o
      provider mandando resultado diferente depois de o caso já ter fechado. O backend aceita a
      entrega mas **não pode reescrever** o resultado.
      _Esperado:_ `202`; status permanece `APROVADO_FINAL`; o evento fica marcado como
      `FALHOU` no outbox.
- [ ] **P5** — Conferir o outbox de webhooks.
      _Como:_ Terminal do banco. **São três entregas e duas linhas** — e essa diferença é o
      passo. A entrega do P3 reusou a chave do P1, então ela não foi gravada nem reprocessada;
      a do P4 trouxe chave nova, foi gravada e recusada no conteúdo.
      ```bash
      docker exec sep-postgres psql -U sep -d sep_dev \
        -c "SELECT idempotency_key, status, erro FROM webhook_event_log
            WHERE provider = 'celcoin-kyc'
            ORDER BY data_recebimento DESC LIMIT 5;"
      ```
      _Esperado:_ duas linhas — a chave do P1 em `PROCESSADO` e a do P4 em `FALHOU`, com o
      motivo do conflito preenchido em `erro`. Três linhas significaria que a chave repetida
      passou, ou seja, idempotência quebrada.

**Resultado final esperado**

- [ ] Solicitação PF em `APROVADO_FINAL` e webhook idempotente comprovado

---

### J-051.A-N1 - Webhook com assinatura inválida

| Campo | Valor |
|---|---|
| ID | `J-051.A-N1` |
| Tipo | Negativa — segurança |
| Persona | Atacante sem o secret |
| Superfície | API |
| Vetor | Forjar resultado de KYC sem conhecer o HMAC |
| Comportamento seguro esperado | `401` antes de qualquer efeito, e nada persistido |
| Pré-condições | `PRE-01` + solicitação PF em `EM_VERIFICACAO` |

> Se esta jornada passar quando deveria negar, qualquer um na rede aprova o próprio KYC. É
> bloqueio de go-live, não achado menor.

**Passos**

- [ ] **P1** — Enviar um payload perfeitamente válido com assinatura falsa.
      _Como:_ Precisa ser uma solicitação **ainda em `EM_VERIFICACAO`** — use a de outra
      persona, ou repita a `J-050.W` até o P6 com outro CPF. O corpo é o mesmo que funcionaria.
      ```bash
      curl -i -X POST http://localhost:8080/api/v1/webhooks/celcoin/kyc \
        -H 'Content-Type: application/json' \
        -H 'Idempotency-Key: forjado-001' \
        -H 'X-Webhook-Signature: sha256=INVALIDA' \
        --data-binary '{"verification_id":"fake-<id>","status":"APPROVED"}'
      ```
      _Esperado:_ `401`. Não `403`, não `202`, não `500`.
- [ ] **P2** — Enviar **sem** o header de assinatura.
      _Como:_ Repetir o P1 removendo o `X-Webhook-Signature`. Ausência de header e header
      errado são caminhos distintos no código.
      _Esperado:_ recusado; nenhuma transição de status.
- [ ] **P3** — Conferir que o status não mudou.
      _Como:_ Consultar a solicitação. Um `401` na resposta não prova que nada aconteceu antes
      da validação — esta consulta prova.
      _Esperado:_ continua `EM_VERIFICACAO`.
- [ ] **P4** — Conferir que a tentativa não virou aprovação silenciosa no audit.
      _Como:_ Terminal do banco.
      ```bash
      docker exec sep-postgres psql -U sep -d sep_dev \
        -c "SELECT tipo, data_evento FROM audit_log_seguranca
            WHERE tipo LIKE 'KYC_FINALIZADO%' ORDER BY data_evento DESC LIMIT 3;"
      ```
      _Esperado:_ nenhum evento novo de finalização depois da hora do P1.

---

### J-051.M - Resultado do webhook observado pelo mobile

| Campo | Valor |
|---|---|
| ID | `J-051.M` |
| Tipo | Positiva |
| Persona | Conta criada na [`J-003.M`](./ROTEIRO-01-ACESSO-E-SESSAO.md#j-003m---visitante-cria-conta-de-cliente) |
| Superfície | Mobile (PWA) + API para o disparo do webhook |
| Pré-condições | `PRE-01` `PRE-02` `PRE-03` `PRE-04` + `J-003.M` concluída |
| Endpoints tocados | `POST /onboarding/pessoa`, `POST /{id}/documentos`, `POST /{id}/verificar`, `GET /{id}`, `POST /webhooks/celcoin/kyc` |
| Step-up | não |
| Duração | 12 min |
| Automação equivalente | nenhuma — o MSW resolve o KYC sozinho, então nenhuma spec exercita a espera |
| Só o manual cobre | Ausência de polling, atualização por gesto e a rotulagem dos dois "aprovado" |

> **O mobile não dispara nem recebe o webhook.** Ele é a superfície que **observa o efeito**: o
> provider resolve por fora e o app só descobre quando o usuário pede. Esta jornada mede
> exatamente esse intervalo — o que a tela faz enquanto o resultado não chegou, e o que ela
> mostra quando chega.

**Passos**

- [ ] **P1** — Abrir uma solicitação PF nova no mobile e levá-la até `EM_VERIFICACAO`.
      _Como:_ Em `http://localhost:8100`, emulação ligada, logado com a conta da `J-003.M`. Se o
      app retomar a jornada anterior, usar **Ver status do cadastro** > **Recomecar cadastro**
      para voltar à escolha (isso só esquece a jornada local; ver
      [`J-059.M`](#j-059m---onboarding-pj-no-mobile) P3). Escolher pessoa física, CPF
      `12345678909`, enviar identidade e selfie e, na etapa **Status**, tocar **Iniciar
      verificacao**. **Anotar o id** da solicitação.
      _Esperado:_ badge **Em verificacao**.
      > O id não aparece na tela do mobile. Pegue-o na aba **Network**, na resposta do `POST` de
      > criação (campo `id`) ou na URL das chamadas seguintes — o P5 precisa dele.
- [ ] **P2** — Com o app **aberto e parado** na etapa Status, resolver o KYC por fora.
      _Como:_ Sem tocar no aparelho emulado, disparar o webhook aprovado no terminal, com o id
      deste onboarding — mesmo procedimento da
      [`J-051.A`](#j-051a---webhook-kyc-fecha-a-verificação-pf) P1. Depois **esperar uns 30
      segundos sem encostar na tela**, de olho na aba Network.
      _Esperado:_ o webhook responde `202` e **a tela do mobile não muda**. Nenhuma requisição
      nova aparece na Network nesses 30 segundos.
      > **Este é o passo que importa e ele passa não acontecendo nada.** A tela mudar sozinha
      > aqui significaria polling — carga desnecessária no backend e bateria no aparelho. A
      > ausência de atualização automática é a decisão de projeto, não uma falha.
- [ ] **P3** — Atualizar por gesto.
      _Como:_ Tocar **Atualizar**. "Por gesto" quer dizer que **você** pede; a tela não busca
      sozinha.
      _Esperado:_ uma única chamada `GET` na Network e o badge salta para **Aprovado**.
- [ ] **P4** — Ler o rótulo com atenção — são **dois** aprovados diferentes.
      _Como:_ O mobile traduz o status, e a tradução distingue os dois estados: `APROVADO` (KYC
      feito, PLD pendente) aparece como **"Aprovado (KYC/KYB)"**, e `APROVADO_FINAL` aparece
      como **"Aprovado"**, sem sufixo. **As duas usam a mesma cor**, então o sufixo é o único
      sinal visual — e só o segundo libera crédito.
      _Esperado:_ badge exatamente **"Aprovado"**. Se aparecer **"Aprovado (KYC/KYB)"**, o PLD
      não rodou: é `APROVADO` puro, e a proposta de crédito vai recusar com `422`.
- [ ] **P5** — Conferir a linha de resultado logo abaixo do badge.
      _Como:_ Ela mostra o `statusFinal` **cru**, vindo do resultado da verificação, que é
      **pré-PLD**. Então a combinação correta nesta tela é badge traduzido dizendo "Aprovado" e
      a linha de baixo dizendo `APROVADO`. Parece contradição e não é: são dois campos com
      significados diferentes.
      _Esperado:_ `Resultado: APROVADO` sob o badge **Aprovado**. Registrar como ocorrência de
      usabilidade se você — que conhece a máquina de estados — precisar parar para interpretar.
- [ ] **P6** — Comparar com o web, que **não** traduz.
      _Como:_ Em `http://localhost:4200`, com a **mesma conta**, abrir
      `/app/onboarding/pessoa/<id>` colando o id anotado no P1. O web renderiza o valor cru do
      backend.
      _Esperado:_ o web mostra `APROVADO_FINAL` e o mobile mostra `Aprovado`, **para o mesmo
      dado**. É divergência de apresentação deliberada, não defeito — mas quem lê relatório de
      teste precisa saber que o vocabulário muda com a superfície.
- [ ] **P7** — Repetir o webhook e confirmar que a tela continua estável.
      _Como:_ Disparar de novo o **mesmo** request do P2, sem mudar chave nem corpo, e tocar
      **Atualizar** no mobile.
      _Esperado:_ `202` no webhook, `APROVADO_FINAL` inalterado no app. Entrega repetida de
      provider não pode mexer no que o usuário vê.
- [ ] **P8** — Conferir a trilha do lado do servidor.
      _Como:_ Terminal do banco. O app é só a janela; a prova de que o encadeamento
      KYC → PLD aconteceu está no audit.
      ```bash
      docker exec sep-postgres psql -U sep -d sep_dev \
        -c "SELECT tipo, data_evento FROM audit_log_seguranca
            WHERE tipo IN ('KYC_FINALIZADO_APROVADO','PLD_LIMPO','PLD_FINALIZADO')
            ORDER BY data_evento DESC LIMIT 6;"
      ```
      _Esperado:_ os três eventos, com hora posterior ao disparo do P2.

**Resultado final esperado**

- [ ] Mobile refletiu `APROVADO_FINAL` **só depois do gesto**, e sem nenhuma atualização automática

---

### J-051.M-N1 - Pendência de KYC é terminal e prende o CPF

| Campo | Valor |
|---|---|
| ID | `J-051.M-N1` |
| Tipo | Negativa — desfecho sem saída |
| Persona | Conta criada na [`J-003.M`](./ROTEIRO-01-ACESSO-E-SESSAO.md#j-003m---visitante-cria-conta-de-cliente) |
| Superfície | Mobile (PWA) + API |
| Vetor | Provider devolve `PENDING` — nem aprovação, nem recusa |
| Comportamento seguro esperado | Estado final honesto na tela, sem caminho de correção improvisado no cliente |
| Pré-condições | `PRE-01` `PRE-03` `PRE-04` + `J-003.M` concluída |

> **Esta jornada consome um CPF em definitivo.** `PENDENCIA` é status **final** e ao mesmo tempo
> conta como **ativo**: não aceita documento novo, não aceita nova verificação e continua
> bloqueando o CPF, sem nenhum endpoint de reabertura. Use **`98765432100`**, que existe na massa
> só para isso. Se ele já tiver sido queimado numa execução anterior, use `24681357928` ou
> `13579246828` e anote qual foi no registro da execução. **Não use o CPF do `cliente-a`.**

**Passos**

- [ ] **P1** — Abrir uma solicitação PF nova no mobile e levá-la até `EM_VERIFICACAO`.
      _Como:_ Mesmo caminho da [`J-051.M`](#j-051m---resultado-do-webhook-observado-pelo-mobile)
      P1 — **Ver status do cadastro** > **Recomecar cadastro** se o app retomar a jornada
      anterior, pessoa física, identidade e selfie, **Iniciar verificacao**. CPF
      **`98765432100`**. **Anotar o id** na aba Network.
      _Esperado:_ badge **Em verificacao**.
- [ ] **P2** — Resolver o KYC como pendência, com motivo.
      _Como:_ Disparar o webhook com `"status":"PENDING"` e um `reason` reconhecível — o texto
      abaixo serve. O `reason` do provider vira o `motivo` persistido e precisa chegar à tela
      sem edição.
      ```bash
      SOLICITACAO_ID=<id-do-P1>
      SECRET=dev-kyc-webhook-secret-change-me
      BODY="{\"verification_id\":\"fake-$SOLICITACAO_ID\",\"status\":\"PENDING\",\"reason\":\"selfie ilegivel\"}"
      SIG=$(printf '%s' "$BODY" | openssl dgst -sha256 -hmac "$SECRET" -r | cut -d' ' -f1)

      curl -i -X POST http://localhost:8080/api/v1/webhooks/celcoin/kyc \
        -H 'Content-Type: application/json' \
        -H "Idempotency-Key: kyc-pend-$SOLICITACAO_ID" \
        -H "X-Webhook-Signature: $SIG" \
        --data-binary "$BODY"
      ```
      _Esperado:_ `202`.
- [ ] **P3** — Atualizar por gesto e ler o desfecho.
      _Como:_ No mobile, tocar **Atualizar**.
      _Esperado:_ badge **Pendencia**, e a linha abaixo mostrando `Resultado: PENDENCIA - selfie
      ilegivel`. O motivo tem de aparecer **na íntegra**: pendência sem motivo visível deixa o
      usuário sem saber o que corrigir, e isso é ocorrência.
- [ ] **P4** — Confirmar que o PLD **não** rodou.
      _Como:_ Terminal do banco. O PLD só é disparado quando o KYC fecha em `APROVADO`;
      pendência não avança para triagem. Se houver evento de PLD posterior ao P2, a orquestração
      está avançando estado que não deveria.
      ```bash
      docker exec sep-postgres psql -U sep -d sep_dev \
        -c "SELECT tipo, data_evento FROM audit_log_seguranca
            WHERE tipo LIKE 'PLD%' ORDER BY data_evento DESC LIMIT 5;"
      ```
      _Esperado:_ nenhum evento de PLD com hora posterior ao disparo do P2.
- [ ] **P5** — Tentar corrigir enviando um documento novo.
      _Como:_ É o que qualquer usuário tentaria depois de ler "selfie ilegível". Na etapa
      **Status**, tocar **Voltar aos documentos** e enviar outra selfie.
      _Esperado:_ recusado com `ONB-400-001`, e a mensagem de erro aparece no bloco de upload.
      **Não existe correção de pendência**: o estado é final.
- [ ] **P6** — Tentar reenviar para verificação.
      _Como:_ Voltar à etapa **Status** e tocar **Iniciar verificacao** de novo.
      _Esperado:_ recusado com `ONB-400-001`. A tela **oferece** o botão mesmo num estado que
      não o aceita — registrar como ocorrência de usabilidade: ação impossível não deveria estar
      habilitada.
- [ ] **P7** — Tentar recomeçar pelo próprio app.
      _Como:_ **Recomecar cadastro** e iniciar um PF novo com o **mesmo** CPF `98765432100`. O
      botão limpa só a jornada local (ver
      [`J-059.M`](#j-059m---onboarding-pj-no-mobile) P3), então o bloqueio do servidor continua
      de pé.
      _Esperado:_ `409` com `ONB-409-001`. **O CPF está queimado**: o usuário não tem, por
      nenhum caminho de UI, como refazer o onboarding.
- [ ] **P8** — Tentar "consertar" por fora, com um webhook de aprovação.
      _Como:_ Repetir o disparo do P2 com `"status":"APPROVED"`, **chave de idempotência nova**
      (`kyc-resgate-$SOLICITACAO_ID`) e assinatura recalculada. É a tentativa óbvia de resgate, e
      ela **não pode** funcionar: resultado já finalizado não se reescreve por callback tardio.
      _Esperado:_ `202` na resposta — o webhook aceita a entrega — mas o status **continua
      `PENDENCIA`**. Se virar `APROVADO`, um callback tardio está reescrevendo decisão de KYC:
      ocorrência grave.
- [ ] **P9** — Conferir estado e outbox.
      _Como:_ Terminal do banco. A entrega do P8 tem de estar registrada como falha, com o
      motivo do conflito — aceitar a entrega e recusar o conteúdo são coisas diferentes.
      ```bash
      docker exec sep-postgres psql -U sep -d sep_dev \
        -c "SELECT status, id_verificacao_externa FROM solicitacao_onboarding
            WHERE documento = '98765432100';"
      docker exec sep-postgres psql -U sep -d sep_dev \
        -c "SELECT idempotency_key, status, erro FROM webhook_event_log
            WHERE provider = 'celcoin-kyc' ORDER BY data_recebimento DESC LIMIT 3;"
      ```
      _Esperado:_ uma solicitação em `PENDENCIA`; no outbox, a chave do P2 em `PROCESSADO` e a do
      P8 em `FALHOU`, com o conflito descrito em `erro`.

> **O que esta jornada prova, e o que ela expõe.** O backend se comporta como projetado: não
> reescreve decisão de KYC e não deixa o cliente contornar um estado final. O que falta é
> produto — **não existe jornada de correção de pendência**, nem no app nem no backoffice, e o
> CPF fica retido sem prazo. Registrar como ocorrência de produto, com esta jornada como
> evidência, e anotar no registro qual CPF foi consumido.

**Resultado final esperado**

- [ ] `PENDENCIA` confirmada como terminal, sem correção por UI e sem resgate por webhook

---

### J-052.W-N1 - Verificação sem os documentos mínimos

| Campo | Valor |
|---|---|
| ID | `J-052.W-N1` |
| Tipo | Negativa — regra de negócio |
| Persona | `cliente-b` |
| Superfície | Web + API |
| Vetor | Disparar KYC sem identidade ou sem selfie |
| Comportamento seguro esperado | `400` do backend, sem chamar o provider |
| Pré-condições | `PRE-01` `PRE-02` `PRE-04` `PRE-09` |

**Passos**

- [ ] **P1** — Iniciar um onboarding para `cliente-b` e **não** enviar documento nenhum.
      _Como:_ Entrar como `cliente-b@sep.test` — atenção: se você executou a `J-022.W-N1` no
      `ROTEIRO-01`, a senha dele mudou. CPF `39053344705`. Parar logo depois do `201`.
      _Esperado:_ solicitação em `INICIADO`.
- [ ] **P2** — Clicar **Enviar para verificação** sem documentos.
      _Como:_ Ir direto ao bloco **Verificação**. O status ainda é `INICIADO`, e a verificação
      só pode sair de `DOCUMENTOS_RECEBIDOS`.
      _Esperado:_ recusado, código `ONB-400-001` (operação inválida no status atual).
- [ ] **P3** — Enviar **só** a selfie e tentar de novo.
      _Como:_ Tipo `SELFIE`, um arquivo. Agora o status é `DOCUMENTOS_RECEBIDOS`, então a regra
      que barra é outra: falta o documento de identidade. **São dois erros diferentes** e é
      isso que o passo separa.
      _Esperado:_ recusado por documentos mínimos ausentes, com mensagem citando
      RG/CNH/PASSAPORTE + SELFIE.
- [ ] **P4** — Repetir o P3 direto na API.
      _Como:_ No Insomnia, `POST /api/v1/onboarding/pessoa/{id}/verificar` com o token do
      `cliente-b`. A tela pode estar apenas escondendo o botão; a recusa tem de vir do backend.
      _Esperado:_ `400`, não `202`.
- [ ] **P5** — Conferir que nenhuma verificação externa foi disparada.
      _Como:_ Terminal do banco. Se o provider tivesse sido chamado, haveria
      `id_verificacao_externa` preenchido e evento de disparo no audit.
      ```bash
      docker exec sep-postgres psql -U sep -d sep_dev \
        -c "SELECT status, id_verificacao_externa FROM solicitacao_onboarding
            WHERE documento = '39053344705';"
      ```
      _Esperado:_ `DOCUMENTOS_RECEBIDOS` e `id_verificacao_externa` nulo.

---

### J-052.W-N2 - Arquivo fora da política de upload

| Campo | Valor |
|---|---|
| ID | `J-052.W-N2` |
| Tipo | Negativa — validação |
| Persona | `cliente-b` |
| Superfície | Web + API |
| Vetor | Subir arquivo de tipo ou tamanho não permitido |
| Comportamento seguro esperado | `400` do backend, nada gravado |
| Pré-condições | `PRE-01` `PRE-02` `PRE-04` + solicitação da `J-052.W-N1` |

**Passos**

- [ ] **P1** — Tentar anexar um arquivo de tipo não aceito.
      _Como:_ O campo de arquivo da tela filtra por PDF, JPEG e PNG, então **o teste real é
      pela API**: no Insomnia, `POST /{id}/documentos` em multipart com um `.txt` ou `.zip`.
      Filtro de `accept` no HTML é conveniência, não controle.
      _Esperado:_ `400`, código `ONB-400-003`, mensagem listando os MIMEs aceitos.
- [ ] **P2** — Tentar anexar arquivo acima de 10MB.
      _Como:_ Gerar um PDF/JPEG grande (`head -c 11000000 /dev/urandom > grande.jpg` serve para
      testar o limite; o conteúdo não é analisado). Enviar pela tela ou pela API.
      _Esperado:_ `400`, código `ONB-400-004`.
- [ ] **P3** — Tentar enviar o campo de arquivo vazio.
      _Como:_ Pela API, multipart com `tipo=RG` e sem parte de arquivo, ou com arquivo de zero
      byte.
      _Esperado:_ `400`, código `ONB-400-007`.
- [ ] **P4** — Conferir que nada foi persistido.
      _Como:_ Terminal do banco. O documento tem `conteudo` gravado como binário na tabela; um
      upload recusado não pode deixar linha.
      ```bash
      docker exec sep-postgres psql -U sep -d sep_dev \
        -c "SELECT tipo, mime_type, tamanho_bytes FROM documento_cadastral d
            JOIN solicitacao_onboarding s ON s.id = d.solicitacao_id
            WHERE s.documento = '39053344705';"
      ```
      _Esperado:_ só a selfie da `J-052.W-N1`; nenhuma linha das tentativas acima.

---

### J-053.A-N1 - Leitura de onboarding alheio

| Campo | Valor |
|---|---|
| ID | `J-053.A-N1` |
| Tipo | Negativa — ownership |
| Persona | `cliente-b` tentando ler dados do `cliente-a` |
| Superfície | API |
| Vetor | Trocar o id na URL para ver KYC de outra pessoa |
| Comportamento seguro esperado | `403`, sem vazar nome, CPF ou status |
| Pré-condições | `PRE-01` `PRE-04` `PRE-09` + `J-050.W` concluída |

> Onboarding guarda nome completo, CPF, data de nascimento e imagens de documento. Vazamento
> aqui é incidente de LGPD, não bug de tela.

**Passos**

- [ ] **P1** — Como `cliente-b`, consultar a solicitação do `cliente-a`.
      _Como:_ No Insomnia, login como `cliente-b`, e `GET /api/v1/onboarding/pessoa/{id}` com o
      id anotado na `J-050.W`.
      _Esperado:_ `403`. Nada do corpo pode conter nome, CPF ou status da solicitação alheia.
- [ ] **P2** — Tentar anexar documento na solicitação alheia.
      _Como:_ `POST /{id}/documentos` com o token do `cliente-b`. Leitura negada e escrita
      permitida seria pior que o contrário.
      _Esperado:_ `403`; nenhum documento novo na solicitação do `cliente-a`.
- [ ] **P3** — Tentar disparar a verificação da solicitação alheia.
      _Como:_ `POST /{id}/verificar` com o token do `cliente-b`.
      _Esperado:_ `403`.
- [ ] **P4** — Conferir pelo web que o `cliente-a` não perdeu nada.
      _Como:_ Entrar como `cliente-a` e abrir a solicitação. Contar os documentos.
      _Esperado:_ `APROVADO_FINAL` e dois documentos, como no fim da `J-050.W`.
- [ ] **P5** — Confirmar que o `admin` **pode** ler.
      _Como:_ Repetir o P1 com o token do `admin`. O backend admite ADMIN como leitor
      legítimo — é o contraponto que prova que o `403` do P1 veio da regra de dono e não de
      erro genérico.
      _Esperado:_ `200` com o status da solicitação.

---

### J-054.W-N1 - KYC reprovado e liberação do CPF

| Campo | Valor |
|---|---|
| ID | `J-054.W-N1` |
| Tipo | Negativa — desfecho de negócio |
| Persona | `cliente-b` |
| Superfície | Web + API |
| Vetor | Resultado de KYC negativo do provider |
| Comportamento seguro esperado | `REPROVADO`, sem PLD, e o CPF volta a ficar disponível |
| Pré-condições | `PRE-01` `PRE-02` `PRE-04` `PRE-09` + solicitação da `J-052.W-N1` |

**Passos**

- [ ] **P1** — Completar os documentos do `cliente-b` e disparar a verificação.
      _Como:_ Na solicitação criada na `J-052.W-N1`, que já tem a selfie, anexar um `RG` e
      clicar **Enviar para verificação**.
      _Esperado:_ `202`; status `EM_VERIFICACAO`.
- [ ] **P2** — Disparar o webhook com resultado **reprovado**.
      _Como:_ Mesmo procedimento da [`J-051.A`](#j-051a---webhook-kyc-fecha-a-verificação-pf),
      trocando o status do corpo para `REJECTED` e recalculando a assinatura, com o id da
      solicitação do `cliente-b`.
      _Esperado:_ `202`.
- [ ] **P3** — Conferir o status e a **ausência** de PLD.
      _Como:_ Atualizar a tela. Aqui o ponto não é só o `REPROVADO`: PLD **não pode** ter
      rodado, porque reprovado no KYC não avança para triagem.
      _Esperado:_ `REPROVADO`, e a tela mostra o resultado com o motivo, quando houver.
      ```bash
      docker exec sep-postgres psql -U sep -d sep_dev \
        -c "SELECT tipo, data_evento FROM audit_log_seguranca
            WHERE tipo LIKE 'PLD%' ORDER BY data_evento DESC LIMIT 5;"
      ```
      _Esperado:_ nenhum evento de PLD com hora posterior ao P2.
- [ ] **P4** — Iniciar um **novo** onboarding com o mesmo CPF.
      _Como:_ Voltar a `/app/onboarding/pessoa` como `cliente-b` e enviar `39053344705` de
      novo. `REPROVADO` é status final mas **libera** o documento — é a regra que permite
      recomeçar depois de uma recusa, e ela é o oposto da do `409` na `J-050.W-N1`.
      _Esperado:_ `201`, nova solicitação em `INICIADO`. **Não** é `409`.
- [ ] **P5** — Conferir que agora existem duas solicitações para o CPF, uma só ativa.
      _Como:_ Terminal do banco.
      ```bash
      docker exec sep-postgres psql -U sep -d sep_dev \
        -c "SELECT status, data_criacao FROM solicitacao_onboarding
            WHERE documento = '39053344705' ORDER BY data_criacao;"
      ```
      _Esperado:_ duas linhas — `REPROVADO` e `INICIADO`.

> **Deixe o `cliente-b` assim.** O `ROTEIRO-04` usa essa persona exatamente por ela **não**
> estar em `APROVADO_FINAL` (`J-061.W-N1`). Não conclua o onboarding dele.

---

### J-055.M - Onboarding PF no mobile

| Campo | Valor |
|---|---|
| ID | `J-055.M` |
| Tipo | Positiva |
| Persona | Conta criada na [`J-003.M`](./ROTEIRO-01-ACESSO-E-SESSAO.md#j-003m---visitante-cria-conta-de-cliente) |
| Superfície | Mobile (PWA) |
| Pré-condições | `PRE-01` `PRE-03` `PRE-04` + `J-003.M` concluída |
| Endpoints tocados | os mesmos do PF |
| Step-up | não |
| Duração | 10 min |
| Automação equivalente | `onboarding-mobile.spec.ts` (Playwright, contra MSW) |
| Só o manual cobre | Layout a 320px, backend real, paridade de contrato entre superfícies |

> Persona separada de propósito: o `cliente-a` já tem onboarding ativo e receberia `409`. A
> conta da `J-003.M` é um CLIENTE limpo.

**Passos**

- [ ] **P1** — Abrir o onboarding no mobile.
      _Como:_ Em `http://localhost:8100`, com a emulação de dispositivo ligada
      (`Ctrl+Shift+M`), logado com a conta da `J-003.M`. A navegação é por abas no rodapé; o
      onboarding fica sob a aba **Início**.
      _Esperado:_ tela de onboarding com o indicador de etapas **Dados → Documentos → Status** e
      a escolha entre pessoa física e empresa.
- [ ] **P2** — Conferir os tipos de documento oferecidos para pessoa física.
      _Como:_ Escolher pessoa física, preencher CPF `11144477735`, nome e data, avançar até a
      etapa de documentos e abrir a lista de tipos.
      _Esperado:_ `RG`, `CNH`, `PASSAPORTE` e `SELFIE`. **O mobile não oferece
      `COMPROVANTE_ENDERECO` para PF e o web oferece** — divergência conhecida entre as
      superfícies. Nenhuma das duas quebra o backend (o comprovante não entra no mínimo
      exigido), mas confirme que a lista é essa; se mudou, é ocorrência de contrato.
- [ ] **P3** — Enviar identidade e selfie e disparar a verificação.
      _Como:_ Mesmos dois documentos mínimos do web.
      _Esperado:_ etapa **Status** com `EM_VERIFICACAO`.
- [ ] **P4** — Conferir o layout a 320px.
      _Como:_ **Este passo é sobre o layout mobile**, que nenhum teste automatizado cobre. No
      DevTools, trocar o preset para 320px de largura e percorrer as três etapas. Procurar
      barra de rolagem **horizontal**, botão cortado na borda e rótulo truncado.
      _Esperado:_ sem scroll horizontal e sem corte a 320px.
- [ ] **P5** — Fechar pelo webhook e reconsultar por gesto.
      _Como:_ Executar a [`J-051.A`](#j-051a---webhook-kyc-fecha-a-verificação-pf) com o id
      desta solicitação. Voltar ao app e atualizar **por gesto** — recarregar ou reentrar na
      tela. A tela não busca sozinha.
      _Esperado:_ `APROVADO_FINAL`; sem chamadas repetidas em intervalo fixo na aba Network.
- [ ] **P6** — Conferir a consistência entre superfícies.
      _Como:_ Abrir a **mesma** solicitação no web (`localhost:4200`) com a mesma conta, lado a
      lado com o mobile. As duas leem o mesmo backend e têm de concordar.
      _Esperado:_ mesmo status e mesma lista de documentos nas duas telas.

---

### J-056.W - Credora conclui o onboarding KYB PJ

| Campo | Valor |
|---|---|
| ID | `J-056.W` |
| Tipo | Positiva |
| Persona | `credora` — CLIENTE que ainda não é credora |
| Superfície | Web |
| Pré-condições | `PRE-01` `PRE-02` `PRE-04` `PRE-05` |
| Endpoints tocados | `POST /onboarding/empresa`, `POST /{id}/documentos`, `POST /{id}/verificar`, `GET /{id}` |
| Step-up | não |
| Duração | 10 min |
| Automação equivalente | `onboarding.spec.ts` (parcial, contra MSW) |
| Só o manual cobre | KYB síncrono real, consulta de CNPJ persistida, PLD multi-alvo |

> Produz a **base** do `PRE-13`. Virar credora de fato exige também o cadastro em
> `/app/credora/cadastro`, que é jornada do roteiro de credora — até lá o
> `credoraPresenceGuard` continua bloqueando.

**Passos**

- [ ] **P1** — Abrir o onboarding de empresa.
      _Como:_ Logado como `credora@sep.test`, menu **Jornadas** > **Onboarding**, cartão de
      empresa.
      _Esperado:_ formulário em `/app/onboarding/empresa`.
- [ ] **P2** — Tentar iniciar com CNPJ de DV errado.
      _Como:_ Enviar `11222333000180`. Mesma lógica do CPF: o DV é validado no backend.
      _Esperado:_ recusado, código `ONB-400-006`.
- [ ] **P3** — Iniciar com os dados válidos.
      _Como:_ CNPJ `11222333000181`, razão social qualquer. **Tipo societário e porte são
      opcionais** — o formulário diz isso no rótulo; deixe pelo menos um em branco de propósito
      para confirmar que o `201` sai mesmo assim. **Anotar o id.**
      _Esperado:_ `201`; vai para o detalhe.
- [ ] **P4** — Enviar os dois documentos mínimos de PJ.
      _Como:_ 1 de identificação societária (`CONTRATO_SOCIAL` ou `CCMEI`) **e** 1
      `COMPROVANTE_ENDERECO`. O mínimo de PJ é diferente do de PF; enviar dois contratos
      sociais não satisfaz.
      _Esperado:_ `204` nos dois; status `DOCUMENTOS_RECEBIDOS`.
- [ ] **P5** — Enviar para verificação e **não** disparar webhook nenhum.
      _Como:_ Clicar **Enviar para verificação** e clicar **Atualizar** logo em seguida. Aqui é
      onde PJ se separa de PF: o KYB é **síncrono**, então a resposta do próprio `POST` já
      finalizou a verificação, e o PLD dos alvos rodou depois do commit.
      _Esperado:_ **`APROVADO_FINAL` sem nenhum webhook**. Se parar em `EM_VERIFICACAO`, é
      ocorrência — no PJ isso não é estado estável.
- [ ] **P6** — Conferir os dados cadastrais que o provider devolveu.
      _Como:_ Na tela de detalhe, ler o bloco de dados da empresa e a lista de representantes.
      _Esperado:_ razão social preenchida e **um** representante legal listado — o fake devolve
      sempre um. CNPJ, razão social, nome fantasia, tipo societário e porte são os únicos dados
      de empresa expostos.
- [ ] **P7** — Conferir a consulta de CNPJ persistida.
      _Como:_ Terminal do banco. A consulta ao provider tem de deixar registro próprio, com a
      situação cadastral que motivou a decisão.
      ```bash
      docker exec sep-postgres psql -U sep -d sep_dev \
        -c "SELECT k.cnpj, s.status, c.situacao_cadastral
            FROM kyb_empresa k
            JOIN solicitacao_onboarding s ON s.id = k.solicitacao_id
            LEFT JOIN consulta_cnpj c ON c.kyb_empresa_id = k.id
            WHERE k.cnpj = '11222333000181';"
      ```
      _Esperado:_ `APROVADO_FINAL` e situação cadastral `ATIVA`.
- [ ] **P8** — Conferir a trilha de KYB.
      _Como:_ Terminal do banco.
      ```bash
      docker exec sep-postgres psql -U sep -d sep_dev \
        -c "SELECT tipo, data_evento FROM audit_log_seguranca
            WHERE tipo LIKE 'KYB%' ORDER BY data_evento DESC LIMIT 5;"
      ```
      _Esperado:_ `KYB_INICIADO` e `KYB_FINALIZADO_APROVADO`.

**Resultado final esperado**

- [ ] `credora` com PJ em `APROVADO_FINAL`; anotar o id para o roteiro de credora

---

### J-057.A - Representantes legais com CPF mascarado

| Campo | Valor |
|---|---|
| ID | `J-057.A` |
| Tipo | Positiva — minimização de dado pessoal |
| Persona | `credora` |
| Superfície | API |
| Pré-condições | `PRE-01` `PRE-04` + `J-056.W` concluída |
| Endpoints tocados | `GET /onboarding/empresa/{id}/representantes` |
| Step-up | não |
| Duração | 5 min |
| Automação equivalente | ITs do backend |
| Só o manual cobre | Resposta real do endpoint, e não o mock |

**Passos**

- [ ] **P1** — Listar os representantes da empresa.
      _Como:_ No Insomnia, login como `credora`, `GET
      /api/v1/onboarding/empresa/{id}/representantes`.
      _Esperado:_ `200` com um representante.
- [ ] **P2** — Conferir que o CPF vem **mascarado**.
      _Como:_ Ler o campo do CPF no JSON. A máscara mantém os 3 primeiros e os 2 últimos
      dígitos e esconde os 6 do meio (formato `529****4725`). CPF em claro aqui é ocorrência de
      LGPD, não de formatação.
      _Esperado:_ `cpfMascarado` no formato acima; **nenhum campo** com o CPF completo.
- [ ] **P3** — Conferir que o dado completo existe no banco, mas não na resposta.
      _Como:_ Terminal do banco. O ponto do passo é separar "não armazena" de "não expõe": o
      backend **armazena** o CPF e **mascara na borda**. Saber disso muda o que se checa numa
      auditoria.
      ```bash
      docker exec sep-postgres psql -U sep -d sep_dev \
        -c "SELECT nome, cargo, length(cpf) FROM representante_legal LIMIT 5;"
      ```
      _Esperado:_ 11 dígitos no banco, mascarado na API.
- [ ] **P4** — Repetir o P1 com o token do `cliente-b`.
      _Como:_ Mesma URL, token de outra persona.
      _Esperado:_ `403`. Lista de representantes é dado de terceiro.

---

### J-058.A - PLD consolidado e trilha de auditoria

| Campo | Valor |
|---|---|
| ID | `J-058.A` |
| Tipo | Positiva |
| Persona | Operação (leitura de banco) |
| Superfície | API + banco |
| Pré-condições | `PRE-01` + `J-050.W` e `J-056.W` concluídas |
| Endpoints tocados | nenhum — PLD não tem endpoint de leitura pública |
| Step-up | não |
| Duração | 8 min |
| Automação equivalente | ITs do backend |
| Só o manual cobre | Cobertura de bases por alvo no fluxo real, e não em fixture |

**Passos**

- [ ] **P1** — Conferir que o PLD rodou nos dois onboardings.
      _Como:_ Terminal do banco. Cada consulta guarda o payload do provider.
      ```bash
      docker exec sep-postgres psql -U sep -d sep_dev \
        -c "SELECT alvo_tipo, base, hit FROM consulta_pld ORDER BY data_consulta DESC LIMIT 20;"
      ```
      _Esperado:_ quatro bases obrigatórias por alvo — `COAF`, `OFAC`, `INTERPOL` e `MTE` —
      todas com `hit = false`. Se faltar base, o backend deveria ter recusado a consolidação;
      base faltando **com** status `APROVADO_FINAL` é ocorrência grave.
- [ ] **P2** — Conferir a contagem de alvos por tipo de onboarding.
      _Como:_ O PF tem **1** alvo (`PESSOA`); o PJ tem `EMPRESA` **mais um alvo por
      representante legal** — com o fake, dois no total. É a diferença estrutural entre os dois
      fluxos e o lugar onde uma regressão passaria despercebida.
      ```bash
      docker exec sep-postgres psql -U sep -d sep_dev \
        -c "SELECT s.tipo, c.alvo_tipo, count(*) AS bases
            FROM consulta_pld c JOIN solicitacao_onboarding s ON s.id = c.solicitacao_id
            GROUP BY s.tipo, c.alvo_tipo ORDER BY s.tipo;"
      ```
      _Esperado:_ para o PF, uma linha `PESSOA` com 4 bases (4 registros no total); para o PJ,
      uma linha `EMPRESA` e uma `REPRESENTANTE`, 4 bases cada — 8 no total. Representante sem
      consulta é falha de cobertura de PLD, mesmo com o onboarding `APROVADO_FINAL`.
- [ ] **P3** — Conferir os eventos de PLD no audit.
      _Como:_ Terminal do banco. Repare que estes eventos têm `usuario_id` nulo — o PLD é ato
      da plataforma, não do usuário — então uma consulta filtrada por usuário não os encontra.
      ```bash
      docker exec sep-postgres psql -U sep -d sep_dev \
        -c "SELECT tipo, usuario_id, data_evento FROM audit_log_seguranca
            WHERE tipo LIKE 'PLD%' ORDER BY data_evento DESC LIMIT 10;"
      ```
      _Esperado:_ `PLD_INICIADO` e `PLD_LIMPO` com usuário nulo; `PLD_FINALIZADO` com o usuário
      dono da solicitação.
- [ ] **P4** — Conferir que detalhe de hit não vaza para o audit.
      _Como:_ Nenhum evento de PLD pode conter CPF/CNPJ completo no campo de detalhes. Ler os
      detalhes dos eventos do P3.
      ```bash
      docker exec sep-postgres psql -U sep -d sep_dev \
        -c "SELECT tipo, detalhes FROM audit_log_seguranca
            WHERE tipo LIKE 'PLD%' ORDER BY data_evento DESC LIMIT 5;"
      ```
      _Esperado:_ documentos mascarados; nenhum documento completo.
- [x] ~~**P5** — Provar o desfecho `REPROVADO_PLD` com hit em base restritiva~~ **N/A: não
      alcançável com provider fake por HTTP.** O `FakeBackgroundCheckProvider` só produz hit por
      um gancho estático de teste, sem rota; e o webhook de PLD não serve de atalho, porque
      quando ele chega a solicitação já consolidou em `APROVADO_FINAL` e o callback tardio é
      descartado por idempotência. **Reativa quando** houver `app.pld.provider=celcoin` com
      WireMock ou sandbox, cenário previsto na suíte de IT do backend.
- [x] ~~**P6** — Provar o desfecho `REPROVADO` de KYB com situação cadastral não ativa~~ **N/A:
      mesma limitação.** O fake devolve `ATIVA` para qualquer CNPJ, exceto por gancho estático
      de teste. **Reativa** com provider real ou WireMock.

> Os dois `N/A` acima são limitação de ambiente declarada, **não** cobertura assumida. Enquanto
> valerem, os desfechos negativos de PLD e de KYB estão provados apenas por teste automatizado
> do backend, nunca ponta a ponta.

---

### J-059.M - Onboarding PJ no mobile

| Campo | Valor |
|---|---|
| ID | `J-059.M` |
| Tipo | Positiva |
| Persona | Conta criada na [`J-003.M`](./ROTEIRO-01-ACESSO-E-SESSAO.md#j-003m---visitante-cria-conta-de-cliente) — a mesma da `J-055.M` |
| Superfície | Mobile (PWA) |
| Pré-condições | `PRE-01` `PRE-03` `PRE-04` + `J-055.M` concluída |
| Endpoints tocados | `POST /onboarding/empresa`, `POST /{id}/documentos`, `POST /{id}/verificar`, `GET /{id}` |
| Step-up | não |
| Duração | 12 min |
| Automação equivalente | `onboarding-mobile.spec.ts` (parcial, contra MSW) |
| Só o manual cobre | KYB síncrono real, representantes vindos do provider, jornada local sobrevivendo entre PF e PJ |

> **O mobile não abre solicitação criada em outra superfície.** Não existe endpoint de listagem
> por usuário — só `GET /{id}` —, e o app descobre o id apenas pelo que ele mesmo gravou em
> `Preferences` (chave `sep.onboarding.journey`). Por isso esta jornada **cria** um PJ próprio no
> mobile, com CNPJ diferente do usado na `J-056.W`, em vez de reaproveitar aquele.

**Passos**

- [ ] **P1** — Abrir o onboarding e reparar que ele **não pergunta o tipo**.
      _Como:_ Em `http://localhost:8100`, emulação ligada, logado com a conta da `J-003.M`, aba
      **Início** > onboarding. Como a `J-055.M` deixou uma jornada PF gravada, o app a retoma e
      abre direto na etapa **Documentos**. **A escolha "Pessoa fisica / Empresa" some** — a
      chave do `Preferences` é **uma só**, então só existe uma jornada local por vez.
      _Esperado:_ etapa **Documentos** da jornada PF, sem a tela de escolha.
      > Se você não executou a `J-055.M`, a tela já mostra a escolha: pule para o **P4**.
- [ ] **P2** — Recomeçar o cadastro.
      _Como:_ O botão **Recomecar cadastro** só existe na etapa **Status** — tocar em **Ver
      status do cadastro** primeiro, depois em **Recomecar cadastro**.
      _Esperado:_ volta para a escolha entre pessoa física e empresa.
- [ ] **P3** — Confirmar que "recomeçar" **não** cancelou nada no backend.
      _Como:_ Este é o passo que importa do bloco. `Recomecar cadastro` apaga a chave local e
      nada mais: a solicitação PF continua viva e continua prendendo o CPF. Conferir no banco e,
      em seguida, tentar iniciar um PF novo com `11144477735` pelo próprio app.
      ```bash
      docker exec sep-postgres psql -U sep -d sep_dev \
        -c "SELECT tipo, status FROM solicitacao_onboarding WHERE documento = '11144477735';"
      ```
      _Esperado:_ `PESSOA` / `APROVADO_FINAL` no banco, e a tentativa de novo PF recusada com
      `409`. Se o `409` não vier, o botão está apagando dado do servidor — ocorrência grave.
- [ ] **P4** — Escolher **Empresa**.
      _Como:_ No cartão de escolha, ler a descrição antes de tocar. Ela anuncia o escopo do KYB.
      _Esperado:_ cartão descreve "dados da empresa, representantes e documentos"; abre o
      formulário de PJ na etapa **Dados**.
- [ ] **P5** — Enviar um CNPJ com dígito verificador errado.
      _Como:_ CNPJ `33344455000180` e uma razão social qualquer. **A máscara do formulário só
      confere o formato** (14 dígitos, pontuação opcional) — ela não calcula DV. Então o botão
      libera o envio e a recusa precisa vir do backend. É exatamente o que o passo mede: o
      mobile não decide validade de documento.
      _Esperado:_ formulário aceita enviar; backend recusa com `ONB-400-006` e a mensagem
      aparece abaixo do formulário. Nenhuma solicitação criada.
- [ ] **P6** — Enviar os dados válidos.
      _Como:_ CNPJ `33344455000183`, razão social qualquer. **Deixar tipo societário e porte
      sem tocar** — são opcionais e o `201` tem de sair mesmo assim.
      _Esperado:_ `201`; avança para a etapa **Documentos**.
      > **Sem volta nos dois selects.** Diferente do web, que tem a opção **Selecione**, os
      > selects de tipo societário e porte do mobile não têm entrada vazia: uma vez escolhido um
      > valor, não há como voltar a "não informado" sem recomeçar. Registrar como ocorrência de
      > usabilidade se atrapalhar a execução.
- [ ] **P7** — Conferir que os tipos de documento **mudaram** com o tipo de cadastro.
      _Como:_ Abrir a lista de tipos no bloco de upload. A lista de PJ é outra, e é o ponto onde
      um bug de estado apareceria: se sobrar `RG` ou `SELFIE` aqui, a tela ficou com o tipo da
      jornada anterior.
      _Esperado:_ exatamente `CONTRATO_SOCIAL`, `CCMEI` e `COMPROVANTE_ENDERECO`.
- [ ] **P8** — Enviar os dois documentos mínimos de PJ.
      _Como:_ 1 de identificação societária (`CONTRATO_SOCIAL` ou `CCMEI`) **e** 1
      `COMPROVANTE_ENDERECO` — dois contratos sociais não satisfazem o mínimo.
      _Esperado:_ `204` nos dois; os dois aparecem em **Documentos enviados**.
- [ ] **P9** — Disparar a verificação e conferir que ela fecha **sem webhook**.
      _Como:_ Tocar **Ver status do cadastro** e, na etapa **Status**, **Iniciar verificacao**.
      Repare que no mobile o botão mora na etapa de status, não na de documentos. Não dispare
      webhook nenhum: o KYB é síncrono e o PLD roda logo depois do commit.
      _Esperado:_ **`APROVADO_FINAL`** já na primeira leitura. Parar em `EM_VERIFICACAO` é
      ocorrência — no PJ esse não é estado estável.
- [ ] **P10** — Conferir o bloco **Representantes**.
      _Como:_ Ler o card do representante que o provider devolveu. O ponto do passo é o que
      **não** pode estar ali: motivo de hit, severidade e CPF. O resumo público de PLD expõe só
      o status consolidado e a data da consulta.
      _Esperado:_ um representante com nome, cargo e `PLD: LIMPO`. **Nenhum CPF** e nenhum
      detalhe de PLD na tela.
- [ ] **P11** — Conferir o layout a 320px.
      _Como:_ **Este passo é sobre o layout mobile**, que nenhum teste automatizado cobre. No
      DevTools, 320px de largura, percorrer as três etapas e o bloco de representantes. Procurar
      rolagem **horizontal**, texto cortado na borda e nome de representante estourando o card.
      _Esperado:_ sem scroll horizontal e sem corte a 320px.
- [ ] **P12** — Recarregar o app e confirmar que a jornada PJ é retomada.
      _Como:_ `F5` na aba. A jornada fica no `Preferences`, que sobrevive ao reload — agora com
      a PJ no lugar da PF.
      _Esperado:_ volta na jornada **PJ**, não na PF nem na tela de escolha.
- [ ] **P13** — Conferir o estado persistido das duas jornadas do mesmo usuário.
      _Como:_ Terminal do banco. O `409` é por documento, não por usuário, então a mesma conta
      termina com um PF e um PJ — e os dois precisam ter consolidado.
      ```bash
      docker exec sep-postgres psql -U sep -d sep_dev \
        -c "SELECT s.tipo, s.documento, s.status FROM solicitacao_onboarding s
            WHERE s.documento IN ('11144477735', '33344455000183') ORDER BY s.tipo;"
      ```
      _Esperado:_ duas linhas, `EMPRESA` e `PESSOA`, ambas `APROVADO_FINAL`.

**Resultado final esperado**

- [ ] PJ criado no mobile em `APROVADO_FINAL`, com representante `LIMPO` e sem webhook

---

## Divergências documentais encontradas ao escrever este roteiro

Registradas aqui porque afetam quem lê a documentação antes de executar:

1. **`PRE-11` está impreciso.** [`ROTEIRO-00`](./ROTEIRO-00-AMBIENTE-E-MASSA.md) §8 descreve
   "`cliente-a` com KYC aprovado"; o gate real do crédito é `APROVADO_FINAL`, pós-PLD.
2. **O hub dizia que o mobile não tem KYB PJ — e tem.**
   [`CENARIOS-TESTE-JORNADAS-USUARIO.md`](./CENARIOS-TESTE-JORNADAS-USUARIO.md) §6.1 marcava
   "Onboarding KYB PJ + PLD" com `—` na coluna Mobile. O `sep-mobile` tem o formulário de
   empresa, os tipos de documento PJ no upload e a consulta de representantes, entregues na
   **M-Sprint 6** (PR #79). A linha foi corrigida para `sim`.
   A cobertura foi fechada aqui: a [`J-055.M`](#j-055m---onboarding-pf-no-mobile) faz o PF e a
   [`J-059.M`](#j-059m---onboarding-pj-no-mobile) faz o PJ.
   Achado menor da mesma família: a lista de tipos de documento de PF diverge entre as
   superfícies (o web oferece `COMPROVANTE_ENDERECO`, o mobile não), conferida na
   [`J-055.M`](#j-055m---onboarding-pf-no-mobile) P2; e os selects de tipo societário e porte do
   mobile não têm entrada vazia, ao contrário do web, conferido na
   [`J-059.M`](#j-059m---onboarding-pj-no-mobile) P6.
3. **A ordem de execução do hub aponta para um roteiro que não existia.** O item 3 —
   "Onboarding — produz `PRE-11`" — não tinha link. Passa a apontar para este arquivo.
4. **`PENDENCIA` é beco sem saída, e o CPF fica preso.** Não entrou como jornada aqui — está
   registrado porque muda o que se pode testar. `PENDENCIA` é status **final**, então
   `registrarDocumentoEnviado()` e `validarPodeIniciarVerificacao()` recusam com `ONB-400-001`:
   não há como corrigir a pendência e reenviar. E `PENDENCIA` conta como **ativo**, então o CPF
   segue bloqueado para uma solicitação nova (`ONB-409-001`), sem endpoint de reabertura. Um
   webhook com `"status":"PENDING"` **queima o CPF em definitivo** no ambiente local. Coberto
   pela [`J-051.M-N1`](#j-051m-n1---pendência-de-kyc-é-terminal-e-prende-o-cpf), com CPF
   descartável. O comportamento do backend está correto — o que falta é **produto**: não há
   jornada de correção de pendência em nenhuma superfície, nem no backoffice.
5. **Método morto no `sep-mobile`.** `OnboardingMobileService.consultarRepresentantes()` chama
   `GET /onboarding/empresa/{id}/representantes` e **não tem nenhum chamador** no app: a lista
   de representantes que a tela mostra vem do payload do próprio `GET /{id}`. Não afeta a
   execução do roteiro — a [`J-059.M`](#j-059m---onboarding-pj-no-mobile) P10 valida a tela, e a
   [`J-057.A`](#j-057a---representantes-legais-com-cpf-mascarado) valida o endpoint direto —,
   mas é código sem consumidor, candidato a follow-up.

---

## Ocorrências desta execução

> Estrutura lida pelo gerador para montar o painel de ocorrências do app.
> **Não preencher aqui** — registre a ocorrência no próprio passo, dentro do app.

| # | Jornada | Passo | O que aconteceu | Esperado | Issue |
|---|---|---|---|---|---|
| | | | | | |

## Registro da execução

> Estrutura lida pelo gerador para montar o formulário de registro do app.
> **Não preencher aqui** — preencha no painel lateral do app; o resultado sai no JSON
> exportado. Alterar os rotulos desta tabela muda os campos do formulario.

| Campo | Preencher |
|---|---|
| Executado por | |
| Data / hora | |
| Commit `sep-api` | |
| Commit `sep-app` | |
| Commit `sep-mobile` | |
| `solicitacaoId` PF (`cliente-a`) usado | |
| `solicitacaoId` PJ (`credora`) usado | |
| CPF consumido pela `J-051.M-N1` | |
| Jornadas `OK` | |
| Jornadas `NOK` | |
| Jornadas `BLOQUEADO` | |
| Observações | |
