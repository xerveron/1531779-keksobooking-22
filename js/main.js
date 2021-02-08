const getRandomNumber = (from, to) => {
  return (from===to) ? 'Числа не должны быть одинаковыми': (from>=to) ? 'Первое число должно быть меньше второго' : Math.round(Math.random()*(to-from)+from);
};
const getRandomFloatNumber = (from, to, decimals) => {
  return (from===to) ? 'Числа не должны быть одинаковыми': (from>=to) ? 'Первое число должно быть меньше второго' : Math.round(((Math.random()*(to-from))+from)*Math.pow(10,decimals))/Math.pow(10,decimals);
};

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

const createFakeArray = () => {
  const location = {
    x: getRandomFloatNumber(35.65,35.7,5),
    y: getRandomFloatNumber(139.7,139.8,5),
  };
  return {
    author: {avatar:'img/avatars/user0'+getRandomNumber(1,8)+'.png'},
    location,
    offer: {
      title: ADJS[getRandomNumber(0,ADJS.length-1)]+' '+TYPES[getRandomNumber(0,TYPES.length-1)],
      address: location.x+' '+location.y,
      price: getRandomNumber(0,100000000),
      type: TYPES[getRandomNumber(0,TYPES.length-1)],
      rooms: getRandomNumber (0,100),
      guests: getRandomNumber (0,100),
      checkout:CHECKS[getRandomNumber (0, CHECKS.length-1)],
      checkin: CHECKS[getRandomNumber (0, CHECKS.length-1)],
      description: ADJS[getRandomNumber(0,ADJS.length-1)]+' '+TYPES[getRandomNumber(0,TYPES.length-1)]+' for '+PURPOSES[getRandomNumber(0,PURPOSES.length-1)],
      photo: PHOTOS.reduce((a,b) => {
        if (getRandomNumber (0,1)) a.push(b);
        return a
      },[]),
      features: FEATURES.reduce((a,b) => {
        if (getRandomNumber (0,1)) a.push(b);
        return a
      },[]),
    },
  }
};
const a = createFakeArray();
console.log (a);