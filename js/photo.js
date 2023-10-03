import { Data } from './data.js';
import { getRandomInt, getRandomIntArr } from './util.js';
import { comment } from './comment.js';

const { PHOTOS, DESCRIPTION, LIKES } = Data();

const photo = () => {
  return {
    id: getRandomInt(1, 25),
    url: 'photos/' + getRandomInt(PHOTOS.MIN, PHOTOS.MAX) + '.jpg',
    description: getRandomIntArr(DESCRIPTION),
    likes: getRandomInt(LIKES.MIN, LIKES.MAX),
    comments: new Array(getRandomInt(3, 10)).fill(null).map(() => comment()),
  }
};

export { photo };
