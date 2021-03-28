const Types = {
  bungalow:'bungalow',
  flat:'flat',
  house:'house',
  palace:'palace',
};

const offerTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

const TypesRussian = {
  palace:'Дворец',
  flat:'Квартира',
  house:'Дом',
  bungalow:'Бунгало',
}

const FeaturesArray = ['wifi','dishwasher','parking','washer','elevator','conditioner'];
/*   wifi:'wifi',
  dishwasher:'dishwasher',
  parking:'parking',
  washer:'washer',
  elevator:'elevator',
  conditioner:'conditioner', */


const offerPopUp = (fakeElement => {
  const offerElement = offerTemplate.cloneNode(true);
  offerElement.querySelector('.popup__title').textContent = fakeElement.offer.title;
  offerElement.querySelector('.popup__text--address').textContent = fakeElement.offer.address;
  offerElement.querySelector('.popup__text--price').textContent = fakeElement.offer.price + ' ₽/ночь';
  offerElement.querySelector('.popup__type').textContent = (fakeElement.offer.type===Types.palace) ? TypesRussian.palace:
    (fakeElement.offer.type===Types.flat) ? TypesRussian.flat:
      (fakeElement.offer.type===Types.house) ? TypesRussian.house:
        TypesRussian.bungalow;
  offerElement.querySelector('.popup__text--capacity').textContent = fakeElement.offer.rooms + ' комнаты для ' + fakeElement.offer.guests + ' гостей';
  offerElement.querySelector('.popup__text--time').textContent = 'Заезд после ' + fakeElement.offer.checkin + ', выезд до ' + fakeElement.offer.checkout;
  if (fakeElement.offer.features.length === 0) {
    offerElement.querySelector('.popup__features').classList.add('hidden');
  } else {
    for (let i=0; i<fakeElement.offer.features.length; i++) {
      if (!fakeElement.offer.features.includes(FeaturesArray[i])) {
        offerElement.querySelector('.popup__feature--' + FeaturesArray[i]).classList.add('hidden');
      }
    }
  } 
  offerElement.querySelector('.popup__description').textContent = fakeElement.offer.description;
  if (fakeElement.offer.photos.length === 0) {
    offerElement.querySelector('.popup__photos').classList.add('hidden');
  } else {
    offerElement.querySelector('.popup__photos').innerHTML='';
    fakeElement.offer.photos.forEach ((photo) => {

      offerElement.querySelector('.popup__photos').insertAdjacentHTML('beforeend', '<img src="' + photo + '" class= "popup__photo" width="45" height="40" alt="' + fakeElement.offer.description + '">');

    })}
  offerElement.querySelector('.popup__avatar').src = fakeElement.author.avatar;

  return offerElement;
})

export {offerPopUp, Types};
