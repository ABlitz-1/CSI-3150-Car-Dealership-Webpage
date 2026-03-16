import usedCars from './usedCars-TH-1.js';

const target = document.getElementsByClassName('row');
const htmlString = dataArray.map(usedCars => 
  `<div class="pro-card">
    <h1>${usedCars.year} ${usedCars.make} ${usedCars.model}</h1>
    <h2>${usedCars.mileage} ${usedCars.color}</h2>
    <p class="price">${usedCars.price}</p>
    <p>Gas Mileage: ${usedCars.gasMileage}</p>
    <p><button>Check Availability</button></p>
  </div>`
).join('');

target.innerHTML = htmlString;