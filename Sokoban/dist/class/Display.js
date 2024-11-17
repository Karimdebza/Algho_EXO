import Drawer from "./Drawer.js";
export class Display {
    constructor(width, height, scale = 10) {
        this.drawer = new Drawer(width, height, scale);
        const canvas = document.createElement("canvas");
        this.ctx = canvas.getContext("2d");
        this.scale = scale;
        canvas.width = width * this.scale;
        canvas.height = height * this.scale;
    }
    refreshScore() {
        let score = document.getElementById("score");
        if (score != null)
            score.innerHTML = "0";
    }
    draw(game) {
        let rocks = game.getRock();
        for (let i = 0; i < rocks.length; i++) {
            let rock = rocks[i];
            this.drawer.drawRectangle(rock.getX(), rock.getY(), rock.getColor());
        }
        const holes = game.getHole();
        for (let i = 0; i < holes.length; i++) {
            let hole = holes[i];
            this.drawer.drawRectangle(hole.getX(), hole.getY(), hole.getColor());
        }
        const player = game.getPlayer();
        this.drawer.drawCircle(player.getX(), player.getY(), player.getColor());
    }
    clear() {
        this.drawer.clear();
    }
}
