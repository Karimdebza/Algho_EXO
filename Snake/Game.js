import { Apple } from "./Apple.js";
import { Point } from "./Point.js";
import { Snacke } from "./Snacke.js";
export class Game {
    constructor(width, height) {
        // Initialise la pomme et le Snake à des positions par défaut
        this.pomme = new Apple(Math.floor(width / 2), Math.floor(height / 2));
        this.snake = new Snacke(new Point(12, 12));
    }
    getScore() {
        return 0;
    }
    play(display) {
        // this.snake = new Snacke();
        // Dessine le corps du Snake
        for (let segment of this.snake.getPoints()) {
            display.drawRectangle(segment.x, segment.y, 'green');
        }
        // Dessine la pomme
        display.drawCircle(this.pomme.x, this.pomme.y, 'red');
        // Met à jour le score
        display.refreshScore();
        // Retourne true si le Snake est encore en vie
        return this.snake.is_alive;
    }
}
