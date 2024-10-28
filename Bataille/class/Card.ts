import { TypeCard } from "./TypeCard";

export class Card {
    typeCard : TypeCard;
    numberOf_Card : TypeCard;
    constructor(type:TypeCard,nb:TypeCard) {
        this.typeCard = type;
        this.numberOf_Card = nb;
    }


}