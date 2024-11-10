import { Point } from "./Point.js";
export class Apple extends Point {
    constructor(x, y) {
        super(x, y);
    }
    mouved(snake, gridWidth, gridHeight) {
        let newX;
        let newY;
        do {
            newX = Math.floor(Math.random() * gridWidth);
            newY = Math.floor(Math.random() * gridHeight);
        } while (snake.getPoints().some(segment => segment.x === newX && segment.y === newY));
        {
            this.x = newX;
            this.y = newY;
        }
        ;
    }
}
