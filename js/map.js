import {offerPopUp} from './offer.js';
import {createFetch} from './fetch.js'

const LAT_TOKIO = 35.68625;
const LNG_TOKIO = 139.76107;
const MAP_ZOOM = 8;

const map = L.map('map-canvas')
  .setView({
    lat: LAT_TOKIO,
    lng: LNG_TOKIO,
  }, MAP_ZOOM);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const form = document.querySelector('.ad-form');
const mapFilter = document.querySelector('.map__filters');


form.classList.remove('ad-form--disabled');
mapFilter.classList.remove('map__filters--disabled');

form.childNodes.forEach (formChild => formChild.disabled = false);
mapFilter.childNodes.forEach (formChild => formChild.disabled = false);
const address = document.querySelector('#address');
address.readOnly = true;
address.value = LAT_TOKIO + ', ' + LNG_TOKIO;
const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: LAT_TOKIO,
    lng: LNG_TOKIO,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

mainPinMarker.on('moveend', (evt) => {
  address.value = evt.target.getLatLng()['lat'].toFixed(5)+', '+evt.target.getLatLng()['lng'].toFixed(5);
});

createFetch().then((value) =>

  value.forEach (serverElement => {
    const lat = serverElement.location.lat;
    const lng = serverElement.location.lng;
    const icon = L.icon ({
      iconUrl: './img//pin.svg',
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    })
    const marker = L.marker ({
      lat,
      lng,
    },
    {
      icon,
    },
    )
  
    marker
      .addTo(map)
      .bindPopup(
        offerPopUp(serverElement),
      );
  }));

const adForm = document.querySelector('.ad-form');
const clearFormButton = document.querySelector('.ad-form__reset');
const clearForm = (form) => {
  form.reset();
  let newMainPinCoordinates = new L.LatLng (LAT_TOKIO, LNG_TOKIO)
  mainPinMarker.setLatLng (newMainPinCoordinates);
  address.value = LAT_TOKIO + ', ' + LNG_TOKIO;
}
clearFormButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  clearForm (adForm)
});

export{clearForm};
