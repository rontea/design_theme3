
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
});