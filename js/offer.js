const Types = {
  bungalow:'bungalow',
  flat:'flat',
  house:'house',
  palace:'palace',
};

const offerTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

const Typesrussian = {
  palace:'Дворец',
  flat:'Квартира',
  house:'Дом',
  bungalow:'Бунгало',
}

const offerPopUp = (fakeElement => {
  const offerElement = offerTemplate.cloneNode(true);
  offerElement.querySelector('.popup__title').textContent = fakeElement.offer.title;
  offerElement.querySelector('.popup__text--address').textContent = fakeElement.offer.address;
  offerElement.querySelector('.popup__text--price').textContent = fakeElement.offer.price + ' ₽/ночь';
  offerElement.querySelector('.popup__type').textContent = (fakeElement.offer.type===Types.palace) ? Typesrussian.palace:
    (fakeElement.offer.type===Types.flat) ? Typesrussian.flat:
      (fakeElement.offer.type===Types.house) ? Typesrussian.house:
        Typesrussian.bungalow;
  offerElement.querySelector('.popup__text--capacity').textContent = fakeElement.offer.rooms + ' комнаты для ' + fakeElement.offer.guests + ' гостей';
  offerElement.querySelector('.popup__text--time').textContent = 'Заезд после ' + fakeElement.offer.checkin + ', выезд до ' + fakeElement.offer.checkout;
  if (fakeElement.offer.features === undefined) {
    offerElement.querySelector('.popup__features').classList.add('hidden');
  } else {
    offerElement.querySelector('.popup__features').textContent = fakeElement.offer.features;
  }
  offerElement.querySelector('.popup__description').textContent = fakeElement.offer.description;
  if (fakeElement.offer.photo === undefined || fakeElement.offer.photos.length == 0) {
    offerElement.querySelector('.popup__photos').classList.add('hidden');
  } else {
    offerElement.querySelector('.popup__photos').innerHTML='';
    fakeElement.offer.photo.forEach ((photo) => {

      offerElement.querySelector('.popup__photos').insertAdjacentHTML('beforeend', '<img src="' + photo + '" class= "popup__photo" width="45" height="40" alt="' + fakeElement.offer.description + '">');

    })}
  offerElement.querySelector('.popup__avatar').src = fakeElement.author.avatar;

  return offerElement;
})

export {offerPopUp, Types};
