import { photos } from './photos.js'

const previewTemplate = document.querySelector('#picture').content.querySelector('.picture');
const previews = document.querySelector('.pictures');

const renderPreview = ({url, likes, comments}) => {
  const preview = previewTemplate.cloneNode(true);
  preview.querySelector('.picture__img').src = url;
  preview.querySelector('.picture__comments').textContent = comments.length;
  preview.querySelector('.picture__likes').textContent = likes;

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

