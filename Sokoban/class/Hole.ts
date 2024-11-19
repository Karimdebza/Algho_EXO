import { Shape } from "../Enums/Shape.js";
import { Point } from "./Point.js";

export class Hole extends Point{
    protected isFilled: boolean;
    constructor(x:number,y:number){
        super(x,y,Shape.SQUARE,'black');
        this.isFilled = false;

    }

    // public is_Filled(rock:Point):boolean{
    //     if(this.touch(rock) ) return true;
    //     return false;
    // }

    public is_empty(point:Point):boolean{
         if(point.getX() && point.getY() === this.x && this.y ){
            return false;
         }
         return true;
    }

    getPosition() {
        return { x: this.x, y: this.y };
    }
 
   
 
    setPosition(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public getIsFilled(): boolean {
        return this.isFilled;
    }

    // Définit l'état du trou (rempli ou vide)
    public setIsFilled(isFilled: boolean): void {
        this.isFilled = isFilled;
    }
}