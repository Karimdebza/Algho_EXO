export  class Point  {
     x : number;
    y : number;
    
    constructor(x: number, y :number) {
        this.x = x;
        this.y = y;

    }

    public is_touch(point1:Point ):boolean{
        
        if(point1.x === this.x && point1.y === this.y){
            return true;
        }else{
            return false;
        }
    }


    display() : string{
      return ` ${this.x} de ${this.y}`; 
    }

    static copy(posision : Point){
         return new Point(posision.x,posision.y);
    }

    getY(): number{
        return this.y;
    }
    getX(): number{
        return this.x;
    }
}