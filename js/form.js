import {dropDownChange} from './util.js';
<<<<<<< HEAD
import {Types} from './data.js';

const Price = [
  '2000',
  '5000',
  '10000',
  '50000',
]

const changePriceOfType = (select, input) => {
    select.addEventListener('change', () => {
    if (select.value === Types[3]) {
      dropDownChange(input, Price[0]);
    } else if (select.value === Types[1]) {
      dropDownChange(input, Price[1]);
    } else if (select.value === Types[2]) {
      dropDownChange(input, Price[2]);
    } else {
      dropDownChange(input, Price[3]);
=======


const changePriceOfType = (select, input) => {
    select.addEventListener('change', () => {
    if (select.value === 'bungalow') {
      dropDownChange(input, '2000');
    } else if (select.value === 'flat') {
      dropDownChange(input, '5000');
    } else if (select.value === 'house') {
      dropDownChange(input, '10000');
    } else {
      dropDownChange(input, '50000');
>>>>>>> 9437ad9514685f773689209d84ad518df04fecb9
    }
  });
};

const eventChange = (a,b) => {
  a.addEventListener ('change', () => {
    b.value = a.value;
  });};

const eventBothChange = (a, b) => {  
  eventChange(a,b);
  eventChange (b,a);
};

export {changePriceOfType, eventBothChange};

