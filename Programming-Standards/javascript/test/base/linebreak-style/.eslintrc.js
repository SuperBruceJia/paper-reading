module.exports = {
  rules: {
    /**
     * 只允许使用 unix 的 LF 作为换行符，Windows 的 CRLF 不可以使用
     */
    'linebreak-style': ['warn', 'unix'],
  }
};
