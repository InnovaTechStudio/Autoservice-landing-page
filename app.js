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
    const speed = parseFloat(el.dataset.speed);
    const offset = scrollY * speed;

    el.style.transform = `translate3d(0, ${offset}px, 0)`;
  });
});