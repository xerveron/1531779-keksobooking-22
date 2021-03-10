
import {changePriceOfType, eventBothChange, forceMaxPrice, titleMinMax} from './form.js';

const form = document.querySelector('.ad-form');
const mapFilter = document.querySelector('.map__filters');


form.classList.add('ad-form--disabled');
mapFilter.classList.add('map__filters--disabled');

form.childNodes.forEach (formChild => formChild.disabled = true);
mapFilter.childNodes.forEach (formChild => formChild.disabled = true);

const dropDownType = document.querySelector('#type');
const inputPrice = document.querySelector('#price');

changePriceOfType(dropDownType, inputPrice);

const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');

eventBothChange (timeIn,timeOut);

const numOfGuests = document.querySelector('#capacity');
const numOfRooms = document.querySelector('#room_number');

eventBothChange (numOfGuests,numOfRooms);

const maxPriceField = document.querySelector('#price');

forceMaxPrice (maxPriceField);

const titleField = document.querySelector('#title');

titleMinMax(titleField); 