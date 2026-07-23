const aiTools = ["Cursor", "Claude Code", "Copilot", "Lovable", "v0", "Bolt"];

function renderAiTools(): string {
  return aiTools.map((tool) => `<li>${tool}</li>`).join("");
}

export function MvpRescue(): string {
  return `
    <section class="section section--mvp" id="auditoria" aria-labelledby="mvp-title">
      <div class="section__inner shell mvp-rescue">
        <div class="mvp-rescue__content">
          <p class="eyebrow">Do prot&oacute;tipo ao produto</p>
          <h2 id="mvp-title">A IA acelerou o come&ccedil;o. N&oacute;s preparamos o que vem depois.</h2>
          <p>
            Voc&ecirc; ou seu time criou um MVP com Cursor, Claude Code, Copilot, Lovable,
            v0 ou Bolt &mdash; e agora precisa virar produto de verdade. &Eacute; exatamente a&iacute;
            que a AR Dev entra.
          </p>

          <ul class="ai-tool-list" aria-label="Ferramentas de cria&ccedil;&atilde;o de MVP">
            ${renderAiTools()}
          </ul>

          <div class="mvp-rescue__deliverables">
            <article>
              <span>01</span>
              <div>
                <h3>Auditoria do projeto</h3>
                <p>Arquitetura, seguran&ccedil;a, qualidade, dados e capacidade de evolu&ccedil;&atilde;o.</p>
              </div>
            </article>
            <article>
              <span>02</span>
              <div>
                <h3>Valida&ccedil;&atilde;o em v&iacute;deo</h3>
                <p>Evid&ecirc;ncias visuais do que foi analisado, corrigido e entregue.</p>
              </div>
            </article>
          </div>
        </div>

        <aside class="audit-console" aria-label="Exemplo de auditoria de produto">
          <div class="audit-console__header">
            <span><i></i><i></i><i></i></span>
            <strong>product-readiness.audit</strong>
            <small>LIVE</small>
          </div>
          <div class="audit-console__score">
            <div>
              <span>Prontid&atilde;o do produto</span>
              <strong>78<small>/100</small></strong>
            </div>
            <svg viewBox="0 0 120 120" aria-hidden="true">
              <defs>
                <linearGradient id="audit-score-gradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stop-color="#45d6c3" />
                  <stop offset="0.48" stop-color="#629bff" />
                  <stop offset="1" stop-color="#a97cff" />
                </linearGradient>
              </defs>
              <circle class="audit-console__track" cx="60" cy="60" r="48"></circle>
              <circle class="audit-console__progress" cx="60" cy="60" r="48"></circle>
            </svg>
          </div>
          <ul class="audit-console__checks">
            <li style="--indicator: #45d6c3"><span><b></b>Arquitetura</span><i style="--score: 82%"></i><strong>82</strong></li>
            <li style="--indicator: #629bff"><span><b></b>Seguran&ccedil;a</span><i style="--score: 68%"></i><strong>68</strong></li>
            <li style="--indicator: #f7b955"><span><b></b>Manuten&ccedil;&atilde;o</span><i style="--score: 74%"></i><strong>74</strong></li>
            <li style="--indicator: #a97cff"><span><b></b>Escalabilidade</span><i style="--score: 88%"></i><strong>88</strong></li>
          </ul>
          <div class="audit-console__footer">
            <span class="build-status__dot"></span>
            Relat&oacute;rio + v&iacute;deo de valida&ccedil;&atilde;o
          </div>
        </aside>
      </div>
    </section>
  `;
}
