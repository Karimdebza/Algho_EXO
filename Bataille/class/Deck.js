"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deck = void 0;
const Card_1 = require("./Card");
class Deck {
    constructor() {
        this.card = [];
    }
    addCard(card) {
        return this.card.push(card);
    }
    createdeck() {
        for (let i = 0; i < 13; i++) {
            for (let j = 0; j < 4; j++) {
                this.card.push(new Card_1.Card(i, j));
            }
        }
    }
    shufuldDeck() {
        let currentIndex = this.card.length;
        while (currentIndex !== 0) {
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [this.card[currentIndex], this.card[randomIndex]] = [this.card[randomIndex], this.card[currentIndex]];
        }
    }
    displayDeck() {
        let str = "";
        for (let i = 0; i < this.card.length; i++) {
            str = str + this.card[i].display() + "\n \n";
        }
        return str;
    }
    drawDeck() {
        return this.card.shift();
    }
    is_empty() {
        return this.card.length === 0;
    }
    getNbCard() {
        return this.card.length;
    }
}
exports.Deck = Deck;
