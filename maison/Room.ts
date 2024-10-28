import { Home } from "./Home";
import {BedRoom} from "./BedRoom";
import {LivingRoom} from "./LivingRoom";
import { Kitchen } from "./Kitchen";
import { BathRoom } from "./BathRoom";
import { Wc } from "./Wc";
export abstract class Room  {
    protected name:string;
   
    protected area :number;
    protected floor : number;
    private haveTv : boolean ;
 

    constructor(name:string,area:number, floor:number,tv:boolean) {
        this.name = name;
        this.area  = area;
        this.floor = floor;
        this.haveTv = tv;
        
    }

   public getArea():number{
      return  this.area;
    }   
    public getLivingArea(){
        return this.area;
    }

 
    public hasTV(): boolean{
        if (this.haveTv) {
            return true
        }
        return false;
    }
    
    public getname() : string {
        return this.name;
    }
   public getfloor(){
        return this.floor;
    }
    
 
}