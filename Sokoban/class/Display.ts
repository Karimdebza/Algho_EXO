import Drawer from "./Drawer.js";
import { Game } from "./Game.js";
import { Hole } from "./Hole.js";
import { Player } from "./Player.js";
import { Rock } from "./Rock.js";
import { Rocks } from "./Rocks.js";

export class Display {
  private ctx: CanvasRenderingContext2D | null;
  private scale: number;
  private drawer: Drawer;

  constructor(width: number, height: number, scale: number = 10) {
    this.drawer = new Drawer(width, height, scale);
    const canvas = document.createElement("canvas");
    this.ctx = canvas.getContext("2d");

    this.scale = scale;
    canvas.width = width * this.scale;
    canvas.height = height * this.scale;
    
  }

  public refreshScore() {
    let score: HTMLElement | null = document.getElementById("score");
    if (score != null) score.innerHTML = "0";
  }

  public draw(game: Game): void {
    let rocks : Rock[]= game.getRock();
    for (let i = 0; i < rocks.length; i++) {
        let rock : Rock = rocks[i];
        this.drawer.drawRectangle(rock.getX(),rock.getY(), rock.getColor());
        
    }
    const holes : Hole[] = game.getHole();
    for (let i = 0; i < holes.length; i++) {
        let hole : Hole = holes[i];
        this.drawer.drawRectangle(hole.getX(),hole.getY(),hole.getColor());
        
    }
    
    
    
    const player : Player = game.getPlayer();
    this.drawer.drawCircle(player.getX(), player.getY(),player.getColor());
   
   
  
  }




  public clear(){
  this.drawer.clear();
}

}
