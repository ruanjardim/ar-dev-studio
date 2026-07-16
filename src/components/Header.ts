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
    <svg class="brand-mark" viewBox="0 0 36 36" role="img" aria-labelledby="logo-cube-title">
      <title id="logo-cube-title">Logo Cube da AR Dev Studio</title>
      <path class="brand-mark__face brand-mark__face--top" d="M18 3 31 10.5 18 18 5 10.5 18 3Z" />
      <path class="brand-mark__face brand-mark__face--left" d="M5 10.5 18 18v15L5 25.5v-15Z" />
      <path class="brand-mark__face brand-mark__face--right" d="M31 10.5v15L18 33V18l13-7.5Z" />
      <path class="brand-mark__edge" d="M18 3 31 10.5v15L18 33 5 25.5v-15L18 3Z" />
      <path class="brand-mark__line" d="M18 18v15M5 10.5 18 18l13-7.5" />
    </svg>
  `;
}

function renderNavigation(): string {
  return navigationItems
    .map((item) => `<a class="site-nav__link" href="${item.href}">${item.label}</a>`)
    .join("");
}

function ThemeToggle(): string {
  return `
    <button
      class="theme-toggle"
      type="button"
      aria-label="Alternar tema escuro"
      aria-pressed="false"
      title="Alternar tema"
      data-theme-toggle
    >
      <svg class="theme-toggle__icon theme-toggle__icon--moon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20 15.3A8.2 8.2 0 0 1 8.7 4 7 7 0 1 0 20 15.3Z" />
      </svg>
      <svg class="theme-toggle__icon theme-toggle__icon--sun" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2.8v2M12 19.2v2M4.8 4.8l1.4 1.4M17.8 17.8l1.4 1.4M2.8 12h2M19.2 12h2M4.8 19.2l1.4-1.4M17.8 6.2l1.4-1.4" />
      </svg>
    </button>
  `;
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

        <div class="site-header__actions">
          ${ThemeToggle()}
          <a class="header-cta" href="#contato">Projetar sistema</a>
        </div>
      </div>
    </header>
  `;
}
