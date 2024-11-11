import { Direction } from "../Enums/DIrection";
import { Shape } from "../Enums/Shape";
import { Display } from "./Display";
import { Hole } from "./Hole";
import { Player } from "./Player";
import { Point } from "./Point";
import { Rock } from "./Rock";

function get_rand(max:number):number {
    return Math.floor(Math.random() + max);
}

export class Game{
    private width:number;
    private height:number;
    private display : Display;
    protected player : Player;
    protected hole: Hole;
    protected rock: Rock;
    protected direction : Direction[];
    protected level : number;

    
    constructor(width:number, height:number, scale:number) {
        this.width = width;
        this.height = height;
        this.display = new Display(width,height,scale);
        this.level  = 1;
        this.direction = [Direction.RIGHT];
        this.player = new Player(Math.floor(width / 2), Math.floor(height/2));
        this.hole = new Hole(get_rand(height), get_rand(width));
        this.rock = new Rock(get_rand(height), get_rand(width));
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
                    break;
                
                case 'ArrowDown':
                    newDir = Direction.DOWN
                    break;
                
                case 'ArrowLeft':
                    newDir = Direction.DOWN
                    break;
                
                case 'ArrowRight':
                    newDir = Direction.DOWN
                    break;
                default:
                    newDir = Direction.RIGHT;
            }
            if(newDir != (this.getLastDir()+2) %4){
                this.direction.push(newDir);
            }
        } ) 
    }

    public display_point(point:Point){
        switch(point.getShape()){
            case Shape.CIRCLE:
                this.display.drawCircle(point.getX(),point.getY(),point.getColor());
            case Shape.SQUARE:
               this.display.drawRectangle(point.getX(),point.getY(),point.getColor());
        }
    }

    public play(){
        
        this.display_point(this.player);
        this.display_point(this.rock);
        this.display_point(this.hole);
    }
}

let game = new Game(12,12,34);
console.log(game.play());