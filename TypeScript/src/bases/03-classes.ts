import axios from "axios";
import {PokeApi} from "../interfaces/pokeapi-response.interface.ts";
export class Pokemon {

    get imageUrl (): string {
        return `https://pokemon.com/${this.id}.jpg`;
    }

    constructor(
        public readonly id:number,
        public name: string
    ){}

    scream(){
        console.log(`${ this.name.toUpperCase()}!!!`)
    }

    speak(){
        console.log(`${this.name} , ${this.name}`)
    }

    async getMoves(){
        const resp = await axios.get<PokeApi>('https://pokeapi.co/api/v2/pokemon/4');
        console.log(resp)
        return resp;
    }

}

export const pikachu = new Pokemon(1,"Pikachu");
pikachu.scream()
pikachu.speak()
console.log(pikachu.getMoves())
