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
