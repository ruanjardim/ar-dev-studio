export function Hero(): string {
  return `
    <section class="hero" id="inicio" aria-labelledby="hero-title">
      <div class="hero__background" aria-hidden="true">
        <span class="hero__grid"></span>
        <span class="hero__axis hero__axis--vertical"></span>
        <span class="hero__axis hero__axis--horizontal"></span>
      </div>

      <div class="hero__inner shell">
        <div class="hero__content">
          <p class="eyebrow">Software House orientada por arquitetura</p>
          <h1 id="hero-title">Projetamos sistemas que evoluem.</h1>
          <p class="hero__lead">
            A AR Dev Studio constrói bases digitais com engenharia, clareza técnica
            e visão de produto para empresas que precisam crescer sem perder controle.
          </p>

          <div class="hero__actions" aria-label="Ações principais">
            <a class="button button--primary" href="#contato">Iniciar arquitetura</a>
            <a class="button button--secondary" href="#manifesto">Ler manifesto</a>
          </div>

          <dl class="hero__signals" aria-label="Pilares da AR Dev Studio">
            <div>
              <dt>01</dt>
              <dd>Arquitetura antes do código</dd>
            </div>
            <div>
              <dt>02</dt>
              <dd>Evolução além da entrega</dd>
            </div>
            <div>
              <dt>03</dt>
              <dd>Sistemas preparados para escala</dd>
            </div>
          </dl>
        </div>

        <aside class="hero-authority" aria-label="Painel técnico da AR Dev Studio">
          <div class="hero-authority__header">
            <span>Architecture Readiness</span>
            <strong>Enterprise Web</strong>
          </div>

          <div class="hero-authority__matrix" aria-hidden="true">
            <span class="hero-authority__cell hero-authority__cell--active">Domínio</span>
            <span class="hero-authority__cell">Contratos</span>
            <span class="hero-authority__cell">Interface</span>
            <span class="hero-authority__cell hero-authority__cell--active">Operação</span>
            <span class="hero-authority__cell hero-authority__cell--active">Evolução</span>
            <span class="hero-authority__cell">Escala</span>
          </div>

          <div class="hero-authority__trace" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <dl class="hero-authority__proof">
            <div>
              <dt>Entrega</dt>
              <dd>Blueprint técnico antes da implementação</dd>
            </div>
            <div>
              <dt>Qualidade</dt>
              <dd>Componentes, CSS e TypeScript sob controle</dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  `;
}
