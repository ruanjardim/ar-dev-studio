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
          <p class="eyebrow">AR Dev Studio</p>
          <h1 id="hero-title">Software sob medida para empresas em evolu&ccedil;&atilde;o.</h1>
          <p class="hero__lead">
            Desenvolvimento de sistemas, plataformas, sites institucionais
            e experi&ecirc;ncias interativas com arquitetura clara desde o
            primeiro passo.
          </p>

          <div class="hero__actions" aria-label="Acoes principais">
            <a class="button button--primary" href="#contato">Conversar sobre projeto</a>
            <a class="button button--secondary" href="#projetos">Ver projetos</a>
          </div>

          <dl class="hero__signals" aria-label="Pilares da AR Dev Studio">
            <div>
              <dt>01</dt>
              <dd>Engenharia</dd>
            </div>
            <div>
              <dt>02</dt>
              <dd>Clareza</dd>
            </div>
            <div>
              <dt>03</dt>
              <dd>Continuidade</dd>
            </div>
          </dl>
        </div>

        <aside class="hero-authority" aria-label="Resumo da forma de trabalho da AR Dev Studio">
          <div class="hero-authority__header">
            <span>Da ideia ao sistema</span>
            <strong>Arquitetura antes do c&oacute;digo</strong>
          </div>

          <div class="hero-authority__matrix" aria-hidden="true">
            <span class="hero-authority__cell hero-authority__cell--active">Produto</span>
            <span class="hero-authority__cell">Dados</span>
            <span class="hero-authority__cell">Interface</span>
            <span class="hero-authority__cell hero-authority__cell--active">Sistema</span>
            <span class="hero-authority__cell hero-authority__cell--active">Opera&ccedil;&atilde;o</span>
            <span class="hero-authority__cell">Evolu&ccedil;&atilde;o</span>
          </div>

          <div class="hero-authority__trace" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <dl class="hero-authority__proof">
            <div>
              <dt>Primeiro passo</dt>
              <dd>Entender contexto, risco e prioridade</dd>
            </div>
            <div>
              <dt>Entrega</dt>
              <dd>Base organizada para crescer sem improviso</dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  `;
}
