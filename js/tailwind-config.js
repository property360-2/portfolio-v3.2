// Tailwind CSS Configuration
tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      colors: {
        retro: {
          dark: '#0f0f0f',
          light: '#FAF3E0',
          neon: '#00FF7F',
          amber: '#FFA500',
          brown: '#3D3D3D',
          orange: '#F4A261',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
    },
  },
} 