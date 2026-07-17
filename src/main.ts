import "./styles/hanoi.css";

import { setupApp } from "./app";
import { applyStructuredData } from "./scripts/metadata";
import { setupThemeToggle } from "./scripts/theme";

const root = document.querySelector<HTMLDivElement>("#app");

if (!root) {
  throw new Error("Elemento raiz #app não encontrado.");
}

setupApp(root);

applyStructuredData();
setupThemeToggle();

document.documentElement.classList.add("is-ready");