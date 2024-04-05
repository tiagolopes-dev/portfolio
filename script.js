const menuToggle = document.querySelector(".menu-colapse");
const menuMobile = document.querySelector(".menu-area-mobile");

menuToggle.addEventListener("click", () => {
  menuMobile.classList.toggle("show");
});
