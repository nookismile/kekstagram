import { photos } from './photos.js';

const pictureTemplate = document.querySelector("#picture").content.querySelector(".picture");
const pictures = document.querySelector('.pictures');

const renderPicture = ({url, likes, comments}) => {
  const randomPictureTemplate = pictureTemplate.cloneNode(true);
  randomPictureTemplate.querySelector('.picture__img').src = url;
  randomPictureTemplate.querySelector('.picture__likes').textContent = likes;
  randomPictureTemplate.querySelector('.picture__comments').textContent = comments.length;

  return randomPictureTemplate;
};

const renderPictures = () => {
  let renderPictureFragment = document.createDocumentFragment();

  photos.forEach((photo) => {
    renderPictureFragment.appendChild(renderPicture(photo));
  });

  pictures.appendChild(renderPictureFragment);
};

export { renderPictures };

