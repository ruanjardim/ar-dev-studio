import { HanoiGame } from "../components/hanoi/HanoiGame";

export function HanoiPage(): string {
  return `
    <main class="hanoi-page">
      <section
        class="hanoi-hero section"
        aria-labelledby="hanoi-page-title"
      >
        <div class="shell">
          <div class="hanoi-hero__content">
            <a
              class="hanoi-back-link"
              href="/logic-lab"
              data-router-link
            >
              <span aria-hidden="true">←</span>
              Voltar ao AR Logic Lab
            </a>

            <span class="eyebrow">AR Logic Lab</span>

            <h1 id="hanoi-page-title">
              Torre de Hanói
            </h1>

            <p class="hanoi-hero__description">
              Um desafio clássico de lógica, estratégia e pensamento
              algorítmico criado pelo matemático francês Édouard Lucas.
            </p>
          </div>
        </div>
      </section>

      <section
        class="hanoi-game-section section"
        aria-labelledby="hanoi-game-title"
      >
        <div class="shell">
          <div class="section-heading">
            <span class="eyebrow">Desafio interativo</span>

            <h2 id="hanoi-game-title">
              Mova toda a torre para a última haste
            </h2>

            <p>
              Escolha a quantidade de discos e tente concluir o desafio
              utilizando o menor número possível de movimentos.
            </p>
          </div>

          ${HanoiGame()}
        </div>
      </section>

      <section
        class="hanoi-about section"
        aria-labelledby="hanoi-about-title"
      >
        <div class="shell">
          <div class="hanoi-about__grid">
            <article class="hanoi-info-card">
              <span class="eyebrow">Origem</span>

              <h2 id="hanoi-about-title">
                Uma criação de Édouard Lucas
              </h2>

              <p>
                A Torre de Hanói foi apresentada em 1883 pelo matemático
                francês Édouard Lucas. O quebra-cabeça tornou-se uma
                referência no estudo de raciocínio lógico, recursividade
                e resolução estruturada de problemas.
              </p>

              <p>
                Em sua versão clássica, uma torre formada por discos de
                tamanhos diferentes precisa ser transferida de uma haste
                para outra, respeitando um conjunto simples de regras.
              </p>
            </article>

            <article class="hanoi-info-card">
              <span class="eyebrow">Objetivo</span>

              <h2>
                Como funciona
              </h2>

              <p>
                Todos os discos começam organizados na primeira haste,
                do maior para o menor. O objetivo é reconstruir a mesma
                torre na terceira haste.
              </p>

              <p>
                Embora as regras sejam simples, o número necessário de
                movimentos cresce rapidamente conforme novos discos são
                adicionados.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section
        class="hanoi-rules section"
        aria-labelledby="hanoi-rules-title"
      >
        <div class="shell">
          <div class="section-heading">
            <span class="eyebrow">Regras do jogo</span>

            <h2 id="hanoi-rules-title">
              Três regras fundamentais
            </h2>
          </div>

          <div class="hanoi-rules__grid">
            <article class="hanoi-rule-card">
              <span class="hanoi-rule-card__number" aria-hidden="true">
                01
              </span>

              <h3>
                Um disco por vez
              </h3>

              <p>
                Cada movimento permite transferir apenas um disco entre
                as hastes.
              </p>
            </article>

            <article class="hanoi-rule-card">
              <span class="hanoi-rule-card__number" aria-hidden="true">
                02
              </span>

              <h3>
                Apenas o disco superior
              </h3>

              <p>
                Somente o disco que estiver no topo de uma haste poderá
                ser movimentado.
              </p>
            </article>

            <article class="hanoi-rule-card">
              <span class="hanoi-rule-card__number" aria-hidden="true">
                03
              </span>

              <h3>
                Menor sobre maior
              </h3>

              <p>
                Um disco maior nunca poderá ser colocado sobre um disco
                menor.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section
        class="hanoi-math section"
        aria-labelledby="hanoi-math-title"
      >
        <div class="shell">
          <div class="hanoi-math__content">
            <div>
              <span class="eyebrow">Pensamento algorítmico</span>

              <h2 id="hanoi-math-title">
                O mínimo teórico de movimentos
              </h2>

              <p>
                Para uma torre com
                <strong>n</strong>
                discos, o menor número possível de movimentos é
                calculado pela expressão:
              </p>
            </div>

            <div
              class="hanoi-formula"
              aria-label="Dois elevado a n menos um"
            >
              2<sup>n</sup> − 1
            </div>

            <p>
              Com três discos, por exemplo, o desafio pode ser concluído
              em 7 movimentos. Com oito discos, o mínimo aumenta para
              255 movimentos.
            </p>
          </div>
        </div>
      </section>
    </main>
  `;
}