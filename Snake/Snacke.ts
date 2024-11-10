import { Direction } from "./enum/Direction.js";
import { Point } from "./Point.js";

export class Snacke  {
    private points : Point[];
    private direction : Direction = Direction.NONE;
    private position : Point;
    private jump_distance : number = 1;
    public is_alive: boolean = false;
    
    

    constructor(position: Point ) {
        
        this.points = [new Point(10, 10), new Point(11, 10), new Point(11, 10)];
        this.position = position;
    }

    public addPoint(point:Point){
        this.points.push(point);
    }


    getHeard():Point{
      return   this.points[0];
    }

    growHead(point:Point){
        // @TODO : pousser la tête dans le bon sens
        this.points.unshift(point);
        const position : Point = this.getHeard();
        switch(this.direction){
         case Direction.UP:
             position.y  -= 1
             
             break
          case Direction.DOWN:
             position.y += 1
             break
         case Direction.LEFT:
             position.x -= 1
             
             break
         case Direction.RIGHT:
             position.x += 1
             
              
        }
    }
    crop(){
        this.points.shift();
    }


    public move() {
   
    //    this.points.unshift(position);
    //    ;
    //    this.position = position;

    }

    public checkCollision(){
        if(this.is_alive){
          const head =   this.getHeard()
            if( head.x === this.position.x && head.y === this.position.y ){
                return true;
           
            }
           
        }else{
            return false;
        }
    }
    public getPosition():Point{
        return this.position;
    }
    public getPoints():Point[]{
        return this.points;
    }
}






