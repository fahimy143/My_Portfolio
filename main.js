/* Hamburger menu codes */
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

/*  Popup window codes */
const cards = [{
  key: 1,
  id: 'c-img1',
  title: 'Tonic',
  company_name: 'Tonic',
  company_type: 'Back End Dev',
  company_year: '2015',
  description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  img: './images/snap.png',
  alt: 'Card1 image',
  tags: ['html', 'Ruby on Rails', 'css', 'javascript'],
  githubLink: 'https://github.com/fahimy143/My_Portfolio',
  liveDemoLink: '',
},
{
  key: 2,
  id: 'c-img2',
  title: 'Multi-Post Sorties',
  company_name: 'FACEBOOK',
  company_type: 'Full Stack Dev',
  company_year: '2015',
  description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  img: './images/avi.png',
  alt: 'Card2 image',
  tags: ['html', 'Ruby on Rails', 'css', 'javascript'],
  githubLink: 'https://github.com/fahimy143/My_Portfolio',
  liveDemoLink: '',
},
{
  key: 3,
  id: 'c-img3',
  title: 'Facebook 360',
  company_name: 'FACEBOOK',
  company_type: 'Full Stack Dev',
  company_year: '2015',
  description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  img: './images/tonic.png',
  alt: 'Card3 image',
  tags: ['html', 'Ruby on Rails', 'css', 'javascript'],
  githubLink: 'https://github.com/fahimy143/My_Portfolio',
  liveDemoLink: '',
},
{
  key: 4,
  id: 'c-img4',
  title: 'Uber Navigator',
  company_name: 'Uber',
  company_type: 'Lead Developer',
  company_year: '2015',
  description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  img: './images/prof.png',
  alt: 'Card4 image',
  tags: ['html', 'Ruby on Rails', 'css', 'javascript'],
  githubLink: 'https://github.com/fahimy143/My_Portfolio',
  liveDemoLink: '',
}];

const CardWrap = document.querySelector('#card-section');
const lunchCards = () => {
  cards.forEach((item) => {
    const list = document.createElement('li');
    list.classList.add('grid-card');
    const workImg = document.createElement('img');
    workImg.classList.add('card-img');
    if (item.key % 2 === 0) {
      workImg.classList.add('c-2');
    }
    workImg.src = item.img;
    workImg.alt = item.alt;
    workImg.id = item.id;
    list.appendChild(workImg);
    const workbody = document.createElement('div');
    workbody.classList.add('card-body');
    const cardHead = document.createElement('h2');
    cardHead.classList.add('card-title');
    cardHead.innerText = item.title;
    workbody.appendChild(cardHead);
    const workatt = document.createElement('div');
    workatt.classList.add('card-attribut');
    const companyName = document.createElement('span');
    companyName.classList.add('att1');
    companyName.innerText = item.company_name;
    workatt.appendChild(companyName);
    const dotImg = document.createElement('img');
    dotImg.classList.add('dot');
    dotImg.src = './images/Dot.png';
    dotImg.alt = 'dot';
    workatt.appendChild(dotImg);
    const companyType = document.createElement('span');
    companyType.classList.add('att2');
    companyType.innerText = item.company_type;
    workatt.appendChild(companyType);
    const secDotImg = document.createElement('img');
    secDotImg.classList.add('dot');
    secDotImg.src = './images/Dot.png';
    secDotImg.alt = 'dot';
    workatt.appendChild(secDotImg);
    const companyDate = document.createElement('span');
    companyDate.classList.add('att2');
    companyDate.innerText = item.company_year;
    workatt.appendChild(companyDate);
    workbody.appendChild(workatt);

    const workDescription = document.createElement('p');
    workDescription.classList.add('card-text');
    workDescription.innerText = item.description;
    workbody.appendChild(workDescription);
    const projectTags = document.createElement('ul');
    projectTags.classList.add('tag-section');
    item.tags.forEach((tech) => {
      const techItem = document.createElement('li');
      techItem.classList.add('tag-div');
      const tag = document.createElement('span');
      tag.classList.add('tag');
      tag.innerText = tech;
      techItem.appendChild(tag);
      projectTags.appendChild(techItem);
    });

    workbody.appendChild(projectTags);
    const seeMoreBtn = document.createElement('button');
    seeMoreBtn.type = 'button';
    seeMoreBtn.classList.add('button');
    seeMoreBtn.innerText = 'See Project';
    seeMoreBtn.dataset.key = item.key;
    seeMoreBtn.id = `myBtn${item.key}`;
    workbody.appendChild(seeMoreBtn);
    list.appendChild(workbody);
    CardWrap.appendChild(list);
  });
};

lunchCards();

const modalTitle = document.querySelector('#myModal h2');
const modalImg = document.querySelector('#myModal #pic1');
const modalDesc = document.querySelector('#myModal .description');
const modaltag1 = document.querySelector('#myModal .tag1');
const modaltag2 = document.querySelector('#myModal .tag2');
const modaltag3 = document.querySelector('#myModal .tag3');
const modaltag4 = document.querySelector('#myModal .tag4');
const modallive = document.querySelector('#myModal #live1');
const modalgithub = document.querySelector('#myModal #github1');

const modal = document.getElementById('myModal');
const btn1 = document.getElementById('myBtn1');
const btn2 = document.getElementById('myBtn2');
const btn3 = document.getElementById('myBtn3');
const btn4 = document.getElementById('myBtn4');

const span = document.getElementsByClassName('close')[0];

btn1.onclick = function () {
  modal.style.display = 'block';
  modalTitle.textContent = cards[0].title;
  modalDesc.textContent = cards[0].description;
  modalImg.src = cards[0].img;
  modaltag1.textContent = 'HTML';
  modaltag2.textContent = 'Ruby on Rails';
  modaltag3.textContent = 'CSS';
  modaltag4.textContent = 'JavaScript';
  modallive.href = cards[0].liveDemoLink;
  modalgithub.href = cards[0].githubLink;
};

btn2.onclick = function () {
  modal.style.display = 'block';
  modalTitle.textContent = cards[1].title;
  modalDesc.textContent = cards[1].description;
  modalImg.src = cards[1].img;
  modaltag1.textContent = 'HTML';
  modaltag2.textContent = 'Ruby on Rails';
  modaltag3.textContent = 'CSS';
  modaltag4.textContent = 'JavaScript';
  modallive.href = cards[1].liveDemoLink;
  modalgithub.href = cards[1].githubLink;
};

btn3.onclick = function () {
  modal.style.display = 'block';
  modalTitle.textContent = cards[2].title;
  modalDesc.textContent = cards[2].description;
  modalImg.src = cards[2].img;
  modaltag1.textContent = 'HTML';
  modaltag2.textContent = 'CSS';
  modaltag3.textContent = 'JavaScript';
  modaltag4.textContent = 'Ruby on Rails';
  modallive.href = cards[3].liveDemoLink;
  modalgithub.href = cards[3].githubLink;
};

btn4.onclick = function () {
  modal.style.display = 'block';
  modalTitle.textContent = cards[3].title;
  modalDesc.textContent = cards[3].description;
  modalImg.src = cards[3].img;
  modaltag1.textContent = 'HTML';
  modaltag2.textContent = 'CSS';
  modaltag3.textContent = 'JavaScript';
  modaltag4.textContent = 'Roby on Rails';
  modallive.href = cards[3].liveDemoLink;
  modalgithub.href = cards[3].githubLink;
};

span.onclick = function () {
  modal.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};
