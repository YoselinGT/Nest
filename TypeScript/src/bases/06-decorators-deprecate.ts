const Deprecated = (deprecationReason: string) => {
    return (target: any, memberName: string, propertyDescriptor: PropertyDescriptor) => {
        // console.log({target})
        return {
            get() {
                const wrapperFn = (...args: any[]) => {
                    console.warn(`Method ${ memberName } is deprecated with reason: ${ deprecationReason }`);
                    //! Llamar la función propiamente con sus argumentos
                    propertyDescriptor.value.apply(this, args);
                }
                return wrapperFn;
            }
        }
    }
}

export class NewPokemon {

    constructor(
        public readonly id:number,
        public name: string
    ){}

    scream(){
        console.log(`No quiero!!!`)
    }

    @Deprecated('Most use speak2 method instead')
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

