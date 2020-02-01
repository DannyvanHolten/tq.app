module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          lighter: `var(--color-primary-lighter, #68ced0)`,
          default: `var(--color-primary-default, #47c4c6)`,
          darker: `var(--color-primary-darker, #41b3b4)`,
        },
      },
      container: {
        center: true,
        padding: '.75rem',
      },
    },
  },
  variants: {
    backgroundColor: ['focus', 'hover', 'active'],
    width: ['responsive'],
  },
  plugins: [
    require('tailwindcss-pseudo')(),
  ],
};
