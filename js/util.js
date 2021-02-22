const getRandomForReduce = (a,b) => {
    if (getRandomNumber (0,1)) a.push(b);
    return a;
  };

  const getRandomNumber = (from, to) => {
    return (from===to) ? 'Числа не должны быть одинаковыми': (from>=to) ? 'Первое число должно быть меньше второго' : Math.round(Math.random()*(to-from)+from);
  };
  
  const getRandomFloatNumber = (from, to, decimals) => {
    return (from===to) ? 'Числа не должны быть одинаковыми': (from>=to) ? 'Первое число должно быть меньше второго' : Math.round(((Math.random()*(to-from))+from)*Math.pow(10,decimals))/Math.pow(10,decimals);
  };

export {getRandomFloatNumber, getRandomNumber,getRandomForReduce};