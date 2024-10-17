import { Task } from "./Task";
import { TaskType } from "./TaskType";
import { Grosy } from "./Grosy";
import { GrosyType } from "./GrosyType";
// 1

function helloWorld() : void {
    console.log("Hello World");
}

// console.log(helloWorld());

//2
function addInteger(a:number, b:number):number {
  return a+b;
}

// console.log(addInteger(3,3));

// 3

function multipInteger(a:number, b:number):number {
  return a*b;
}

// console.log(multipInteger(2,10));


//4 

function max_nb(min: number, max: number): void {
  if (min < max) {
    console.log(max);
  }else{
    console.log(min)
  }
}

// console.log(max_nb(10,2));
// 5

function min_nb(min: number, max: number): void {
  if (min < max) {
    console.log(min);
  }else{
    console.log(max)
  }
}

// console.log(min_nb(10,3));

//6 si num modulo 2 c'est il est divisible par 2 c'est true si il est pas paire et nous renvoir donc un reste qui n'est pas de 0 il est false
function is_even(a:number): boolean {
  let num = a;
  if(num % 2  === 0){
   return true
  }else{
    return false
  }
}

// console.log(is_even(10));


function is_div(a: number, b:number): boolean {
  if(a % b   === 0){
    return true
  }else{
    return false
  }
}

// console.log(is_div(10,3));

function is_leap(year:number): boolean {
  if( year % 400 === 0 ){

     
    
    return true
   

  }
  if ( year % 4 === 0 && year % 100 !== 0  ) {
    return true
  }else{
    return false;
  }
}

// console.log(is_leap(1900));
// console.log(is_leap(2024));
// console.log(is_leap(2400));


// function delta(a: number, b:number, c:number) {
//   let delta = (b*b -4)
// }



                                                // 1 BOUCLE                           




// function print_int(n:number) {
//   let num = n;

//   for (let i = 1; i <= n; i++) {
//     num = i;
//     console.log(num);
    
//   }
//   return num;
// }
// // console.log(print_int(3));


// function sum_int(n:number) {
//   let sum = n;
//   for (let i = 0; i < sum; i++) {
   
//     console.log(i);
//   }
//   return sum;
// }

// console.log(sum_int(3));

let task : Task = new Task("dodo", "tous le monde", TaskType.ENTRETIEN);
let task1 : Task = new Task("comp", "aller a lyon", TaskType.TRAVAIL);

console.log(task.displayTask());
console.log(task1.displayTask());

let grosy1 : Grosy = new Grosy("viande", "karim");
let grosy2 : Grosy = new Grosy("viande", "karim");
console.log(grosy1.display());
console.log(grosy2.display());






















// function is_prime(n:number) {

  // 

//   for (let i = 0; i < n; i++) {
//     let res : number = n;
//     if(res / 3 ){
//       return true;
//     }else{
//       return false;
//     }
    
//   }
// }


// console.log(is_prime(1));

// function h_triangle(h:number){
 
  
//   for (let i = 0; i <= h; i++) {
//     for (let j = 0; j <= i; j++) {
//       console.log('*');
//     }

//   }
//   console.log("");
//   return h;
// }

// console.log(h_triangle(3));


// function arraySort(){
//   let n = [4,3,1,2];
//   n.sort();

//   return n;
// }

// console.log(arraySort());


