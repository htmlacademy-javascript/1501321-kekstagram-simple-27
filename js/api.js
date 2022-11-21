import { showAlert } from './utils.js';

const getData = (onSuccess) => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then((response) => {
      if(response.ok){
        return response.json();
      }
      else {
        showAlert('Проблема с загрузкой данных :(');
      }})
    .then((thumbnails) => {
      onSuccess(thumbnails);
    }).catch(()=>{
      showAlert('Проблема с загрузкой данных :(');
    });
};


// const sendData = (onSuccess, onFail, body) => {
//   fetch(
//     'https://27.javascript.pages.academy/kekstagram-simple',
//     {
//       method: 'POST',
//       body,
//     },
//   )
//     .then((response) => {
//       if (response.ok) {
//         onSuccess();
//       } else {
//         onFail('Не удалось отправить форму. Попробуйте ещё раз');
//       }
//     })
//     .catch(() => {
//       onFail('Не удалось отправить форму. Попробуйте ещё раз');
//     });
// };

export {getData};
