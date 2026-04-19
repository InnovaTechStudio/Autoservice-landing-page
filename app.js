document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("navbarToggle");
    const menu = document.getElementById("navbarMenu");

    toggle.addEventListener("click", () => {
        menu.classList.toggle("navbar__menu--open");
    });
});