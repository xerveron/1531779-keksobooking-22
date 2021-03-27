
import {filterMarkers,renderMapMarkers,map} from './map.js';

const filterHousingType = document.querySelector('#housing-type');

const filterMapMarkers = () => {
  filterHousingType.addEventListener('change', () => {
    for (let i=0;i<filterMarkers.length;i++) {
      map.removeLayer (filterMarkers[i]);
    }
    renderMapMarkers(filterMarkers);
  })
};

export {filterMapMarkers};