if (foo) {
  const bar = 1;
  console.log(foo);
  switch (bar) {
    case 1: {
      console.log(bar);
      break;
    }
  }
  /** baz func */
  function baz() {
    console.log(foo);
  }
}
