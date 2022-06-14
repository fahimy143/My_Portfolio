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
btn1.onclick = function () {
  modal.style.display = 'block';
  modalTitle.textContent = cards[0].title;
  modalDesc.textContent = cards[0].description;
  modalImg.src = cards[0].img;
  modaltag1.textContent = cards[0].tags[0];
  modaltag2.textContent = cards[0].tags[1];
  modaltag3.textContent = cards[0].tags[2];
  modaltag4.textContent = cards[0].tags[3];
  modallive.href = cards[0].liveDemoLink;
  modalgithub.href = cards[0].githubLink;
};

btn2.onclick = function () {
  modal.style.display = 'block';
  modalTitle.textContent = cards[1].title;
  modalDesc.textContent = cards[1].description;
  modalImg.src = cards[1].img;
  modaltag1.textContent = cards[1].tags[0];
  modaltag2.textContent = cards[1].tags[1];
  modaltag3.textContent = cards[1].tags[2];
  modaltag4.textContent = cards[1].tags[3];
  modallive.href = cards[1].liveDemoLink;
  modalgithub.href = cards[1].githubLink;
};

