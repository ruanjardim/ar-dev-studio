export type RouteDefinition = {
  path: string;
  view: () => string;
  title?: string;
};

type RouterOptions = {
  root: HTMLElement;
  routes: RouteDefinition[];
  notFound: RouteDefinition;
  afterRender?: () => void;
};

export type Router = {
  start: () => void;
  navigate: (path: string) => void;
  render: () => void;
};

function normalizePath(path: string): string {
  const pathWithoutQuery = path.split("?")[0];
  const normalizedPath = pathWithoutQuery.replace(/\/+$/, "");

  return normalizedPath || "/";
}

function isModifiedClick(event: MouseEvent): boolean {
  return event.ctrlKey || event.metaKey || event.shiftKey || event.altKey;
}

function shouldHandleNavigation(
  event: MouseEvent,
  link: HTMLAnchorElement,
): boolean {
  if (event.defaultPrevented || event.button !== 0 || isModifiedClick(event)) {
    return false;
  }

  if (link.target && link.target !== "_self") {
    return false;
  }

  if (link.hasAttribute("download")) {
    return false;
  }

  const destination = new URL(link.href, window.location.origin);

  return (
    destination.origin === window.location.origin &&
    link.hasAttribute("data-router-link")
  );
}

export function createRouter({
  root,
  routes,
  notFound,
  afterRender,
}: RouterOptions): Router {
  function findCurrentRoute(): RouteDefinition {
    const currentPath = normalizePath(window.location.pathname);

    return (
      routes.find((route) => normalizePath(route.path) === currentPath) ??
      notFound
    );
  }

  function scrollToCurrentPosition(): void {
    const hash = window.location.hash;

    if (!hash) {
      window.scrollTo({ top: 0, behavior: "instant" });
      return;
    }

    const target = document.querySelector<HTMLElement>(hash);

    if (target) {
      target.scrollIntoView();
    }
  }

  function render(): void {
    const route = findCurrentRoute();

    root.innerHTML = route.view();

    if (route.title) {
      document.title = route.title;
    }

    afterRender?.();

    requestAnimationFrame(() => {
      scrollToCurrentPosition();
    });
  }

  function navigate(path: string): void {
    const destination = new URL(path, window.location.origin);
    const currentUrl = `${window.location.pathname}${window.location.search}${window.location.hash}`;
    const nextUrl = `${destination.pathname}${destination.search}${destination.hash}`;

    if (currentUrl !== nextUrl) {
      window.history.pushState({}, "", nextUrl);
    }

    render();
  }

  function handleDocumentClick(event: MouseEvent): void {
    const target = event.target;

    if (!(target instanceof Element)) {
      return;
    }

    const link = target.closest<HTMLAnchorElement>("a[href]");

    if (!link || !shouldHandleNavigation(event, link)) {
      return;
    }

    event.preventDefault();
    navigate(link.href);
  }

  function start(): void {
    document.addEventListener("click", handleDocumentClick);
    window.addEventListener("popstate", render);

    render();
  }

  return {
    start,
    navigate,
    render,
  };
}