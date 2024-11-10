import { Shape } from "../Enums/Shape";
import { Point } from "./Point";
export class Player extends Point {
    constructor(x, y) {
        super(x, y, Shape.CIRCLE, 'green');
    }
    push() {
    }
}
