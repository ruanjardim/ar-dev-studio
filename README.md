# AR Dev Studio

Site institucional da AR Dev Studio, uma Software House orientada por arquitetura, engenharia e evolução contínua de sistemas.

## Sprint 2 — Home Foundation

### Objetivo

Construir a primeira fundação institucional da Home com Header premium, Logo Cube em SVG, navegação, Hero institucional, manifesto, CTA principal, background técnico moderno e responsividade inicial.

### Arquitetura

- `src/main.ts`: inicializa a aplicação no elemento `#app`.
- `src/app.ts`: compõe a aplicação e carrega o tema global.
- `src/layouts/DefaultLayout.ts`: organiza Header, conteúdo principal e Footer.
- `src/pages/Home.ts`: define a narrativa institucional da Home.
- `src/components/Header.ts`: identidade, Logo Cube, navegação e CTA de topo.
- `src/components/Hero.ts`: proposta central, CTA principal e blueprint técnico.
- `src/components/Footer.ts`: fechamento institucional e contato.
- `src/styles/tokens.css`: fundamentos do Design System.
- `src/styles/base.css`: normalização, tipografia e acessibilidade base.
- `src/styles/layout.css`: estrutura global, containers e seções.
- `src/styles/components.css`: componentes reutilizáveis.
- `src/styles/hero.css`: composição específica do primeiro viewport.
- `src/styles/animations.css`: animações discretas e redução de movimento.
- `src/styles/theme.css`: ordem oficial de importação dos estilos.

### Validação no navegador

URL local validada: `http://127.0.0.1:5174/`

Pontos conferidos:

- Título da página: `AR Dev Studio | Sistemas que evoluem`.
- H1: `Projetamos sistemas que evoluem.`
- CTA principal: `Iniciar arquitetura`.
- Navegação: `Arquitetura`, `Manifesto`, `Entrega`.
- Âncoras presentes: `inicio`, `manifesto`, `arquitetura`, `entrega`, `contato`.
- Header com comportamento `sticky`.
- Mobile validado em `390x844`.
- Desktop validado em `1440x900`.
- Sem overflow horizontal.
- Sem erros de console.
- Build de produção aprovado com Vite 8.1.4.

### Critérios de aceite

- A Home comunica claramente que a AR Dev Studio é uma Software House.
- A missão `Projetamos sistemas que evoluem.` aparece no primeiro viewport.
- A filosofia `Arquitetura antes do código. Evolução além da entrega.` está documentada no manifesto.
- O Header contém Logo Cube em SVG próprio, navegação e CTA.
- A interface é mobile first, clara, responsiva e acessível.
- O CSS é puro, modular e separado por responsabilidade.
- Não há framework de UI.
- A aplicação compila com TypeScript em modo estrito.

### Checklist

- [x] Arquitetura definida antes do código.
- [x] Estrutura oficial criada.
- [x] Componentes implementados.
- [x] Layout global implementado.
- [x] Design System em CSS puro criado.
- [x] Responsividade inicial validada.
- [x] Performance preservada sem dependências de UI.
- [x] Qualidade validada por build.
- [x] Documentação da Sprint criada.
- [x] Testes de navegador realizados.
- [x] Pronto para commit.

Nenhum commit foi realizado.

## Sprint 3 — Home Evolution

### Objetivo

Evoluir a Home para uma página institucional mais completa, reforçando serviços, processo, diferenciais técnicos e CTA final sem perder a clareza de Software House.

### Arquitetura da Sprint

A página `src/pages/Home.ts` passou a atuar apenas como composição de seções. Os blocos institucionais foram separados em componentes para preservar responsabilidade única e facilitar evolução.

Novos componentes:

- `src/components/Manifesto.ts`: filosofia central da empresa.
- `src/components/ArchitecturePrinciples.ts`: princípios técnicos.
- `src/components/Services.ts`: frentes de atuação da Software House.
- `src/components/ProcessTimeline.ts`: processo de diagnóstico, blueprint, construção e evolução.
- `src/components/Delivery.ts`: capacidades práticas de entrega.
- `src/components/TechnicalDifferentials.ts`: diferenciais técnicos qualitativos.
- `src/components/FinalCta.ts`: conversão principal e próximo passo.

Arquivos evoluídos:

- `src/components/Header.ts`: navegação atualizada para a Home expandida.
- `src/components/Hero.ts`: Hero mais focado, com blueprint movido para o processo.
- `src/components/Footer.ts`: rodapé sem duplicação da âncora de contato.
- `src/styles/layout.css`: novas variações de seção.
- `src/styles/components.css`: estilos de serviços, processo, diferenciais e CTA.
- `src/styles/hero.css`: primeira dobra mais limpa e blueprint reutilizável.
- `src/styles/animations.css`: animações discretas para os novos blocos.

### Validação no navegador

Pontos a conferir:

- A navegação deve apontar para `Arquitetura`, `Serviços`, `Processo` e `Entrega`.
- A Home deve seguir a ordem: Hero, Manifesto, Arquitetura, Serviços, Processo, Entrega, Diferenciais e CTA final.
- O CTA de topo e o CTA principal devem apontar para `#contato`.
- O blueprint técnico deve aparecer dentro da seção `Processo`.
- O mobile deve manter leitura em coluna sem overflow horizontal.
- O desktop deve distribuir serviços, processo e diferenciais em grids organizados.
- Mobile validado em `390x844`.
- Desktop validado em `1440x900`.
- Sem overflow horizontal.
- Sem erros de console.

### Critérios de aceite

- A Home comunica uma Software House, não uma agência.
- Serviços e processo explicam a atuação de forma concreta.
- As seções são componentizadas e preparadas para evolução.
- A hierarquia visual permanece minimalista, premium e acessível.
- O build de produção continua aprovado com Vite 8 e TypeScript estrito.

### Checklist

- [x] Arquitetura da Sprint definida.
- [x] Componentes de seção criados.
- [x] Header atualizado.
- [x] Hero refinado.
- [x] Serviços adicionados.
- [x] Processo de arquitetura adicionado.
- [x] Diferenciais técnicos adicionados.
- [x] CTA final adicionado.
- [x] CSS modular atualizado.
- [x] Build de produção aprovado.
- [x] Validação final no navegador.
- [ ] Publicação privada no GitHub.

## Sprint 4 — Decision Layer

### Objetivo

Evoluir a Home para apoiar decisão comercial e técnica, explicando quando a AR Dev Studio entra, quais padrões sustentam a entrega, como a maturidade técnica aparece e quais dúvidas precisam ser alinhadas antes do contato.

### Arquitetura da Sprint

A página continua composta em `src/pages/Home.ts`, preservando o modelo de seções independentes. A Sprint 4 adiciona blocos orientados à decisão sem alterar o contrato das Sprints anteriores.

Novos componentes:

- `src/components/DiagnosticFit.ts`: sinais de que o cliente precisa de arquitetura e evolução.
- `src/components/StackStandards.ts`: padrões técnicos por camada de interface, aplicação e operação.
- `src/components/MaturitySignals.ts`: impactos práticos da maturidade do sistema.
- `src/components/Faq.ts`: perguntas institucionais para alinhar posicionamento.

Arquivos evoluídos:

- `src/pages/Home.ts`: nova ordem de composição da Home.
- `src/components/Header.ts`: navegação ajustada para Diagnóstico, Serviços, Processo e FAQ.
- `src/styles/layout.css`: novas faixas de seção.
- `src/styles/components.css`: estilos dos blocos de diagnóstico, stack, maturidade e FAQ.
- `src/styles/animations.css`: entrada discreta para os novos blocos.

### Validação no navegador

Pontos a conferir:

- A navegação deve apontar para `Diagnóstico`, `Serviços`, `Processo` e `FAQ`.
- A Home deve conter as âncoras `diagnostico`, `stack`, `maturidade` e `faq`.
- A seção `FAQ` deve usar elementos nativos `details` e `summary`.
- O mobile deve manter leitura em coluna sem overflow horizontal.
- O desktop deve organizar diagnóstico, stack e maturidade em grades de três colunas.
- O CTA final deve continuar apontando para contato.
- Mobile validado em `390x844`.
- Desktop validado em `1440x900`.
- Sem overflow horizontal.
- Sem erros de console da página.

### Critérios de aceite

- A página explica quando a AR Dev Studio deve ser acionada.
- A stack é apresentada como padrão de qualidade, não como vitrine visual.
- A maturidade técnica é traduzida em benefício prático.
- O FAQ reforça o posicionamento de Software House.
- A arquitetura continua modular, sem framework de UI e com CSS puro.
- O build de produção continua aprovado com Vite 8 e TypeScript estrito.

### Checklist

- [x] Arquitetura da Sprint definida.
- [x] Componente de diagnóstico criado.
- [x] Componente de stack e padrões criado.
- [x] Componente de maturidade criado.
- [x] Componente de FAQ criado.
- [x] Home recomposta.
- [x] Header atualizado.
- [x] CSS modular atualizado.
- [x] Build de produção aprovado.
- [x] Validação final no navegador.
- [x] Pronto para commit.
- [x] Commit e push no GitHub privado.

## Sprint 5 — Visual Authority & Conversion Polish

### Objetivo

Elevar a Home para uma presença institucional mais forte, com primeira dobra mais autoral, prova técnica sem cases inventados, caminho de conversão claro e metadados sociais básicos.

### Arquitetura da Sprint

A Sprint 5 preserva a Home como composição de seções e adiciona duas camadas novas: autoridade técnica e conversão. O Hero passa a carregar um painel visual técnico no desktop para reforçar engenharia e arquitetura sem depender de imagens externas.

Novos componentes:

- `src/components/AuthorityProof.ts`: prova de autoridade baseada em artefatos técnicos, documentação e qualidade operacional.
- `src/components/ConversionPath.ts`: caminho do primeiro contato até a primeira entrega.

Arquivos evoluídos:

- `src/components/Hero.ts`: painel técnico visual de prontidão arquitetural.
- `src/components/Header.ts`: navegação ajustada para Diagnóstico, Serviços, Autoridade e FAQ.
- `src/components/FinalCta.ts`: copy final mais direta para diagnóstico técnico.
- `src/pages/Home.ts`: inclusão das novas seções.
- `src/styles/hero.css`: Hero em duas colunas no desktop e painel técnico responsivo.
- `src/styles/components.css`: cards de autoridade e caminho de conversão.
- `src/styles/layout.css`: novas faixas de seção.
- `src/styles/animations.css`: animações discretas para os novos blocos.
- `index.html`: metadados Open Graph e Twitter básicos.

### Validação no navegador

URL local validada: `http://127.0.0.1:5174/`

Pontos a conferir:

- O Hero deve manter a mensagem `Projetamos sistemas que evoluem.`
- No desktop, o Hero deve exibir o painel `Architecture Readiness`.
- A navegação deve apontar para `Diagnóstico`, `Serviços`, `Autoridade` e `FAQ`.
- A Home deve conter as âncoras `autoridade` e `caminho`.
- A seção de autoridade não deve mencionar clientes, números ou cases fictícios.
- O CTA final deve chamar para `Solicitar diagnóstico técnico`.
- Mobile e desktop devem permanecer sem overflow horizontal.

Resultado validado:

- Mobile validado em `390x844`.
- Desktop validado em `1440x900`.
- Painel `Architecture Readiness` oculto no mobile e visível no desktop.
- Quatro cards de autoridade técnica renderizados.
- Quatro etapas do caminho de conversão renderizadas.
- CTA final direciona para contato direto por e-mail.
- Open Graph e Twitter Card básicos presentes.
- Sem overflow horizontal.
- Sem erros de console da página.

### Critérios de aceite

- A Home ganha mais autoridade visual sem perder minimalismo.
- A prova técnica é baseada em artefatos reais de entrega, não em claims artificiais.
- O caminho de conversão deixa claro o próximo passo.
- Os metadados sociais básicos estão presentes.
- O build de produção continua aprovado com Vite 8 e TypeScript estrito.

### Checklist

- [x] Arquitetura da Sprint definida.
- [x] Hero refinado.
- [x] Painel técnico visual criado.
- [x] Prova de autoridade criada.
- [x] Caminho de conversão criado.
- [x] CTA final refinado.
- [x] Metadados sociais básicos adicionados.
- [x] CSS modular atualizado.
- [x] Build de produção aprovado.
- [x] Validação final no navegador.
- [x] Commit e push no GitHub privado.

## Refinamento de Design System — Paleta e Logo Cube

### Objetivo

Alinhar a identidade visual da Home com a paleta azul definida para a AR Dev Studio, preservando o branco como base do tema claro e preparando a fundação para um futuro controle de tema claro/escuro.

### Paleta oficial

- Navy: `#0D2A4A`.
- Steel: `#43627F`.
- Ice: `#A4BAD2`.
- White: `#FFFFFF`.

### Arquitetura

- `src/styles/tokens.css`: concentra a paleta oficial, tokens RGB, cores de interface, cores do Logo Cube e sombras.
- `src/components/Header.ts`: define a geometria SVG do Logo Cube.
- `src/styles/components.css`: aplica a paleta no Header, botões, cards e CTA final.
- `src/styles/hero.css`: remove tons antigos do Hero, blueprint e painel técnico.
- `src/styles/layout.css`: alinha fundos de seção e grid global à paleta azul.

### Validação

- Tema claro mantém fundo branco/frio como padrão de abertura.
- Logo Cube renderiza com topo branco, lateral clara, lateral azul e contorno escuro.
- CTA principal usa `#0D2A4A`.
- Tokens `#0D2A4A`, `#43627F` e `#A4BAD2` estão ativos no navegador.
- Sem overflow horizontal.
- Sem erros de console da página.
- Build de produção aprovado.

## Sprint 6 — Trust, SEO & Theme Control

### Objetivo

Amadurecer a frente oficial da AR Dev Studio com controle de tema claro/escuro, contato institucional mais estruturado, metadados semânticos e refinamentos de acessibilidade.

### Arquitetura da Sprint

A Sprint 6 preserva a Home como composição de seções e adiciona duas responsabilidades transversais em `src/scripts`: preferência visual do usuário e dados estruturados. O tema claro continua sendo o padrão de abertura; o tema escuro só é aplicado por ação do usuário e fica salvo no navegador.

Novos arquivos:

- `src/scripts/theme.ts`: controla tema claro/escuro, persistência local e estado acessível do botão.
- `src/scripts/metadata.ts`: injeta dados estruturados `Organization` sem depender de domínio fixo.

Arquivos evoluídos:

- `src/main.ts`: inicializa dados estruturados e controle de tema após renderizar a aplicação.
- `src/components/Header.ts`: adiciona botão de tema acessível ao Header.
- `src/components/FinalCta.ts`: transforma o CTA final em bloco de contato comercial com e-mail, contexto e próximo passo.
- `src/styles/tokens.css`: adiciona tokens do tema escuro e superfícies compartilhadas.
- `src/styles/base.css`: adiciona transição suave de tema.
- `src/styles/components.css`: estilos do botão de tema, contato estruturado e ajustes de superfícies.
- `src/styles/layout.css`: remove fundos fixos claros para suportar tema escuro.
- `src/styles/hero.css`: remove superfícies fixas claras no Hero e no painel técnico.

### Validação no navegador

Pontos a conferir:

- A página deve abrir em tema claro por padrão.
- O botão de tema deve alternar entre claro e escuro.
- O estado do botão deve atualizar `aria-pressed` e `aria-label`.
- A preferência de tema deve persistir no navegador.
- O contato final deve mostrar e-mail, primeiro passo e foco do diagnóstico.
- O JSON-LD `Organization` deve existir no `head`.
- Mobile e desktop devem permanecer sem overflow horizontal.

Resultado validado:

- Tema claro validado em desktop.
- Tema escuro validado em desktop.
- Preferência de tema persistiu após recarregar.
- Mobile validado em `390x844`.
- Contato estruturado renderizado com e-mail e assunto no link.
- JSON-LD `Organization` renderizado no `head`.
- Sem overflow horizontal.
- Sem erros de console da página.

### Critérios de aceite

- Tema claro/escuro funciona sem framework de UI.
- Tema claro continua sendo a experiência inicial.
- O contato final comunica um próximo passo mais confiável.
- Dados estruturados reforçam SEO técnico sem domínio inventado.
- A arquitetura continua modular, simples e pronta para evoluir.
- O build de produção continua aprovado com Vite 8 e TypeScript estrito.

### Checklist

- [x] Arquitetura da Sprint definida.
- [x] Script de tema criado.
- [x] Botão de tema adicionado ao Header.
- [x] Tokens do tema escuro criados.
- [x] Contato final estruturado.
- [x] Dados estruturados adicionados.
- [x] CSS modular atualizado.
- [x] Build de produção aprovado.
- [x] Validação final no navegador.
- [x] Pronto para commit.
