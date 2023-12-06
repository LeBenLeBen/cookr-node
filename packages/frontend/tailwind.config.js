export default {
  content: ['./index.html', './chusho.config.ts', './src/**/*.{js,ts,vue}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Fredoka', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#FDF6F8',
          100: '#FCEEF1',
          200: '#F5D6DD',
          300: '#EAAEBC',
          400: '#DF869B',
          500: '#D45E79',
          600: '#C6395A',
          700: '#AB2141',
          800: '#87122D',
          900: '#60061B',
        },
        alt: {
          50: '#FAF9FB',
          100: '#F5F2F8',
          200: '#E7DFEC',
          300: '#CFBEDA',
          400: '#B6A2C3',
          500: '#9E86AC',
          600: '#856996',
          700: '#6C4B81',
          800: '#513762',
          900: '#372145',
        },
      },
    },
  },
  plugins: [],
  corePlugins: {
    container: false,
  },
};
