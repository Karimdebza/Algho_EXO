import { Apple } from "./Apple.js";
import { Display } from "./Display.js";
import { Snacke } from "./Snacke.js";

export class Game{
  private  pomme : Apple;
  private snake : Snacke;
    constructor() {
    }
    
    public getScore():number{
        return 0;
    }

    public play(display:Display):boolean{
        return false;
    }
}