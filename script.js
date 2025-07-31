// Donation tracker logic
const tracker = document.getElementById('tracker-fill');
const currentAmount = 3000;
const goal = 10000;
const percentage = (currentAmount / goal) * 100;

// Animate fill after slight delay
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    tracker.style.width = percentage + '%';
  }, 300);
});
