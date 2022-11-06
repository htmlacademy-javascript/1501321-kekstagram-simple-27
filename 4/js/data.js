import {getRandomNumber} from './utils.js';

const PHOTOS_DESCRIPTION = [
  'Курорт',
  'Дорога к пляжу',
  'Пляж',
  'Девушка',
  'Ужин',
  'Автомобиль',
  'Почти пустая тарелка',
  'Морс',
  'Люди машут самолёту',
  'Удобная организация хранения',
  'Пляж в Майами',
  'Белый Ауди',
  'Блюдо? Или объедки?',
  'Котосуши',
  'Пара обуви',
  'Облако',
  'Хор',
  'Авто',
  'Зачем..?',
  'Прекрасный вид',
  'Еда',
  'Закат',
  '23',
  'Концерт',
  'Заповедник',
];

const PHOTO_COUNT = 25;

const MIN_LIKES_COUNT = 15;
const MAX_LIKES_COUNT = 200;
const MIN_COMMENT_LENGTH = 15;
const MAX_COMMENT_LENGTH = 200;

const getArrayFromPhotoItems = () =>
  Array.from({length: PHOTO_COUNT}, (_, index) =>
    (
      {
        id: index + 1,
        url: `photos/${index + 1}.jpg`,
        description: PHOTOS_DESCRIPTION[index],
        likes: getRandomNumber(MIN_LIKES_COUNT, MAX_LIKES_COUNT),
        comments: getRandomNumber(MIN_COMMENT_LENGTH, MAX_COMMENT_LENGTH),
      }
    ));

getArrayFromPhotoItems();
