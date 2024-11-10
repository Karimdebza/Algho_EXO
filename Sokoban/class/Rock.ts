import { Shape } from "../Enums/Shape";
import { Point } from "./Point";

export class Rock extends Point{
    constructor(x:number,y:number){
        super(x,y,Shape.SQUARE,'red');

    }

}