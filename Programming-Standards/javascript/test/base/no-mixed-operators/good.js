// good
const foo = (a && b < 0) || (c > 0) || (d + 1 === 0);

// good
const bar = (a ** b) - (5 % d);

// good
if (a || (b && c)) {
  return d;
}

// good
const bar1 = a + (b / c) * (d / e);
