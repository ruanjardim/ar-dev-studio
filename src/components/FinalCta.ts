export function FinalCta(): string {
  const mailto =
    "mailto:contato@ardevstudio.com?subject=Avaliacao%20de%20projeto%20-%20AR%20Dev%20Studio";

  return `
    <section class="section section--final-cta" id="contato" aria-labelledby="contact-title">
      <div class="final-cta final-cta--next shell" aria-describedby="contact-description">
        <div class="final-cta__content">
          <p class="eyebrow">Pr&oacute;ximo passo</p>
          <h2 id="contact-title">Vamos transformar seu MVP em produto?</h2>
          <p id="contact-description">
            Compartilhe o contexto atual. A primeira conversa organiza risco,
            prioridade e o caminho mais seguro para evoluir.
          </p>
        </div>

        <div class="final-cta__actions">
          <a class="button button--primary" href="${mailto}">Solicitar avalia&ccedil;&atilde;o</a>
          <span>contato@ardevstudio.com</span>
        </div>
      </div>
    </section>
  `;
}
