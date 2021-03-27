
const dropDownChange = (inputElement, value) => {
  inputElement.min=value;
  inputElement.placeholder=value;
};

const hidePopUp = (error) => {
  error.classList.add ('visually-hidden');
  document.querySelector('.leaflet-container').style.zIndex = '10'
}

const closePopUp = (popUp) => {
  document.addEventListener ('keydown', (evt) => {
    if (evt.code==='Escape') {
      hidePopUp(popUp);
    }
  });
  document.addEventListener ('mouseup', () => {
    hidePopUp(popUp);
  });
  

}

const sendError = (message, button) => {
  const errorTemplate = document.querySelector('#error')
    .content
    .querySelector('.error')
  const main = document.querySelector('main');
  const sendError = errorTemplate.cloneNode(true);
  const buttonSendError = sendError.querySelector('.error__button');
  sendError.querySelector('.error__message').textContent = message;
  buttonSendError.textContent = button;
  document.querySelector('.leaflet-container').style.zIndex = '0';
  sendError.style.zIndex = '20';
  main.prepend(sendError);
  closePopUp (sendError);
  buttonSendError.addEventListener ('click', () => {
    hidePopUp(sendError);
  })
};

const sendSuccess = () => {
  const messageTemplate = document.querySelector('#success')
    .content
    .querySelector('.success')
  const main = document.querySelector('main');
  const sendSuccess = messageTemplate.cloneNode(true);
  document.querySelector('.leaflet-container').style.zIndex = '0';
  sendSuccess.style.zIndex = '20';
  main.prepend(sendSuccess);
  closePopUp (sendSuccess);
};

export {dropDownChange, sendError,sendSuccess};