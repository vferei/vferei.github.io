const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, { threshold: 0.15 });

sections.forEach((section) => observer.observe(section));

// Пасхалка 1: двойной клик по имени
const nameEl = document.querySelector('h1');
nameEl?.addEventListener('dblclick', () => {
  const orig = nameEl.textContent;
  nameEl.textContent = '🦄 Вероника Единорог';
  nameEl.style.transition = 'color 0.3s';
  nameEl.style.color = '#f0c';
  setTimeout(() => {
    nameEl.textContent = orig;
    nameEl.style.color = '';
  }, 2000);
});

// Пасхалка 2: 3 клика по пустым разделам
const empties = document.querySelectorAll('.empty');
empties.forEach((el) => {
  let clicks = 0;
  el.addEventListener('click', () => {
    clicks++;
    if (clicks >= 3) {
      clicks = 0;
      el.textContent = '⭐ ты нашёл пасхалку! ⭐';
      el.style.color = '#f0c';
      el.style.fontSize = '1.1rem';
      setTimeout(() => {
        el.textContent = '—';
        el.style.color = '';
        el.style.fontSize = '';
      }, 3000);
    }
  });
});

// Пасхалка 3: набери "код"
let typed = [];
document.addEventListener('keydown', (e) => {
  typed.push(e.key.toLowerCase());
  typed = typed.slice(-3);
  if (typed.join('') === 'код') {
    typed = [];
    const petals = document.querySelectorAll('.petal');
    petals.forEach((p) => {
      p.style.filter = 'hue-rotate(180deg) saturate(2)';
      p.style.transition = 'filter 0.5s';
    });
    setTimeout(() => {
      petals.forEach((p) => {
        p.style.filter = '';
      });
    }, 3000);
  }
});
