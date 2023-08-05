const getRandomInt = (min, max) => {
  if (min < 0 || max < 0) {
    return -1;
  }

  if (min > max) {
    [min, max] = [max, min];
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

getRandomInt(3, 6);

const stringCount = (text, count) => {
  return text.length <= count;
};

stringCount('Текст',10);
