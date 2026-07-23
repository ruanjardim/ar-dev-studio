import { setupApp } from "./app";
import { applyStructuredData } from "./scripts/metadata";

const root = document.querySelector<HTMLDivElement>("#app");

if (!root) {
  throw new Error("Elemento raiz #app não encontrado.");
}

setupApp(root);

applyStructuredData();

document.documentElement.classList.add("is-ready");
