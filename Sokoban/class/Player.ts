import { Shape } from "../Enums/Shape";
import { Point } from "./Point";

export class Player extends Point{


    constructor(x:number,y:number){
        super(x,y,Shape.CIRCLE,'green');
    }
    push(){

    }
    
}