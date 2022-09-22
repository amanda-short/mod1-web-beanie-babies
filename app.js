/* Imports */
import { getAstroSigns, getBeanies } from './fetch-utils.js';
import { renderAstroSignOption, renderBeanie } from './render.utils.js';


/* Get DOM Elements */
const notificationDisplay = document.getElementById('notification-display');
const beanieList = document.getElementById('beanie-list');
const astroSelect = document.getElementById('astro-select');
const searchForm = document.getElementById('search-form');

/* State */
let error = null;
let beanies = [];
let astroSigns = [];


/* Events */
window.addEventListener('load', async () => {
    findBeanies();

    const response = await getAstroSigns();

    error = response.error;
    astroSigns = response.data;

    if (!error) {
        console.log('no error');
        displayAstroSignOptions();
    }

}); 

async function findBeanies(title, astroSign) {
    const response = await getBeanies(title, astroSign);

    error = response.error;
    beanies = response.data;

    displayNotifications();
    if (!error) {
        displayBeanies();
    }
}

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(searchForm);
    findBeanies(formData.get('title'), formData.get('astroSign'));
});   

/* Display Functions */
function displayBeanies() {
    beanieList.innerHTML = '';

    for (const beanie of beanies) {
        const beanieEl = renderBeanie(beanie);
        beanieList.append(beanieEl);
    }
}

function displayNotifications() {
    if (error) {
        notificationDisplay.classList.add('error');
        notificationDisplay.textContent = error.message;
    } else {
        notificationDisplay.classList.remove('error');
        notificationDisplay.textContent = `Showing ${beanies.length} Beanie Babies`;
    }
}    

function displayAstroSignOptions() {
    for (const astroSign of astroSigns) {
        const option = renderAstroSignOption(astroSign);
        astroSelect.append(option); 
    }
}