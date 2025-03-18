import PokeService from "./services/poke-services.js";
import "./style.css";
const pService = new PokeService();

const params = new URLSearchParams(window.location.search);

function fetchPokemonByType() {
    const type = params.get("type");
    pService.getPokemonByType(type).then(data => render(data));
}

fetchPokemonByType();

function render(data) {
    console.log(data)
    const dexContainer = document.getElementById('dex-container');
    dexContainer.innerHTML = '';
    for (const pokemon of data) {
        const pokeContainer = document.createElement("div");
        pokeContainer.classList.add("poke-container");
        const pokeImg = document.createElement('img');
        pokeImg.src = pokemon.sprites.front_default;
        pokeImg.width = '100'
        const pokeLink = document.createElement('a');
        let node = "";
        if (pokemon.name.length >= 12) {
            node = createTextElement('span', pokemon.name.slice(0, 10) + "...");
        } else {
            node = createTextElement('span', pokemon.name);
        }
        pokeLink.title = pokemon.name;
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