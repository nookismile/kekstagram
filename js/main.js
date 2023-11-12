import './big-picture.js';
import './editor.js';
import './effects.js';
import './validation.js'
import { renderPreviews } from './previews.js';
import { request } from './fetch.js';
import { showError } from './alerts.js';

const onSuccess = (data) => {
  renderPreviews(data.slice());
}

const onError = () => {
  showError('Ошибка загрузки, попробуйте еще раз', 'Закрыть');
}

request(onSuccess,onError, 'GET');


