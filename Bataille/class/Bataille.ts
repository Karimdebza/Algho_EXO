import { Card } from "./Card";
import { TypeCard } from "./TypeCard";


export class Battaille {
    private card : Card[]; 
    constructor() {
        this.card = [];
    }

    addCard(card:Card){
        return this.card.push(card);
    }

    

}


