"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wc = void 0;
const Room_1 = require("./Room");
class Wc extends Room_1.Room {
    constructor(name, area, floor, tv) {
        super(name, area, floor, tv);
    }
    getArea() {
        return this.area;
    }
    hasTV() {
        return false;
    }
    getname() {
        return this.name;
    }
    getfloor() {
        return this.floor;
    }
}
exports.Wc = Wc;
