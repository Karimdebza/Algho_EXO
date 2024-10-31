import { Card } from "./Card";
import { Value } from "../ENUM/Value";
import { Symbole } from "../ENUM/Symbole";


export class Deck {
    private  card: Card[];
    
    constructor() {
        this.card = [];
    }

    addCard(card:Card){
        return this.card.push(card);
    }
    
    public createdeck(){
            for (let i = 0; i < 13; i++) {
                for (let j = 0; j < 4; j++) {
                    this.card.push(new Card(i as Value,j as Symbole ));
                }
            }
        }
    public shufuldDeck(){
        let currentIndex = this.card.length;
        while (currentIndex !== 0) {
            let randomIndex = Math.floor(Math.random() * currentIndex );
            currentIndex--;
            [this.card[currentIndex],this.card[randomIndex]] = [this.card[randomIndex], this.card[currentIndex]];

        }
        
        
        }
    public displayDeck(){
        let str: string  =  "";
        for (let i = 0; i < this.card.length; i++) {
            str = str + this.card[i].display() + "\n \n";
            
            
            
        }
        return str;
        
        }

    public drawDeck(): Card | undefined{
       return  this.card.shift();
        }
        
    public is_empty():boolean{
        return this.card.length === 0;
    }

    public getNbCard():number{
        return this.card.length;
    }



}

