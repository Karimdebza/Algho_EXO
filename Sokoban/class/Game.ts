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
        this.player = new Player(Math.floor(width / 2), Math.floor(height/2),Direction.LEFT);
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

    public displacement():void{
        document.addEventListener('keypress', (event) => {
            let newDir : Direction;
            switch (event.key) {
                case 'ArrowUp':
                    newDir = Direction.UP
                    console.log(newDir);
                    break;
                
                case 'ArrowDown':
                    newDir = Direction.DOWN
                    break;
                
                case 'ArrowLeft':
                    newDir = Direction.LEFT
                    
                    break;
                
                case 'ArrowRight':
                    newDir = Direction.RIGHT
                    break;
                default:
                    newDir = Direction.RIGHT;
            }
            if(newDir != (this.getLastDir()+2) %4){
                this.direction.push(newDir);
            }
        } ) 
    }

   public display_point(point : Point):void{
    switch(point.getShape()){
        case Shape.CIRCLE:
        this.display.draw(this);
    }
   }

    public play():void{
        this.display.draw(this); 
        this.displacement();
       
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
    
}
