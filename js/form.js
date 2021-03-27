import {dropDownChange,sendError,sendSuccess} from './util.js';
import {Types} from './offer.js';
import {TOKIO,mainPinMarker} from './map.js'


const PRICES = {
  bungalow:'0',
  flat:'1000',
  house:'5000',
  palace:'10000',
};

const MAX_PRICE = 1000000;

const changePriceOfType = (select, input) => {
  select.addEventListener('change', () => {
    if (select.value === Types.bungalow) {
      dropDownChange(input, PRICES.bungalow);
    } else if (select.value === Types.flat) {
      dropDownChange(input, PRICES.flat);
    } else if (select.value === Types.house) {
      dropDownChange(input, PRICES.house);
    } else {
      dropDownChange(input, PRICES.palace);
    }
  });
};

const priceValidity = (selectType,inputPrice) => {
  inputPrice.addEventListener ('input', () => {
    if (inputPrice.value > MAX_PRICE) {
      inputPrice.setCustomValidity ('Цена не может быть выше '+MAX_PRICE+' рублей!');
    } else if (selectType.value==Types.palace && inputPrice.value<parseInt(PRICES.palace)) {
      inputPrice.setCustomValidity ('Нужно больше золота (мин '+PRICES.palace+')')
    } else if (selectType.value==Types.house && inputPrice.value<parseInt(PRICES.house)) {
      inputPrice.setCustomValidity ('Нужно больше золота (мин '+PRICES.house+')')
    } else if (selectType.value==Types.flat && inputPrice.value<parseInt(PRICES.flat)) {
      inputPrice.setCustomValidity ('Нужно больше золота (мин '+PRICES.flat+')')
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

const adForm = document.querySelector('.ad-form');
const clearButton = document.querySelector('.ad-form__reset');

const address = document.querySelector('#address');

const setDefaultAddress = () => {
  address.readOnly = true;
  address.value = TOKIO.LAT + ', ' + TOKIO.LNG;
}

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const formData = new FormData (evt.target);

  fetch(
    'https://22.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body: formData,
    },
  )
    .then((response) => {
      if (response.ok) {
        return response.json()
      }
      throw new Error(`${response.status} ${response.statusText}`);
    })
    
    .then((result) => {
      sendSuccess();
      adForm.reset();
      address.value = TOKIO.LAT + ', ' + TOKIO.LNG;
    })
    .catch(() => {
      sendError ('Ошибка размещения объявления', 'Попробовать снова');
    });
} );

const clearForm = (form) => {
  form.reset();
  let newMainPinCoordinates = new L.LatLng (TOKIO.LAT, TOKIO.LNG)
  mainPinMarker.setLatLng (newMainPinCoordinates);
  address.value = TOKIO.LAT + ', ' + TOKIO.LNG;
}
const clearFormButton = () => {
  clearButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    clearForm (adForm)
  });
}


export {changePriceOfType, eventBothChange, priceValidity,titleMinMax, setRoomsForGuests,setDefaultAddress,clearFormButton};

