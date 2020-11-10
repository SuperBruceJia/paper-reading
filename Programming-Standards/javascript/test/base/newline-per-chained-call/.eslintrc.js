module.exports = {
  rules: {
    /**
     * 在编写多个方法链式调用(超过两个方法链式调用)时。 使用前导点，强调这行是一个方法调用，而不是一个语句。
     */
    'newline-per-chained-call': ['warn', { ignoreChainWithDepth: 2 }]
  }
};
