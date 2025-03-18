export default class PokeService {
    // #offset;

    static BASE_URL = "https://pokeapi.co/api/v2/";
    static POKE_URL = "pokemon/"
    constructor(limit=50, offset=0){
        this.limit=limit,
        this.offset=offset
    }

    // set offset(value){
    //     if(value<0) this.#offset;
    //     if(value>1302) this.#offset=1300;
    //     this.#offset = value;
    //     console.log(this.#offset)
    // }

    // get offset(){
    //     return this.#offset;
    // }

    getPokemonData(){
        const url = PokeService.BASE_URL+PokeService.POKE_URL + `/?offset=${this.offset}&limit=${this.limit}"`;
        return fetch(url)
            .then(response => response.json())
            .then(data => {
                const requests = [];
                for (const pokemonInfo of data.results) {
                    const pokemonUrl = pokemonInfo.url;
                    const request = fetch(pokemonUrl)
                        .then(response => response.json())
                        .then(data => data)
                        .catch(err => console.log(err))
                    requests.push(request);
                }
                return Promise.all(requests);               
            })
            .catch(err => console.log(err))       
    }

    nextPage(){
        if(this.offset+this.limit > 1300){
            this.offset = 0;
        } else {
            this.offset += this.limit;
        }
        this.getPokemonData();
    }

    previousPage(){
        if(this.offset-this.limit < 0){
            this.offset = 1300;
        } else {
            this.offset -= this.limit;
        }
        this.getPokemonData();
    }
}
