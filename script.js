const content = document.querySelectorAll('.card, .about-text, .about-image');
function revealOnScroll() {
  content.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('in-view');
    }
  });
}
// const cards = document.querySelectorAll('.card');
// function checkCards() {
//   cards.forEach(card => {
//     const rect = card.getBoundingClientRect();
//     if (rect.top < window.innerHeight - 100) {
//       card.classList.add('in-view');
//     }
//   });
// }
// window.addEventListener('scroll', checkCards);
// window.addEventListener('load', checkCards);

// Mise à jour de l'année
document.getElementById('year').textContent = new Date().getFullYear();


window.addEventListener('load', () => {
  let lastKnownScrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
  const scrollCheckIntervalMs = 100;
  if (typeof toggleHeaderClass === 'function') {
    toggleHeaderClass();
  } else {
    console.error("toggleHeaderClass function is not defined by the time 'load' event fires or is not a function.");
  }
  function handleScrollChange() {
    const currentScrollY = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (currentScrollY !== lastKnownScrollPosition) {
      if (typeof toggleHeaderClass === 'function') {
        toggleHeaderClass();
        addAnimationToCardsOnScroll()
      }
      lastKnownScrollPosition = currentScrollY;
    }
  }
  setInterval(handleScrollChange, scrollCheckIntervalMs);
});


window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

const header = document.querySelector('.header');
function toggleHeaderClass() {
  const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
  if (scrollPosition > 10) {
    header.classList.add('header-scrolled');
  } else {
    header.classList.remove('header-scrolled');
  }
  console.log('scroll position', scrollPosition);
  console.log('header class', header.classList);
}

function addAnimationToCardsOnScroll() {
  const cards = document.querySelectorAll('.cards');

  if (window.scrollY > 400) {
    cards.classList.add('card-animation');
  }
}

// randomise the tagline in the main title
const taglines = [
  "Faites briller vos évènements",
  "Son, lumière, action !",
  "Des événements inoubliables",
  "Créons ensemble des moments magiques"
];

const mainTitleElement = document.getElementById('mainTitle');

const randomIndex = Math.floor(Math.random() * taglines.length);
const selectedTagline = taglines[randomIndex];

mainTitleElement.textContent = `${selectedTagline}`;

// scale about-image when hovering about button
document.querySelector('.btn-secondary').addEventListener('mouseenter', function() {
  const aboutImage = document.querySelector('.about-image img');
  if (aboutImage) {
    aboutImage.classList.add('about-image-scaled');
  }
});

document.querySelector('.btn-secondary').addEventListener('mouseleave', function() {
  const aboutImage = document.querySelector('.about-image img');
  if (aboutImage) {
    aboutImage.classList.remove('about-image-scaled');
  }
});


// Add this to your existing script.js file or create a new script
document.addEventListener('DOMContentLoaded', function() {
    // Select all inputs and textarea in the contact form
    const formInputs = document.querySelectorAll('.contact-form input, .contact-form textarea');
    
    // label color in contact form
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            const label = document.querySelector(`label[for="${this.id}"]`);
            if (label) {
              label.classList.add('contact-label-focus');
            }
        });
        input.addEventListener('blur', function() {
            const label = document.querySelector(`label[for="${this.id}"]`);
            if (label) {
              label.classList.remove('contact-label-focus');
            }
        });
    });
});