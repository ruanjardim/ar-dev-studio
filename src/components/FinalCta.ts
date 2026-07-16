export function FinalCta(): string {
  const mailto =
    "mailto:contato@ardevstudio.com?subject=Diagnostico%20tecnico%20-%20AR%20Dev%20Studio";

  return `
    <section class="section section--final-cta" id="contato" aria-labelledby="contact-title">
      <div class="final-cta shell" aria-describedby="contact-description">
        <div class="final-cta__content">
          <p class="eyebrow">Pr&oacute;ximo movimento</p>
          <h2 id="contact-title">Vamos mapear o sistema que precisa existir depois da pr&oacute;xima entrega.</h2>
          <p id="contact-description">
            Traga o contexto do seu produto, opera&ccedil;&atilde;o ou base atual. A conversa inicial
            organiza risco, prioridade e dire&ccedil;&atilde;o t&eacute;cnica antes de qualquer linha de c&oacute;digo.
          </p>
        </div>

        <div class="contact-card" aria-label="Contato comercial">
          <span class="contact-card__label">Contato direto</span>
          <a class="contact-card__mail" href="${mailto}">contato@ardevstudio.com</a>
          <dl class="contact-card__details">
            <div>
              <dt>Primeiro passo</dt>
              <dd>Diagn&oacute;stico t&eacute;cnico</dd>
            </div>
            <div>
              <dt>Foco</dt>
              <dd>Arquitetura, risco e evolu&ccedil;&atilde;o</dd>
            </div>
          </dl>
          <a class="button button--primary" href="${mailto}">
            Solicitar diagn&oacute;stico t&eacute;cnico
          </a>
        </div>
      </div>
    </section>
  `;
}
