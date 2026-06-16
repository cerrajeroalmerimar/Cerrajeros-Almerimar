const toggle = document.querySelector("[data-menu-toggle]");
const menu = document.querySelector("[data-menu]");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    menu.classList.toggle("is-open", !expanded);
  });
}
