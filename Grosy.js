"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Grosy = void 0;
class Grosy {
    constructor(name, person) {
        this.name = name;
        this.person = person;
    }
    display() {
        return `${this.name} : a eté efecttuer par ${this.person}`;
    }
}
exports.Grosy = Grosy;
