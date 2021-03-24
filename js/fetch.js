import {sendError} from './util.js';


const createFetch = async () => {
  return fetch (
    'https://22.javascript.pages.academy/keksobooking/data',
  )
    .then((response) => {
      if (response.ok) {
        return response.json()
      }
      throw new Error(`${response.status} ${response.statusText}`);
    })
    
    .then((result) => {
      return result;
    })
    .catch((err) => {
      sendError ('Ошибка при получении данных с сервера: ' + err, 'OK');
    });
};

export {createFetch};