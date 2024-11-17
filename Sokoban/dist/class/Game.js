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
        this.player = new Player(Math.floor(width / 2), Math.floor(height / 2));
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
        document.addEventListener("keydown", (event) => {
            let newX = this.player.getX();
            let newY = this.player.getY();
            switch (event.key) {
                case "ArrowUp":
                    newY -= 1;
                    break;
                case "ArrowDown":
                    newY += 1;
                    break;
                case "ArrowLeft":
                    newX -= 1;
                    break;
                case "ArrowRight":
                    newX += 1;
                    break;
                default:
                    return;
            }
            this.player.setX(newX);
            this.player.setY(newY);
            this.display.clear();
            this.display.draw(this);
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
        this.step;
    }
    step() {
        // this.player.mouv(this.getDir());
        if (this.direction.length > 1) {
            this.direction.shift();
        }
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
    push_rock() {
        let canPush = false;
        for (let i = 0; i < this.rocks.length; i++) {
            let rock = this.rocks[i];
            if (this.player.touch_rock(rock)) {
                canPush = true;
                if (canPush == true) {
                    document.addEventListener("keydown", (event) => {
                        let newX = rock.getX();
                        let newY = rock.getY();
                        switch (event.key) {
                            case "ArrowUp":
                                newY -= 1;
                                break;
                            case "ArrowDown":
                                newY += 1;
                                break;
                            case "ArrowLeft":
                                newX -= 1;
                                break;
                            case "ArrowRight":
                                newX += 1;
                                break;
                            default:
                                return;
                        }
                        rock.setX(newX);
                        rock.setY(newY);
                        this.display.clear();
                        this.display.draw(this);
                    });
                }
                console.log("test");
            }
            if (this.player.touch(rock) == false) {
                canPush = false;
            }
        }
    }
}
