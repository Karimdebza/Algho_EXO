export class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    is_touch(point1) {
        if (point1.x === this.x && point1.y === this.y) {
            return true;
        }
        else {
            return false;
        }
    }
    display() {
        return ` ${this.x} de ${this.y}`;
    }
    static copy(posision) {
        return new Point(posision.x, posision.y);
    }
    getY() {
        return this.y;
    }
    getX() {
        return this.x;
    }
}
