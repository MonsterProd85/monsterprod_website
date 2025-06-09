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
