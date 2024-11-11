import { Shape } from "../Enums/Shape.js";
import { Point } from "./Point.js";
export class Hole extends Point {
    constructor(x, y) {
        super(x, y, Shape.SQUARE, 'black');
    }
    is_Filled(rock) {
        if (this.touch(rock))
            return true;
        return false;
    }
}
