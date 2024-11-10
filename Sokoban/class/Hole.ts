import { Shape } from "../Enums/Shape.js";
import { Point } from "./Point.js";

export class Hole extends Point{
    constructor(x:number,y:number){
        super(x,y,Shape.SQUARE,'black');

    }

}