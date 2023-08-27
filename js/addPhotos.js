import { Data } from './data.js';
import { getRandomInt, getRandomIntArr } from './util.js';
import { addComment } from './addComment.js';

const { PHOTOS, DESCRIPTION, LIKES } = Data();

const addPhoto = () => {
  return {
    id: getRandomInt(1, 25),
    url: 'photos/' + getRandomInt(PHOTOS.MIN, PHOTOS.MAX) + '.jpg',
    description: getRandomIntArr(DESCRIPTION),
    likes: getRandomInt(LIKES.MIN, LIKES.MAX),
    comments: new Array(getRandomInt(3, 10)).fill(null).map(() => addComment()),
  }
};

export { addPhoto };
