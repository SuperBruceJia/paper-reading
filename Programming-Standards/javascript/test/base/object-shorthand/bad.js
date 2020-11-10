const value = 1;

const atom = {
  value: value,
  addValue: function (newValue) {
    return atom.value + newValue;
  },
};
