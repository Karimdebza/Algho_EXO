import { Direction } from "../Enums/Direction.js";
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
        this.holes = [new Hole(get_rand(height), get_rand(width), 'black')];
        this.rocks = [new Rock(get_rand(height), get_rand(width))];
    }
    getLevel() {
        return this.level;
    }
    play() {
        this.display.draw(this);
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
    displacement() {
        document.addEventListener("keydown", (event) => {
            let newX = this.player.getX();
            let newY = this.player.getY();
            let dir = null;
            switch (event.key) {
                case "ArrowUp":
                    newY -= 1;
                    dir = Direction.UP;
                    break;
                case "ArrowDown":
                    newY += 1;
                    dir = Direction.DOWN;
                    break;
                case "ArrowLeft":
                    newX -= 1;
                    dir = Direction.LEFT;
                    break;
                case "ArrowRight":
                    newX += 1;
                    dir = Direction.RIGHT;
                    break;
                default:
                    return;
            }
            const rock = this.rocks.find(r => r.getPosition().x === newX && r.getPosition().y === newY);
            const hole = this.holes.find(h => h.getPosition().x === newX && h.getPosition().y === newY);
            if (rock) {
                const rockNewX = dir === Direction.LEFT ? newX - 1 : dir === Direction.RIGHT ? newX + 1 : newX;
                const rockNewY = dir === Direction.UP ? newY - 1 : dir === Direction.DOWN ? newY + 1 : newY;
                if (this.isPositionValid(rockNewX, rockNewY)) {
                    rock.setPosition(rockNewX, rockNewY);
                    if (rock) {
                        console.log("Rock new position:", rock.getPosition());
                    }
                }
                else {
                    console.log("ne peux pas sortir de la cage.");
                    return;
                }
            }
            if (hole && !hole.getIsFilled()) {
                console.log("ne peux pas le remplire.");
                hole.setColor('gray');
                hole.setIsFilled(true);
                return;
            }
            if (rock && hole && !hole.getIsFilled()) {
                hole.setColor('gray'); // Change la couleur du rocher
                hole.setIsFilled(true); // Marque le trou comme rempli
                console.log("Le rocher a changé de couleur et le trou est rempli.");
            }
            this.player.setPosition(newX, newY);
            this.display.clear();
            this.display.draw(this);
        });
    }
    isPositionValid(x, y) {
        if (x < 0 || y < 0 || x >= this.width || y >= this.height) {
            return false;
        }
        if (this.rocks.some(rock => rock.getPosition().x === x && rock.getPosition().y === y)) {
            return false;
        }
        return true;
    }
}
