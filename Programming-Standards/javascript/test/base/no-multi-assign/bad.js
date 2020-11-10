(function example() {
  /**
  * JavaScript 把它解释为
  * let a = ( b = ( c = 1 ) );
  * let 关键词只适用于变量 a，变量 b 和变量 c 则变成了全局变量。
  */
  let a = b = c = 1;
}());

// throws ReferenceError
console.log(a);
// 1
console.log(b);
// 1
console.log(c);
