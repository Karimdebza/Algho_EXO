import { TaskType } from "./TaskType";
export class Task {

    private name : string;
    private person : string;
    // private is_done : boolean;
    private type: TaskType;
    
    constructor(name:string, person:string, types:TaskType){
        this.name = name;
        this.person = person;
        this.type = types
        // this.is_done  = false;
    }

   
    public getTask(){};
    public displayTask():string{
        return `${this.name}:\naffected to: ${this.person}\n type: ${TaskType.ENTRETIEN} `;
    }
   

}