
import {loadMap,map,renderMainPin,renderMapMarkers,mainPinMarker} from './map.js';
import {setDefaultAddress} from './form.js'

const form = document.querySelector('.ad-form');
const mapFilter = document.querySelector('.map__filters');

const disableFormFilter = () => {
  form.classList.add('ad-form--disabled');
  mapFilter.classList.add('map__filters--disabled');

  form.childNodes.forEach (formChild => formChild.disabled = true);
  mapFilter.childNodes.forEach (formChild => formChild.disabled = true);
}

const enableFormFilter = () => {

  form.classList.remove('ad-form--disabled');
  mapFilter.classList.remove('map__filters--disabled');

  form.childNodes.forEach (formChild => formChild.disabled = false);
  mapFilter.childNodes.forEach (formChild => formChild.disabled = false);
}

const preparePage = () => {
  disableFormFilter();
  loadMap(map);
  map.on ('load', enableFormFilter());
  setDefaultAddress();
  renderMainPin(mainPinMarker);
  renderMapMarkers();
}

export {preparePage};