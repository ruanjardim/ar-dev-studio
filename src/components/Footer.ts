export function Footer(): string {
  const currentYear = new Date().getFullYear();

  return `
    <footer class="site-footer">
      <div class="site-footer__inner shell">
        <div class="site-footer__brand">
          <span class="site-footer__label">AR Dev Studio</span>
          <p>Produtos digitais e sistemas web sob medida.</p>
        </div>

        <div class="site-footer__contact" aria-label="Contato">
          <a class="button button--footer" href="mailto:contato@ardevstudio.com">
            contato@ardevstudio.com
          </a>
        </div>

        <div class="site-footer__bottom">
          <span>&copy; ${currentYear} AR Dev Studio.</span>
          <span>Software House.</span>
        </div>
      </div>
    </footer>
  `;
}
