
const filterEasyTypes = (element,feature) => {
  const filterElement = document.querySelector('#housing-' + feature).value;
  if (element.offer[feature]===filterElement || filterElement==='any') {
    return element;
  }
}
const filterPrice = (element) => {
  const filterElement = document.querySelector('#housing-price').value
  if ((element.offer.price>=50000 && filterElement==='high') || (element.offer.price>=10000 && element.offer.price<50000 && filterElement==='middle') || (element.offer.price<10000 && filterElement==='low') || filterElement==='any') {
    return element;
  }
}
const filterChecked = (element,feature) => {
  const filterElement = document.querySelector('#filter-' + feature);
  if ((filterElement.checked && element.offer.features.includes(feature)) || (!filterElement.checked)) {
    return element;
  }
}


export {filterEasyTypes,filterChecked,filterPrice};
