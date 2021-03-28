/* global _:readonly */
'use strict';

import {createFetch} from './fetch.js';
import{renderAdMarkers,map} from './map.js';

const MARKER_NUMBER = 10;
const DEBOUNCE_TIMEOUT = 500;
const HOUSING_FILTERS = ['type','rooms','guests'];
const FILTER_FEATURES = ['wifi','dishwasher','parking','washer','elevator','conditioner'];
const filterForm = document.querySelector('.map__filters');


let filterMarkers = [];

const filterEasyTypes = (element,i) => {
  if (i===HOUSING_FILTERS.length) {return true}
  const filterElement = document.querySelector('#housing-' + HOUSING_FILTERS[i]).value;
  if (element.offer[HOUSING_FILTERS[i]].toString()===filterElement.toString() || filterElement.toString()==='any') {
    return filterEasyTypes (element,i+1);
  }
};
const filterPrice = (element) => {
  const filterElement = document.querySelector('#housing-price').value
  if ((element.offer.price>=50000 && filterElement==='high') || (element.offer.price>=10000 && element.offer.price<50000 && filterElement==='middle') || (element.offer.price<10000 && filterElement==='low') || filterElement==='any') {
    return true;
  }
};
const filterChecked = (element,i) => {
  if (i===FILTER_FEATURES.length) {return true}
  const filterElement = document.querySelector('#filter-' + FILTER_FEATURES[i]);
  if ((filterElement.checked && element.offer.features.includes(FILTER_FEATURES[i])) || (!filterElement.checked)) {
    return filterChecked(element,i+1);
  }
};

const filterData = (data) => {
  return data.filter(element => { 
    return filterEasyTypes(element,0)&&filterPrice(element)&&filterChecked(element,0);
  }).slice(0,MARKER_NUMBER);
};

const filterServerData = async (serverDataArray) => {
  serverDataArray = await createFetch();
  const debounceRenderMapMarkers = _.debounce(async ()=> {renderAdMarkers (await filterData(serverDataArray),filterMarkers)},DEBOUNCE_TIMEOUT);
  debounceRenderMapMarkers ();
  filterForm.addEventListener('change', () => {
    for (let i=0;i<filterMarkers.length;i++) {
      map.removeLayer (filterMarkers[i]);
    }
    debounceRenderMapMarkers();
  })
};

export {filterEasyTypes,filterChecked,filterPrice,filterServerData,filterData};
