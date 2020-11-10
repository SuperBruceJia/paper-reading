module.exports = {
  rules: {
    /**
     * 不要使用迭代器。 
     * @reason 推荐使用 JavaScript 的高阶函数代替 for-in 或者 for-of。
     */
    'no-iterator': 'warn'
  }
};
