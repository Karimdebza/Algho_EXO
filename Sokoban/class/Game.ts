import { Direction } from "../Enums/Direction.js";
import { Shape } from "../Enums/Shape.js";
import { Display } from "./Display.js";
import { Hole } from "./Hole.js";
import { Holes } from "./Holes.js";
import { Player } from "./Player.js";
import { Point } from "./Point.js";
import { Rock } from "./Rock.js";
import { Rocks } from "./Rocks.js";

function get_rand(max:number):number {
    return Math.floor(Math.random()*max);
}

export class Game{
    private width:number;
    private height:number;
    private display : Display;
    protected player : Player;
    protected holes: Hole[];
    protected rocks: Rock[];

    protected direction : Direction[];
    protected level : number;

    
    constructor(width:number, height:number, scale:number) {
        this.width = width;
        this.height = height;
        this.display = new Display(width,height,scale);
        this.level  = 1;
        this.direction = [Direction.RIGHT];
        this.player = new Player(Math.floor(width / 2), Math.floor(height/2));
        this.holes = [new Hole(get_rand(height), get_rand(width))];
        this.rocks = [new Rock(get_rand(height), get_rand(width))];
       
    }
    
    public getLevel():number{
        return this.level;
    }
    public getDir():Direction{
        return this.direction[0];
    }

    
    public getLastDir():Direction{
        return this.direction[this.direction.length-1];
    }

  
   

   public display_point(point : Point):void{
    switch(point.getShape()){
        case Shape.CIRCLE:
        this.display.draw(this);
    }
   }

    public play():void{
        this.display.draw(this); 
        
        
       
    }

    public step(){
        // this.player.mouv(this.getDir());
        if(this.direction.length>1){
            this.direction.shift();
        }
    }
    public getHole():Hole[]{
       return  this.holes;
    }

    public getRock(){
        return this.rocks;
    }
    public getPlayer(){
        return this.player;
    }

   
    

    
    public displacement(): void {
        document.addEventListener("keydown", (event) => {
            let newX = this.player.getX();
            let newY = this.player.getY();
            let dir: Direction | null = null;

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

            
            if (rock) {
                const rockNewX = dir === Direction.LEFT ? newX - 1 : dir === Direction.RIGHT ? newX + 1 : newX;
                const rockNewY = dir === Direction.UP ? newY - 1 : dir === Direction.DOWN ? newY + 1 : newY;

                if (this.isPositionValid(rockNewX, rockNewY)) {
                    rock.setPosition(rockNewX, rockNewY);
                } else {
                    console.log("ne peux pas.");
                    return;
                }
            }

            
            const hole = this.holes.find(h => h.getPosition().x === newX && h.getPosition().y === newY);
            if (hole && !hole.getIsFilled()) {
                console.log("ne peux pas le remplire.");
                return;
            }

          
            this.player.setPosition(newX, newY);

            
            this.display.clear();
            this.display.draw(this);
        });
    }

    public isPositionValid(x: number, y: number): boolean {
        if (x < 0 || y < 0 || x >= this.width || y >= this.height) {
            return false;
        }

        if (this.rocks.some(rock => rock.getPosition().x === x && rock.getPosition().y === y)) {
            return false;
        }

        return true;
    }

}