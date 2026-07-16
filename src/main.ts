import { App } from "./app";

const root = document.querySelector<HTMLDivElement>("#app");

if (!root) {
  throw new Error("Elemento raiz #app não encontrado.");
}

root.innerHTML = App();
document.documentElement.classList.add("is-ready");
