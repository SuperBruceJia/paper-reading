const itemHeight = item => (item.height > 256 ? item.largeSize : item.smallSize);

const anotherItemHeight = (item) => {
  const { height, largeSize, smallSize } = item;
  return height > 256 ? largeSize : smallSize;
};
