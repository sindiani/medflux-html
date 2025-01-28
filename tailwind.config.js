/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {
      backgroundImage: {
        'login-bg': "url('/asset/bg-login.webp')",
      },
    },
  },
  plugins: [],
};
