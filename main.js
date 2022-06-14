const menu = document.querySelector('.nav-links');
const container = document.querySelector('.nav_container');
const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');
const list = document.querySelectorAll('.item');

menuBtn.addEventListener('click', () => {
  container.classList.toggle('active');
  menu.style.display = 'flex';
  menuBtn.style.display = 'none';
  closeBtn.style.display = 'inline';
});

const closeNav = () => {
  menu.style.display = 'none';
  container.classList.remove('active');
  closeBtn.style.display = 'none';
  menuBtn.style.display = 'inline';
};

closeBtn.addEventListener('click', closeNav);

const toggleMenu = () => {
  if (document.documentElement.clientWidth <= 767) {
    container.classList.toggle('active');
    menu.style.display = 'none';
    menuBtn.style.display = 'inline';
    closeBtn.style.display = 'none';
  }
};

list.forEach((menuItem) => {
  menuItem.addEventListener('click', toggleMenu);
});
// --------------------------------------------------------------------------popup window

