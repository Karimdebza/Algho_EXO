import { Direction } from "../Enums/Direction.js";
import { Shape } from "../Enums/Shape.js";
import { Display } from "./Display.js";
import { Hole } from "./Hole.js";
import { Player } from "./Player.js";
import { Rock } from "./Rock.js";
function get_rand(max) {
    return Math.floor(Math.random() * max);
}
export class Game {
    constructor(width, height, scale) {
        this.width = width;
        this.height = height;
        this.display = new Display(width, height, scale);
        this.level = 1;
        this.direction = [Direction.RIGHT];
        this.player = new Player(Math.floor(width / 2), Math.floor(height / 2), Direction.LEFT);
        this.holes = [new Hole(get_rand(height), get_rand(width))];
        this.rocks = [new Rock(get_rand(height), get_rand(width))];
    }
    getLevel() {
        return this.level;
    }
    getDir() {
        return this.direction[0];
    }
    getLastDir() {
        return this.direction[this.direction.length - 1];
    }
    displacement() {
        document.addEventListener('keypress', (event) => {
            let newDir;
            switch (event.key) {
                case 'ArrowUp':
                    newDir = Direction.UP;
                    console.log(newDir);
                    break;
                case 'ArrowDown':
                    newDir = Direction.DOWN;
                    break;
                case 'ArrowLeft':
                    newDir = Direction.LEFT;
                    break;
                case 'ArrowRight':
                    newDir = Direction.RIGHT;
                    break;
                default:
                    newDir = Direction.RIGHT;
            }
            if (newDir != (this.getLastDir() + 2) % 4) {
                this.direction.push(newDir);
            }
        });
    }
    display_point(point) {
        switch (point.getShape()) {
            case Shape.CIRCLE:
                this.display.draw(this);
        }
    }
    play() {
        this.display.draw(this);
        this.displacement();
    }
    getHole() {
        return this.holes;
    }
    getRock() {
        return this.rocks;
    }
    getPlayer() {
        return this.player;
    }
}
