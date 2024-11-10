"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
const TaskType_1 = require("./TaskType");
class Task {
    constructor(name, person, types) {
        this.name = name;
        this.person = person;
        this.type = types;
        // this.is_done  = false;
    }
    getTask() { }
    ;
    displayTask() {
        return `${this.name}:\naffected to: ${this.person}\n type: ${TaskType_1.TaskType.ENTRETIEN} `;
    }
}
exports.Task = Task;
