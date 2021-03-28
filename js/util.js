'use strict';
const main = document.querySelector('main');

const dropDownChange = (inputElement, value) => {
  inputElement.min=value;
  inputElement.placeholder=value;
};

const hidePopUp = (message) => {
  message.remove();
  document.querySelector('.leaflet-container').style.zIndex = '10';
  document.removeEventListener ('keydown', addListenerEsc);
  document.removeEventListener ('mouseup', addListenerClick);
};


const addListenerEsc = (evt) => {
  if (evt.code==='Escape') {
    evt.preventDefault();
    hidePopUp(document.querySelector('.temporary_popup'));
  }
};

const addListenerClick = () => {
  hidePopUp(document.querySelector('.temporary_popup'));
};

const sendError = (message, button) => {
  const errorTemplate = document.querySelector('#error')
    .content
    .querySelector('.error');
  const sendError = errorTemplate.cloneNode(true);
  const buttonSendError = sendError.querySelector('.error__button');
  sendError.classList.add('temporary_popup')
  sendError.querySelector('.error__message').textContent = message;
  buttonSendError.textContent = button;
  document.querySelector('.leaflet-container').style.zIndex = '0';
  sendError.style.zIndex = '20';
  main.prepend(sendError);
  buttonSendError.addEventListener('click',() => {hidePopUp(sendError)});
  document.addEventListener ('keydown', addListenerEsc);
  document.addEventListener ('mouseup', addListenerClick);
};

const sendSuccess = () => {
  const messageTemplate = document.querySelector('#success')
    .content
    .querySelector('.success');
  const sendSuccess = messageTemplate.cloneNode(true);
  sendSuccess.classList.add('temporary_popup')
  document.querySelector('.leaflet-container').style.zIndex = '0';
  sendSuccess.style.zIndex = '20';
  main.prepend(sendSuccess);
  document.addEventListener ('keydown', addListenerEsc);
  document.addEventListener ('mouseup', addListenerClick);
};

export {dropDownChange, sendError,sendSuccess};