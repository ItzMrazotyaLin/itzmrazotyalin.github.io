const COOKIE_NAME = 'iml.github.site.lang';

const translations = {
    ru: {
        header: "Мои работы",
        desc1: "Проект по созданию сборки на базе Windows 7, содержащей экосистему Microsoft 2010-х годов",
        go: "Перейти (GitHub Pages)"
    },
    en: {
        header: "My Works",
        desc1: "A project to create a Windows 7-based build containing the Microsoft ecosystem of the 2010s",
        go: "View (GitHub Pages)"
    }
};

function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days*24*60*60*1000));
    document.cookie = `${name}=${value};expires=${d.toUTCString()};path=/;SameSite=Lax`;
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

function applyLanguage(lang) {
    if (!translations[lang]) {
        lang = 'en';
        setCookie(COOKIE_NAME, lang, 365);
    }

    document.getElementById('works-header').innerText = translations[lang].header;
    document.getElementById('desc-1').innerText = translations[lang].desc1;
    document.getElementById('btn-text-1').innerText = translations[lang].go;
    
    document.getElementById('btn-ru').classList.toggle('active', lang === 'ru');
    document.getElementById('btn-en').classList.toggle('active', lang === 'en');
    document.documentElement.lang = lang;
    setCookie(COOKIE_NAME, lang, 365);
}

function setLanguage(lang) {
    setCookie(COOKIE_NAME, lang, 365);
    applyLanguage(lang);
}

window.onload = () => {
    const savedLang = getCookie(COOKIE_NAME);

    if (!savedLang || !translations[savedLang]) {
        applyLanguage('en');
    } else {
        applyLanguage(savedLang);
    }
};