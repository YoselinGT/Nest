import {PokeApi} from "../interfaces/pokeapi-response.interface.ts";
import {HttpAdapter, PokeApiAdapter} from "../api/pokeApi.adapter.ts";
export class Pokemon {

    get imageUrl (): string {
        return `https://pokemon.com/${this.id}.jpg`;
    }

    constructor(
        public readonly id:number,
        public name: string,
        private readonly http:HttpAdapter
    ){}

    scream(){
        console.log(`${ this.name.toUpperCase()}!!!`)
    }

    speak(){
        console.log(`${this.name} , ${this.name}`)
    }

    async getMoves() {
       const data =  await this.http.get<PokeApi>('https://pokeapi.co/api/v2/pokemon/4');

       console.log(data.moves)
        return data;
    }

}


const pokeApi = new PokeApiAdapter();
export const pikachu = new Pokemon(1,"Pikachu",pokeApi);
pikachu.scream()
pikachu.speak()
console.log(pikachu.getMoves())
