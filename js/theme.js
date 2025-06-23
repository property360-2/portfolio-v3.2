// Theme toggler - handles dark/light mode switching
document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const html = document.documentElement;

  // Load theme from localStorage
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    html.classList.add('dark');
    themeIcon.textContent = '☀️';
  } else if (savedTheme === 'light') {
    html.classList.remove('dark');
    themeIcon.textContent = '🌙';
  }

  // Theme toggle functionality
  toggleBtn.addEventListener('click', function () {
    html.classList.toggle('dark');
    const isDark = html.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    themeIcon.textContent = isDark ? '☀️' : '🌙';
  });
}); 