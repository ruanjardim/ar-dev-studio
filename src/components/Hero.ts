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
      </div>
    </section>
  `;
}
