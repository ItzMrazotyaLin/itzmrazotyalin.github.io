 const COOKIE_NAME = 'iml.github.site.lang';

    const translations = {
        ru: {
            header: "Мои работы",
            desc1: "Сборник проектов, созданных в Gemini",
            go: "Перейти"
        },
        en: {
            header: "My Works",
            desc1: "A collection of projects created in Gemini",
            go: "View Project"
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
        document.getElementById('works-header').innerText = translations[lang].header;
        document.getElementById('desc-1').innerText = translations[lang].desc1;
        document.getElementById('btn-text-1').innerText = translations[lang].go;
        
        document.getElementById('btn-ru').classList.toggle('active', lang === 'ru');
        document.getElementById('btn-en').classList.toggle('active', lang === 'en');
        document.documentElement.lang = lang;
    }

    function setLanguage(lang) {
        setCookie(COOKIE_NAME, lang, 365);
        applyLanguage(lang);
    }
    
    window.onload = () => {
        const savedLang = getCookie(COOKIE_NAME) || 'ru';
        applyLanguage(savedLang);
    };