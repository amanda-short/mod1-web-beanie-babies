/* Imports */
import { getBeanies } from './fetch-utils.js';
import { renderBeanies } from './render.utils.js';

/* Get DOM Elements */
const notificationDisplay = document.getElementById('notification-display');
const beanieList = document.getElementById('beanie-list');

/* State */
let error = null;
let beanies = [];

displayBeanies();

/* Events */
window.addEventListener('load', async () => {
    findBeanies();

}); 

async function findBeanies(name) {
    const response = await getBeanies(name);

    error = response.error;
    beanies = response.data;

    displayNotifications();
    if (!error) {
        displayBeanies();
    }
}

/* Display Functions */
function displayBeanies() {
    beanieList.innerHTML = '';

    for (const beanie of beanies) {
        const beanieEl = renderBeanies(beanie);
        beanieList.append(beanieEl);
    }
}

function displayNotifications() {
    if (error) {
        notificationDisplay.classList.add('error');
        notificationDisplay.textContent = error.message;
    } else {
        notificationDisplay.classList.remove('error');
        notificationDisplay.textContent = `Showing ${beanies.length} of ${count} matching Beanie Babies`;
    }
}    
// (don't forget to call any display functions you want to run on page load!)