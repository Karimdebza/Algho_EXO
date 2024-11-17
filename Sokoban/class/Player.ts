import { Direction } from "../Enums/Direction.js";
import { Shape } from "../Enums/Shape.js";
import { Game } from "./Game.js";
import { Point } from "./Point.js";
import { Rock } from "./Rock.js";

export class Player extends Point{


    constructor(x:number,y:number,dir:Direction=Direction.RIGHT){
        super(x,y,Shape.CIRCLE,'green');
        
    }
   
 

    public setX(newX: number): void {
        this.x = newX;
    }

    public setY(newY: number): void {
        this.y = newY;
    }
    

    public touch_rock(rock:Rock):boolean{
    
        if(this.touch(rock)) return true;
        return false;
    }

    
    
}

