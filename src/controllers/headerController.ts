import { useRef } from "react";
export default function initializeHeaderController() {
  const header = document.querySelector<HTMLElement>(".header");
  const title = document.querySelector<HTMLElement>(".Title");

  if (!header || !title) {
    console.log("HEADER или TITLE не найден");
    return () => undefined;
  }

  console.log("Header controller запущен");
  console.log("Title найден:", title);

  const observer = new IntersectionObserver(
    ([entry]) => {
      console.log("Title visibility:", entry.intersectionRatio);

      if (entry.intersectionRatio < 1) {
        console.log("TITLE НЕ полностью виден → добавляем scrolled");
        header.classList.add("scrolled");
      } else {
        console.log("TITLE полностью виден → убираем scrolled");
        header.classList.remove("scrolled");
      }
    },
    {
      threshold: [1],
    },
  );

  observer.observe(title);

  return () => {
    observer.disconnect();
    header.classList.remove("scrolled");
  };
}
