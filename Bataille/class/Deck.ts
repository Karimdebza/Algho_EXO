import { Card } from "./Card";
import { TypeCard } from "./TypeCard";

export class Deck {
   private  card:Card [];
    private colorCard:TypeCard;
    constructor(colorDeack:TypeCard) {
        this.card = [];
        this.colorCard = colorDeack;

    }

    createdeck(card :Card){
        return this.card.push(card);   
    }

}