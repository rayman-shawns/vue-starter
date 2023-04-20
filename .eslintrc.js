module.exports = {
  extends: ['@nuxtjs/eslint-config-typescript', 'plugin:prettier/recommended'],
  rules: {
    'vue/multi-word-component-names': 0, // 关闭vue文件和组件命名校验
    'vue/singleline-html-element-content-newline': 'off', // 禁用单行标签内容需换行的校验
    'vue/multiline-html-element-content-newline': 'off', // 禁用多行标签内容需换行的校验
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'prefer-const': 2, // 首选const
    'comma-style': [2, 'last'],
  },
}
