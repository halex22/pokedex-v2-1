import PokeService from "./services/poke-services.js";
import "./style.css";
const pService = new PokeService();

function fetchPokemonData(){
  pService.getPokemonData().then(data => render(data));
}

fetchPokemonData();

function previous() {
    pService.previousPage();
    pService.getPokemonData().then(data => render(data));
}
window.previous = previous;

function next() {
    pService.nextPage();
    pService.getPokemonData().then(data => render(data));
}
window.next = next;

function render(data) {
  console.log(data)
    const dexContainer = document.getElementById('dex-container');
    dexContainer.innerHTML = '';  
    for (const pokemon of data) {
        const pokeContainer = document.createElement("div");
        pokeContainer.classList.add("poke-container");
        const pokeImg = document.createElement('img');
        pokeImg.src = pokemon.sprites.front_default;
        pokeImg.width= '100'
        const pokeLink = document.createElement('a');
        const node = createTextElement('span', pokemon.name);
        pokeLink.appendChild(node);
        pokeContainer.append(pokeImg, pokeLink);
        dexContainer.appendChild(pokeContainer);
    }
}

function createTextElement(elementType, text) {
    const element = document.createElement(elementType);
    const node = document.createTextNode(text);
    element.appendChild(node);
    return element;
}