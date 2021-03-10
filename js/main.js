
import {offerPopUp} from './offer.js';
import {changePriceOfType, eventBothChange} from './form.js';

/* const offerList = document.querySelector('#map-canvas');

const fragment = document.createDocumentFragment();

offerPopUp(fragment); */
//offerList.appendChild(fragment.firstChild);


//inactive
const form = document.querySelector('.ad-form');
const mapFilter = document.querySelector('.map__filters');


form.classList.add('ad-form--disabled');
mapFilter.classList.add('map__filters--disabled');

form.childNodes.forEach (formChild => formChild.disabled = true);
mapFilter.childNodes.forEach (formChild => formChild.disabled = true);

const dropDownType = document.querySelector('#type');
const inputPrice = document.querySelector('#price');

changePriceOfType(dropDownType, inputPrice);

const timeIn = document.querySelector('#timein')
const timeOut = document.querySelector('#timeout')

eventBothChange (timeIn,timeOut);