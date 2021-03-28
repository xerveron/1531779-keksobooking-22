/* global L:readonly */
'use strict';
import {offerPopUp} from './offer.js';

const MAIN_ICON_SIZE = 52;
const AD_ICON_SIZE = 40;
const LAT_LNG_FIX = 5;

const Tokio = {
  LAT:35.68625,
  LNG:139.76107,
}
const MAP_ZOOM = 8;
const map = L.map('map-canvas');
const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [MAIN_ICON_SIZE, MAIN_ICON_SIZE],
  iconAnchor: [MAIN_ICON_SIZE/2, MAIN_ICON_SIZE],
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
    document.querySelector('#address').value = evt.target.getLatLng()['lat'].toFixed(LAT_LNG_FIX)+', '+evt.target.getLatLng()['lng'].toFixed(LAT_LNG_FIX);
  });
}


        
const renderAdMarkers = (serverData,filterMarkers) => {
  let i=0;
  serverData.forEach (serverElement => {
    const lat = serverElement.location.lat;
    const lng = serverElement.location.lng;
    const icon = L.icon ({
      iconUrl: './img//pin.svg',
      iconSize: [AD_ICON_SIZE, AD_ICON_SIZE],
      iconAnchor: [AD_ICON_SIZE/2, AD_ICON_SIZE],
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
