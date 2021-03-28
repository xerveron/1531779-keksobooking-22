
'use strict';
import {changePriceOfType, changeBoth,validatePrice,showRemainSymbolTitle,setRoomsForGuests,clearFormButton,submitAdForm} from './form.js';
import {preparePage} from './prepare.js'

const selectType = document.querySelector('#type');
const inputPrice = document.querySelector('#price');
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');
const numOfGuests = document.querySelector('#capacity');
const numOfRooms = document.querySelector('#room_number');
const titleField = document.querySelector('#title');

preparePage();
clearFormButton();
changePriceOfType(selectType, inputPrice);
validatePrice (selectType, inputPrice);
changeBoth (timeIn,timeOut);
setRoomsForGuests (numOfGuests,numOfRooms);
showRemainSymbolTitle(titleField); 
submitAdForm();