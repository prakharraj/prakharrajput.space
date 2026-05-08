// Animate sections on scroll using IntersectionObserver
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.08 }
);

document.querySelectorAll('.section').forEach((section, i) => {
  section.style.animationDelay = `${i * 0.05}s`;
  section.style.animationPlayState = 'paused';
  observer.observe(section);
});
