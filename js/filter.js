/* global _:readonly */

import {createFetch} from './fetch.js';
import{renderAdMarkers,map} from './map.js';

const MARKER_NUMBER = 10;
const DEBOUNCE_TIMEOUT = 500;
const filterForm = document.querySelector('.map__filters');
let filterMarkers = [];

const filterEasyTypes = (element,feature) => {
  const filterElement = document.querySelector('#housing-' + feature).value;
  if (element.offer[feature].toString()===filterElement.toString() || filterElement.toString()==='any') {
    return element;
  }
};
const filterPrice = (element) => {
  const filterElement = document.querySelector('#housing-price').value
  if ((element.offer.price>=50000 && filterElement==='high') || (element.offer.price>=10000 && element.offer.price<50000 && filterElement==='middle') || (element.offer.price<10000 && filterElement==='low') || filterElement==='any') {
    return element;
  }
};
const filterChecked = (element,feature) => {
  const filterElement = document.querySelector('#filter-' + feature);
  if ((filterElement.checked && element.offer.features.includes(feature)) || (!filterElement.checked)) {
    return element;
  }
};

const filterData = (Data) => {
  return Data.filter(element => { 
    return filterEasyTypes(element,'type');
  })
    .filter(element => {
      return filterEasyTypes(element,'rooms');
    })
    .filter(element => {
      return filterEasyTypes(element,'guests');
    })
    .filter(element => {
      return filterPrice(element);
    })
    .filter(element => {
      return filterChecked(element,'wifi');
    })
    .filter(element => {
      return filterChecked(element,'dishwasher');
    })
    .filter(element => {
      return filterChecked(element,'parking');
    })
    .filter(element => {
      return filterChecked(element,'washer');
    })
    .filter(element => {
      return filterChecked(element,'elevator');
    })
    .filter(element => {
      return filterChecked(element,'conditioner');
    })
    .slice(0,MARKER_NUMBER)
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
