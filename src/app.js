import getPokedex from './get-pokedex.js';

// selecting the correct nodes
const pokedex = document.getElementById('pokedex-info');

// adding event listeners
pokedex.addEventListener('submit', (event) => {
    event.preventDefault();
    const pokedexData = new FormData(pokedex);

    const dex = getPokedex(pokedexData);
    console.log(dex);
});