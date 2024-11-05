import { Point } from "./Point.js";
import { Snacke } from "./Snacke.js";

export class Apple extends Point {
    constructor(x:number,y:number ) {
        super(x,y);
    }
    

    public mouved(snake:Snacke,gridWidth: number, gridHeight: number): void {
        let  newX :number;
        let newY :number;
        do{
        newX =  Math.floor(Math.random() * gridWidth);
         newY =  Math.floor(Math.random() * gridHeight);
        }while (snake.getPoints().some(segment => segment.x === newX  && segment.y === newY )){
            this.x = newX;
            this.y = newY;
        };
  
    }
}