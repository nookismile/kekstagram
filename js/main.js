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

const getRandomIntArr = (array) => {
  return array[getRandomInt(0, array.length-1)];
};

stringCount('Текст',10);

const PHOTOS_COUNT = 25;
let photo = [];

const likes = {
  MIN: 15,
  MAX: 200,
}

const Comments = {
  MIN: 2,
  MAX: 6,
}

const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const description = [
  'Без фильтров',
  'Новая камера',
  'Зацените фотку!',
  'Хороший ракурс',
  'Просто так',
  'Из архива',
];

const authors = [
  'Гендальф',
  'Фродо',
  'Арагорн',
  'Сэм'
];

const addComment = () => {
  let comments = [];
    for (let i = 0; i < getRandomInt(Comments.MIN, Comments.MAX); i++) {
      comments.push({
          id: getRandomInt(0, 999),
          avatar: 'img/avatar-' + getRandomInt(1, 6) + '.svg',
          message: getRandomIntArr(messages),
          name: getRandomIntArr(authors)
        }
      );
    }
    return comments;
};

const addPhoto = () => {
  for(let i = 0; i <= PHOTOS_COUNT; i++) {
    photo.push({
      id: i,
      url: 'photos/' + (i + 1) + '.jpg',
      description: getRandomIntArr(description),
      likes: getRandomInt(likes.MIN, likes.MAX),
      comments: addComment(),
    });
  }
  return photo;
};

console.log(addPhoto());
