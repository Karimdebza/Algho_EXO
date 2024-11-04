import { Direction } from "./enum/Direction.js";
import { Point } from "./Point.js";

export class Snacke  {
    private point : Point[];
    private direction : Direction = Direction.NONE;
    private position : Point;
    private jump_distance : number = 8;
    public is_alive: boolean = false;
    
    

    constructor(position: Point ) {
        
        this.point = [];
        this.position = position;
    }

    public addPoint(point:Point){
        this.point.push(point);
    }

    public displaySnake(): string{
        let str : string = ""; 
        for (let i = 0; i < this.point.length; i++) {
           
            str = str + this.point[i].display() + "\n";
        }
        return str;

    }

    getHeard():Point{
      return   this.point[0];
    }

    grow(point:Point){
        this.point.unshift(point);
    }
    crop(){
        this.point.shift();
    }


    public mouv(){
        const position : Point = Point.copy(this.position);
       switch(this.direction){
        case Direction.UP:
            position.y  -= this.jump_distance
            break
         case Direction.DOWN:
            position.y += this.jump_distance
            break
        case Direction.LEFT:
            position.x -= this.jump_distance
            break
        case Direction.RIGHT:
            position.x += this.jump_distance
             
       }
       this.point.unshift(position);
       this.crop();
       this.position = position;

    }

    public checkCollision(){
        if(this.is_alive){
            if(this.getHeard() === this.position){
                return true;
           
            }
           
        }else{
            return false;
        }
    }
    public getPosition():Point{
        return this.position;
    }
}






