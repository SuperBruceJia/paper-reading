function getFullName(user) {
  const { firstName, lastName } = user;
  return `${firstName} ${lastName}`;
}

function foo() {
  let digits;
  const matches = '123'.match(/^(\d+)$/);
  if (matches) {
    [, digits] = matches;
  }
}
