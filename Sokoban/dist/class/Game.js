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
    display_point(point) {
        switch (point.getShape()) {
            case Shape.CIRCLE:
                this.display.draw(this);
        }
    }
    play() {
        this.display.draw(this);
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
            // Gestion des rochers
            if (rock) {
                const rockNewX = dir === Direction.LEFT ? newX - 1 : dir === Direction.RIGHT ? newX + 1 : newX;
                const rockNewY = dir === Direction.UP ? newY - 1 : dir === Direction.DOWN ? newY + 1 : newY;
                if (this.isPositionValid(rockNewX, rockNewY)) {
                    rock.setPosition(rockNewX, rockNewY);
                }
                else {
                    console.log("Cannot move the rock.");
                    return;
                }
            }
            // Gestion des trous
            const hole = this.holes.find(h => h.getPosition().x === newX && h.getPosition().y === newY);
            if (hole && !hole.getIsFilled()) {
                console.log("Cannot move onto an unfilled hole.");
                return;
            }
            // Déplacement du joueur
            this.player.setPosition(newX, newY);
            // Mise à jour de l'affichage
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
