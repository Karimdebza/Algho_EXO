 import { Rock } from "./Rock";
 export class Rocks {

    protected rocks:Rock[];

    constructor(x:number,y:number){
        this.rocks = [new Rock(x,y)];
    }   


 }