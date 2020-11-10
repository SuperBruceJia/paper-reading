const value = 1;
const atom = {
  value,
  addValue(newValue) {
    return atom.value + newValue;
  },
};
