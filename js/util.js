const getRandomForReduce = (a, b) => {
  if (getRandomNumber(0, 1)) a.push(b);
  return a;
};

const getRandomNumber = (from, to) => {
  return (from === to) ? 'Числа не должны быть одинаковыми' : (from >= to) ? 'Первое число должно быть меньше второго' : Math.round(Math.random() * (to - from) + from);
};

const getRandomFloatNumber = (from, to, decimals) => {
  return (from === to) ? 'Числа не должны быть одинаковыми' : (from >= to) ? 'Первое число должно быть меньше второго' : Math.round(((Math.random() * (to - from)) + from) * Math.pow(10, decimals)) / Math.pow(10, decimals);
};

const dropDownChange = (inputElement, value) => {
<<<<<<< HEAD
  inputElement.min=value;
  inputElement.placeholder=value;
};
=======
    inputElement.min=value;
    inputElement.placeholder=value;
  };
>>>>>>> 9437ad9514685f773689209d84ad518df04fecb9

export { getRandomFloatNumber, getRandomNumber, getRandomForReduce, dropDownChange};