/* global L:readonly */
/* global _:readonly */
import {offerPopUp} from './offer.js';
import {createFetch} from './fetch.js';
import {filterChecked,filterEasyTypes,filterPrice} from './filter.js';

const Tokio = {
  LAT:35.68625,
  LNG:139.76107,
}
const MAP_ZOOM = 8;
const MARKER_NUMBER = 10;
const map = L.map('map-canvas');
const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: Tokio.LAT,
    lng: Tokio.LNG,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
)

const DEBOUNCE_TIMEOUT = 500;
const filterForm = document.querySelector('.map__filters');

let filterMarkers = [];

const loadMap = (map) => {
  map.setView({
    lat: Tokio.LAT,
    lng: Tokio.LNG,
  }, MAP_ZOOM);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);
};


const renderMainPin = (mainPinMarker) => {
  
  mainPinMarker.addTo(map);
  
  mainPinMarker.on('moveend', (evt) => {
    document.querySelector('#address').value = evt.target.getLatLng()['lat'].toFixed(5)+', '+evt.target.getLatLng()['lng'].toFixed(5);
  });
}

const renderMapMarkers = () => {
  let i=0;
  createFetch()
    .then((value) =>

      value
        .slice()
        .filter(element => { 
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
        .forEach (serverElement => {
          const lat = serverElement.location.lat;
          const lng = serverElement.location.lng;
          const icon = L.icon ({
            iconUrl: './img//pin.svg',
            iconSize: [40, 40],
            iconAnchor: [20, 40],
          });
          filterMarkers[i] = L.marker ({
            lat,
            lng,
          },
          {
            icon,
          },
          );
  
          filterMarkers[i]
            .addTo(map)
            .bindPopup(
              offerPopUp(serverElement),
            );
          i++;
        }),
    );
};

const filterMapMarkers = () => {
  filterForm.addEventListener('change', () => {
    for (let i=0;i<filterMarkers.length;i++) {
      map.removeLayer (filterMarkers[i]);
    }
    const debounceRenderMapMarkers = _.debounce(()=> {renderMapMarkers(filterMarkers)},DEBOUNCE_TIMEOUT);
    debounceRenderMapMarkers();
  })
}

export{map,loadMap,Tokio,renderMainPin,mainPinMarker,filterMapMarkers,renderMapMarkers};
