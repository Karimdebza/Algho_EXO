import { Symbole } from "../ENUM/Symbole";
import { Value } from "../ENUM/Value";

export class Card {
   private Value : Value;
  private  symbole : Symbole;
    constructor(type:Value,symbole:Symbole) {
        this.Value = type;
        this.symbole = symbole;
    }
    getValue():Value{
        return this.Value;
    }

    public display(): string{
      return ` ${Value[this.Value]} de ${Symbole[this.symbole]}`;
      
    }
    getSymbole():Symbole{
        return this.symbole;
    }


    

}

