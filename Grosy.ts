export class Grosy{
   private name : string ;
   private person : string;

   constructor(name : string, person : string ){
    this.name = name;
    this.person = person;
   }


    public display(): string {
        return `${this.name} : a eté efecttuer par ${this.person}`;
    }
}