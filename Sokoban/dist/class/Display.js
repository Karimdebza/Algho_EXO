import Drawer from "./Drawer.js";
export class Display {
    constructor(width, height, scale = 10) {
        this.drawer = new Drawer(width, height, scale);
    }
    refreshScore() {
        let score = document.getElementById("score");
        if (score != null)
            score.innerHTML = "0";
    }
    draw(game) {
    }
}
