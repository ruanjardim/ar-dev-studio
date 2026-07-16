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
            A AR Dev Studio apresenta, planeja e constr&oacute;i sistemas web sob medida
            para empresas que precisam transformar processos em produto digital confi&aacute;vel.
          </p>

          <div class="hero__actions" aria-label="Acoes principais">
            <a class="button button--primary" href="#contato">Conversar sobre projeto</a>
            <a class="button button--secondary" href="#servicos">Ver servi&ccedil;os</a>
          </div>

          <dl class="hero__signals" aria-label="Pilares da AR Dev Studio">
            <div>
              <dt>01</dt>
              <dd>Sistemas sob medida</dd>
            </div>
            <div>
              <dt>02</dt>
              <dd>Clareza antes da entrega</dd>
            </div>
            <div>
              <dt>03</dt>
              <dd>Evolu&ccedil;&atilde;o planejada</dd>
            </div>
          </dl>
        </div>

        <aside class="hero-authority" aria-label="Resumo da forma de trabalho da AR Dev Studio">
          <div class="hero-authority__header">
            <span>Da ideia ao sistema</span>
            <strong>Web sob medida</strong>
          </div>

          <div class="hero-authority__matrix" aria-hidden="true">
            <span class="hero-authority__cell hero-authority__cell--active">Contexto</span>
            <span class="hero-authority__cell">Escopo</span>
            <span class="hero-authority__cell">Interface</span>
            <span class="hero-authority__cell hero-authority__cell--active">Sistema</span>
            <span class="hero-authority__cell hero-authority__cell--active">Evolu&ccedil;&atilde;o</span>
            <span class="hero-authority__cell">Suporte</span>
          </div>

          <div class="hero-authority__trace" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <dl class="hero-authority__proof">
            <div>
              <dt>Primeiro passo</dt>
              <dd>Entender o projeto antes de prometer solu&ccedil;&atilde;o</dd>
            </div>
            <div>
              <dt>Entrega</dt>
              <dd>Sistema claro, organizado e pronto para continuar</dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  `;
}
