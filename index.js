document.addEventListener("DOMContentLoaded", () => {
  const text = "Hello, I'm Viraj Yadav";
  const header = document.querySelector("header h1");
  header.innerText = "";
  let i = 0;

  function type() {
    if (i < text.length) {
      header.innerText += text.charAt(i);
      i++;
      setTimeout(type, 70);
    }
  }

  type();
});

const navbar = document.getElementById('navbar');
let isScrolling;

window.addEventListener('scroll', () => {
  window.clearTimeout(isScrolling);
  isScrolling = setTimeout(() => {
    if (window.scrollY > 10) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, 50);
});

const toggle = document.getElementById('themeToggle');
const body = document.body;

toggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  toggle.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});
