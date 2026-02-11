import en from './locales/en.json';
import hi from './locales/hi.json';

const translations = { en, hi };

class I18n {
  constructor() {
    this.lang = localStorage.getItem('site-lang') || 'en';
    this.init();
  }

  init() {
    this.applyTranslations();
    this.updateToggleButton();
  }

  setLanguage(lang) {
    this.lang = lang;
    localStorage.setItem('site-lang', lang);
    this.applyTranslations();
    this.updateToggleButton();
  }

  toggleLanguage() {
    const newLang = this.lang === 'en' ? 'hi' : 'en';
    this.setLanguage(newLang);
  }

  applyTranslations() {
    const elements = document.querySelectorAll('[data-i18n]');
    const data = translations[this.lang];

    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (data[key]) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = data[key];
        } else {
          el.innerText = data[key];
        }
      }
    });

    document.documentElement.lang = this.lang;
  }

  updateToggleButton() {
    const btn = document.getElementById('lang-toggle');
    if (btn) {
      btn.innerText = this.lang === 'en' ? 'हिन्दी' : 'English';
    }
  }
}

const i18n = new I18n();
export default i18n;
