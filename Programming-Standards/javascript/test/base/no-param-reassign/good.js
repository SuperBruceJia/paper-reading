function f3(obj) {
  const key = Object.prototype.hasOwnProperty.call(obj, 'key') ? obj.key : 1;
}

function f4(obj) {
  let foo = obj;
  foo = 123;
}

// 对 Koa 等常用库豁免
router.post('/', ctx => {
  ctx.body = { code: 0 };
});
