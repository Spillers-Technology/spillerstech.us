(() => {
  const menu = document.querySelector(".mobileMenu");
  if (!menu) return;

  const summary = menu.querySelector("summary");
  const closeMenu = (restoreFocus = false) => {
    if (!menu.open) return;
    menu.open = false;
    summary?.setAttribute("aria-label", "Open navigation");
    if (restoreFocus) summary?.focus({ preventScroll: true });
  };

  menu.addEventListener("toggle", () => {
    summary?.setAttribute("aria-label", menu.open ? "Close navigation" : "Open navigation");
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => closeMenu());
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menu.open) closeMenu(true);
  });

  window.matchMedia("(min-width: 961px)").addEventListener("change", (event) => {
    if (event.matches) closeMenu();
  });
})();
