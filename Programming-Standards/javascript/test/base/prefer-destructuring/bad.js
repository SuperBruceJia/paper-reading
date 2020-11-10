function getFullName(user) {
  const firstName = user.firstName;
  const lastName = user.lastName;

  return `${firstName} ${lastName}`;
}

function foo() {
  let digits;
  const matches = '123'.match(/^(\d+)$/);
  if (matches) {
    digits = matches[1];
  }
}
