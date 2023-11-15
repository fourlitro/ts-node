import { Hero , Hero1, Hero2} from "./classes/Hero"; //t y exportacion con alias 
// import * as HeroClasses from "./classes/Hero";
// import powers from "./data/powers"; //export default
// const Hero = 123;

const ironman = new Hero("Ironman", 1, 55); //exportacion ya con alias
//const ironman = new HeroClasses.Hero("Ironman", 1, 55);

console.log(ironman);
console.log(ironman.power);

// console.log(powers); //export default
