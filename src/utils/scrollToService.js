export const SERVICE_SCROLL_OFFSET = 120;

export function scrollToServiceSection(id) {
  const el = document.getElementById(id);
  if (!el) return false;

  const top =
    el.getBoundingClientRect().top + window.scrollY - SERVICE_SCROLL_OFFSET;
  window.scrollTo({ top, behavior: "smooth" });
  return true;
}

export function scrollToServiceFromHash() {
  const hash = window.location.hash;
  if (!hash || hash.length < 2) return false;
  return scrollToServiceSection(hash.slice(1));
}
