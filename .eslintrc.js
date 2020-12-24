module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'camelcase': 2,
    'quotes': [1, 'single'], //字符串使用单引号
    'no-duplicate-imports': 2,
    'vue/no-use-v-if-with-v-for': [
      'error',
      {
        allowUsingIterationVar: false
      }
    ],
    // 不允许出现未使用组件
  }
};
