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


function delta(a: number, b:number, c:number) {
 let delta =  b * b  - 4  *a *c;
 return delta;
}

// console.log(delta(2,1,5));


function root(a:number, b:number, c:number) {
  if (delta(a,b,c) < 0) {
    return [];
  }
  if (delta(a,b,c) === 0) {

   let res = -b / 2*a;
   return [res];
  }

  if (delta(a,b,c) > 0) {
 let res1 = -b  - Math.sqrt(delta(a,b,c)) / 2*a;
  let res2 = -b  + Math.sqrt(delta(a,b,c)) / 2*a;
   return [res1,res2];
  }
}

// console.log(root(1,4,1));


                                                // 1 BOUCLE                           




function print_int(n:number) {
  let num = n;

  for (let i = 1; i <= n; i++) {
    num = i;
    console.log(num);
    
  }
  return num;
}
// console.log(print_int(10));


function sum_int(n:number) {
  let sum = n;
  for (let i = 0; i < n; i++) {
    
    sum = sum +  1;
    console.log(sum);
    
    
  }
  return sum;
}

// console.log(sum_int(3));




function table_multp(n:number) {
  let sum = 5;
  for (let i = 0; i < n; i++) {
    console.log(sum *  i);
    
  }
  return sum;
}

// console.log(table_multp(10));



function factorial(n:number):number {
  let sum = 1;

    for (let i = 0; i < n; i++) {
      sum *= (i+1) ;
      console.log(sum);

      
    }
    return sum;
  }

// console.log(factorial(5));

function power(x: number, n:number){
  let res = 1;
  for (let i = 0; i < n; i++) {
    res *= x;
    
    
  }
  return res;
}

// console.log(power(2,2));


function is_prime(n :number) {
  
    for (let i = 2; i <= n / 2; i++) {
      if(n % i === 0){
      return false;
    }

    
  }
  return true;

}

// console.log(is_prime(3));

function reverse_ints(n:number) {
  let res = ""
  for (let i = 0; i < n; i++) {
    
     n = n - i ;
     const str = String(n);
      res = str ;
     console.log(res);
     

  }
  return res;
}

// console.log(reverse_ints(5));

// const nim = 300;
// const str = String(nim);
// console.log(typeof str);

function peramid_int(n:number) {
  let res = "";
  for (let i = 0; i < n; i++) {
    
     res +=  i ;
    console.log(res);

  }
  return res;
}

// console.log(peramid_int(5));

 function sort_arr(arr:number[]) {
  let n = arr.length;
  let swapped:boolean;
  do{
    swapped = false
  for (let i = 0  ; i < n -1 ; i++) {
     
    if(arr[i] > arr[i + 1]){
      let tmp = arr[i];
    
      arr[i] = arr[i + 1];
     
      arr[i + 1] = tmp;
      swapped = true;      
    }
      }
      n--;
    }while(swapped);
      return arr;
      
      // je compare i a j si si il est plus grand i a j en stock dabors la valeur i dans le nouvell tmp puis je stock i a j et pour finir je stock j a tmp
      
    }

//     Optimisation : L'utilisation de la variable swapped permet d'arrêter les itérations si le tableau devient trié avant de parcourir toutes les paires.
// Complexité : La complexité reste en 
// 𝑂
// (
// 𝑛
// 2
// )
// O(n 
// 2
//  ) pour un tableau non trié, mais si le tableau est déjà partiellement trié, cela peut réduire le nombre d'itérations.

    
  
  



console.log(sort_arr([100,39,30,32,10]));






function beautiful_mult(n:number) {
  let count = 1;
  while (count <= 10) {
    let result = count * n;
    count++
    

    
    console.log( `${count} = ${result}`);

    console.log(typeof result)
  }
}

console.log(beautiful_mult(5));














// let task : Task = new Task("dodo", "tous le monde", TaskType.ENTRETIEN);
// let task1 : Task = new Task("comp", "aller a lyon", TaskType.TRAVAIL);

// console.log(task.displayTask());
// console.log(task1.displayTask());

// let grosy1 : Grosy = new Grosy("viande", "karim");
// let grosy2 : Grosy = new Grosy("viande", "karim");
// console.log(grosy1.display());
// console.log(grosy2.display());






















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


