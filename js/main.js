
import {changePriceOfType, eventBothChange, priceValidity, titleMinMax,setRoomsForGuests,clearFormButton} from './form.js';
import {preparePage} from './prepare.js'
import {filterMapMarkers} from './filter.js';

preparePage();
filterMapMarkers();
clearFormButton();

const selectType = document.querySelector('#type');
const inputPrice = document.querySelector('#price');

changePriceOfType(selectType, inputPrice);
priceValidity (selectType, inputPrice);

const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');

eventBothChange (timeIn,timeOut);

const numOfGuests = document.querySelector('#capacity');
const numOfRooms = document.querySelector('#room_number');


setRoomsForGuests (numOfGuests,numOfRooms)


const titleField = document.querySelector('#title');

titleMinMax(titleField); 