// ===== REVEAL ON SCROLL =====
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, {
  threshold: 0.15
});

reveals.forEach(el => observer.observe(el));


// ===== PARALLAX PREMIUM =====
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  document.querySelectorAll(".parallax").forEach(el => {
    const speed = parseFloat(el.dataset.speed) || 0.2;
    const offset = scrollY * speed;

    el.style.transform = `translate3d(0, ${offset}px, 0)`;
  });
});


/* =========================
   LANG TOGGLE
========================= */
let currentLang = 'en';

function setLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) {
            el.innerHTML = t[key];
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (t[key] !== undefined) {
            el.setAttribute('placeholder', t[key]);
        }
    });

    document.getElementById('langToggle').textContent = lang === 'en' ? 'ES' : 'EN';
    document.documentElement.lang = lang;
}

document.getElementById('langToggle').addEventListener('click', () => {
    setLanguage(currentLang === 'en' ? 'es' : 'en');
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
            : '¡Mensaje enviado! Nos pondremos en contacto pronto.'))
        .catch(() => alert(currentLang === 'en'
            ? 'Something went wrong. Please try again.'
            : 'Algo salió mal. Por favor intenta de nuevo.'));
});


/* =========================
   LUCIDE ICONS
========================= */
lucide.createIcons();