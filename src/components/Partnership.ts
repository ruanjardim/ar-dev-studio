function SolutionIllustration(): string {
  return `
    <svg class="solution-illustration" viewBox="0 0 640 520" role="img" aria-label="Ilustra&ccedil;&atilde;o de um produto digital sendo planejado e desenvolvido">
      <defs>
        <linearGradient id="screen-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#173a58" />
          <stop offset="1" stop-color="#0d2a4a" />
        </linearGradient>
        <linearGradient id="deck-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#dce8f2" />
          <stop offset="1" stop-color="#a4bad2" />
        </linearGradient>
        <linearGradient id="product-coral" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#ff9a78" />
          <stop offset="1" stop-color="#ff5e72" />
        </linearGradient>
        <linearGradient id="product-teal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#5fe0d0" />
          <stop offset="1" stop-color="#2fa7b8" />
        </linearGradient>
        <filter id="card-shadow" x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow dx="0" dy="12" stdDeviation="12" flood-color="#0d2a4a" flood-opacity=".18" />
        </filter>
      </defs>

      <g class="solution-illustration__halo">
        <circle cx="318" cy="272" r="218" />
        <circle cx="318" cy="272" r="172" />
      </g>
      <path class="solution-illustration__shadow" d="m88 400 300-166 188 110-300 166z" />
      <path class="solution-illustration__deck" d="m76 365 307-171 192 113-306 173z" fill="url(#deck-gradient)" />
      <path class="solution-illustration__edge" d="m76 365 193 115 306-173v25L269 505 76 390z" />
      <path class="solution-illustration__screen" d="m115 94 350-20v274L115 366z" fill="url(#screen-gradient)" />
      <path class="solution-illustration__screen-edge" d="m101 82 379-23v305l-379 20zm30 29v237l318-18V92z" />

      <g class="solution-illustration__ui">
        <rect class="solution-illustration__panel solution-illustration__panel--coral" x="157" y="126" width="111" height="76" rx="8" />
        <circle class="solution-illustration__play" cx="212" cy="164" r="18" />
        <path class="solution-illustration__play-icon" d="m207 154 16 10-16 10z" />
        <rect class="solution-illustration__line solution-illustration__line--teal" x="283" y="126" width="132" height="18" rx="6" />
        <rect class="solution-illustration__line" x="283" y="156" width="102" height="11" rx="5" />
        <rect class="solution-illustration__line" x="283" y="179" width="120" height="11" rx="5" />
        <rect class="solution-illustration__chart-panel" x="157" y="224" width="258" height="86" rx="8" />
        <path d="m177 285 37-31 34 14 44-54 42 24 55-49" />
        <circle cx="214" cy="254" r="6" />
        <circle cx="292" cy="214" r="6" />
        <circle cx="389" cy="189" r="6" />
      </g>

      <g class="solution-illustration__keyboard">
        <path d="m195 380 181-99 105 62-181 102z" />
        <path d="m221 378 156-84M243 392l156-84M267 405l155-84M291 418l155-84" />
        <path d="m241 355 105 62M273 337l105 62M306 319l105 62M338 301l105 62" />
      </g>

      <g class="solution-illustration__cube" transform="translate(455 60)">
        <path d="m0 28 42-24 42 24-42 24z" />
        <path d="m0 28 42 24v48L0 76z" />
        <path d="m84 28-42 24v48l42-24z" />
      </g>

      <g class="solution-illustration__floating-card solution-illustration__floating-card--idea" filter="url(#card-shadow)">
        <rect x="45" y="150" width="72" height="72" rx="15" />
        <path d="M72 182a11 11 0 1 1 17 9v7H72v-7a11 11 0 0 1 0-9Zm2 22h13" />
      </g>
      <g class="solution-illustration__floating-card solution-illustration__floating-card--quality" filter="url(#card-shadow)">
        <rect x="493" y="126" width="74" height="74" rx="15" />
        <path d="m512 163 10 10 21-25" />
      </g>
      <g class="solution-illustration__floating-card solution-illustration__floating-card--data" filter="url(#card-shadow)">
        <rect x="495" y="350" width="88" height="60" rx="15" />
        <path d="M514 388v-15M530 388v-28M546 388v-38M562 388v-23" />
      </g>

      <g class="solution-illustration__person solution-illustration__person--one">
        <circle cx="126" cy="291" r="17" />
        <path d="m109 310 35-4 20 78-50 6z" />
        <path d="m145 326 55-44M118 385l-24 66M151 384l27 56" />
      </g>
      <g class="solution-illustration__person solution-illustration__person--two">
        <circle cx="507" cy="253" r="16" />
        <path d="m488 271 34-3 19 72-47 7z" />
        <path d="m493 290-57-32M500 342l-27 66M527 340l22 59" />
      </g>
      <g class="solution-illustration__person solution-illustration__person--three">
        <circle cx="353" cy="354" r="15" />
        <path d="m336 371 33-2 15 55-45 6z" />
        <path d="m342 387-38 30M342 427l-30 44M371 423l42 20" />
      </g>

      <g class="solution-illustration__signals">
        <path d="M61 182h74M61 195h49M489 190h94M512 203h71" />
        <circle cx="59" cy="182" r="6" />
        <circle cx="585" cy="190" r="6" />
      </g>
    </svg>
  `;
}

export function Partnership(): string {
  return `
    <section class="section section--partnership" id="parceria" aria-labelledby="partnership-title">
      <div class="shell partnership">
        <div class="partnership__visual">
          ${SolutionIllustration()}
          <span class="partnership-visual-badge partnership-visual-badge--one">Produto real</span>
          <span class="partnership-visual-badge partnership-visual-badge--two">Time integrado</span>
        </div>

        <div class="partnership__content">
          <p class="eyebrow">Parceria t&eacute;cnica</p>
          <h2 id="partnership-title">Muito mais do que alocar pessoas. Solucionamos o problema de forma transparente.</h2>
          <p>
            A AR Dev entra para entender o contexto, assumir a responsabilidade t&eacute;cnica
            e construir a solu&ccedil;&atilde;o com visibilidade do in&iacute;cio ao pr&oacute;ximo ciclo.
          </p>
          <ul class="partnership__principles">
            <li><span>01</span><strong>Diagn&oacute;stico antes da aloca&ccedil;&atilde;o</strong></li>
            <li><span>02</span><strong>Responsabilidade sobre o resultado</strong></li>
            <li><span>03</span><strong>Transpar&ecirc;ncia em cada entrega</strong></li>
          </ul>
          <a class="text-link" href="#modelos">Conhecer modelos de trabalho <span aria-hidden="true">&rarr;</span></a>
        </div>
      </div>
    </section>
  `;
}
