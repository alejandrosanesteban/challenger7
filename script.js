const btn = document.querySelector(".hamburger");
const menu = document.querySelector(".dropdown-menu");

btn.addEventListener("click", () => {
    menu.classList.toggle("open");
});