(function example() {
  let a = 1;
  let b = a;
  let c = a;
}());

// throws ReferenceError
console.log(a);
// throws ReferenceError
console.log(b);
// throws ReferenceError
console.log(c);
