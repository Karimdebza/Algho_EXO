import { Shape } from "../Enums/Shape.js";
import { Point } from "./Point.js";

export class Rock extends Point{
    constructor(x:number,y:number){
        super(x,y,Shape.SQUARE,'red');

    }

}