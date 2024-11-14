import { Direction } from "../Enums/Direction.js";
import { Shape } from "../Enums/Shape.js";
import { Game } from "./Game.js";
import { Point } from "./Point.js";
import { Rock } from "./Rock.js";

export class Player extends Point{


    constructor(x:number,y:number,dir:Direction){
        super(x,y,Shape.CIRCLE,'green');
        // this.mouv(dir);
    }
    push(rock:Rock){
        
    }
    public mouv(dir:Direction):void{
        let x: number = this.getX() + Number(dir==Direction.RIGHT) - Number(dir==Direction.LEFT);
        let y : number = this.getY() + Number(dir==Direction.DOWN) - Number(dir == Direction.UP);
      
        
    }
    
    
}