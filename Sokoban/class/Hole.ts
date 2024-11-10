import { Shape } from "../Enums/Shape";
import { Point } from "./Point";

export class Hole extends Point{
    constructor(x:number,y:number){
        super(x,y,Shape.SQUARE,'black');

    }

}