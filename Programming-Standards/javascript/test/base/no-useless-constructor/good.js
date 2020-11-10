class Jedi {
  name = 'Jedi';
}

class Rey extends Jedi {
  constructor(...args) {
    super(...args);
    this.name = 'Rey';
  }
}
