import { Card } from "./Card";

export  class Player   {
    private name : string;
    private card : Card;
    constructor(name:string,card:Card) {
        this.name = name;
        this.card = card;
        
    }
    public getName():string{
        return this.name;
    }
    public setName(name :string){
        return name;
    }
    showCard(): void {
    
        console.log(`vous avez jouer la card ${this.card}`);
    }
    hasCard(): boolean {
        if(this.card !== null ){
            console.log(`${this.name} n'a pas plus de carte`);
            return false
        }
        return true
    }
}