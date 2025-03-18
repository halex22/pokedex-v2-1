export default class PokeService {
  static BASE_URL = "https://pokeapi.co/api/v2/";
  static POKE_URL = "pokemon/";
  static TYPE_URL = "type/";
  constructor(limit = 5, offset = 0) {
    (this.limit = limit), (this.offset = offset);
  }

  get pokemonEndPoint() {
    return PokeService.BASE_URL + PokeService.POKE_URL
  }

  getPokemonData() {
    const url =this.pokemonEndPoint + `/?offset=${this.offset}&limit=${this.limit}"`;
    return fetch(url)
      .then((response) => response.json())
      .then((data) =>
        Promise.all(
          data.results.map((pokemon) => this.#fetchPokemonData(pokemon.url))
        )
      )
      .catch((err) => console.log(err));
  }

  getSinglePokemon(name){
    console.log(this.pokemonEndPoint)
    return this.#fetchPokemonData(this.pokemonEndPoint + name)
  }

  getPokemonByType(type) {
    const url = PokeService.BASE_URL + PokeService.TYPE_URL + type;
    return fetch(url)
      .then((response) => response.json())
      .then((data) =>
        Promise.all(
          data.pokemon.map((pokemon) =>
            this.#fetchPokemonData(pokemon.pokemon.url)
          )
        )
      )
      .catch((err) => console.error(err));
  }

  #fetchPokemonData(url) {
    return fetch(url)
      .then((res) => res.json())
      .then((data) => data)
      .catch((err) => console.error(err));
  }

  nextPage() {
    const step = this.offset + this.limit
    this.offset = step > 1300 ? 0 : step
    this.getPokemonData();
  }

  previousPage() {
    const step = this.offset - this.limit
    this.offset = step < 0 ? 1300 : step
    this.getPokemonData();
  }
}
