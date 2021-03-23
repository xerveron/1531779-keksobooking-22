import {dropDownChange} from './util.js';
import {Types} from './data.js';

const Prices = {
  bungalow:'0',
  flat:'1000',
  house:'5000',
  palace:'10000',
};

const MAX_PRICE = 1000000;

const changePriceOfType = (select, input) => {
  select.addEventListener('change', () => {
    if (select.value === Types.bungalow) {
      dropDownChange(input, Prices.bungalow);
    } else if (select.value === Types.flat) {
      dropDownChange(input, Prices.flat);
    } else if (select.value === Types.house) {
      dropDownChange(input, Prices.house);
    } else {
      dropDownChange(input, Prices.palace);
    }
  });
};

const priceValidity = (selectType,inputPrice) => {
  inputPrice.addEventListener ('input', () => {
    if (inputPrice.value > MAX_PRICE) {
      inputPrice.setCustomValidity ('Цена не может быть выше '+MAX_PRICE+' рублей!');
    } else if (selectType.value==Types.palace && inputPrice.value<parseInt(Prices.palace)) {
      inputPrice.setCustomValidity ('Нужно больше золота (мин '+Prices.palace+')')
    } else if (selectType.value==Types.house && inputPrice.value<parseInt(Prices.house)) {
      inputPrice.setCustomValidity ('Нужно больше золота (мин '+Prices.house+')')
    } else if (selectType.value==Types.flat && inputPrice.value<parseInt(Prices.flat)) {
      inputPrice.setCustomValidity ('Нужно больше золота (мин '+Prices.flat+')')
    } else {inputPrice.setCustomValidity ('');}
    inputPrice.reportValidity();
  });
};

const makePreparationRoomsGuests = (a,guests,rooms,text) => {
  a.addEventListener ('change', () => {
    if (rooms.value==100 && guests.value>0) {
      let nameOfGuests=(guests.value>1) ? 'гостей' : 'гостя';
      a.setCustomValidity ('100 комнат для '+guests.value+' '+nameOfGuests+' слишком много');
    } else if ((rooms.value==1 && guests.value>1) || (rooms.value==2 && guests.value>2)) {
      a.setCustomValidity (text);
    } else if ((rooms.value<100 && guests.value==0)) {
      a.setCustomValidity ('Нужно больше комнат!');
    } else  {
      guests.setCustomValidity ('');
      rooms.setCustomValidity ('');}
    a.reportValidity();
  })
}; 

const setRoomsForGuests = (guests,rooms) => {
  
  makePreparationRoomsGuests (rooms,guests,rooms,'Нужно меньше гостей!');
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

