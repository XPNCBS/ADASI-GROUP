export default function initializeHeaderController() {
  const header = document.querySelector<HTMLElement>('.header');

  if (!header) {
    return () => undefined;
  }

  let titleObserver: IntersectionObserver | undefined;

  const observeTitle = () => {
    titleObserver?.disconnect();

    const title = document.querySelector<HTMLElement>('.Title');

    if (!title) {
      header.classList.remove('scrolled');
      titleObserver = undefined;
      return;
    }

    titleObserver = new IntersectionObserver(
      ([entry]) => {
        header.classList.toggle('scrolled', entry.intersectionRatio < 1);
      },
      { threshold: [1] },
    );

    titleObserver.observe(title);
  };

  observeTitle();

  const domObserver = new MutationObserver(observeTitle);
  domObserver.observe(document.body, { childList: true, subtree: true });

  return () => {
    titleObserver?.disconnect();
    domObserver.disconnect();
    header.classList.remove('scrolled');
  };
}