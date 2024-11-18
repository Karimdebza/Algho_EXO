import { Hole } from "./Hole";
export class Holes {
    constructor(x, y) {
        this.holes = [new Hole(x, y)];
    }
    getHoles() {
        return this.holes;
    }
    setColor() {
    }
}
