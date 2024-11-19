import { Shape } from "../Enums/Shape.js";
import { Player } from "./Player.js";
import { Point } from "./Point.js";

export class Rock extends Point{
    constructor(x:number,y:number){
        super(x,y,Shape.SQUARE,'red');

    }

    public touched(player: Player): boolean {
        
            if(player.getX() && player.getY() === this.x && this.y ) {
                return true ;
            }
            return false;
        
    }

    public setX(newX: number): void {
        this.x = newX;
    }

    public setY(newY: number): void {
        this.y = newY;
    }

    getPosition(){
        return { x:this.x , y:this.y};
    }

    setPosition(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    removRock(){

    }

    
}