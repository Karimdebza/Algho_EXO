"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Operation = void 0;
class Operation {
    /**
     * add
    num:number : number*/
    add(a, b) {
        return a + b;
    }
    /**
     * sub
     :number*/
    sub(a, b) {
        return a - b;
    }
    /**
     * gt
     */
    gt(a, b) {
        if (a > b) {
            return a;
        }
        if (b > a) {
            return b;
        }
    }
    ge(a, b) {
        if (a >= b) {
            return a;
        }
        if (b >= a) {
            return b;
        }
    }
    div(a, b) {
        return a / b;
    }
    math() {
    }
    lt(a, b) {
        if (a < b) {
            return a;
        }
        if (b > a) {
            return b;
        }
    }
    le(a, b) {
        if (a <= b) {
            return a;
        }
        if (b >= a) {
            return b;
        }
    }
}
exports.Operation = Operation;
