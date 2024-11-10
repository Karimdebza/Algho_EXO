"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Home = void 0;
class Home {
    //    private nbWc : Wc;
    constructor() {
        this.rooms = [];
    }
    addRoom(room) {
        this.rooms.push(room);
    }
    getTotalArea() {
        let totalArea = 0;
        for (let i = 0; i < this.rooms.length; i++) {
            totalArea += this.rooms[i].getArea();
        }
        return totalArea;
    }
    // getLivingArea():number{
    // }
    getnbBatrooms() {
    }
    getNbWc() {
    }
    getNbTv() {
    }
    getNbBeds() {
    }
}
exports.Home = Home;
