import { CubeGame } from "../components/cube/CubeGame";

export function CubePage(): string {
  return `
    <main class="cube-page">
      <section
        class="cube-play-section"
        aria-labelledby="cube-page-title"
      >
        <div class="shell cube-play-section__inner">
          <div class="cube-play-section__intro">
            <a
              class="cube-back-link"
              href="/logic-lab"
              data-router-link
            >
              <span aria-hidden="true">&larr;</span>
              Voltar ao AR Logic Lab
            </a>

            <div class="cube-play-section__copy">
              <span class="eyebrow">Cubo M&aacute;gico</span>

              <h1 id="cube-page-title">
                Gire faces, leia padr&otilde;es e acompanhe o cubo inteiro.
              </h1>

              <p>
                Uma experi&ecirc;ncia colorida e compacta para observar estado,
                sequ&ecirc;ncia de movimentos e organiza&ccedil;&atilde;o espacial sem
                perder a vis&atilde;o geral.
              </p>
            </div>
          </div>

          ${CubeGame()}
        </div>
      </section>

      <section
        class="cube-context-section"
        aria-labelledby="cube-context-title"
      >
        <div class="shell cube-context-section__inner">
          <div class="section-heading">
            <span class="eyebrow">Padr&otilde;es e algoritmos</span>

            <h2 id="cube-context-title">
              Um quebra-cabe&ccedil;a sobre estado, mem&oacute;ria e transforma&ccedil;&atilde;o.
            </h2>
          </div>

          <div class="cube-context-grid">
            <article class="cube-context-card">
              <span>01</span>
              <h3>Estado vis&iacute;vel</h3>
              <p>
                Cada adesivo tem uma posi&ccedil;&atilde;o e uma cor. Ao girar uma
                face, o estado muda de forma previs&iacute;vel.
              </p>
            </article>

            <article class="cube-context-card">
              <span>02</span>
              <h3>Sequ&ecirc;ncia</h3>
              <p>
                O cubo valoriza ordem de opera&ccedil;&otilde;es. O mesmo conjunto de
                giros pode gerar resultados diferentes conforme a sequ&ecirc;ncia.
              </p>
            </article>

            <article class="cube-context-card">
              <span>03</span>
              <h3>Pr&oacute;xima evolu&ccedil;&atilde;o</h3>
              <p>
                Esta etapa entrega giros, embaralhamento e leitura visual. A
                solu&ccedil;&atilde;o guiada pode entrar depois como uma camada pr&oacute;pria.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  `;
}
