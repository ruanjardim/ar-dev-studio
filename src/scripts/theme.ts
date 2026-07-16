const THEME_STORAGE_KEY = "ar-dev-studio-theme";
const DARK_THEME = "dark";
const LIGHT_THEME = "light";

type Theme = typeof DARK_THEME | typeof LIGHT_THEME;

function readStoredTheme(): Theme {
  try {
    return localStorage.getItem(THEME_STORAGE_KEY) === DARK_THEME ? DARK_THEME : LIGHT_THEME;
  } catch {
    return LIGHT_THEME;
  }
}

function storeTheme(theme: Theme): void {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    return;
  }
}

function updateToggle(toggle: HTMLButtonElement, theme: Theme): void {
  const isDark = theme === DARK_THEME;

  toggle.setAttribute("aria-pressed", String(isDark));
  toggle.setAttribute("aria-label", isDark ? "Alternar tema claro" : "Alternar tema escuro");
}

function applyTheme(theme: Theme): void {
  document.documentElement.dataset.theme = theme;
  storeTheme(theme);

  document
    .querySelectorAll<HTMLButtonElement>("[data-theme-toggle]")
    .forEach((toggle) => updateToggle(toggle, theme));
}

export function setupThemeToggle(): void {
  const toggle = document.querySelector<HTMLButtonElement>("[data-theme-toggle]");

  if (!toggle) {
    return;
  }

  applyTheme(readStoredTheme());

  toggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.dataset.theme === DARK_THEME ? DARK_THEME : LIGHT_THEME;
    applyTheme(currentTheme === DARK_THEME ? LIGHT_THEME : DARK_THEME);
  });
}
