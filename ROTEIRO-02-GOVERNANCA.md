# Roteiro 02 - Governança, usuários e parâmetros

> Família `J-040` a `J-049`: administração de usuários, roles cumulativas, parâmetros
> operacionais governados e negação de acesso à área administrativa. Requer
> [`ROTEIRO-00`](./ROTEIRO-00-AMBIENTE-E-MASSA.md) concluído.
> Hub: [`CENARIOS-TESTE-JORNADAS-USUARIO.md`](./CENARIOS-TESTE-JORNADAS-USUARIO.md).
>
> **Execute pelo [app](./app/index.html)**, não editando este arquivo — as caixas aqui ficam
> sempre vazias. Desvio não vira caixa marcada: vira **ocorrência** registrada no passo.

_Atualizado em: 2026-08-20._

## Por que este roteiro pode ser o primeiro depois do acesso

É o **único roteiro de jornada que não depende de nenhuma pré-condição produzida por outro
roteiro**. Não precisa de `PRE-11`, `PRE-12` nem `PRE-13`: bastam o `admin` e o TOTP dele, que o
[`ROTEIRO-00`](./ROTEIRO-00-AMBIENTE-E-MASSA.md) já entrega. Enquanto crédito, cobrança, credora
e Pix esperam a cadeia de jornadas anteriores, governança roda sozinha.

E ele governa o resto: é aqui que se promove uma persona a `FINANCEIRO` e é aqui que se mexe nos
parâmetros que outros módulos deveriam ler. Se alguma jornada de outro roteiro falhar por falta
de permissão, a resposta está neste roteiro.

## O achado que muda como ler a tela de parâmetros

**Os parâmetros operacionais governados não são lidos por nenhum motor do sistema.** Medido no
código, não deduzido: a classe `ParametroOperacional` e o repositório dela aparecem em **18
arquivos, todos dentro do módulo `governanca`**. As chaves semeadas na migration —
`credito.valor.maximo.pf`, `credito.score.pre-aprovacao`,
`backoffice.proposta.pendente.horas`, entre outras — **não aparecem em nenhum `.java` nem em
nenhum `.yml`** fora da própria migration.

Os valores que os motores usam de verdade vêm do `application.yml`, em chaves paralelas:

| Tela de governança (tabela `parametro_operacional`) | Valor efetivo (`application.yml`) | Quem lê o efetivo |
|---|---|---|
| `credito.valor.maximo.pf` = `50000.00` | `app.credito.motor.valor-maximo-pf` = `50000.00` | `RegraValorMaximo` |
| `credito.valor.maximo.pj` = `200000.00` | `app.credito.motor.valor-maximo-pj` = `200000.00` | `RegraValorMaximo` |
| `credito.prazo.maximo.pf.meses` = `12` | `app.credito.motor.prazo-maximo-pf-meses` = `12` | motor de crédito |
| `credito.score.pre-aprovacao` = `700` | `app.credito.motor.score-pre-aprovacao` = `700` | motor de crédito |
| `backoffice.proposta.pendente.horas` = `24` | `app.backoffice.verificador.proposta-pendencia-horas` = `24` | `PropostaPendenciaListener` |
| `backoffice.webhook.pendente.horas` = `1` | `app.backoffice.verificador.webhook-falhou-horas` = `1` | `VerificadorPendenciasJob` |

**Os dois lados hoje têm o mesmo valor**, e é por isso que ninguém percebeu: eles concordam por
coincidência de seed. Alterar pela tela muda **só a coluna da esquerda** — a alteração persiste,
versiona, audita e não produz efeito nenhum.

Isso **não** invalida as jornadas de parâmetro. Muda o que elas medem: a
[`J-043.W`](#j-043w---alterar-parâmetro-operacional-com-step-up-e-histórico) prova que a
governança registra corretamente (versão, histórico, justificativa, auditoria) e **declara** a
ausência de efeito como resultado esperado, em vez de assumir efeito que não existe.

## Máquina de roles

```
Conjunto cumulativo (autoritativo)   usuario_role
Role principal (denormalizada)       usuario.role  <- derivada, nunca editada direto

Precedencia: ADMIN > FINANCEIRO > BACKOFFICE > CLIENTE
```

Três consequências que aparecem nas jornadas:

1. **A coluna `role` é derivada.** Toda mutação de roles chama `sincronizarPrincipal()`, que
   recalcula a principal pela precedência. Adicionar `FINANCEIRO` a um `CLIENTE` muda a coluna
   **Perfil** da lista de usuários para `FINANCEIRO`, sem que ninguém edite esse campo.
2. **Roles vivem na claim do JWT.** O backend resolve permissão pelo token, sem reler o banco a
   cada request. Promoção **não vale na sessão já aberta** — ver
   [`J-042.W`](#j-042w---promoção-não-vale-na-sessão-já-aberta).
3. **Toda mutação de role exige step-up**, inclusive o endpoint legado
   `POST /usuarios/{id}/role`, que substitui o conjunto inteiro por uma role só.

## Massa deste roteiro

Este roteiro **cria a própria massa** e não toca nas personas dos outros. Use um usuário interno
descartável, nomeado com a data da execução:

| Uso | Valor | Observação |
|---|---|---|
| Usuário de governança | `governanca-<AAAA-MM-DD>@sep.test` | criado na `J-041.W`, descartável |
| Senha dele | `jornada-governanca-sep-2026` | 12+ chars, atende à política real |
| Parâmetro cobaia | `backoffice.webhook.pendente.horas` | `INTEGER`, e o único cuja alteração não confunde leitura de outro roteiro |

> **Não use `credito.valor.maximo.pf` como cobaia.** Ele tem gêmeo no `application.yml` com o
> mesmo valor, e deixá-lo divergente atrapalha a leitura do `ROTEIRO-04` por quem vier depois.
> O parâmetro de webhook é `INTEGER` como ele, serve para os mesmos testes e não induz ninguém a
> erro.

## Índice

| ID | Jornada | Superfície |
|---|---|---|
| [`J-040.W`](#j-040w---admin-consulta-usuários-e-roles) | ADMIN consulta usuários e roles | Web |
| [`J-040.W-N1`](#j-040w-n1---área-administrativa-negada-a-não-admin) | Área administrativa negada a não-ADMIN | Web + API |
| [`J-041.W`](#j-041w---criar-usuário-interno-e-gerenciar-roles-cumulativas) | Criar usuário interno e gerenciar roles | Web + API |
| [`J-041.W-N1`](#j-041w-n1---limites-da-gestão-de-roles) | Limites da gestão de roles | API |
| [`J-042.W`](#j-042w---promoção-não-vale-na-sessão-já-aberta) | Promoção não vale na sessão aberta | Web |
| [`J-043.W`](#j-043w---alterar-parâmetro-operacional-com-step-up-e-histórico) | Alterar parâmetro com step-up e histórico | Web |
| [`J-043.W-N1`](#j-043w-n1---recusas-na-alteração-de-parâmetro) | Recusas na alteração de parâmetro | Web + API |
| [`J-044.M-N1`](#j-044m-n1---administração-no-mobile-é-placeholder) | Administração no mobile é placeholder | Mobile |

---

### J-040.W - ADMIN consulta usuários e roles

| Campo | Valor |
|---|---|
| ID | `J-040.W` |
| Tipo | Positiva — leitura |
| Persona | `admin` |
| Superfície | Web |
| Pré-condições | `PRE-01` `PRE-02` `PRE-04` `PRE-05` `PRE-06` |
| Endpoints tocados | `GET /usuarios`, `GET /usuarios/{id}`, `GET /usuarios/{id}/roles` |
| Step-up | não — leitura |
| Duração | 6 min |
| Automação equivalente | `governanca.spec.ts`, `admin-flow.spec.ts` (Playwright, contra MSW) |
| Só o manual cobre | Backend real, precedência da role principal sobre dados reais |

**Passos**

#### Tela `/app/admin`

- [ ] **P1** — Abrir a área administrativa.
      _Como:_ Logado como `admin@sep.test`, procurar **Administração** no menu.
      _Esperado:_ `/app/admin` abre com os acessos de governança de usuários e parâmetros.
- [ ] **P2** — Conferir o que ainda não existe.
      _Como:_ Ler os cartões da tela inicial. Pelo menos um anuncia **"Disponivel em breve"**.
      Anotar **quais**: card de administração que promete e não entrega é ocorrência de produto,
      e o registro serve de linha de base para a próxima execução.
      _Esperado:_ os cartões indisponíveis estão rotulados como tal, e não levam a tela vazia ou
      a erro.

#### Tela `/app/admin/users`

- [ ] **P3** — Listar os usuários.
      _Como:_ Abrir **Usuários**. Devem aparecer as seis personas do `ROTEIRO-00` mais o que
      outras jornadas tiverem criado.
      _Esperado:_ tabela com e-mail, perfil, criado em e modificado em.
- [ ] **P4** — Filtrar por e-mail.
      _Como:_ Usar o campo de filtro com um trecho do e-mail do `financeiro`.
      _Esperado:_ a lista reduz; nenhum erro com filtro sem resultado.
- [ ] **P5** — Conferir a coluna **Perfil** contra a precedência.
      _Como:_ O `admin` do `ROTEIRO-00` tem duas roles (ADMIN + CLIENTE). A coluna Perfil mostra
      a role **principal**, derivada por precedência (`ADMIN > FINANCEIRO > BACKOFFICE >
      CLIENTE`), e não a lista inteira.
      _Esperado:_ `admin` aparece como `ADMIN`, não como `CLIENTE` nem como duas linhas.

#### Tela `/app/admin/users/:id`

- [ ] **P6** — Abrir o detalhe do `admin` e ler o bloco de roles.
      _Como:_ Clicar no próprio `admin`. O detalhe traz identificação, auditoria e o bloco
      **Roles cumulativas**.
      _Esperado:_ as duas roles listadas, e um aviso de que **você não pode alterar as próprias
      roles** — a tela antecipa a regra que a [`J-041.W-N1`](#j-041w-n1---limites-da-gestão-de-roles) prova no backend.
- [ ] **P7** — Conferir o conjunto pelo banco.
      _Como:_ Terminal do banco. A tabela `usuario_role` é a fonte autoritativa; a coluna
      `usuario.role` é derivada. As duas têm de contar a mesma história.
      ```bash
      docker exec sep-postgres psql -U sep -d sep_dev \
        -c "SELECT u.username, u.role AS principal, string_agg(ur.role, ',' ORDER BY ur.role) AS cumulativas
            FROM usuario u LEFT JOIN usuario_role ur ON ur.usuario_id = u.id
            GROUP BY u.username, u.role ORDER BY u.username;"
      ```
      _Esperado:_ para cada usuário, a principal é a de maior precedência dentro das cumulativas.
      Divergência aqui é defeito de sincronização.

**Resultado final esperado**

- [ ] Lista, detalhe e roles conferem com o banco, e a role principal segue a precedência

---

### J-040.W-N1 - Área administrativa negada a não-ADMIN

| Campo | Valor |
|---|---|
| ID | `J-040.W-N1` |
| Tipo | Negativa — RBAC |
| Persona | `financeiro`, `backoffice` e `cliente-a` |
| Superfície | Web + API |
| Vetor | Alcançar governança sem ser ADMIN, por menu e por URL direta |
| Comportamento seguro esperado | Negação no backend; sumiço no menu é só conveniência |
| Pré-condições | `PRE-01` `PRE-02` `PRE-04` `PRE-06` `PRE-07` |

> A matriz completa de rota × role é o `ROTEIRO-10`. Aqui está só o recorte de governança, que é
> o mais sensível: quem entra aqui promove a si mesmo.

**Passos**

- [ ] **P1** — Como `financeiro`, conferir que **Administração** não aparece no menu.
      _Como:_ Entrar como `financeiro@sep.test` (vai pedir TOTP) e percorrer o menu lateral.
      _Esperado:_ nenhum item de administração.
- [ ] **P2** — Alcançar `/app/admin` pela URL direta.
      _Como:_ **Este é o passo que importa** — o P1 só mostrou que o menu esconde, e esconder não
      é bloquear. Digitar `http://localhost:4200/app/admin` na barra de endereço.
      _Esperado:_ negado pelo `roleGuard`; cai em acesso negado, **não** na tela de administração
      nem numa tela vazia.
- [ ] **P3** — Repetir o P2 com `backoffice` e com `cliente-a`.
      _Como:_ Mesma URL, uma persona de cada vez. Três roles diferentes, três negações.
      _Esperado:_ negado para as três.
- [ ] **P4** — Chamar os endpoints de governança direto na API.
      _Como:_ No Insomnia, com o token do `financeiro`, chamar `GET /api/v1/usuarios`,
      `GET /api/v1/usuarios/{id}/roles` e `GET /api/v1/governanca/parametros`. O guard do front
      não protege a API.
      _Esperado:_ `403` nos três. Um `200` aqui é bloqueio de go-live.
- [ ] **P5** — Tentar a promoção direto na API, sem ser ADMIN.
      _Como:_ Com o token do `financeiro`, `POST /api/v1/usuarios/{id}/roles/ADMIN` apontando
      para o próprio id. É a escalada de privilégio óbvia.
      _Esperado:_ `403`. Conferir depois, pelo banco, que o conjunto de roles do `financeiro`
      não mudou.

---

### J-041.W - Criar usuário interno e gerenciar roles cumulativas

| Campo | Valor |
|---|---|
| ID | `J-041.W` |
| Tipo | Positiva |
| Persona | `admin` (com TOTP — `PRE-05` + autenticador) |
| Superfície | Web + API |
| Pré-condições | `PRE-01` `PRE-02` `PRE-04` `PRE-05` `PRE-10` |
| Endpoints tocados | `POST /admin/usuarios`, `POST /usuarios/{id}/roles/{role}`, `DELETE /usuarios/{id}/roles/{role}`, `GET /usuarios/{id}/roles` |
| Step-up | **sim** nas mutações de role |
| Duração | 12 min |
| Automação equivalente | `admin-flow.spec.ts` (parcial, contra MSW) |
| Só o manual cobre | Step-up com TOTP real, sincronização da role principal, auditoria |

> **O `admin` precisa de TOTP habilitado.** Se o `ROTEIRO-00` §6.2 não habilitou para ele, as
> mutações de role param no step-up. Habilite antes de começar — nenhuma jornada deste roteiro
> contorna isso.

**Passos**

- [ ] **P1** — Criar um usuário interno descartável.
      _Como:_ Pela API, `POST /api/v1/admin/usuarios` com o token do `admin`. Este endpoint só
      aceita `ADMIN` ou `CLIENTE` — `FINANCEIRO` e `BACKOFFICE` **não** podem ser atribuídos no
      cadastro, só por promoção. Usar a data de hoje no e-mail.
      ```json
      { "username": "governanca-<AAAA-MM-DD>@sep.test",
        "password": "jornada-governanca-sep-2026",
        "role": "CLIENTE" }
      ```
      _Esperado:_ `201`. **Anotar o id.**
- [ ] **P2** — Tentar criar já como `FINANCEIRO`.
      _Como:_ Repetir o P1 com `"role": "FINANCEIRO"` e outro e-mail. A restrição é deliberada:
      role interna se conquista por promoção auditada, não por cadastro.
      _Esperado:_ recusado com `400`, código `USR-400-002`, mensagem mandando promover pelo
      endpoint de role. Nenhum usuário criado.
      > **O código `USR-400-002` é ambíguo.** Ele identifica **duas** regras sem relação: esta, e
      > "usuário deve manter ao menos uma role" (`J-041.W-N1` P2). Quem ramificar tratamento de
      > erro por código no front vai acertar a mensagem errada. Ver §Divergências.
- [ ] **P3** — Abrir o detalhe do novo usuário no web.
      _Como:_ `/app/admin/users`, filtrar pelo e-mail criado, abrir o detalhe.
      _Esperado:_ Perfil `CLIENTE`, uma role cumulativa (`CLIENTE`), e **sem** o aviso de
      autoalteração — ele não é você.
- [ ] **P4** — Adicionar a role `FINANCEIRO`, passando pelo step-up.
      _Como:_ No bloco de roles, adicionar `FINANCEIRO`. O step-up é o padrão da fase:
      **Iniciar**, código TOTP do `admin`, **Confirmar**.
      _Esperado:_ `200`; o conjunto passa a ter `CLIENTE` e `FINANCEIRO`.
- [ ] **P5** — Conferir que a coluna **Perfil** mudou sozinha.
      _Como:_ Voltar à lista. Ninguém editou o campo Perfil, mas ele é derivado por precedência,
      e `FINANCEIRO` ganha de `CLIENTE`.
      _Esperado:_ Perfil agora é `FINANCEIRO`, com as duas roles preservadas no detalhe.
- [ ] **P6** — Adicionar `BACKOFFICE` e conferir que a principal **não** muda.
      _Como:_ Repetir o P4 com `BACKOFFICE`. Agora são três roles, e `FINANCEIRO` continua tendo
      precedência sobre `BACKOFFICE`. É o passo que separa "acumula" de "substitui".
      _Esperado:_ três roles no conjunto; Perfil segue `FINANCEIRO`.
- [ ] **P7** — Remover `FINANCEIRO` e ver a principal recuar.
      _Como:_ Remover a role, com step-up.
      _Esperado:_ duas roles (`CLIENTE`, `BACKOFFICE`); Perfil passa a `BACKOFFICE`.
- [ ] **P8** — Conferir a trilha de auditoria.
      _Como:_ Terminal do banco. Mudança de privilégio sem trilha é achado de compliance.
      ```bash
      docker exec sep-postgres psql -U sep -d sep_dev \
        -c "SELECT tipo, data_evento FROM audit_log_seguranca
            WHERE tipo IN ('USUARIO_ROLES_ALTERADAS','ROLE_ALTERADO')
            ORDER BY data_evento DESC LIMIT 6;"
      ```
      _Esperado:_ um evento por mutação — três, se você fez P4, P6 e P7.
- [ ] **P9** — Conferir o estado final nas duas tabelas.
      _Como:_ Terminal do banco, mesma consulta do
      [`J-040.W`](#j-040w---admin-consulta-usuários-e-roles) P7, filtrando pelo novo usuário.
      _Esperado:_ `usuario_role` com `CLIENTE` e `BACKOFFICE`; `usuario.role` = `BACKOFFICE`.

**Resultado final esperado**

- [ ] Usuário de governança criado, roles acumuladas e removidas com step-up, principal derivada
      corretamente; anotar o e-mail usado

---

### J-041.W-N1 - Limites da gestão de roles

| Campo | Valor |
|---|---|
| ID | `J-041.W-N1` |
| Tipo | Negativa — regra de negócio e segurança |
| Persona | `admin` |
| Superfície | API |
| Vetor | Autopromoção, usuário sem role e mutação sem step-up |
| Comportamento seguro esperado | Recusa com código próprio, sem alterar estado |
| Pré-condições | `PRE-01` `PRE-04` `PRE-05` `PRE-10` + `J-041.W` concluída |

**Passos**

- [ ] **P1** — Tentar alterar as **próprias** roles.
      _Como:_ Com o token do `admin` e step-up válido, `POST /api/v1/usuarios/{idDoProprioAdmin}/roles/FINANCEIRO`.
      Um ADMIN que se rebaixa por engano tranca a própria governança; um que se promove burla a
      segregação. A regra existe para os dois casos.
      _Esperado:_ `403` com código `USR-403-002`, mensagem sobre não alterar as próprias roles.
- [ ] **P2** — Tentar remover a **última** role de um usuário.
      _Como:_ No usuário de governança, remover as roles até sobrar uma e tentar remover essa.
      Usuário sem role nenhuma não consegue nem autenticar direito.
      _Esperado:_ `400` com código `USR-400-002`.
- [ ] **P3** — Tentar uma mutação de role **sem** o header de step-up.
      _Como:_ Repetir o `POST .../roles/FINANCEIRO` no usuário de governança, com token de ADMIN
      válido mas **sem** `X-Step-Up-Token`.
      _Esperado:_ `403`. Alteração de privilégio nunca passa só com o token de sessão.
- [ ] **P4** — Repetir o P3 no endpoint **legado** de role.
      _Como:_ `POST /api/v1/usuarios/{id}/role`, sem step-up. Este endpoint é da Sprint 8 e
      substitui o conjunto inteiro por uma role só — o caminho mais destrutivo dos dois. Ele
      **também** exige step-up; o passo confere que a proteção não ficou só no endpoint novo.
      _Esperado:_ `403` sem step-up. Um `200` aqui é escalada de privilégio por endpoint
      esquecido.
- [ ] **P5** — Conferir que nada mudou.
      _Como:_ `GET /api/v1/usuarios/{id}/roles` no usuário de governança e na conta do `admin`.
      _Esperado:_ os dois conjuntos iguais aos do fim da `J-041.W`.

---

### J-042.W - Promoção não vale na sessão já aberta

| Campo | Valor |
|---|---|
| ID | `J-042.W` |
| Tipo | Positiva — comportamento de sessão |
| Persona | `admin` + usuário de governança da `J-041.W` |
| Superfície | Web (duas sessões) |
| Pré-condições | `PRE-01` `PRE-02` `PRE-04` `PRE-05` `PRE-10` + `J-041.W` concluída |
| Endpoints tocados | `POST /usuarios/{id}/roles/{role}`, `POST /auth/login`, `POST /auth/refresh` |
| Step-up | sim, na promoção |
| Duração | 10 min |
| Automação equivalente | nenhuma — exige duas sessões simultâneas contra backend real |
| Só o manual cobre | Efeito temporal da claim de roles no JWT |

> **Por que isto é jornada, e não detalhe.** O backend resolve permissão pela claim `roles` do
> token, sem reler o banco a cada request. Então uma promoção **não** alcança quem já está
> logado: o access token velho continua valendo até expirar (15 minutos por padrão) ou até um
> refresh, que **relê o usuário** e emite token novo. Quem não souber disso vai reportar
> "promovi e não funcionou" como defeito.

**Passos**

- [ ] **P1** — Abrir duas sessões, em janelas separadas.
      _Como:_ Janela normal com o `admin`; **janela anônima** com o usuário de governança
      (`jornada-governanca-sep-2026`). Anônima evita que as duas sessões briguem pelo mesmo
      storage.
      _Esperado:_ as duas autenticadas ao mesmo tempo.
- [ ] **P2** — Na janela do usuário comum, tentar `/app/admin`.
      _Como:_ URL direta. Ele está como `CLIENTE`/`BACKOFFICE` no fim da `J-041.W`.
      _Esperado:_ negado.
- [ ] **P3** — Na janela do `admin`, promover o usuário a `ADMIN`.
      _Como:_ `/app/admin/users/:id`, adicionar a role `ADMIN`, com step-up.
      _Esperado:_ `200`; o conjunto passa a incluir `ADMIN`; Perfil vira `ADMIN`.
- [ ] **P4** — Na janela do usuário, **sem recarregar nem sair**, tentar `/app/admin` de novo.
      _Como:_ Repetir o P2 imediatamente. **O esperado aqui é continuar negado** — o token dessa
      sessão foi emitido antes da promoção e carrega as roles antigas.
      _Esperado:_ ainda negado. Se passar de imediato, o backend está consultando o banco por
      request em vez de confiar na claim, e a premissa de sessão do sistema é outra: registre
      como ocorrência, porque muda a análise de segurança.
- [ ] **P5** — Sair e entrar de novo na janela do usuário.
      _Como:_ Logout e login com as mesmas credenciais. É o caminho curto; o longo é esperar o
      access token expirar e o refresh acontecer sozinho.
      _Esperado:_ agora `/app/admin` abre, e o item de administração aparece no menu.
- [ ] **P6** — Conferir a claim do token novo.
      _Como:_ Na aba **Network**, copiar o `accessToken` da resposta de login e colar em
      [jwt.io](https://jwt.io) — ou decodificar o miolo em base64 no terminal. Interessa a claim
      `roles`.
      _Esperado:_ `roles` contém `ADMIN`. É a prova direta de onde a permissão vem.
- [ ] **P7** — Desfazer a promoção.
      _Como:_ Na janela do `admin`, remover a role `ADMIN` do usuário de governança, com
      step-up. **Não deixe um ADMIN extra vivo** ao fim da execução.
      _Esperado:_ conjunto volta ao do fim da `J-041.W`.

**Resultado final esperado**

- [ ] Promoção só valeu depois de novo token; ADMIN extra removido ao final

---

### J-043.W - Alterar parâmetro operacional com step-up e histórico

| Campo | Valor |
|---|---|
| ID | `J-043.W` |
| Tipo | Positiva |
| Persona | `admin` |
| Superfície | Web |
| Pré-condições | `PRE-01` `PRE-02` `PRE-04` `PRE-05` `PRE-10` |
| Endpoints tocados | `GET /governanca/parametros`, `GET /governanca/parametros/{chave}`, `PATCH /governanca/parametros/{chave}` |
| Step-up | **sim** |
| Duração | 12 min |
| Automação equivalente | `governanca.spec.ts` (contra MSW) |
| Só o manual cobre | Versionamento real, histórico persistido e a **ausência de efeito** no motor |

> **Leia o §"O achado" antes deste bloco.** A alteração é registrada com rigor — versão,
> valor anterior, justificativa, ator, auditoria — e **não muda comportamento de nenhum motor**.
> Esta jornada mede o registro e **declara** a ausência de efeito; ela não finge que o parâmetro
> é aplicado.

**Passos**

#### Tela `/app/admin/parametros`

- [ ] **P1** — Listar os parâmetros governados.
      _Como:_ Abrir **Parâmetros** na administração.
      _Esperado:_ 11 parâmetros, com chave, tipo, valor e versão. Todos em versão `1` se nenhuma
      execução anterior mexeu.
- [ ] **P2** — Abrir o detalhe de `backoffice.webhook.pendente.horas`.
      _Como:_ Clicar na linha. O detalhe traz tipo, valor atual, versão, descrição, o formulário
      de alteração e o histórico.
      _Esperado:_ tipo `INTEGER`, valor `1`, versão `1`, e histórico dizendo que **não há
      alterações registradas**.

#### Alteração

- [ ] **P3** — Alterar o valor sem preencher a justificativa.
      _Como:_ Informar o novo valor `6` e tentar salvar deixando a justificativa em branco. A
      justificativa é obrigatória por contrato, não só por educação — ela é persistida no
      histórico e é o que explica a mudança meses depois.
      _Esperado:_ recusado, com a mensagem pedindo a justificativa.
- [ ] **P4** — Alterar com justificativa, passando pelo step-up.
      _Como:_ Novo valor `6`, justificativa reconhecível (por exemplo `roteiro-02 execucao
      <data>`), salvar. Step-up: **Iniciar**, TOTP do `admin`, **Confirmar**.
      _Esperado:_ `200`; valor passa a `6` e a **versão vai para 2**.
- [ ] **P5** — Conferir o histórico na tela.
      _Como:_ Ler o bloco **Histórico de versões**.
      _Esperado:_ uma entrada com versão, valor anterior `1`, valor novo `6`, sua justificativa e
      a data. Valor anterior ausente ou justificativa truncada é ocorrência.
- [ ] **P6** — Conferir o histórico no banco.
      _Como:_ Terminal do banco. A tela pode estar montando o histórico a partir do que ela mesma
      acabou de enviar; esta consulta prova que ele foi persistido.
      ```bash
      docker exec sep-postgres psql -U sep -d sep_dev \
        -c "SELECT p.chave, p.valor, p.versao, v.valor_anterior, v.valor_novo, v.justificativa
            FROM parametro_operacional p
            LEFT JOIN versao_parametro_operacional v ON v.parametro_id = p.id
            WHERE p.chave = 'backoffice.webhook.pendente.horas' ORDER BY v.versao;"
      ```
      _Esperado:_ parâmetro em `6`/versão 2, e uma linha de histórico com `1` → `6`.
- [ ] **P7** — Conferir a auditoria.
      _Como:_ Terminal do banco.
      ```bash
      docker exec sep-postgres psql -U sep -d sep_dev \
        -c "SELECT tipo, usuario_id, data_evento FROM audit_log_seguranca
            WHERE tipo = 'PARAMETRO_OPERACIONAL_ALTERADO' ORDER BY data_evento DESC LIMIT 3;"
      ```
      _Esperado:_ um evento, com o id do `admin` como ator.
- [ ] **P8** — Confirmar que o valor efetivo do backend **não** mudou.
      _Como:_ Este é o passo do achado. O valor que o `VerificadorPendenciasJob` usa vem de
      `app.backoffice.verificador.webhook-falhou-horas`, no `application.yml` do `sep-api` — não
      da tabela. Abrir o arquivo e comparar com o que a tela mostra.
      ```bash
      grep -n "webhook-falhou-horas" \
        /home/mauricio/workspaces/workspace-sep/sep-api/src/main/resources/application.yml
      ```
      _Esperado:_ o `yml` continua em `1` enquanto a tela mostra `6`. **Divergência é o resultado
      correto desta execução** e a evidência do achado: a governança registrou uma decisão que o
      sistema não aplica. Registrar como ocorrência de produto, uma vez por execução.
- [ ] **P9** — Reverter o parâmetro.
      _Como:_ Alterar de volta para `1`, com justificativa (`reversao roteiro-02`). Deixar valor
      divergente atrapalha quem executar o `ROTEIRO-08` depois.
      _Esperado:_ valor `1`, **versão 3** — reverter não apaga histórico, acrescenta. Três
      entradas no histórico ao final.

**Resultado final esperado**

- [ ] Alteração versionada, justificada e auditada; ausência de efeito registrada; valor revertido

---

### J-043.W-N1 - Recusas na alteração de parâmetro

| Campo | Valor |
|---|---|
| ID | `J-043.W-N1` |
| Tipo | Negativa — validação e segurança |
| Persona | `admin` e `financeiro` |
| Superfície | Web + API |
| Vetor | Valor incompatível com o tipo, chave inexistente e alteração sem step-up |
| Comportamento seguro esperado | Recusa sem gravar versão nem incrementar contador |
| Pré-condições | `PRE-01` `PRE-04` `PRE-05` `PRE-06` `PRE-10` |

**Passos**

- [ ] **P1** — Enviar texto num parâmetro `INTEGER`.
      _Como:_ Em `backoffice.webhook.pendente.horas`, novo valor `seis`, com justificativa.
      _Esperado:_ `400`; a validação é por tipo do parâmetro, não por máscara de tela.
- [ ] **P2** — Enviar decimal num parâmetro `INTEGER`.
      _Como:_ Mesmo parâmetro, valor `1.5`. `INTEGER` recusa; `DECIMAL` aceitaria.
      _Esperado:_ `400`.
- [ ] **P3** — Enviar valor vazio.
      _Como:_ Pela API, `PATCH` com `"novoValor": ""`.
      _Esperado:_ `400` por validação de contrato, antes de qualquer regra de tipo.
- [ ] **P4** — Alterar uma chave que não existe.
      _Como:_ `PATCH /api/v1/governanca/parametros/chave.que.nao.existe` com corpo válido.
      _Esperado:_ `404`. Não pode criar parâmetro novo por `PATCH`.
- [ ] **P5** — Alterar **sem** step-up.
      _Como:_ `PATCH` válido, token de ADMIN, **sem** `X-Step-Up-Token`.
      _Esperado:_ `403`.
- [ ] **P6** — Alterar como `financeiro`.
      _Como:_ `PATCH` válido com o token do `financeiro`, mesmo com step-up dele.
      _Esperado:_ `403`. Parâmetro operacional é exclusividade de ADMIN.
- [ ] **P7** — Conferir que nenhuma tentativa gravou versão.
      _Como:_ Terminal do banco. Seis recusas não podem ter deixado rastro de alteração.
      ```bash
      docker exec sep-postgres psql -U sep -d sep_dev \
        -c "SELECT chave, valor, versao FROM parametro_operacional
            WHERE chave = 'backoffice.webhook.pendente.horas';"
      ```
      _Esperado:_ valor `1` e versão `3`, exatamente como a `J-043.W` P9 deixou.

---

### J-044.M-N1 - Administração no mobile é placeholder

| Campo | Valor |
|---|---|
| ID | `J-044.M-N1` |
| Tipo | Negativa — cobertura de superfície |
| Persona | `admin` e `cliente-a` |
| Superfície | Mobile (PWA) |
| Vetor | Esperar governança no mobile |
| Comportamento seguro esperado | Rota guardada por ADMIN e conteúdo honesto sobre não existir |
| Pré-condições | `PRE-01` `PRE-03` `PRE-04` `PRE-05` |

> A rota `/app/admin` **existe** no `sep-mobile`, com `roleGuard` de ADMIN, mas carrega um
> componente de placeholder. Ou seja: o guard é real e a funcionalidade não. A jornada registra
> as duas metades, para a matriz do `ROTEIRO-10` não marcar cobertura que não existe.

**Passos**

- [ ] **P1** — Como `cliente-a`, tentar `/app/admin` no mobile.
      _Como:_ Em `http://localhost:8100`, emulação ligada, logado como `cliente-a`, digitar a
      rota na barra de endereço.
      _Esperado:_ negado pelo `roleGuard`.
- [ ] **P2** — Como `admin`, abrir `/app/admin` no mobile.
      _Como:_ Sair, entrar como `admin@sep.test` e repetir.
      _Esperado:_ a rota abre e mostra **placeholder** — sem lista de usuários, sem parâmetros e
      sem ação de mutação.
- [ ] **P3** — Confirmar que não há caminho de mutação escondido.
      _Como:_ Percorrer a tela inteira, inclusive rolando até o fim, procurando qualquer botão
      de promoção, alteração de role ou de parâmetro.
      _Esperado:_ nenhum. Governança no mobile **não existe**; se aparecer qualquer ação de
      mutação num placeholder, é ocorrência grave.
- [ ] **P4** — Registrar a lacuna.
      _Como:_ Anotar em ocorrências, uma vez por execução, que a administração mobile está como
      placeholder. É informação de planejamento, não defeito de código.
      _Esperado:_ lacuna registrada com a data da execução.

---

## Divergências e lacunas encontradas ao escrever este roteiro

1. **Parâmetros governados não são lidos por nenhum motor.** Medido: `ParametroOperacional`
   aparece em 18 arquivos, **todos** no módulo `governanca`; as chaves semeadas não aparecem em
   nenhum `.java` ou `.yml` fora da migration. Os valores efetivos vivem em chaves paralelas do
   `application.yml`. Hoje os dois lados coincidem, o que esconde o problema. Coberto pela
   [`J-043.W`](#j-043w---alterar-parâmetro-operacional-com-step-up-e-histórico) P8.
2. **`/app/admin` do mobile é placeholder guardado.** Rota e `roleGuard` existem; conteúdo não.
   Coberto pela [`J-044.M-N1`](#j-044m-n1---administração-no-mobile-é-placeholder).
3. **A tela inicial da administração web anuncia "Disponivel em breve".** Quantos e quais cards
   é o que a [`J-040.W`](#j-040w---admin-consulta-usuários-e-roles) P2 manda anotar; sem isso não
   dá para saber se o placeholder encolheu ou cresceu entre execuções.
4. **`USR-400-002` identifica duas regras diferentes.** `CriarUsuarioUseCase` usa esse código
   para "criação direta com role operacional não permitida" e `GerenciarRolesUsuarioUseCase`
   usa o mesmo para "usuário deve manter ao menos uma role". São erros sem parentesco, em
   endpoints diferentes, com o mesmo identificador — front que ramifique por código não
   consegue distinguir. Exercitado nas duas pontas:
   [`J-041.W`](#j-041w---criar-usuário-interno-e-gerenciar-roles-cumulativas) P2 e
   [`J-041.W-N1`](#j-041w-n1---limites-da-gestão-de-roles) P2.
5. **Dois caminhos para mudar role, com semânticas diferentes.**
   `POST /usuarios/{id}/role` (Sprint 8) **substitui o conjunto inteiro** por uma role só;
   `POST /usuarios/{id}/roles/{role}` (Sprint 18) **acumula**. Os dois exigem ADMIN e step-up e
   os dois estão publicados no contrato. Nomes que diferem por uma letra e fazem coisas opostas
   são risco de operação — a [`J-041.W-N1`](#j-041w-n1---limites-da-gestão-de-roles) P4 exercita
   o legado só na negativa, de propósito.

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
| Usuário de governança criado | |
| Parâmetro alterado e revertido | |
| Cards "Disponivel em breve" encontrados | |
| Jornadas `OK` | |
| Jornadas `NOK` | |
| Jornadas `BLOQUEADO` | |
| Observações | |
