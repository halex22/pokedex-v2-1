import PokeService from "./services/poke-services.js";
import "./style.css";
import { renderNav } from "./navigation.js";
const pService = new PokeService();
import { render } from "./render.js";

renderNav(document.getElementById('type-list'))

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

