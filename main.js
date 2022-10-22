const body = document.querySelector("body")

// ======================== Nav toggler ========================
const nav = document.querySelector("nav")
nav.querySelector(".toggle-menu").addEventListener("click", () => nav.classList.toggle("shown"))

// ======================== Nav-item toggler ========================
const menu = document.querySelector(".menu")
menu.querySelectorAll(".nav-item")
.forEach(item => item.addEventListener("click", () => {
    menu.querySelector(".selected").classList.toggle("selected")
    item.classList.toggle("selected")
}))

// ======================== Lang toggler ========================
const lang = document.querySelector(".lang")
lang.querySelectorAll(".lang-item")
.forEach(item => item.addEventListener("click", () => {
    lang.querySelector(".selected").classList.toggle("selected")
    item.classList.toggle("selected")
}))