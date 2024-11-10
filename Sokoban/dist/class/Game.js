import { Display } from "./Display.js";
export class Game {
    constructor(width, height, scale) {
        this.width = width;
        this.height = height;
        this.display = new Display(width, height, scale);
    }
}
