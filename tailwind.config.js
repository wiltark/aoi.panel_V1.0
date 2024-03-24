/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'bgr': "url('https://www.lediligent.com/wp/wp-content/uploads/2021/03/Community-Server-scaled.jpg')",

      },
      colors: {
        'background': '#25252C',
        'box': '#181A1E',
        'primary': '#839BF1',
        'warning': '#CC5411',
        'success': '#339424',
        'danger': '#BA1111',
        'disabled': '#181818',
        'login': '#141414',
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        DEFAULT: '0.25rem',
        DEFAULT: '4px',
        'md': '20px',
        'lg': '0.5rem',
        'full': '9999px',
        'large': '12px',
      }
    }
  },
  plugins: [],
}

