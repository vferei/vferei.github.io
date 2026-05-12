const i18n = {
  ru: {
    title: 'Резюмешка',
    name: 'Вероника Я.',
    subtitle: 'PR-специалист',
    desc: 'Помогаю брендам говорить с аудиторией на одном языке.',
    areas: 'Профессиональные области',
    design: 'Графический дизайн',
    skills: 'Навыки',
    prof: 'Профессиональные',
    press: 'Написание пресс-релизов',
    strategy: 'Коммуникационная стратегия',
    media: 'Работа с медиа',
    copy: 'Копирайтинг',
    smm: 'Ведение соцсетей',
    general: 'Общие',
    langs_title: 'Языки',
    edu: 'Образование',
    edu_place: 'МГИМО (У) МИД России',
    edu_prog: 'Связи с общественностью и международное энергетическое сотрудничество',
    edu_years: '2025–2029',
    courses: 'Курсы',
    exp: 'Опыт работы',
    contacts: 'Контакты',
    lang_ru: 'Русский',
    lang_en: 'Английский',
    lang_cn: 'Китайский',
    lang_fr: 'Французский',
  },
  en: {
    title: 'Resume',
    name: 'Veronika Ya.',
    subtitle: 'PR Specialist',
    desc: 'I help brands speak the same language as their audience.',
    areas: 'Professional Areas',
    design: 'Graphic Design',
    skills: 'Skills',
    prof: 'Professional',
    press: 'Press release writing',
    strategy: 'Communication strategy',
    media: 'Media relations',
    copy: 'Copywriting',
    smm: 'Social media management',
    general: 'General',
    langs_title: 'Languages',
    edu: 'Education',
    edu_place: 'MGIMO University',
    edu_prog: 'Public Relations & International Energy Cooperation',
    edu_years: '2025–2029',
    courses: 'Courses',
    exp: 'Work Experience',
    contacts: 'Contacts',
    lang_ru: 'Russian',
    lang_en: 'English',
    lang_cn: 'Chinese',
    lang_fr: 'French',
  },
};

let currentLang = localStorage.getItem('lang') || 'ru';

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  const t = i18n[lang];
  document.title = t.title;
  const els = document.querySelectorAll('[data-i18n]');
  els.forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.querySelector('[data-i18n="btn"]').textContent = lang === 'ru' ? 'EN' : 'RU';
}

document.addEventListener('DOMContentLoaded', () => {
  applyLang(currentLang);
  document.querySelector('[data-i18n="btn"]')?.addEventListener('click', () => {
    applyLang(currentLang === 'ru' ? 'en' : 'ru');
  });
});
