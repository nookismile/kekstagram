const Slider = {
  MAX: 100,
  MIN: 0,
  STEP: 1,
};

const effectRadioGroup = document.querySelector('.effects');
const effectLevel = document.querySelector('.effect-level');
const effectLevelSlider = document.querySelector('.effect-level__slider');
const effectLevelValue = document.querySelector('.effect-level__value');
const imagePreview = document.querySelector('.img-upload__preview > img');

effectLevel.classList.add('visually-hidden')

let lastClass = '';

const effects = {
  none: () => {
    effectLevel.classList.add('visually-hidden');
    return 'none';
  },
  chrome: () => {
    effectLevel.classList.remove('visually-hidden');
    return `grayscale(${parseInt(effectLevelValue.value, 10) * 0.01})`;
  },
  sepia: () => {
    effectLevel.classList.remove('visually-hidden');
    return `sepia(${parseInt(effectLevelValue.value, 10) * 0.01})`;
  },
  marvin: () => {
    effectLevel.classList.remove('visually-hidden');
    return `invert(${parseInt(effectLevelValue.value, 10)}%)`;
  },
  phobos: () => {
    effectLevel.classList.remove('visually-hidden');
    return `blur(${(parseInt(effectLevelValue.value, 10) * 3) * 0.01}px)`;
  },
  heat: () => {
    effectLevel.classList.remove('visually-hidden');
    return `brightness(${parseInt(effectLevelValue.value, 10) * 0.01})`;
  }
}

const onEffectRadioGroupClick = (evt) => {
  if (evt.target.classList.contains('effects__preview')) {
    if (lastClass !== '') {
      imagePreview.classList.remove(lastClass);
    }

    effectLevelSlider.noUiSlider.set(100);
    let currentClass = evt.target.classList[1];
    lastClass = currentClass;

    imagePreview.classList.add(currentClass);
    imagePreview.style.filter = effects[currentClass.replace('effects__preview--', '')]();
  }
}

effectRadioGroup.addEventListener('click', onEffectRadioGroupClick);

window.noUiSlider.create(effectLevelSlider, {
  range: {
    min: Slider.MIN,
    max: Slider.MAX,
  },
  start: Slider.MAX,
  connect: 'lower',
});

effectLevelSlider.noUiSlider.on('change', () => {
  effectLevelValue.value = effectLevelSlider.noUiSlider.get();
  imagePreview.style.filter = effects[lastClass.replace('effects__preview--', '')]();
});

export { effectLevel, lastClass }
