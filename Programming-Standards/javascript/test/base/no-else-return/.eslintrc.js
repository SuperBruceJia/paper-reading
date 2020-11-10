module.exports = {
  rules: {
    /**
     * 禁止在 else 内使用 return，必须改为提前结束
     */
    'no-else-return': [
      'warn',
      {
        allowElseIf: false
      }
    ]
  }
};
