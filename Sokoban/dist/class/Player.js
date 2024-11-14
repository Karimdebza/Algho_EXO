import { Direction } from "../Enums/Direction.js";
import { Shape } from "../Enums/Shape.js";
import { Point } from "./Point.js";
export class Player extends Point {
    constructor(x, y, dir) {
        super(x, y, Shape.CIRCLE, 'green');
        // this.mouv(dir);
    }
    push(rock) {
    }
    mouv(dir) {
        let x = this.getX() + Number(dir == Direction.RIGHT) - Number(dir == Direction.LEFT);
        let y = this.getY() + Number(dir == Direction.DOWN) - Number(dir == Direction.UP);
    }
}
