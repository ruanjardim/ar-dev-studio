export function FinalCta(): string {
  const mailto =
    "mailto:contato@ardevstudio.com?subject=Projeto%20digital%20-%20AR%20Dev%20Studio";

  return `
    <section class="section section--final-cta" id="contato" aria-labelledby="contact-title">
      <div class="final-cta shell" aria-describedby="contact-description">
        <div class="final-cta__content">
          <p class="eyebrow">Pr&oacute;ximo movimento</p>
          <h2 id="contact-title">Vamos conversar sobre o pr&oacute;ximo produto digital da sua empresa.</h2>
          <p id="contact-description">
            Traga uma ideia, um processo que precisa virar sistema ou uma base
            que precisa evoluir. A primeira conversa organiza o caminho.
          </p>
        </div>

        <div class="contact-card" aria-label="Contato comercial">
          <span class="contact-card__label">Contato direto</span>
          <a class="contact-card__mail" href="${mailto}">contato@ardevstudio.com</a>
          <dl class="contact-card__details">
            <div>
              <dt>Primeiro passo</dt>
              <dd>Conversa de contexto</dd>
            </div>
            <div>
              <dt>Foco</dt>
              <dd>Produto, arquitetura e evolu&ccedil;&atilde;o</dd>
            </div>
          </dl>
          <a class="button button--primary" href="${mailto}">
            Iniciar conversa
          </a>
        </div>
      </div>
    </section>
  `;
}
