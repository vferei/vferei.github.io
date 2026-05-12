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

// кнопка «Наверх»
const toTop = document.createElement('button');
toTop.textContent = '↑';
toTop.setAttribute('aria-label', 'Наверх');
toTop.style.cssText = 'position:fixed;bottom:24px;right:24px;width:48px;height:48px;border-radius:0;border:1px solid rgba(255,255,255,0.1);background:rgba(255,255,255,0.06);backdrop-filter:blur(12px);color:#e6d4ff;font-size:1.4rem;cursor:pointer;z-index:99;opacity:0;transition:opacity 0.3s;pointer-events:none';
document.body.appendChild(toTop);

window.addEventListener('scroll', () => {
  toTop.style.opacity = window.scrollY > 300 ? '1' : '0';
  toTop.style.pointerEvents = window.scrollY > 300 ? 'auto' : 'none';
});

toTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// копирование email
const emailLink = document.querySelector('a[href^="mailto:"]');
emailLink?.addEventListener('click', (e) => {
  e.preventDefault();
  const email = emailLink.getAttribute('href').replace('mailto:', '');
  navigator.clipboard?.writeText(email).then(() => {
    const tip = document.createElement('span');
    tip.textContent = '✓ Скопировано';
    tip.style.cssText = 'position:absolute;top:-28px;left:50%;transform:translateX(-50%);background:rgba(255,255,255,0.1);backdrop-filter:blur(12px);color:#a78bfa;padding:4px 12px;font-size:0.8rem;border:1px solid rgba(255,255,255,0.08);white-space:nowrap;transition:opacity 0.3s';
    emailLink.style.position = 'relative';
    emailLink.appendChild(tip);
    setTimeout(() => tip.remove(), 1500);
  });
});

// параллакс на аватаре
const avatar = document.querySelector('.avatar');
avatar?.addEventListener('mousemove', (e) => {
  const rect = avatar.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width - 0.5;
  const y = (e.clientY - rect.top) / rect.height - 0.5;
  avatar.style.transform = `perspective(300px) rotateY(${x * 10}deg) rotateX(${y * -10}deg) scale(1.05)`;
  avatar.style.transition = 'transform 0.05s';
});
avatar?.addEventListener('mouseleave', () => {
  avatar.style.transform = '';
  avatar.style.transition = 'transform 0.4s';
});

// ripple-эффект по клику на секции
sections.forEach((s) => {
  s.addEventListener('click', (e) => {
    const ripple = document.createElement('span');
    const r = Math.max(s.offsetWidth, s.offsetHeight);
    const rect = s.getBoundingClientRect();
    ripple.style.cssText = `position:absolute;width:${r}px;height:${r}px;border-radius:50%;background:rgba(255,255,255,0.06);left:${e.clientX - rect.left - r/2}px;top:${e.clientY - rect.top - r/2}px;pointer-events:none;animation:ripple 0.6s ease-out forwards`;
    s.style.position = 'relative';
    s.style.overflow = 'hidden';
    s.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
});
