// Preloader Animation Feature

var loader = document.getElementById("preloader");
window.addEventListener("load", () => {
  loader.style.display = "none";
});
//  Hamburger

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const logoLink = document.querySelector("logoSymbol");
const projectMenu = document.querySelector("main");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-linkd").forEach((n) =>
  n.addEventListener("click", () => {
    navMenu.classList.remove("active");
  })
);