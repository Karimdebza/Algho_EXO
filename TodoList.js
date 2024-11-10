"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoList = void 0;
const Task_1 = require("./Task");
class TodoList {
    constructor() {
        this.tasks = [];
    }
    /**
     * add_Task
    name:String, person:string, type:TaskType */
    add_Task(name, person, type) {
        this.tasks.push(new Task_1.Task(name, person, type));
    }
    display() {
        let res = "";
        for (let i = 0; i < this.tasks.length; i++) {
            res = res + this.tasks[i].displayTask() + "\n\n";
            return res;
        }
    }
}
exports.TodoList = TodoList;
