const getRandomInt = (min, max) => {
  if (min < 0 || max < 0) {
    return -1;
  }

  if (min > max) {
    [min, max] = [max, min];
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const stringCount = (text, count) => {
  return text.length <= count;
};

const getRandomIntArr = (array) => {
  return array[getRandomInt(0, array.length-1)];
};

const isEscEvent = (evt) => {
  return evt.key === 'Escape' || evt.key === 'Esc';
};

const isEnterEvent = (evt) => {
  return evt.key === 'Enter';
};

export { getRandomInt, getRandomIntArr, stringCount, isEscEvent, isEnterEvent };
