import {createFakeData} from './data.js';

const fakeData = new Array(10).fill(null).map(() => createFakeData());

const offerTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');


const offerPopUp = (appendTo) => {
  fakeData.forEach ((fakeElement) => {
    const offerElement = offerTemplate.cloneNode(true);
    offerElement.querySelector('.popup__title').textContent = fakeElement.offer.title;
    offerElement.querySelector('.popup__text--address').textContent = fakeElement.offer.address;
    offerElement.querySelector('.popup__text--price').textContent = fakeElement.offer.price + ' ₽/ночь';
    if (fakeElement.offer.type==='flat') offerElement.querySelector('.popup__type').textContent = 'Квартира';
    if (fakeElement.offer.type==='bungalow') offerElement.querySelector('.popup__type').textContent = 'Бунгало';
    if (fakeElement.offer.type==='house') offerElement.querySelector('.popup__type').textContent = 'Дом';
    if (fakeElement.offer.type==='palace') offerElement.querySelector('.popup__type').textContent = 'Дворец';
    offerElement.querySelector('.popup__text--capacity').textContent = fakeElement.offer.rooms + ' комнаты для ' + fakeElement.offer.guests + ' гостей';
    offerElement.querySelector('.popup__text--time').textContent = 'Заезд после ' + fakeElement.offer.checkin + ', выезд до ' + fakeElement.offer.checkout;
    if (fakeElement.offer.features === undefined || fakeElement.offer.photo.features == 0) {
      offerElement.querySelector('.popup__features').classList.add('hidden');
    } else {
      offerElement.querySelector('.popup__features').textContent = fakeElement.offer.features;
    }
    offerElement.querySelector('.popup__description').textContent = fakeElement.offer.description;
    if (fakeElement.offer.photo === undefined || fakeElement.offer.photo.length == 0) {
      offerElement.querySelector('.popup__photos').classList.add('hidden');
    } else {
      offerElement.querySelector('.popup__photos').innerHTML='';
      fakeElement.offer.photo.forEach ((photo) => {

        offerElement.querySelector('.popup__photos').insertAdjacentHTML('beforeend', '<img src="' + photo + '" class= "popup__photo" width="45" height="40" alt="' + fakeElement.offer.description + '">');

      })}
    offerElement.querySelector('.popup__avatar').src = fakeElement.author.avatar;

    appendTo.appendChild(offerElement);
  })}

  export {offerPopUp};