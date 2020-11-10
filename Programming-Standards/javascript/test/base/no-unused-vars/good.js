const foo = 1;
console.log(foo);

function bar(baz) {
  console.log(baz);
}
bar();

const { baz, ...rest } = data;
console.log(rest);

try {
} catch (e) { }

(function (foo, bar, baz, qux) {
  return qux;
})();
