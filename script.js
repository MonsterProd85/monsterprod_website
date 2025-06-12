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