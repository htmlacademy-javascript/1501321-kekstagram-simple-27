const previewPicture = document.querySelector('.img-upload__preview');
const DEFAULT_FILTER_CLASS = 'effects__preview--original';
const effectLevel = document.querySelector('.effect-level__value');
const sliderElement = document.querySelector('.effect-level__slider');
const sliderSettings = {
  range: {
    min: 0,
    max: 100,
  },
  start: 80,
  step: 1,
  connect: 'lower',
};
let filterName;
let currentFilterClassModifier = 'original';
const setSliderSettings = (min, max, step, start) => {
  sliderSettings.range.min = min;
  sliderSettings.range.max = max;
  sliderSettings.step = step;
  sliderSettings.start = start;
};

export const onEffectsRadioButtonsChange = (evt) => {
  previewPicture.classList.remove(`effects__preview--${currentFilterClassModifier}`);
  previewPicture.classList.add(`effects__preview--${evt.target.value}`);
  currentFilterClassModifier = evt.target.value;
  if(evt.target.value !== 'none' && !sliderElement.noUiSlider) {
    noUiSlider.create(sliderElement, sliderSettings);
    sliderElement.noUiSlider.on('update', ()=> {
      effectLevel.value = sliderElement.noUiSlider.get();
      previewPicture.style = `filter: ${filterName}(${effectLevel.value}${filterName === 'invert' ? '%' : '' }${filterName === 'blur' ? 'px' : '' })`;
    });
  }
  switch(evt.target.value) {
    case 'none':
      previewPicture.style = 'filter:none';
      sliderElement.noUiSlider.destroy();
      break;
    case 'chrome':
      setSliderSettings(0, 1, 0.1, 0);
      filterName = 'grayscale';
      break;
    case 'sepia':
      setSliderSettings(0, 1, 0.1, 0);
      filterName = 'sepia';
      break;
    case 'marvin':
      setSliderSettings(0, 100, 1, 0);
      filterName = 'invert';
      break;
    case 'phobos':
      setSliderSettings(0, 3, 0.1, 0);
      filterName = 'blur';
      break;
    case 'heat':
      setSliderSettings(1, 3, 0.1, 0);
      filterName = 'brightness';
      break;
  }
  if(sliderElement.noUiSlider) {
    sliderElement.noUiSlider.updateOptions(sliderSettings);
  }
};

export const resetFilter = () => {
  previewPicture.classList.remove(`effects__preview--${currentFilterClassModifier}`);
  previewPicture.classList.add(DEFAULT_FILTER_CLASS);
  currentFilterClassModifier = 'original';
};
