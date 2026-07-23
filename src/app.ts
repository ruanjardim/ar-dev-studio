import { DefaultLayout } from "./layouts/DefaultLayout";
import { ChessPage } from "./pages/ChessPage";
import { CubePage } from "./pages/CubePage";
import { HanoiPage } from "./pages/HanoiPage";
import { Home } from "./pages/Home";
import { LogicLab } from "./pages/LogicLab";
import { createRouter } from "./router/router";
import { setupChessGame } from "./scripts/chess";
import { setupCubeGame } from "./scripts/cube";
import { setupHanoiGame } from "./scripts/hanoi";
import { setupThemeToggle } from "./scripts/theme";
import "./styles/theme.css";

function NotFound(): string {
  return `
    <section class="section" aria-labelledby="not-found-title">
      <div class="shell">
        <div class="section-heading">
          <span class="eyebrow">Erro 404</span>

          <h1 id="not-found-title">
            Página não encontrada.
          </h1>

          <p>
            O endereço acessado não existe ou ainda não foi publicado.
          </p>

          <a
            class="button button--primary"
            href="/"
            data-router-link
          >
            Voltar para a Home
          </a>
        </div>
      </div>
    </section>
  `;
}

export function setupApp(root: HTMLElement): void {
  const router = createRouter({
    root,
    routes: [
      {
        path: "/",
        title: "AR Dev Studio",
        view: () =>
          DefaultLayout({
            content: Home(),
          }),
      },
      {
        path: "/logic-lab",
        title: "AR Logic Lab | AR Dev Studio",
        view: () =>
          DefaultLayout({
            content: LogicLab(),
          }),
      },
      {
        path: "/logic-lab/torre-de-hanoi",
        title: "Torre de Hanói | AR Logic Lab",
        view: () =>
          DefaultLayout({
            content: HanoiPage(),
          }),
      },
      {
        path: "/logic-lab/xadrez",
        title: "Xadrez | AR Logic Lab",
        view: () =>
          DefaultLayout({
            content: ChessPage(),
          }),
      },
      {
        path: "/logic-lab/cubo-magico",
        title: "Cubo Mágico | AR Logic Lab",
        view: () =>
          DefaultLayout({
            content: CubePage(),
          }),
      },
    ],
    notFound: {
      path: "/404",
      title: "Página não encontrada | AR Dev Studio",
      view: () =>
        DefaultLayout({
          content: NotFound(),
        }),
    },
    afterRender: () => {
      setupThemeToggle();
      setupHanoiGame();
      setupChessGame();
      setupCubeGame();
    },
  });

  router.start();
}
