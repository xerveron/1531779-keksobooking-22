import {getRandomFloatNumber, getRandomNumber, getRandomForReduce} from './util.js';

const Types = {
  bungalow:'bungalow',
  flat:'flat',
  house:'house',
  palace:'palace',
};

const Adjs = [
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

const Purposes = [
  'living',
  'working',
  'swimming in ocean',
  'fishing in lake',
  'skiing',
  'snowboarding',
  'relaxing',
  'solitude',
];

const Features = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const Photos = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

const Checks = [
  '12:00',
  '13:00',
  '14:00',
];

const createFakeData = () => {
  const location = {
    x: getRandomFloatNumber(35.65, 35.7, 5),
    y: getRandomFloatNumber(139.7, 139.8, 5),
  };
  const typeOfOffer = Types[getRandomNumber(0, Types.length - 1)];
  return {
    author: { avatar: 'img/avatars/user0' + getRandomNumber(1, 8) + '.png' },
    location,
    offer: {
      title: Adjs[getRandomNumber(0, Adjs.length - 1)] + ' ' + typeOfOffer,
      address: location.x + ' ' + location.y,
      price: getRandomNumber(0, 100000000),
      type: typeOfOffer,
      rooms: getRandomNumber(0, 100),
      guests: getRandomNumber(0, 100),
      checkout: Checks[getRandomNumber(0, Checks.length - 1)],
      checkin: Checks[getRandomNumber(0, Checks.length - 1)],
      description: Adjs[getRandomNumber(0, Adjs.length - 1)] + ' ' + Types[getRandomNumber(0, Types.length - 1)] + ' for ' + Purposes[getRandomNumber(0, Purposes.length - 1)],
      photo: Photos.reduce(getRandomForReduce, []),
      features: Features.reduce(getRandomForReduce, []),
    },
  }
};

export { createFakeData, Types};