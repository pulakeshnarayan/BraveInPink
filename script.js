// Sticky Navigation
const navbar = document.getElementById('navbar');
const hero = document.getElementById('home');

window.onscroll = () => {
  if (window.scrollY > hero.offsetHeight) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
};

// Donation Tracker Animation
const goalAmount = 10000;
let donatedAmount = 3000; // Example: This would be dynamically updated

const donationTracker = document.getElementById('donated-amount');
const percentage = (donatedAmount / goalAmount) * 100;

donationTracker.style.width = `${percentage}%`;
