import { Grosy } from "./Grosy";
import { GrosyType } from "./GrosyType";
export  class GroseryList {

        private grosys : Grosy[];


    constructor() {
        this.grosys = [];
    }

    add_Task(name:string,person:string, type:GrosyType){
    return this.grosys.push(new Grosy(name,person));
    }


    public display(){
        let res : string = '';
        for (let i = 0; i < this.grosys.length; i++) {
            res = res +  this.grosys[i].display() + "\n\n";
             
            
        }

        return res;
    }
}