import powers from "../data/Powers"; //export default

export class Hero {
    constructor(
        public name: string,
        public powerId: number,
        public age: number
    ){}

    get power():string { //return string
        return powers.find( power => power.id === this.powerId)?.desc || "not found"
    }
}

export class Hero1 {
    
}

export class Hero2 {
   
}

export const PI = 3.1416;

export const miNombre = "Aldair Alexis"