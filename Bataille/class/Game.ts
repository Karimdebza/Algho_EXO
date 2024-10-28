import { Battaille } from "./Bataille";
import { Card } from "./Card";
import { Player } from "./Player";
import { TypeCard } from "./TypeCard";

class Game {
    

    public play(){

        const CardHeart5 = new Card(TypeCard.HEARTCARD,TypeCard.CINQUE);
        const CardTrefleAs = new Card(TypeCard.TREFLECARD,TypeCard.AS);
        const CardPicAs = new Card(TypeCard.PICCARD,TypeCard.AS);
        const battaille = new Battaille();
        battaille.addCard(CardHeart5);
        battaille.addCard(CardTrefleAs);
        battaille.addCard(CardPicAs);
        const player1 = new Player("karim",CardHeart5);
        const player2 = new Player("karim",CardPicAs);

        console.log(battaille);
        
        
        }
}

const game = new Game();
game.play();
