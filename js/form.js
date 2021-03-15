import {dropDownChange} from './util.js';
import {Types} from './data.js';

const Prices = [
  '0',
  '1000',
  '5000',
  '10000',
];

const MAX_PRICE = 1000000;

const changePriceOfType = (select, input) => {
  select.addEventListener('change', () => {
    if (select.value === Types[3]) {
      dropDownChange(input, Prices[0]);
    } else if (select.value === Types[1]) {
      dropDownChange(input, Prices[1]);
    } else if (select.value === Types[2]) {
      dropDownChange(input, Prices[2]);
    } else {
      dropDownChange(input, Prices[3]);
    }
  });
};

const priceValidity = (selectType,inputPrice) => {
  inputPrice.addEventListener ('input', () => {
    if (inputPrice.value > MAX_PRICE) {
      inputPrice.setCustomValidity ('Цена не может быть выше '+MAX_PRICE+' рублей!');
    } else if (selectType.value==Types[0] && inputPrice.value<parseInt(Prices[3])) {
      inputPrice.setCustomValidity ('Нужно больше золота (мин '+Prices[3]+')')
    } else if (selectType.value==Types[2] && inputPrice.value<parseInt(Prices[2])) {
      inputPrice.setCustomValidity ('Нужно больше золота (мин '+Prices[2]+')')
    } else if (selectType.value==Types[1] && inputPrice.value<parseInt(Prices[1])) {
      inputPrice.setCustomValidity ('Нужно больше золота (мин '+Prices[1]+')')
    } else {inputPrice.setCustomValidity ('');}
    inputPrice.reportValidity();
  });
};

const makePreparationRoomsGuests = (a,guests,rooms,text) => {
  a.addEventListener ('change', () => {
    if (rooms.value==100 && guests.value>0) {
      let nameOfGuests=(guests.value>1) ? 'гостей' : 'гостя';
      a.setCustomValidity ('100 комнат для '+guests.value+' '+nameOfGuests+' слишком много');
    } else if ((rooms.value<100 && guests.value==0) || (rooms.value==1 && guests.value>1) || (rooms.value==2 && guests.value>2)) {
      a.setCustomValidity (text);
    } else  {
      guests.setCustomValidity ('');
      rooms.setCustomValidity ('');}
    a.reportValidity();
  })
}; 

const setRoomsForGuests = (guests,rooms) => {
  
  makePreparationRoomsGuests (rooms,guests,rooms,'Нужно больше гостей!');
  makePreparationRoomsGuests (guests,guests,rooms,'Нужно больше комнат!');
}

const eventChange = (a,b) => {
  a.addEventListener ('input', () => {
    b.value = a.value;
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

export {changePriceOfType, eventBothChange, priceValidity,titleMinMax, setRoomsForGuests};

