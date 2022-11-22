const previewPicture = document.querySelector('.img-upload__preview');
const DEFAULT_FILTER_CLASS = 'effects__preview--original';
let currentFilterClassModifier = 'original';

export const onEffectsRadioButtonsChange = (evt) => {
  previewPicture.classList.remove(`effects__preview--${currentFilterClassModifier}`);
  previewPicture.classList.add(`effects__preview--${evt.target.value}`);
  currentFilterClassModifier = evt.target.value;
};

export const resetFilter = () => {
  previewPicture.classList.remove(`effects__preview--${currentFilterClassModifier}`);
  previewPicture.classList.add(DEFAULT_FILTER_CLASS);
  currentFilterClassModifier = 'original';
};
