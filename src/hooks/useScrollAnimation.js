import { useEffect } from "react";

export function useScrollAnimation(deps = []) {
  useEffect(() => {
    const selectors = ".animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right";

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    const elements = document.querySelectorAll(selectors);
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, deps);
}
