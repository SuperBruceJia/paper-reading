const foo = function foo(bar) {
  const { args } = bar;
  let input = args;
  return {
    bar,
    args
  }
}