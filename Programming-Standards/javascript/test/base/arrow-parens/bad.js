[1, 2, 3].map(number => {
  const nextNumber = number + 1;
  `A string containing the ${nextNumber}.`;
});

[1, 2, 3].map(number => {
  `A long string with the ${number}. It’s so long that we don’t want it to take up space on the .map line!`
});

[1, 2, 3].map(x => {
  const y = x + 1;
  return x * y;
});
