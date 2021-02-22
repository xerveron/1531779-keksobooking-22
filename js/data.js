import {getRandomFloatNumber, getRandomNumber, getRandomForReduce} from './util.js';

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
];

const ADJS = [
  'Nice',
  'Great',
  'Beautiful',
  'Enormous',
  'Lovely',
  'Big',
  'Outstanding',
  'Stunning',
  'Cool',
  'Usual',
];

const PURPOSES = [
  'living',
  'working',
  'swimming in ocean',
  'fishing in lake',
  'skiing',
  'snowboarding',
  'relaxing',
  'solitude',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

const CHECKS = [
  '12:00',
  '13:00',
  '14:00',
];

const createFakeData = () => {
  const location = {
    x: getRandomFloatNumber(35.65, 35.7, 5),
    y: getRandomFloatNumber(139.7, 139.8, 5),
  };
  return {
    author: { avatar: 'img/avatars/user0' + getRandomNumber(1, 8) + '.png' },
    location,
    offer: {
      title: ADJS[getRandomNumber(0, ADJS.length - 1)] + ' ' + TYPES[getRandomNumber(0, TYPES.length - 1)],
      address: location.x + ' ' + location.y,
      price: getRandomNumber(0, 100000000),
      type: TYPES[getRandomNumber(0, TYPES.length - 1)],
      rooms: getRandomNumber(0, 100),
      guests: getRandomNumber(0, 100),
      checkout: CHECKS[getRandomNumber(0, CHECKS.length - 1)],
      checkin: CHECKS[getRandomNumber(0, CHECKS.length - 1)],
      description: ADJS[getRandomNumber(0, ADJS.length - 1)] + ' ' + TYPES[getRandomNumber(0, TYPES.length - 1)] + ' for ' + PURPOSES[getRandomNumber(0, PURPOSES.length - 1)],
      photo: PHOTOS.reduce(getRandomForReduce, []),
      features: FEATURES.reduce(getRandomForReduce, []),
    },
  }
};

export { createFakeData };