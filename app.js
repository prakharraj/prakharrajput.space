// Stagger link card animations on load
document.querySelectorAll('.link-card').forEach((card, i) => {
  card.style.opacity = '0';
  card.style.animation = `fadeUp 0.5s ease ${0.35 + i * 0.07}s forwards`;
});
