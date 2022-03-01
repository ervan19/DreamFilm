const hamburgerMenu = document.querySelector(".hamburger-menu");
const linksMobile = document.querySelector(".linksMobile");
const body = document.querySelector("body");
hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("open");
  linksMobile.classList.toggle("active");
  body.classList.toggle("mobileVersion");
});
