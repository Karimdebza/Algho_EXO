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
        for (let i = 0; i < this.rocks.length; i++) {
            let rock = this.rocks[i];
            if (this.player.touch_rock(rock)) {
                document.addEventListener("keypress", (event) => {
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
                    if (this.isPositionValid(newX, newY)) {
                        rock.setX(newX);
                        rock.setY(newY);
                        this.display.clear();
                        this.display.draw(this);
                    }
                });
                console.log("test");
            }
        }
    }
    movePlayer(event) {
        let newX = this.player.getX();
        let newY = this.player.getY();
        // Déterminer la direction du mouvement
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
                return; // Ignore les autres touches
        }
        // Vérifier s'il y a une collision avec un rocher
        for (let rock of this.rocks) {
            if (this.player.touch_rock(rock)) {
                const rockNewX = rock.getX() + (newX - this.player.getX());
                const rockNewY = rock.getY() + (newY - this.player.getY());
                // Vérifier si le rocher peut être poussé
                if (this.isPositionValid(rockNewX, rockNewY)) {
                    // Déplacer le rocher
                    rock.setX(rockNewX);
                    rock.setY(rockNewY);
                    // Déplacer le joueur
                    this.player.setX(newX);
                    this.player.setY(newY);
                }
                else {
                    console.log("Le rocher ne peut pas être poussé.");
                }
                return; // Arrête de vérifier les autres rochers
            }
        }
        // Si aucune collision, déplacer le joueur
        if (this.isPositionValid(newX, newY)) {
            this.player.setX(newX);
            this.player.setY(newY);
        }
        // Redessiner la scène
        this.display.clear();
        this.display.draw(this);
    }
    isPositionValid(x, y) {
        if (x < 0 || y < 0 || x >= this.width || y >= this.height) {
            return false;
        }
        for (let i = 0; i < this.rocks.length; i++) {
            let rock = this.rocks[i];
            if (rock.getX() === x && rock.getY() === y) {
                return false;
            }
        }
        return true;
    }
}
