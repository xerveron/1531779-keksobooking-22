
import {offerPopUp} from './offer.js';
import {changePriceOfType, eventBothChange} from './form.js';

const offerList = document.querySelector('#map-canvas');

const fragment = document.createDocumentFragment();

offerPopUp(fragment);
offerList.appendChild(fragment.firstChild);


const dropDownType = document.querySelector('#type');
const inputPrice = document.querySelector('#price');

changePriceOfType(dropDownType, inputPrice);

const timeIn = document.querySelector('#timein')
const timeOut = document.querySelector('#timeout')

eventBothChange (timeIn,timeOut);