const dropMenu = document.querySelector(".drop-menu");
const navMenu = document.querySelector(".nav-menu");

dropMenu.addEventListener("click", () => {
    dropMenu.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    dropMenu.classList.remove("active");
    navMenu.classList.remove("active");
}))