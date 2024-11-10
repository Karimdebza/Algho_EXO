"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BedRoom = void 0;
const Room_1 = require("./Room");
class BedRoom extends Room_1.Room {
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
        return true;
    }
}
exports.BedRoom = BedRoom;
