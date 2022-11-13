/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  theme: {
    colors: {
      warn: 'var(--c-warn)',
      danger: 'var(--c-danger)',
      success: 'var(--c-success)',
      main: 'var(--c-main)',

      'success-bg': 'var(--c-success-bg)',
      'warn-bg': 'var(--c-warn-bg)',

      black: 'var(--c-black)',
      'dark-gray': 'var(--c-dark-gray)',
      'light-gray': 'var(--c-light-gray)',
      light: 'var(--c-light)',
      white: 'var(--c-white)',

      'transparent-2': 'var(--c-transparent-2)',
      'transparent-1': 'var(--c-transparent-1)',
    },
  },
  content: {
    relative: true,
    files: [
      'src/**/*.{vue,js}',
      'src/components/**/*.{vue,js}',
      'src/view/**/*.{vue,js}',
    ],
  },
}
