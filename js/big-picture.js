const bigPicture = document.querySelector('.big-picture');
const body = document.querySelector('body');
const bigPictureClose = document.querySelector('.big-picture__cancel');

const commentsCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
commentsCount.classList.add('hidden');
commentsLoader.classList.add('hidden');

const onPopupEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    onBigPictureCloseClick();
  }
};

const onBigPictureOpenClick = () => {
  bigPicture.classList.remove('hidden');
  body.classList.remove('modal-open');
  document.addEventListener('keydown', onPopupEscKeydown);
};

const onBigPictureCloseClick = () => {
  bigPicture.classList.add('hidden');
  body.classList.add('modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);
};

  modalOpenElement.addEventListener('click', () => {
    openUserModal();
  });

modalCloseElement.addEventListener('click', () => {
  closeUserModal();
});

modalCloseElement.addEventListener('keydown', (evt) => {
  if (isEnterEvent(evt)) {
    closeUserModal();
  }
});







