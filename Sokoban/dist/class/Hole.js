import { Shape } from "../Enums/Shape.js";
import { Point } from "./Point.js";
export class Hole extends Point {
    constructor(x, y, color) {
        super(x, y, Shape.SQUARE, color);
        this.isFilled = false;
    }
    setColor(color) {
        return this.color = color;
    }
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
    // public rock_filled(rock: Rock) {
    //     if (rock.getPosition() !== this.getPosition()) {
    //         return true;
    //     }
    // }
    setIsFilled(isFilled) {
        this.isFilled = isFilled;
    }
}
