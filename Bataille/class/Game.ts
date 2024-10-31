import { Card } from "./Card";
import { Deck } from "./Deck";
import { Player } from "./Player";

export class Game {
  private player1: Player;
  private player2: Player;

  private field: Deck;

  constructor(name1: string, name2: string) {
    this.field = new Deck();
    this.player1 = new Player(name1);
    this.player2 = new Player(name2);
  }

  public hasWinner(): string | undefined {
    if (this.player1.getNbCard() == 0) {
      return this.player2.getName();
    } else if (this.player2.getNbCard() == 0) {
      return this.player1.getName();
    }

    return undefined;
  }

  public run() {
    this.field.createdeck();
    this.field.shufuldDeck();
    this.dealCard();
    while (!this.hasWinner()) {
      this.gameLoop();
    }
    console.log(`celui qui a gagné et ${this.hasWinner()}`);
  }

  public dealCard() {
    while (!this.field.is_empty()) {
      let c1: Card | undefined = this.field.drawDeck();
      let c2: Card | undefined = this.field.drawDeck();
      this.player1.addCard(c1);
      this.player2.addCard(c2);
    }
  }

  private VerfiryCard(card1: Card, card2: Card): void {
    console.log(
      `Le joueur ${this.player1.getName()} joue : ${card1.display()}`
    );
    console.log(`Le joueur ${this.player2.getName()} : ${card2.display()}`);
    if (card1.getValue() > card2.getValue()) {
      console.log(`le joueur ${this.player1.getName()} a remporté la manche`);
        this.player1.addCard(card2);
    } else if (card1.getValue() < card2.getValue()) {
      console.log(`le joueur ${this.player2.getName()} a remporté la manche`);
      this.player2.addCard(card1);
      

    } else if (card1.getValue() === card2.getValue()) {
      this.player1.play();
      this.player2.play();
      if (card1.getValue() > card2.getValue()) {
        console.log(`le joueur ${this.player1.getName()} a remporté la manche`);
        this.player1.addCard(card2);
      } else if (card1.getValue() < card2.getValue()) {
        console.log(`le joueur ${this.player2.getName()} a remporté la manche`);
        this.player2.addCard(card1);
      }
    }

    // if(playSuite1 !== undefined && playSuite2 !== undefined && playSuite1 > playSuite2 ){
    //     this.player1.addCard(card2);
    // }else if(playSuite1 !== undefined && playSuite2 !== undefined && playSuite1 < playSuite2 ){
    //     this.player2.addCard(card1);
    // }
    // }
  }

  private gameLoop(): Player | undefined {
    let card1 = this.player1.play();
    let card2 = this.player2.play();
    console.log(card1, card2);
    if (card1 && card2 != undefined) {
      this.VerfiryCard(card1, card2);
    }
    return;
  }
}
