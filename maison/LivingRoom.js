"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LivingRoom = void 0;
const Room_1 = require("./Room");
class LivingRoom extends Room_1.Room {
    constructor(name, area, floor, tv) {
        super(name, area, floor, tv);
    }
    hasTV() {
        return true;
    }
    getArea() {
        return this.area;
    }
    getfloor() {
        return this.floor;
    }
}
exports.LivingRoom = LivingRoom;
