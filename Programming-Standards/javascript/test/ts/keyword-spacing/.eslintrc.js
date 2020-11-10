module.exports = {
  rules: {
    /** 同 JS 规则的 TS 版本 */
    '@typescript-eslint/keyword-spacing': ['error', {
      overrides: {
        if: {
          after: true,
        },
        for: {
          after: true,
        },
        while: {
          after: true,
        },
        else: {
          after: true,
        },
      },
      before: true,
      after: true,
    }]
  }
}
