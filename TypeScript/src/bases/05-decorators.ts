export class NewPokemon {

    constructor(
        public readonly id:number,
        public name: string
    ){}

    scream(){
        console.log(`No quiero!!!`)
    }

    speak(){
        console.log(`No quiero hablar`)
    }

}
const MyDecorator = () => {
    return (target: Function) => {
        return NewPokemon
    }
}
@MyDecorator()
export class Pokemon {

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

}

export const pikachu = new Pokemon(1,"Pikachu");
pikachu.scream()
pikachu.speak()

