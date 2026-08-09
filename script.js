// Theme toggle and small UI helpers
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const yearEl = document.getElementById('year');

function setTheme(t){
  body.className = t;
  localStorage.setItem('theme', t);
  themeToggle.textContent = t === 'dark' ? '☀️' : '🌙';
}

themeToggle.addEventListener('click', () => {
  setTheme(body.classList.contains('dark') ? 'light' : 'dark');
});

const saved = localStorage.getItem('theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
setTheme(saved);

if(yearEl) yearEl.textContent = new Date().getFullYear();
