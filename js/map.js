import {offerPopUp, fakeData} from './offer.js';

const map = L.map('map-canvas')
  .setView({
    lat: 35.68625,
    lng: 139.76107,
  }, 12);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

//active
const form = document.querySelector('.ad-form');
const mapFilter = document.querySelector('.map__filters');


form.classList.remove('ad-form--disabled');
mapFilter.classList.remove('map__filters--disabled');

form.childNodes.forEach (formChild => formChild.disabled = false);
mapFilter.childNodes.forEach (formChild => formChild.disabled = false);
const address = document.querySelector('#address');
address.disabled = true;

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: 35.68625,
    lng: 139.76107,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

mainPinMarker.on('moveend', (evt) => {
  address.value = 'Широта = ' + evt.target.getLatLng()['lat'].toFixed(4) + '; Долгота = ' + evt.target.getLatLng()['lng'].toFixed(4);
});

fakeData.forEach (fakeElement => {

  const lat = fakeElement.location.x;
  const lng = fakeElement.location.y;
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
      offerPopUp(fakeElement),
    );
})