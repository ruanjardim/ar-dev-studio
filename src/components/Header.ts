type NavigationItem = {
  label: string;
  href: string;
};

const navigationItems: NavigationItem[] = [
  { label: "Diagnóstico", href: "#diagnostico" },
  { label: "Serviços", href: "#servicos" },
  { label: "Autoridade", href: "#autoridade" },
  { label: "FAQ", href: "#faq" },
];

function LogoCube(): string {
  return `
    <svg class="brand-mark" viewBox="0 0 48 48" role="img" aria-labelledby="logo-cube-title">
      <title id="logo-cube-title">Logo Cube da AR Dev Studio</title>
      <path class="brand-mark__edge" d="M24 4 42 14.4v19.2L24 44 6 33.6V14.4L24 4Z" />
      <path class="brand-mark__face brand-mark__face--left" d="M24 24 6 14.4v19.2L24 44V24Z" />
      <path class="brand-mark__face brand-mark__face--right" d="M24 24 42 14.4v19.2L24 44V24Z" />
      <path class="brand-mark__face brand-mark__face--top" d="M24 4 42 14.4 24 24 6 14.4 24 4Z" />
      <path class="brand-mark__line" d="M24 24v20M6 14.4 24 24l18-9.6" />
    </svg>
  `;
}

function renderNavigation(): string {
  return navigationItems
    .map((item) => `<a class="site-nav__link" href="${item.href}">${item.label}</a>`)
    .join("");
}

export function Header(): string {
  return `
    <header class="site-header" aria-label="Cabeçalho principal">
      <div class="site-header__inner shell">
        <a class="brand" href="#inicio" aria-label="AR Dev Studio, voltar ao início">
          ${LogoCube()}
          <span class="brand__text">
            <span class="brand__name">AR Dev Studio</span>
            <span class="brand__descriptor">Software House</span>
          </span>
        </a>

        <nav class="site-nav" aria-label="Navegação principal">
          ${renderNavigation()}
        </nav>

        <a class="header-cta" href="#contato">Projetar sistema</a>
      </div>
    </header>
  `;
}
