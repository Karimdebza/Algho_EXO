import { Shape } from "../Enums/Shape.js";
import { Point } from "./Point.js";
export class Hole extends Point {
    constructor(x, y) {
        super(x, y, Shape.SQUARE, 'black');
        this.isFilled = false;
    }
    // public is_Filled(rock:Point):boolean{
    //     if(this.touch(rock) ) return true;
    //     return false;
    // }
    is_empty(point) {
        if (point.getX() && point.getY() === this.x && this.y) {
            return false;
        }
        return true;
    }
    getPosition() {
        return { x: this.x, y: this.y };
    }
    setPosition(x, y) {
        this.x = x;
        this.y = y;
    }
    getIsFilled() {
        return this.isFilled;
    }
    // Définit l'état du trou (rempli ou vide)
    setIsFilled(isFilled) {
        this.isFilled = isFilled;
    }
}
