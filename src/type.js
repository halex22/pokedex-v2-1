import PokeService from "./services/poke-services.js";
import "./style.css";
import { render } from "./render.js";
import { renderNav } from "./navigation.js";

renderNav(document.querySelector('#type-list'))

const pService = new PokeService();
const params = new URLSearchParams(window.location.search);
const requestedType = params.get("type");
const titleHolder = document.getElementById("page-title");
titleHolder.innerText = requestedType + " type";

function fetchPokemonByType() {
  pService.getPokemonByType(requestedType).then((data) => {
    render(data);
  });
}

fetchPokemonByType();
