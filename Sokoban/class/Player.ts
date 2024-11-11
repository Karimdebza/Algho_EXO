import { Shape } from "../Enums/Shape.js";
import { Point } from "./Point.js";

export class Player extends Point{


    constructor(x:number,y:number){
        super(x,y,Shape.CIRCLE,'green');
    }
    push(){

    }
    
    
}