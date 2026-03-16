let usedCars = require('usedCars-TH-1.js');

const target = document.getElementsByClassName('row');
const htmlString = dataArray.map(usedCar => 
  `<div class="pro-card">
    <h1>${usedCar.year} ${usedCar.make} ${usedCar.model}</h1>
    <h2>${usedCar.mileage} ${usedCar.color}</h2>
    <p class="price">${usedCar.price}</p>
    <p>Gas Mileage: ${usedCar.gasMileage}</p>
    <p><button>Check Availability</button></p>
  </div>`
).join('');

target.innerHTML = htmlString;