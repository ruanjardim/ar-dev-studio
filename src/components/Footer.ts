export function Footer(): string {
  const currentYear = new Date().getFullYear();

  return `
    <footer class="site-footer">
      <div class="site-footer__inner shell">
        <div class="site-footer__brand">
          <span class="site-footer__label">AR Dev Studio</span>
          <p>
            Arquitetura, engenharia e evolução contínua para sistemas digitais
            que precisam sustentar crescimento real.
          </p>
        </div>

        <div class="site-footer__contact" aria-label="Próximos passos">
          <p class="site-footer__title">Pronto para evoluir seu sistema?</p>
          <a class="button button--footer" href="mailto:contato@ardevstudio.com">
            contato@ardevstudio.com
          </a>
        </div>

        <div class="site-footer__bottom">
          <span>© ${currentYear} AR Dev Studio.</span>
          <span>Software House para produtos digitais robustos.</span>
        </div>
      </div>
    </footer>
  `;
}
