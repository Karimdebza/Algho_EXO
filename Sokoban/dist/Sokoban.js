import { Display } from "./class/Display.js";
import { Game } from "./class/Game.js";
const game = new Game(50, 50, 10);
const display = new Display(50, 50, 10);
game.displacement();
game.push_rock();
game.play();
// game.movePlayer();
