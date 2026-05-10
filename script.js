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

// Easter egg 1: секрет в консоли
console.log(
  '%c🌿 Резюмешка v2.0 %c\n%cСпасибо, что заглянул(а) в консоль 👀\n%cСекретный код: попробуй ↑↑↓↓←→←→BA',
  'font-size:18px;color:#a78bfa',
  '',
  'font-size:13px;color:#c4b5fd',
  'font-size:12px;color:#8b5cf6'
);

// Easter egg 2: Konami Code
let konami = [];
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
  konami.push(e.key);
  konami = konami.slice(-10);
  if (konami.every((k, i) => k === konamiCode[i])) {
    konami = [];
    document.querySelectorAll('.petal').forEach((p) => {
      p.style.animationPlayState = 'paused';
    });
    const msg = document.createElement('div');
    msg.textContent = '🌸 Секретный режим активирован! 🌸';
    msg.style.cssText = 'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:rgba(255,255,255,0.15);backdrop-filter:blur(20px);color:#fff;padding:2rem 3rem;font-size:1.5rem;border-radius:0;z-index:999;border:1px solid rgba(255,255,255,0.1);text-align:center;animation:fadeIn 0.5s';
    document.body.appendChild(msg);
    setTimeout(() => {
      msg.remove();
      document.querySelectorAll('.petal').forEach((p) => {
        p.style.animationPlayState = 'running';
      });
    }, 3000);
  }
});

// Easter egg 3: клик по аватару 5 раз
let avatarClicks = 0;
const avatar = document.querySelector('.avatar');
avatar?.addEventListener('click', () => {
  avatarClicks++;
  if (avatarClicks >= 5) {
    avatarClicks = 0;
    document.querySelectorAll('.petal').forEach((p) => {
      p.style.animationDuration = '0.5s';
    });
    setTimeout(() => {
      document.querySelectorAll('.petal').forEach((p) => {
        p.style.animationDuration = '';
      });
    }, 2000);
  }
});
