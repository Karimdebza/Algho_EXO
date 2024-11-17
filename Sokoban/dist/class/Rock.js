import { Shape } from "../Enums/Shape.js";
import { Point } from "./Point.js";
export class Rock extends Point {
    constructor(x, y) {
        super(x, y, Shape.SQUARE, 'red');
    }
    touched(player) {
        if (player.getX() && player.getY() === this.x && this.y) {
            return true;
        }
        return false;
    }
    setX(newX) {
        this.x = newX;
    }
    setY(newY) {
        this.y = newY;
    }
}
