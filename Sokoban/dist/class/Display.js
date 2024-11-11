import Drawer from "./Drawer.js";
export class Display {
    constructor(width, height, scale = 10) {
        this.drawer = new Drawer(width, height, scale);
        const canvas = document.createElement('canvas');
        this.ctx = canvas.getContext('2d');
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
    }
    drawRectangle(x, y, color) {
        if (this.ctx != null) {
            this.ctx.beginPath();
            this.ctx.fillStyle = color;
            this.ctx.fillRect(x * this.scale, y * this.scale, this.scale, this.scale);
        }
    }
    drawCircle(x, y, color) {
        if (this.ctx != null) {
            this.ctx.beginPath();
            this.ctx.fillStyle = color;
            this.ctx.arc(x * this.scale + this.scale / 2, y * this.scale + this.scale / 2, this.scale / 2, 0, 2 * Math.PI);
            this.ctx.fill();
        }
    }
}
