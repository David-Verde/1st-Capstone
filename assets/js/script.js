// toggle mobile menu
const menu = document.getElementById('menu');
const menuLinks = document.querySelectorAll('#menu a');
const menuToggler = document.getElementById('menu-toggler');
const closeMenuBtn = document.getElementById('menu-close-btn');

function toggleMenu(event, prevent = true) {
  if (prevent) event.preventDefault();
  document.body.classList.toggle('no-scroll');
  menu.classList.toggle('show');
}

menuToggler.addEventListener('click', (event) => {
  toggleMenu(event);
});

closeMenuBtn.addEventListener('click', (event) => {
  toggleMenu(event);
});

menuLinks.forEach((link) => link.addEventListener(
  'click',
  (event) => toggleMenu(event, false),
));

//  Speakers 
const speakers = [
  {
    name: 'James Hetfiled',
    title: 'Vocals and Rift Guitar',
    image: 'person1.jpg',
    bio: 'Main member of metallica since the beginning.',
  },
  {
    name: 'Cliff Burton',
    title: 'Bass and Vocals',
    image: 'person2.jpg',
    bio: 'Great Bassist but died on the road',
  },
  {
    name: 'Kirk Hammet',
    title: 'Main guitar and Guitar God',
    image: 'person3.jpg',
    bio: 'I learn to Play Guitar thanks to this guy here',
  },
  {
    name: 'Lars Ulrich',
    title: 'Drumm and Vocals',
    image: 'person4.jpg',
    bio: 'This guy knows how to play a drumm.',
  },
];

const speakersPlaceHolder = document.querySelector('#speakers .persons');

speakers.forEach((speaker, index) => {
  speakersPlaceHolder.innerHTML += `
  <div class="person ${index > 1 ? 'mobile-hide' : ''}">
    <div class="person-graphic">
      <img src="./assets/img/${speaker.image}" alt="" />
    </div>
    <div class="person-info">
      <h4 class="person-name">${speaker.name}</h4>
      <p class="person-title"><em>${speaker.title}</em></p>
      <p class="person-bio">${speaker.bio}</p>
    </div>
  </div>
  `;
});

// More Speakers button
const moreSpeakerButton = document.getElementById('toggle-more-speakers');
moreSpeakerButton.addEventListener(
  'click',
  (event) => {
    event.preventDefault();
    document.querySelectorAll('.mobile-hide').forEach((el) => {
      el.classList.toggle('mobile-hide');
    });
    moreSpeakerButton.style.display = 'none';
  },
);