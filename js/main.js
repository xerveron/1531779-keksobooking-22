
import {changePriceOfType, eventBothChange, priceValidity, titleMinMax,setRoomsForGuests,clearFormButton} from './form.js';
import {preparePage} from './prepare.js'
import {filterMapMarkers} from './map.js';

const selectType = document.querySelector('#type');
const inputPrice = document.querySelector('#price');
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');
const numOfGuests = document.querySelector('#capacity');
const numOfRooms = document.querySelector('#room_number');
const titleField = document.querySelector('#title');

preparePage();
filterMapMarkers();
clearFormButton();
changePriceOfType(selectType, inputPrice);
priceValidity (selectType, inputPrice);
eventBothChange (timeIn,timeOut);
setRoomsForGuests (numOfGuests,numOfRooms)
titleMinMax(titleField); 