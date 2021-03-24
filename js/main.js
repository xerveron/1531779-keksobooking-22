
import {changePriceOfType, eventBothChange, priceValidity, titleMinMax,setRoomsForGuests} from './form.js';




const form = document.querySelector('.ad-form');
const mapFilter = document.querySelector('.map__filters');


form.classList.add('ad-form--disabled');
mapFilter.classList.add('map__filters--disabled');

form.childNodes.forEach (formChild => formChild.disabled = true);
mapFilter.childNodes.forEach (formChild => formChild.disabled = true);

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