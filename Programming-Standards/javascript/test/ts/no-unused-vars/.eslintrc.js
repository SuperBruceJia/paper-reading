module.exports = {
  rules: {
    /** 同 JS 规则的 TS 版本 */
    '@typescript-eslint/no-unused-vars': ['error', {
      args: 'after-used',
      ignoreRestSiblings: true,
    }]
  }
}
