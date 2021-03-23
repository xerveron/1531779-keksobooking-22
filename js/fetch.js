const createFetch = async () => {
  return fetch (
    'https://22.javascript.pages.academy/keksobooking/data',
  )
    .then((response) => response.json())
    .then((result) => {
      return result;
    });
  }

export {createFetch};