
/* global _:readonly */
import {filterMarkers,renderMapMarkers,map} from './map.js';

const filterForm = document.querySelector('.map__filters');

const filterMapMarkers = () => {
  filterForm.addEventListener('change', () => {
    for (let i=0;i<filterMarkers.length;i++) {
      map.removeLayer (filterMarkers[i]);
    }
    const debounceRenderMapMarkers = _.debounce(()=> {renderMapMarkers(filterMarkers)},500);
    debounceRenderMapMarkers();
  })
}


const filterEasyTypes = (element,filterElement) => {
  if (element.offer[filterElement]==document.querySelector('#housing-' + filterElement).value || document.querySelector('#housing-' + filterElement).value=='any') {
    return element;
  }
}
const filterPrice = (element) => {
  if ((element.offer.price>=50000 && document.querySelector('#housing-price').value=='high') || (element.offer.price>=10000 && element.offer.price<50000 && document.querySelector('#housing-price').value=='middle') || (element.offer.price<10000 && document.querySelector('#housing-price').value=='low') || document.querySelector('#housing-price').value=='any') {
    return element;
  }
}
const filterChecked = (element,feauture) => {
  if ((document.querySelector('#filter-' + feauture).checked && element.offer.features.includes(feauture)) || (!document.querySelector('#filter-' + feauture).checked)) {
    return element;
  }
}


export {filterMapMarkers,filterEasyTypes,filterChecked,filterPrice};



/* element.offer.type==document.querySelector('#housing-type').value || document.querySelector('#housing-type').value=='any'


(element.offer.price<10000 && document.querySelector('#housing-price')=='low') || document.querySelector('#housing-price').value=='any'

(element.offer.price>50000 && document.querySelector('#housing-price')=='high') || document.querySelector('#housing-price').value=='any'

document.querySelector('#housing-price')=='middle' || document.querySelector('#housing-price').value=='any'

element.offer.rooms==document.querySelector('#housing-rooms') || document.querySelector('#housing-rooms').value=='any'


element.offer.rooms==document.querySelector('#housing-guests') || document.querySelector('#housing-guests').value=='any'

document.querySelector('#filter-wifi').checked


document.querySelector('#filter-dishwasher').checked


document.querySelector('#filter-parking').checked


document.querySelector('#filter-washer').checked


document.querySelector('#filter-elevator').checked


document.querySelector('#filter-conditioner').checked */