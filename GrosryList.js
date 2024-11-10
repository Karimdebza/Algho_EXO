"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroseryList = void 0;
const Grosy_1 = require("./Grosy");
class GroseryList {
    constructor() {
        this.grosys = [];
    }
    add_Task(name, person, type) {
        return this.grosys.push(new Grosy_1.Grosy(name, person));
    }
    display() {
        let res = '';
        for (let i = 0; i < this.grosys.length; i++) {
            res = res + this.grosys[i].display() + "\n\n";
        }
        return res;
    }
}
exports.GroseryList = GroseryList;
