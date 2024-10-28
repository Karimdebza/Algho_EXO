import { Room } from "./Room";

export class LivingRoom extends Room {
   
   

    constructor(name:string, area:number,floor:number,tv:boolean) {
        super(name,area,floor,tv);
}

    public hasTV(): boolean {
        return true;
    }


    public getArea(): number {
       return  this.area;
    }
    public getfloor(): number {
        return this.floor;
    }

}