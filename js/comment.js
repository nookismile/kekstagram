import {getRandomInt, getRandomIntArr} from './util.js';
import { Data } from './data.js';

const { MESSAGES, NAMES } = Data();

const comment = () => {
  return {
    id: getRandomInt(0, 999),
    avatar: 'img/avatar-' + getRandomInt(1, 6) + '.svg',
    message: getRandomIntArr(MESSAGES),
    name: getRandomIntArr(NAMES),
  }
};

export { comment };
