foo += 1;
for (let i = 0; i < 10; i += 1) {
  console.log(i);
}

// Not good but accepatble so far.
for (let i = 0; i < 10; i++) {
  console.log(i);
}
