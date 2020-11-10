module.exports = {
  rules: {
    /**
     * 避免在赋值语句 = 前后换行。如果你的代码单行长度超过了 max-len 定义的长度而不得不换行，那么使用括号包裹。
     */
    'operator-linebreak': ['error', 'before', { overrides: { '=': 'none' } }],
  },
};
