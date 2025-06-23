// Theme toggler - handles dark/light mode switching
document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const html = document.documentElement;

  // Load theme from localStorage, default to dark mode
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    html.classList.remove('dark');
    themeIcon.textContent = '🌙';
  } else {
    // Default to dark mode (when savedTheme is 'dark' or null)
    html.classList.add('dark');
    themeIcon.textContent = '☀️';
  }

  // Theme toggle functionality
  toggleBtn.addEventListener('click', function () {
    html.classList.toggle('dark');
    const isDark = html.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    themeIcon.textContent = isDark ? '☀️' : '🌙';
  });
}); 