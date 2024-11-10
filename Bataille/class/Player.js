"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
const Deck_1 = require("./Deck");
class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
        this.deck = new Deck_1.Deck();
    }
    getName() {
        return this.name;
    }
    addCard(card) {
        if (card != undefined) {
            this.hand.push(card);
        }
    }
    play() {
        return this.hand.shift();
    }
    retrieveCard(d) {
        let deck = d.drawDeck();
        while (deck) {
            this.hand.push(deck);
            d.drawDeck();
        }
    }
    getNbCard() {
        return this.hand.length;
    }
}
exports.Player = Player;
