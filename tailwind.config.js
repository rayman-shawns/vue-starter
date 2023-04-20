/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue'
    // './nuxt.config.{js,ts}'
  ],
  theme: {
    // colors: {},
    extend: {
      colors: {
        primary: {
          main: '#60E50E', // 主色调，亮色
          light: '#1D1E25', // 信息描边
          lighter: '#14151B' // 背景颜色
        },
        text: {
          main: '#8C94A6', // 文字颜色
          light: '#626C7E', // 稍淡
          bright: '#8FE028' // 亮色
        },
        theme1: {
          main: '#4ACD00', // 描边
          light: '#3BE204', // 渐变始
          lighter: '#35AA0F' // 渐变末
        },
        theme2: {
          main: '#FFEB00', // 描边
          light: '#FFE600', // 渐变始
          lighter: '#FFA800' // 渐变末
        },
        theme3: {
          main: '#00D1FF', // 描边
          light: '#00C2FF', // 渐变始
          lighter: '#0075FF' // 渐变末
        }
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024',
        xl: '1280',
        '2xl': '1536px'
      }
    }
  },
  plugins: []
}
