export function scrollTo(selector: string) {
  document.querySelector(selector)?.scrollIntoView({ behavior: "smooth" });
}
