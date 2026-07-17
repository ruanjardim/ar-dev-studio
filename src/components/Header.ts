import { LogoCube } from "./LogoCube";

type NavigationItem = {
  label: string;
  href: string;
};

const navigationItems: NavigationItem[] = [
  { label: "Servi&ccedil;os", href: "/#servicos" },
  { label: "Processo", href: "/#caminho" },
  { label: "AR Logic Lab", href: "/logic-lab" },
  { label: "FAQ", href: "/#faq" },
];

function renderNavigation(): string {
  return navigationItems
    .map(
      (item) => `
        <a
          class="site-nav__link"
          href="${item.href}"
          data-router-link
        >
          ${item.label}
        </a>
      `,
    )
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
      <svg
        class="theme-toggle__icon theme-toggle__icon--moon"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M20 15.3A8.2 8.2 0 0 1 8.7 4 7 7 0 1 0 20 15.3Z" />
      </svg>

      <svg
        class="theme-toggle__icon theme-toggle__icon--sun"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path
          d="M12 2.8v2M12 19.2v2M4.8 4.8l1.4 1.4M17.8 17.8l1.4 1.4M2.8 12h2M19.2 12h2M4.8 19.2l1.4-1.4M17.8 6.2l1.4-1.4"
        />
      </svg>
    </button>
  `;
}

export function Header(): string {
  return `
    <header class="site-header" aria-label="Cabe&ccedil;alho principal">
      <div class="site-header__inner shell">
        <a
          class="brand"
          href="/"
          aria-label="AR Dev Studio, voltar ao in&iacute;cio"
          data-router-link
        >
          ${LogoCube()}

          <span class="brand__text">
            <span class="brand__name">AR Dev Studio</span>
            <span class="brand__descriptor">Software House</span>
          </span>
        </a>

        <nav class="site-nav" aria-label="Navega&ccedil;&atilde;o principal">
          ${renderNavigation()}
        </nav>

        <div class="site-header__actions">
          ${ThemeToggle()}

          <a
            class="header-cta"
            href="/#contato"
            data-router-link
          >
            Falar sobre projeto
          </a>
        </div>
      </div>
    </header>
  `;
}