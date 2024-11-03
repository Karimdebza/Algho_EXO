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
    mouved() {
        if (this.x && this.y !== undefined) {
            this.x + 1;
            this.y + 1;
        }
    }
}
