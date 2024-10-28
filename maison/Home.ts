import { LivingRoom } from "./LivingRoom";
import { Room } from "./Room";
import { Wc } from "./Wc";

export   class Home  {

   private rooms : Room[];

//    private nbWc : Wc;
    
  
    constructor( ) {
      this.rooms = [];
    

      
      
      

    }
    addRoom(room : Room): void{
        
        this.rooms.push(room);
        
    }

    getTotalArea(): number{
        let totalArea = 0;
        for (let i = 0; i < this.rooms.length; i++) {
            totalArea += this.rooms[i].getArea();
            
        }
        return totalArea;
    }
    // getLivingArea():number{


    // }

    getnbBatrooms(){
        
    }
    getNbWc(){
        
    }

    getNbTv(){

    }
    getNbBeds(){

    }

     
   

}


