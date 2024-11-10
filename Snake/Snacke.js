import { Direction } from "./enum/Direction.js";
import { Point } from "./Point.js";
export class Snacke {
    constructor(position) {
        this.direction = Direction.NONE;
        this.jump_distance = 1;
        this.is_alive = false;
        this.points = [new Point(10, 10), new Point(11, 10), new Point(11, 10)];
        this.position = position;
    }
    addPoint(point) {
        this.points.push(point);
    }
    getHeard() {
        return this.points[0];
    }
    growHead(point) {
        // @TODO : pousser la tête dans le bon sens
        this.points.unshift(point);
        const position = this.getHeard();
        switch (this.direction) {
            case Direction.UP:
                position.y -= 1;
                break;
            case Direction.DOWN:
                position.y += 1;
                break;
            case Direction.LEFT:
                position.x -= 1;
                break;
            case Direction.RIGHT:
                position.x += 1;
        }
    }
    crop() {
        this.points.shift();
    }
    move() {
        //    this.points.unshift(position);
        //    ;
        //    this.position = position;
    }
    checkCollision() {
        if (this.is_alive) {
            const head = this.getHeard();
            if (head.x === this.position.x && head.y === this.position.y) {
                return true;
            }
        }
        else {
            return false;
        }
    }
    getPosition() {
        return this.position;
    }
    getPoints() {
        return this.points;
    }
}
