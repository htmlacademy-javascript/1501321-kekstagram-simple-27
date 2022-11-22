import { isEscapeKeyPress, showAlert } from './utils.js';
import { onZoomOutButtonClick } from './photo_scale_changer.js';
import { onZoomInButtonClick } from './photo_scale_changer.js';
import { resetScaleValue } from './photo_scale_changer.js';
import { resetFilter } from './filter_changer.js';
import { onEffectsRadioButtonsChange } from './filter_changer.js';
import { sendData } from './api.js';
const fileInput = document.querySelector('.img-upload__input');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const closeButton = document.querySelector('.img-upload__cancel');
const controlSmaller = document.querySelector('.scale__control--smaller');
const controlBigger = document.querySelector('.scale__control--bigger');
const imgEffectsList = document.querySelector('.img-upload__effects');
const form = document.querySelector('.img-upload__form');
const comment = form.querySelector('.text__description');
const submitButton = form.querySelector('.img-upload__submit');

const resetForm = () => {
  resetScaleValue();
  resetFilter();
  fileInput.value = '';
  comment.value = '';
}

const onEscapeKeyDown = (evt)=> {

  if(isEscapeKeyPress(evt)) {
    evt.preventDefault();
    closeEditPictureModal();
  }
};

const onClickCloseButton = () => {
  closeEditPictureModal();
};

const closeEditPictureModal = () => {
  document.body.classList.remove('modal-open');
  uploadOverlay.classList.add('hidden');
  document.removeEventListener('keydown', onEscapeKeyDown);
  closeButton.removeEventListener('click', onClickCloseButton);
  controlSmaller.removeEventListener('click', onZoomOutButtonClick);
  controlBigger.removeEventListener('click', onZoomInButtonClick);
  imgEffectsList.removeEventListener('change', onEffectsRadioButtonsChange);
  resetForm();
};

const openEditPictureModal = () => {
  document.body.classList.add('modal-open');
  uploadOverlay.classList.remove('hidden');
  closeButton.addEventListener('click', onClickCloseButton);
  document.addEventListener('keydown', onEscapeKeyDown);
  controlSmaller.addEventListener('click', onZoomOutButtonClick);
  controlBigger.addEventListener('click', onZoomInButtonClick);
  imgEffectsList.addEventListener('change', onEffectsRadioButtonsChange);
  resetScaleValue();
};

const blockSubmitButton = () => {
 submitButton.disabled = true;
 submitButton.textContent = 'Публикуем...';
}

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
}

fileInput.addEventListener('change', ()=> {
  openEditPictureModal();
});

const setUserFormSubmit = (onSuccess) => {
  form.addEventListener('submit', (evt)=> {
  blockSubmitButton();
  evt.preventDefault();
  sendData(
    ()=> {
      onSuccess()
      unblockSubmitButton()
    },
    ()=> showAlert('Данные не отправлены:('),
    new FormData(evt.target)
  );
});
}

export {setUserFormSubmit, closeEditPictureModal};
