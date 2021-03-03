import {dropDownChange} from './util.js';

const Price [
  
]

const changePriceOfType = (select, input) => {
    select.addEventListener('change', () => {
    if (select.value === 'bungalow') {
      dropDownChange(input, '2000');
    } else if (select.value === 'flat') {
      dropDownChange(input, '5000');
    } else if (select.value === 'house') {
      dropDownChange(input, '10000');
    } else {
      dropDownChange(input, '50000');
    }
  });
};

const eventChange = (a,b) => {
  a.addEventListener ('change', () => {
    b.value = a.value;
  });};

const eventBothChange = (a, b) => {  
  eventChange(a,b);
  eventChange (b,a);
};

export {changePriceOfType, eventBothChange};

