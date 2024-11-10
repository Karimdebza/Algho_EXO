"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
const Symbole_1 = require("../ENUM/Symbole");
const Value_1 = require("../ENUM/Value");
class Card {
    constructor(type, symbole) {
        this.Value = type;
        this.symbole = symbole;
    }
    getValue() {
        return this.Value;
    }
    display() {
        return ` ${Value_1.Value[this.Value]} de ${Symbole_1.Symbole[this.symbole]}`;
    }
    getSymbole() {
        return this.symbole;
    }
}
exports.Card = Card;
