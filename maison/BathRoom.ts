import { Room } from "./Room";

export class BathRoom extends Room {
    constructor(name:string, area:number,floor:number,tv:boolean) {
        super(name,area,floor,tv);
}


getArea(): number {
   return this.area;
}

public getname() : string {
    return this.name;
}

public hasTV(): boolean {
    return false;
}
}