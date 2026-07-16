import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

type DefaultLayoutOptions = {
  content: string;
};

export function DefaultLayout({ content }: DefaultLayoutOptions): string {
  return `
    <div class="app-shell">
      <a class="skip-link" href="#conteudo">Ir para o conteúdo</a>
      ${Header()}
      <main class="site-main" id="conteudo">
        ${content}
      </main>
      ${Footer()}
    </div>
  `;
}
