/* =========================
   i18n TRANSLATIONS
========================= */
const translations = {
    en: {
        nav_home: "Home",
        nav_features: "Features",
        nav_how: "How it Works",
        nav_pricing: "Pricing",
        nav_contact: "Contact",
        nav_cta: "Start Free Trial",

        hero_badge: "DIGITAL SOLUTION FOR AUTOMOTIVE WORKSHOPS",
        hero_title: 'Manage your workshop with more <span>control</span>, speed and confidence',
        hero_desc: "Organize vehicles, work orders, payments and customers in one place.",
        hero_cta: "Start Free Trial",

        feat1_title: "Work Order Management",
        feat1_text: "Create, assign and track work orders in real time.",
        feat2_title: "Vehicle & Customer Tracking",
        feat2_text: "Store complete vehicle history and customer data.",
        feat3_title: "Billing & Payments Control",
        feat3_text: "Manage invoices, payments and service costs easily.",
    },

    es: {
        nav_home: "Inicio",
        nav_features: "Funciones",
        nav_how: "Cómo funciona",
        nav_pricing: "Precios",
        nav_contact: "Contacto",
        nav_cta: "Prueba Gratis",

        hero_badge: "SOLUCIÓN DIGITAL PARA TALLERES AUTOMOTRICES",
        hero_title: 'Gestiona tu taller con más <span>control</span>, rapidez y confianza',
        hero_desc: "Organiza vehículos, órdenes de trabajo, pagos y clientes en un solo lugar.",
        hero_cta: "Prueba Gratis",

        feat1_title: "Gestión de Órdenes de Trabajo",
        feat1_text: "Crea, asigna y rastrea órdenes en tiempo real.",
        feat2_title: "Seguimiento de Vehículos y Clientes",
        feat2_text: "Almacena historial completo de vehículos y clientes.",
        feat3_title: "Control de Facturación y Pagos",
        feat3_text: "Gestiona facturas y pagos fácilmente.",
    }
};

/* =========================
   LANG TOGGLE
========================= */
let currentLang = 'en';

function setLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) el.innerHTML = t[key];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (t[key]) el.setAttribute('placeholder', t[key]);
    });

    document.getElementById('langToggle').textContent =
        lang === 'en' ? 'ES' : 'EN';

    document.documentElement.lang = lang;
}

document.getElementById('langToggle').addEventListener('click', () => {
    setLanguage(currentLang === 'en' ? 'es' : 'en');
});

/* =========================
   NAVBAR TOGGLE
========================= */
const navbarToggle = document.getElementById('navbarToggle');
const navbarMenu = document.getElementById('navbarMenu');

navbarToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('navbar__menu--open');
});

navbarMenu.querySelectorAll('.navbar__link').forEach(link => {
    link.addEventListener('click', () => {
        navbarMenu.classList.remove('navbar__menu--open');
    });
});

/* =========================
   TOOLS TABS
========================= */
document.querySelectorAll('.tools__tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.tools__tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const img = document.getElementById('toolPreviewImage');
        img.src = tab.dataset.image;
        img.alt = tab.dataset.alt;
    });
});

/* =========================
   EMAILJS
========================= */
emailjs.init('SAjESMVBEEDR8tqQj');

document.querySelector('.contact__submit').addEventListener('click', () => {
    const params = {
        from_name: document.getElementById('contact-name').value,
        from_email: document.getElementById('contact-email').value,
        phone: document.getElementById('contact-phone').value,
        workshop: document.getElementById('contact-workshop').value,
        message: document.getElementById('contact-message').value,
    };

    emailjs.send('service_hftajuc', 'template_s2yqohj', params)
        .then(() => alert(currentLang === 'en'
            ? "Message sent! We'll be in touch soon."
            : "¡Mensaje enviado! Nos pondremos en contacto pronto."))
        .catch(() => alert(currentLang === 'en'
            ? "Something went wrong."
            : "Algo salió mal."));
});

/* =========================
   LUCIDE ICONS
========================= */
lucide.createIcons();

/* =========================
   REVEAL ON SCROLL
========================= */
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, { threshold: 0.15 });

reveals.forEach(el => observer.observe(el));

/* =========================
   PARALLAX
========================= */
window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    document.querySelectorAll(".parallax").forEach(el => {
        const speed = parseFloat(el.dataset.speed) || 0.2;
        const offset = scrollY * speed;

        el.style.transform = `translate3d(0, ${offset}px, 0)`;
    });
});