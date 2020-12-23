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
    'no-var': 2, //使用const申明引用类型，避免使用var
    'no-const-assign': 2, //禁止修改使用const声明的变量
    'prefer-const': 2, //使用let而非var
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
}
