module.exports = {
  rules: {
    /**
     * 计算指数时，可以使用 ** 运算符。
     */
    'no-restricted-properties': [
      'warn',
      {
        object: 'Math',
        property: 'pow',
        message: 'Please use ** instand'
      }
    ]
  }
};
