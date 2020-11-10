module.exports = {
  rules: {
    /**
     * 强制在 function 的左括号之前使用一致的空格
     */
    'space-before-function-paren': [
      'error',
      { anonymous: 'always', named: 'never', asyncArrow: 'always' }
    ]
  }
};
