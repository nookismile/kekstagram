import { isEscEvent } from './util.js'

const MAX_SYMBOLS = 20;
const MAX_HASHTAGS = 5;
const MAX_COMMENTS_LENGHTH   = 140;

let inputHashtag = document.querySelector('.text__hashtags');
let inputComment = document.querySelector('.text__description');

inputComment.addEventListener('input', () => {
  inputComment.setCustomValidity('');

  let inputCommentText = inputComment.value;

  if (inputCommentText > MAX_COMMENTS_LENGHTH) {
    inputComment.setCustomValidity('Максимум 140 символов');
  }
})

inputHashtag.addEventListener('input', () => {
  inputHashtag.setCustomValidity('');

  let inputHashtagText = inputHashtag.value.toLowerCase().trim();

  if (!inputHashtagText) {
    return;
  }

  let inputArray = inputHashtagText.split(/\s+/);

  if (inputArray.length === 0) {
    return;
  }

  const isStartNotHashtag = inputArray.some((item) => {
    return item[0] !== '#';
  })

  if (isStartNotHashtag) {
    inputHashtag.setCustomValidity('Хэш-тег начинается с символа # (решётка)');
  }

  const isOnlyLatticeHashtag = inputArray.some((item) => {
    return item === '#';
  });

  if (isOnlyLatticeHashtag) {
    inputHashtag.setCustomValidity('Хэш-тег не может состоять только из решетки');
  }

  const isSplitSpaceHashtag = inputArray.some((item) => {
    return item.indexOf('#', 1) >= 1;
  })

  if (isSplitSpaceHashtag) {
    inputHashtag.setCustomValidity('Хэш-теги разделяются пробелами');
  }

  const isRepeatingHashtag = inputArray.some((item, i, arr) => {
    return arr.indexOf(item, i + 1) >= i + 1;
  })

  if (isRepeatingHashtag) {
    inputHashtag.setCustomValidity('Хэш-теги не должны повторяться');
  }

  const isLongHashtag = inputArray.some((item) => {
    return item.length > MAX_SYMBOLS;
  })

  if (isLongHashtag) {
    inputHashtag.setCustomValidity('Максимальная длина хэш-тега 20 символов, включая решетку');
  }

  if (inputArray.length > MAX_HASHTAGS) {
    inputHashtag.setCustomValidity('Максимум 5 хэш-тегов');
  }
})

const onEscapeDown = (evt) => {
  if (isEscEvent) {
    evt.preventDefault();
    evt.stopPropagation();
  }
}

inputHashtag.addEventListener('keydown', onEscapeDown);
inputComment.addEventListener('keydown', onEscapeDown);
