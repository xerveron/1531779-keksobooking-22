import {dropDownChange} from './util.js';
import {Types} from './data.js';

const Price = [
  '0',
  '1000',
  '5000',
  '10000',
];

const MAX_PRICE = 1000000;

const changePriceOfType = (select, input) => {
  select.addEventListener('change', () => {
    if (select.value === Types[3]) {
      dropDownChange(input, Price[0]);
    } else if (select.value === Types[1]) {
      dropDownChange(input, Price[1]);
    } else if (select.value === Types[2]) {
      dropDownChange(input, Price[2]);
    } else {
      dropDownChange(input, Price[3]);
    }
  });
};

const forceMaxPrice = (inputPrice) => {
  inputPrice.addEventListener ('input', () => {
    if (inputPrice.value > MAX_PRICE) {
      inputPrice.value = MAX_PRICE;
    }
  });
};

const guestAndRooms = [
  '0',
  '100',
]

const eventChange = (a,b) => {
  a.addEventListener ('input', () => {
    b.value = a.value;
    if (a.value == guestAndRooms[1]) {
      b.value = guestAndRooms[0];
    } else if (a.value == guestAndRooms[0]) {
      b.value = guestAndRooms[1];
    }
  });
};

const eventBothChange = (a, b) => {  
  eventChange(a,b);
  eventChange (b,a);
};

const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;

const titleMinMax = (inputField) => { 
  inputField.addEventListener ('input', () => {
    const valueLength = inputField.value.length;
    if (valueLength < MIN_TITLE_LENGTH) {
      inputField.setCustomValidity('Осталось ' + (MIN_TITLE_LENGTH - valueLength) + ' сим.')
    } else if (valueLength > MAX_TITLE_LENGTH) {
      inputField.setCustomValidity('Не больше ' + (MAX_TITLE_LENGTH - valueLength) + ' сим.')
    } else {
      inputField.setCustomValidity ('');
    }
  inputField.reportValidity();
  });
}

const priceValidity = (inputField) => { 
  inputField.addEventListener ('submit', () => {
    const valueLength = inputField.value.length;
    if (valueLength < MIN_TITLE_LENGTH) {
      inputField.setCustomValidity('Осталось ' + (MIN_TITLE_LENGTH - valueLength) + ' сим.')
    } else if (valueLength > MAX_TITLE_LENGTH) {
      inputField.setCustomValidity('Не больше ' + (MAX_TITLE_LENGTH - valueLength) + ' сим.')
    } else {
      inputField.setCustomValidity ('');
    }
  inputField.reportValidity();
  });
}

export {changePriceOfType, eventBothChange, forceMaxPrice,titleMinMax};

