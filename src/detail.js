import "./style.css";
import PokeService from "./services/poke-services";
import { renderNav } from "./navigation";



const service = new PokeService()
const params = new URLSearchParams(window.location.search)
renderNav(document.getElementById('type-list'))
const pokemonName = params.get('name')
document.getElementById('page-title').innerText = pokemonName

async function getPokemonData() {
  const data = await service.getSinglePokemon(pokemonName)
  console.log(data)
}


getPokemonData()



