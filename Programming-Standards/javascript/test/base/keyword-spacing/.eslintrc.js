module.exports = {
  rules: {
    /**
     * 强制在关键字前后使用一致的空格
     */
    'keyword-spacing': [
      'error',
      {
        overrides: {
          if: { after: true },
          for: { after: true },
          while: { after: true },
          else: { after: true }
        }
      }
    ]
  }
};
