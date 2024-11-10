"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Room = void 0;
class Room {
    constructor(name, area, floor, tv) {
        this.name = name;
        this.area = area;
        this.floor = floor;
        this.haveTv = tv;
    }
    getArea() {
        return this.area;
    }
    getLivingArea() {
        return this.area;
    }
    hasTV() {
        if (this.haveTv) {
            return true;
        }
        return false;
    }
    getname() {
        return this.name;
    }
    getfloor() {
        return this.floor;
    }
}
exports.Room = Room;
