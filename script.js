// Donation tracker logic
const tracker = document.getElementById('tracker-fill');
const currentAmount = 3000;
const goal = 10000;
const percentage = (currentAmount / goal) * 100;
tracker.style.width = percentage + '%';
