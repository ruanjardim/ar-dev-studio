import "./styles/base.css";

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("Elemento #app não encontrado.");
}

app.innerHTML = `
  <main>
    <section class="container" style="padding: 4rem 0;">
      <h1>AR Dev Studio</h1>
      <p>Arquitetura antes do código. Evolução além da entrega.</p>
    </section>
  </main>
`;
