const content = document.querySelectorAll('.card, .about-text, .about-image');

function revealOnScroll() {
  content.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('in-view');
    }
  });
}

const cards = document.querySelectorAll('.card');

function checkCards() {
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      card.classList.add('in-view');
    }
  });
}

window.addEventListener('scroll', checkCards);
window.addEventListener('load', checkCards);


window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Mise à jour de l'année
document.getElementById('year').textContent = new Date().getFullYear();


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
window.addEventListener('scroll', toggleHeaderClass);
window.addEventListener('load', toggleHeaderClass);

setInterval(toggleHeaderClass, 100);