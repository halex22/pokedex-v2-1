import "./style.css";
import PokeService from "./services/poke-services";
import { renderNav } from "./navigation";



const service = new PokeService()
const params = new URLSearchParams(window.location.search)
renderNav(document.getElementById('type-list'))
const pokemonName = params.get('name')
document.getElementById('page-title').innerText = pokemonName
const root = document.getElementById('root')

async function getPokemonData() {
  const data = await service.getSinglePokemon(pokemonName)
  console.log(data)
  root.appendChild(createPokemonHtml(data))
  
}

function createPokemonHtml(data) {
  const wrapper = document.createElement('div')
  wrapper.classList.add('wrapper')

  const imgContainer = document.createElement('div') 
  imgContainer.classList.add('single-poke-img-container')
  const img = document.createElement('img')
  img.src = data.sprites.front_default
  img.classList.add('single-poke-img')
  imgContainer.appendChild(img)

  const infoContainer = document.createElement('div')
  const name = htmlHelper('h3', data.name, 'pokemon-name')

  const typesList = document.createElement('ul')
  typesList.classList.add('types-list-container')
  data.types.forEach(typeInfo => {
    typesList.appendChild(htmlHelper('span', typeInfo.type.name, 'type-ele'))
  })

  infoContainer.append(name, typesList)

  wrapper.append(imgContainer, infoContainer)
  return wrapper
}

function htmlHelper(tag, text, css) {
  const ele = document.createElement(tag)
  const txt = document.createTextNode(text)
  ele.appendChild(txt)
  if(css) ele.classList.add(css)
  return ele
}


getPokemonData()



