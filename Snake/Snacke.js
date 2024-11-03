export class Snacke {
    constructor() {
        this.point = [];
    }
    // public touch(): boolean {
    // }
    addPoint(point) {
        this.point.push(point);
    }
    displaySnake() {
        let str = "";
        for (let i = 0; i < this.point.length; i++) {
        }
        return str;
    }
    getHeard() {
        this.point[0];
    }
    grow(point) {
        this.point.unshift(point);
    }
    crop() {
        this.point.shift();
    }
}
