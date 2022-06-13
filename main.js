const menu = document.querySelector(".nav-links");
const container = document.querySelector(".nav_container");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () => {
  container.classList.toggle('active');
  menu.style.display = "flex";
  menuBtn.style.display = "none";
  closeBtn.style.display = "inline";
})

const closeNav = () => {
    menu.style.display = "none";
    container.classList.toggle('nav_container');
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline";
}

closeBtn.addEventListener('click', closeNav)
