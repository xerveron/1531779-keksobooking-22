
import {offerPopUp} from './offer.js';

const offerList = document.querySelector('#map-canvas');

const fragment = document.createDocumentFragment();

offerPopUp(fragment);
offerList.appendChild(fragment.firstChild);
