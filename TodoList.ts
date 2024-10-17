import {Task} from "./Task";
import { TaskType } from "./TaskType";

export class TodoList {

  private tasks: Task[];

  constructor(){
    this.tasks = [];
  }

/**
 * add_Task
name:String, person:string, type:TaskType */
public add_Task(name:string, person:string, type:TaskType) {
    this.tasks.push(new Task(name, person, type));
}

public display(){
let res : string = "";
for (let i = 0; i < this.tasks.length; i++) {
    res = res + this.tasks[i].displayTask() + "\n\n";

    return res;
    
}
}

}