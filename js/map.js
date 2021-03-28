/* global L:readonly */
import {offerPopUp} from './offer.js';

const Tokio = {
  LAT:35.68625,
  LNG:139.76107,
}
const MAP_ZOOM = 8;
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


        
const renderAdMarkers = (serverData,filterMarkers) => {
let i=0;
  serverData.forEach (serverElement => {
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
  });
};



export{map,loadMap,Tokio,renderMainPin,mainPinMarker,renderAdMarkers};
