// bad
const foo = a && b < 0 || c > 0 || d + 1 === 0;

// bad
const bar = a ** b - 5 % d;

// bad, 可能陷入一种 (a || b) && c 的思考
if (a || b && c) {
  return d;
}

// bad
const bar1 = a + b / c * (d / e);
