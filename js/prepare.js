
'use strict';
import {loadMap,map,renderMainPin,mainPinMarker} from './map.js';
import {setDefaultAddress} from './form.js';
import {filterServerData} from './filter.js';

let serverDataArray = [];

const form = document.querySelector('.ad-form');
const mapFilter = document.querySelector('.map__filters');

const disableFormFilter = () => {
  form.classList.add('ad-form--disabled');
  mapFilter.classList.add('map__filters--disabled');

  form.childNodes.forEach (formChild => {formChild.disabled = true});
  mapFilter.childNodes.forEach (formChild => {formChild.disabled = true});
};

const enableAdFormFilter = () => {
  form.classList.remove('ad-form--disabled');
  form.childNodes.forEach (formChild => {formChild.disabled = false});
};

const enableMapFilter = () => {
  mapFilter.classList.remove('map__filters--disabled');
  mapFilter.childNodes.forEach (formChild => {formChild.disabled = false});
};

const preparePage = () => {
  disableFormFilter();
  loadMap(map);
  map.on ('load', enableAdFormFilter());
  setDefaultAddress();
  renderMainPin(mainPinMarker);
  filterServerData (serverDataArray);
};

export {preparePage,enableMapFilter};