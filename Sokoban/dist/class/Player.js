import { Direction } from "../Enums/Direction.js";
import { Shape } from "../Enums/Shape.js";
import { Point } from "./Point.js";
export class Player extends Point {
    constructor(x, y, dir = Direction.RIGHT) {
        super(x, y, Shape.CIRCLE, 'green');
    }
    setX(newX) {
        this.x = newX;
    }
    setY(newY) {
        this.y = newY;
    }
    touch_rock(rock) {
        if (this.touch(rock))
            return true;
        return false;
    }
    getPosition() {
        return { x: this.x, y: this.y };
    }
    setPosition(x, y) {
        this.x = x;
        this.y = y;
    }
}
