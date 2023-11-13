import { isEscEvent } from './util.js';

const COMMENTS_LOAD_STEP = 5;

const bigPicture = document.querySelector('.big-picture');
const body = document.querySelector('body');
const bigPictureClose = document.querySelector('.big-picture__cancel');

const commentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');

const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');
const commentList = document.querySelector('.social__comments');

let commentsLoaded = [];

let commentsCount = COMMENTS_LOAD_STEP;

const onPopupEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    onBigPictureClose();
  }
};

const onBigPictureClose = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  bigPictureClose.removeEventListener('click', onBigPictureClose);
  document.removeEventListener('keydown', onPopupEscKeydown);

  commentList.innerHTML = '';
  commentsCount = COMMENTS_LOAD_STEP;
  commentsLoaded = [];
}

const renderComment = (comment) => {
  const commentPicture = commentTemplate.cloneNode(true);

  commentPicture.querySelector('.social__picture').src = comment.avatar;
  commentPicture.querySelector('.social__picture').alt = comment.name;
  commentPicture.querySelector('.social__text').textContent = comment.message;

  return commentPicture;
}

const renderComments = (comments) => {

  const onCommentsLoaderClick = () => {
    renderComments(comments);
  }

  commentsCount = (comments.length < COMMENTS_LOAD_STEP) ? comments.length : commentsCount;
  commentsLoaded = comments.slice(0, commentsCount);

  commentList.innerHTML = '';

  commentCount.textContent = `${commentsLoaded.length} из ${comments.length} комментариев`;

  let commentsListFragment = document.createDocumentFragment();

  commentsLoaded.forEach(comment => {
    commentsListFragment.appendChild(renderComment(comment));
  });

  commentList.appendChild(commentsListFragment);

  if (comments.length > COMMENTS_LOAD_STEP && commentsLoaded.length < comments.length) {
    commentsLoader.classList.remove('hidden');
    commentsLoader.addEventListener('click', onCommentsLoaderClick, { once: true })
  } else {
    commentsLoader.classList.add('hidden');
  }

  commentsCount += COMMENTS_LOAD_STEP;
}

const show = (picture) => {
  body.classList.add('modal-open');
  commentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  bigPicture.querySelector('.big-picture__img').src = picture.url;
  bigPicture.querySelector('.likes-count').textContent = picture.likes;
  bigPicture.querySelector('.comments-count').textContent = picture.comments.length;
  bigPicture.querySelector('.social__caption').textContent = picture.description;

  renderComments(picture.comments);

  bigPictureClose.addEventListener('click', onBigPictureClose);
  document.addEventListener('keydown', onPopupEscKeydown);
  bigPicture.classList.remove('hidden');
}

export { show }




