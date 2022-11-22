const DEFAULT_SCALE_VALUE = 100;
const SCALE_STEP = 25;
const scaleField = document.querySelector('.scale__control--value');
const previewImg = document.querySelector('.img-upload__preview').children[0];

let scaleValue = DEFAULT_SCALE_VALUE;

export const onZoomOutButtonClick = ()=> {
  if(scaleValue - SCALE_STEP > 0) {
    scaleValue -= SCALE_STEP;
    scaleField.value = `${scaleValue}% `;
    previewImg.style = `transform:scale(${scaleValue / 100} )`;
  }
};

export const onZoomInButtonClick = ()=> {
  if(scaleValue + SCALE_STEP <= 100 ) {
    scaleValue += SCALE_STEP;
    scaleField.value = `${scaleValue}% `;
    previewImg.style = `transform:scale(${scaleValue / 100} )`;
  }
};

export const resetScaleValue = () => {
  scaleField.value = `${DEFAULT_SCALE_VALUE}%`;
  scaleValue = DEFAULT_SCALE_VALUE;
  previewImg.style = `transform:scale(${DEFAULT_SCALE_VALUE / 100})`;
};
