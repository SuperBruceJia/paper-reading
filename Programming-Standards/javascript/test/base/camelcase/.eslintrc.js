module.exports = {
  rules: {
    /**
     * 使用驼峰命名法（camelCase）命名对象、函数和实例。
     */
    camelcase: [
      'error',
      {
        ignoreDestructuring: true,
        properties: 'never',
      }
    ]
  }
};
