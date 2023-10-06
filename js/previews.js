import { photos } from './photos.js'
import { show } from './big-picture.js'

const previewTemplate = document.querySelector('#picture').content.querySelector('.picture');
const previews = document.querySelector('.pictures');

const renderPreview = (picture) => {
  const preview = previewTemplate.cloneNode(true);
  preview.querySelector('.picture__img').src = picture.url;
  preview.querySelector('.picture__comments').textContent = picture.comments.length;
  preview.querySelector('.picture__likes').textContent = picture.likes;

  preview.addEventListener('click', (e) => {
    e.preventDefault();
    show(picture);
  });

  return preview;
}

const renderPreviews = () => {
  let previewListFragment = document.createDocumentFragment();

  photos.forEach((photo) => {
    previewListFragment.appendChild(renderPreview(photo));
  });

  previews.appendChild(previewListFragment);
}

export { renderPreviews }

