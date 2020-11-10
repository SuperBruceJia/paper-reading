class Jedi {
  constructor() {}

  getName() {
    return this.name;
  }
}

class Rey extends Jedi {
  // 这种构造函数是不需要写的
  constructor(...args) {
    super(...args);
  }
}
