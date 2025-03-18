const pokemonTypes = [
  "normal", "fighting", "flying", "poison", "ground", "rock",
  "bug", "ghost", "steel", "fire", "water", "grass",
  "electric", "psychic", "ice", "dragon", "dark",
  "fairy", "stellar", "unknown"
];

export function renderNav(element){
  pokemonTypes.forEach(type => element.innerHTML += createTypeItem(type))
}

const createTypeItem = type => `<li><a class="type-link" href="/type.html?type=${type}">${type}</a></li>`