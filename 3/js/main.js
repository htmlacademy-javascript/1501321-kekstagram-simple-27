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

const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * Math.abs(max - min) + Math.min(min, max));


const checkStringLength = (checkedString, maxLength) =>
  checkedString.length <= maxLength;

const createIdGenerator = (startNumber, maxNumber = Infinity) =>
  () => {
    startNumber++;
    if (startNumber > maxNumber) {
      return maxNumber;
    }
    return startNumber;
  };

const itemIdGenerator = createIdGenerator(0);
const photoIdGenerator = createIdGenerator(0);
const photoDescriptionIndexGenerator = createIdGenerator(-1, PHOTOS_DESCRIPTION.length - 1);

const getPhotoItem = () =>
  (
    {
      id: itemIdGenerator(),
      url: `photos/${photoIdGenerator()}.jpg`,
      description: PHOTOS_DESCRIPTION[photoDescriptionIndexGenerator()],
      likes: getRandomNumber(15, 200),
      comments: getRandomNumber(0, 200),
    }
  );

const getArrayFromPhotoItems = () =>
  Array.from({length: PHOTO_COUNT}, getPhotoItem);
