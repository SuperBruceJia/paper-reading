// bad
if (test)
  return false;

// bad
let condition = true;
let test = 1;
// 在缩进不规范的时候，容易造成误解
if (condition)
  condition = false;
  test = 2;
