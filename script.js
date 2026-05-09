const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

sections.forEach((section) => observer.observe(section));

const subtitle = document.querySelector('.subtitle');
const text = subtitle.textContent;
subtitle.textContent = '';

let i = 0;
function type() {
  if (i < text.length) {
    subtitle.textContent += text[i];
    i++;
    setTimeout(type, 60);
  }
}

setTimeout(type, 400);
