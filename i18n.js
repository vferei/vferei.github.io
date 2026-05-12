const i18n = {
  ru: {
    title: 'Резюмешка',
    name: 'Вероника Я.',
    subtitle: 'PR-специалист',
    desc: 'Помогаю брендам говорить с аудиторией на одном языке.',
    areas: 'Профессиональные области',
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
  document.querySelector('[data-i18n="name"]').textContent = t.name;
  document.querySelector('[data-i18n="subtitle"]').textContent = t.subtitle;
  document.querySelector('[data-i18n="desc"]').textContent = t.desc;
  document.querySelector('[data-i18n="areas"]').textContent = t.areas;
  document.querySelector('[data-i18n="skills"]').textContent = t.skills;
  document.querySelector('[data-i18n="prof"]').textContent = t.prof;
  document.querySelectorAll('[data-i18n="press"]').forEach((el) => el.textContent = t.press);
  document.querySelectorAll('[data-i18n="strategy"]').forEach((el) => el.textContent = t.strategy);
  document.querySelectorAll('[data-i18n="media"]').forEach((el) => el.textContent = t.media);
  document.querySelectorAll('[data-i18n="copy"]').forEach((el) => el.textContent = t.copy);
  document.querySelectorAll('[data-i18n="smm"]').forEach((el) => el.textContent = t.smm);
  document.querySelector('[data-i18n="general"]').textContent = t.general;
  document.querySelector('[data-i18n="langs_title"]').textContent = t.langs_title;
  document.querySelector('[data-i18n="lang_ru_label"]').textContent = t.lang_ru;
  document.querySelector('[data-i18n="lang_en_label"]').textContent = t.lang_en;
  document.querySelector('[data-i18n="lang_cn_label"]').textContent = t.lang_cn;
  document.querySelector('[data-i18n="lang_fr_label"]').textContent = t.lang_fr;
  document.querySelector('[data-i18n="edu"]').textContent = t.edu;
  document.querySelector('[data-i18n="edu_place"]').textContent = t.edu_place;
  document.querySelector('[data-i18n="edu_prog"]').textContent = t.edu_prog;
  document.querySelector('[data-i18n="edu_years"]').textContent = t.edu_years;
  document.querySelector('[data-i18n="courses"]').textContent = t.courses;
  document.querySelector('[data-i18n="exp"]').textContent = t.exp;
  document.querySelector('[data-i18n="contacts"]').textContent = t.contacts;
  document.querySelector('[data-i18n="btn"]').textContent = lang === 'ru' ? 'EN' : 'RU';
}

document.addEventListener('DOMContentLoaded', () => {
  applyLang(currentLang);
  document.querySelector('[data-i18n="btn"]')?.addEventListener('click', () => {
    applyLang(currentLang === 'ru' ? 'en' : 'ru');
    document.dispatchEvent(new Event('langchange'));
  });
});
