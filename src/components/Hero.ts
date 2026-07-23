function AnimatedCube(): string {
  return `
    <div class="cube-scene" aria-hidden="true">
      <div class="hero-cube">
        <span class="hero-cube__face hero-cube__face--front">AR</span>
        <span class="hero-cube__face hero-cube__face--back">AR</span>
        <span class="hero-cube__face hero-cube__face--right"></span>
        <span class="hero-cube__face hero-cube__face--left"></span>
        <span class="hero-cube__face hero-cube__face--top"></span>
        <span class="hero-cube__face hero-cube__face--bottom"></span>
      </div>
    </div>
  `;
}

function FloatingCubes(): string {
  const particleSizes = [0.28, 0.36, 0.46, 0.58, 0.72, 0.92, 1.18, 1.55];
  const cubes = Array.from({ length: 42 }, (_, index) => {
    const size = particleSizes[(index * 5) % particleSizes.length] + (index % 13 === 0 ? 0.72 : 0);
    const depth = index % 9 === 0 ? "near" : index % 3 === 0 ? "mid" : "far";
    const opacity = depth === "near" ? 0.56 : depth === "mid" ? 0.4 : 0.26;

    return {
      left: 2 + ((index * 37) % 94),
      top: 3 + ((index * 53 + (index % 4) * 11) % 92),
      size: `${size.toFixed(2)}rem`,
      duration: `${17 + ((index * 7) % 17)}s`,
      delay: `${-(2 + ((index * 11) % 27))}s`,
      opacity,
      depth,
      path: ["a", "b", "c"][index % 3],
      wire: index % 7 === 0,
    };
  });

  return `
    <div class="floating-cubes" aria-hidden="true">
      ${cubes
        .map(
          (cube) => `
            <span
              class="floating-cube floating-cube--${cube.depth} floating-cube--path-${cube.path}${cube.wire ? " floating-cube--wire" : ""}"
              style="--cube-left:${cube.left}%; --cube-top:${cube.top}%; --cube-size:${cube.size}; --cube-duration:${cube.duration}; --cube-delay:${cube.delay}; --cube-opacity:${cube.opacity};"
            >
              <i class="floating-cube__face floating-cube__face--front"></i>
              <i class="floating-cube__face floating-cube__face--right"></i>
              <i class="floating-cube__face floating-cube__face--top"></i>
            </span>
          `,
        )
        .join("")}
    </div>
  `;
}

function ProductJourney(): string {
  return `
    <div class="product-journey" aria-hidden="true">
      <div class="product-journey__promise"><i></i>Da ideia ao produto. A gente cuida de tudo.</div>
      ${AnimatedCube()}

      <div class="hero-laptop hero-laptop--journey">
        <div class="hero-laptop__screen product-screen">
          <section class="product-screen__state product-screen__state--idea">
            <div class="idea-stroke idea-stroke--one"></div>
            <div class="idea-stroke idea-stroke--two"></div>
            <div class="idea-stroke idea-stroke--three"></div>
            <div class="idea-button"></div>
            <div class="idea-card idea-card--one"></div>
            <div class="idea-card idea-card--two"></div>
            <div class="idea-media"></div>
          </section>

          <section class="product-screen__state product-screen__state--design">
            <div class="design-topbar"><i></i><span></span><b></b></div>
            <div class="design-copy"><i></i><i></i><i></i><b></b></div>
            <div class="design-preview"><i></i><span></span></div>
            <div class="design-cards"><i></i><i></i><i></i></div>
          </section>

          <section class="product-screen__state product-screen__state--code">
            <div class="journey-code__titlebar">
              <span><i></i><i></i><i></i></span>
              <small>app.tsx</small>
            </div>
            <div class="journey-code__editor">
              <p><b>export default async function</b> <em>Home</em>() {</p>
              <p>&nbsp;&nbsp;<b>const</b> { user } = <em>useAuth</em>();</p>
              <p>&nbsp;&nbsp;<b>const</b> metrics = <u>await</u> <em>fetchMetrics</em>();</p>
              <p>&nbsp;&nbsp;<u>return</u> (</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<strong>Layout</strong>&gt;</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<strong>Hero</strong> title=<mark>&quot;Bem-vindo&quot;</mark> /&gt;</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<strong>Layout</strong>&gt;</p>
              <p>&nbsp;&nbsp;);</p>
              <p>}</p>
            </div>
          </section>

          <section class="product-screen__state product-screen__state--live">
            <div class="live-dashboard__header">
              <strong><i></i>Seu produto</strong>
              <span>uptime 99.97%</span>
            </div>
            <div class="live-dashboard__metrics">
              <article><strong>3.2<small>k</small></strong><span>usu&aacute;rios ativos</span></article>
              <article><strong>124<small>ms</small></strong><span>lat&ecirc;ncia p95</span></article>
              <article><strong>+47%</strong><span>vs. m&ecirc;s anterior</span></article>
            </div>
            <svg class="live-dashboard__chart" viewBox="0 0 520 178" preserveAspectRatio="none">
              <defs>
                <linearGradient id="journey-live-area" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stop-color="#f43f5e" stop-opacity=".28"/>
                  <stop offset="1" stop-color="#f43f5e" stop-opacity="0"/>
                </linearGradient>
              </defs>
              <path class="live-dashboard__area" d="M0 166 L45 151 L91 159 L137 124 L183 143 L229 77 L275 104 L321 43 L367 70 L413 25 L459 52 L520 13 L520 178 L0 178 Z" fill="url(#journey-live-area)"/>
              <polyline points="0,166 45,151 91,159 137,124 183,143 229,77 275,104 321,43 367,70 413,25 459,52 520,13" fill="none" stroke="#e92749" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
            </svg>
          </section>
          <span class="product-screen__shine"></span>
        </div>
        <div class="hero-laptop__hinge"></div>
        <div class="hero-laptop__base"></div>
      </div>

      <div class="hero-phone hero-phone--insight">
        <div class="hero-phone__screen">
          <div class="phone-status"><strong>09:41</strong><span><i></i><i></i><i></i></span></div>
          <span class="phone-notch"></span>
          <div class="phone-greeting">
            <i class="phone-avatar"></i>
            <span><strong>Ol&aacute;, Al&iacute;cia.</strong><small>Seus n&uacute;meros</small></span>
            <b></b>
          </div>
          <article class="phone-revenue">
            <small>RECEITA &middot; HOJE</small>
            <strong>R$ 24.8k <em>+12%</em></strong>
            <svg viewBox="0 0 140 42" preserveAspectRatio="none">
              <defs>
                <linearGradient id="phone-revenue-area" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stop-color="#fb7185" stop-opacity=".34"/>
                  <stop offset="1" stop-color="#fb7185" stop-opacity="0"/>
                </linearGradient>
              </defs>
              <path d="M0 32 L18 26 L35 30 L54 19 L72 24 L92 13 L110 20 L126 10 L140 14 L140 42 L0 42 Z" fill="url(#phone-revenue-area)"/>
              <polyline points="0,32 18,26 35,30 54,19 72,24 92,13 110,20 126,10 140,14" fill="none" stroke="#fb7185" stroke-width="2.5" vector-effect="non-scaling-stroke"/>
            </svg>
          </article>
          <div class="phone-kpis">
            <article><strong>847</strong><span>pedidos</span></article>
            <article><strong>99.9<small>%</small></strong><span>online</span></article>
          </div>
          <div class="phone-pagination"><i></i><i></i><i></i><i></i></div>
        </div>
      </div>

      <div class="product-journey__rail">
        <span class="product-journey__progress"></span>
        <ol>
          <li class="journey-step journey-step--idea"><i></i><span>Ideia</span></li>
          <li class="journey-step journey-step--design"><i></i><span>Desenho</span></li>
          <li class="journey-step journey-step--code"><i></i><span>C&oacute;digo</span></li>
          <li class="journey-step journey-step--live"><i></i><span>Live</span></li>
        </ol>
      </div>
    </div>
  `;
}

export function Hero(): string {
  return `
    <section class="hero hero--product" id="inicio" aria-labelledby="hero-title">
      <div class="hero__background" aria-hidden="true">
        <span class="hero__grid"></span>
        <span class="hero__glow"></span>
        <span class="hero__axis hero__axis--vertical"></span>
        <span class="hero__axis hero__axis--horizontal"></span>
        ${FloatingCubes()}
      </div>

      <div class="hero__inner shell">
        <div class="hero__content">
          <p class="eyebrow">Software house &middot; produto &middot; engenharia</p>
          <h1 id="hero-title">Seu MVP pode virar um produto de verdade.</h1>
          <p class="hero__lead">
            A AR Dev Studio transforma ideias, prot&oacute;tipos e sistemas em software
            confi&aacute;vel, audit&aacute;vel e preparado para evoluir.
          </p>

          <div class="hero__actions" aria-label="A&ccedil;&otilde;es principais">
            <a class="button button--primary" href="#contato">Avaliar meu projeto</a>
            <a class="button button--secondary" href="#servicos">Conhecer servi&ccedil;os</a>
          </div>

          <ul class="hero-proof" aria-label="Diferenciais da AR Dev Studio">
            <li><strong>01</strong><span>Auditoria em v&iacute;deo</span></li>
            <li><strong>02</strong><span>Arquitetura clara</span></li>
            <li><strong>03</strong><span>Evolu&ccedil;&atilde;o cont&iacute;nua</span></li>
          </ul>
        </div>

        <div class="hero-stage" aria-label="Visualiza&ccedil;&atilde;o de produto, c&oacute;digo e acompanhamento">
          <div class="hero-stage__atmosphere" aria-hidden="true">
            <span class="hero-stage__aurora hero-stage__aurora--one"></span>
            <span class="hero-stage__aurora hero-stage__aurora--two"></span>
          </div>
          ${ProductJourney()}
        </div>
      </div>
    </section>
  `;
}
