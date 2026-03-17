import { usedCars } from './usedCars-TH-1.js';

function renderUsedCars() {
  const container = document.getElementById('row');
  if (!container) return;

  usedCars.forEach(usedCar => {
    const usedCarDiv = document.createElement('div');
    usedCarDiv.classList.add('pro-card');
    usedCarDiv.innerHTML = `
      <h1>${usedCar.year} ${usedCar.make} ${usedCar.model}</h1>
      <h2>${usedCar.mileage} ${usedCar.color}</h2>
      <p class="price">${usedCar.price}</p>
      <p>Gas Mileage: ${usedCar.gasMileage}</p>
      <p><button>Check Availability</button></p>
    `;
    container.appendChild(usedCarDiv);
  });
}

renderUsedCars();