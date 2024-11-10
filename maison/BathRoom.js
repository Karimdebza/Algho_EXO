"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BathRoom = void 0;
const Room_1 = require("./Room");
class BathRoom extends Room_1.Room {
    constructor(name, area, floor, tv) {
        super(name, area, floor, tv);
    }
    getArea() {
        return this.area;
    }
    getname() {
        return this.name;
    }
    hasTV() {
        return false;
    }
}
exports.BathRoom = BathRoom;
