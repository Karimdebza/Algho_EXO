import { Card } from "./Card";
import { Deck } from "./Deck";

export  class Player   {
    private name : string;
    private hand : Card[];
    private deck : Deck;
    constructor(name:string) {
        this.name = name;
         this.hand = [];
        this.deck = new Deck();
        
    }
    public getName():string{
        return this.name;

    }
    public addCard(card: Card |undefined) {
        if(card != undefined){
            this.hand.push(card);
        }
        
    }


    public play() : Card |undefined{
    return  this.hand.shift();
    }
    public retrieveCard(d:Deck){

        let deck = d.drawDeck();
        while (deck) {
            this.hand.push(deck);
            d.drawDeck();
        }

    
    }
       
    public getNbCard(): number{
        return this.hand.length;
    }

    }

