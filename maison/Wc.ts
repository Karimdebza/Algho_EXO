import { Room } from "./Room";

export class Wc extends Room {
    constructor(name:string, area:number,floor:number,tv:boolean) {
        super(name,area,floor,tv);
}

getArea(): number {
   return this.area;
}
public hasTV(): boolean {
    return false;
}
public getname() : string {
    return this.name;
}
public getfloor(): number {
    return this.floor;
}
}