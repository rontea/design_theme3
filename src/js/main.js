
/*
const menuIcon = document.getElementById("menuIcon");
const sideInfo = document.getElementById("sideInfo");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("active");
  sideInfo.classList.toggle("active");
});


const navSide = document.getElementById("navSide");
const sideMenu = document.getElementById("sideMenu");

navSide.addEventListener("click", () => {
  navSide.classList.toggle("active");
  sideMenu.classList.toggle("active");
});

const submenuToggles = document.querySelectorAll(".submenu-toggle");

submenuToggles.forEach(toggle => {
  toggle.addEventListener("click", () => {
    toggle.parentElement.classList.toggle("active");
    const symbol = toggle.querySelector("span");
    symbol.textContent = toggle.parentElement.classList.contains("active") ? "−" : "+";
  });
}); */


/** Colors Test */

const toggleBtn = document.getElementById("theme-toggle");
  const root = document.documentElement;

  toggleBtn.addEventListener("click", () => {
    const currentTheme = root.getAttribute("data-theme");
    const isDark = currentTheme === "dark";

    root.setAttribute("data-theme", isDark ? "light" : "dark");
    toggleBtn.textContent = isDark ? "🌙 Dark Mode" : "☀️ Light Mode";
  });

  // Optional: set theme based on system preference on load
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    root.setAttribute("data-theme", "dark");
    toggleBtn.textContent = "☀️ Light Mode";
  }