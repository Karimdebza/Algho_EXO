// import * as readline from 'readline';

// function Factorial(N:number){
//     let factorial = 1;

//     for (let i = 0; i < N; i++) {
//         factorial = factorial * (i + 1);

        
//     }
//     return factorial;
// }

// console.log(Factorial(5));

// function power(x: number, n:number){

//     let res = 1;

//     for (let i = 0; i < n; i++) {
//         res = res * x;
        
//     }
//     return res;

// }

// console.log(power(2,2));

function game(){

}

function even(n:number){

 let res = 0;

    for (let i = 0; i < n; i++) {
        
      if(i % 2 === 0){
        res = res + (i+1);
      }
        
    }

return res;



    
}

console.log(even(10));



function sum(a:number[]){
   
   let res = 0;


for (let i = 0; i < a.length; i++) {
    
    res += a[i]; 
}

return res;
}

console.log(sum([1,2,3]));


function num(a:number){

  

    for (let i = 2; i < a; i++) {
     if( a%i === 0){

        return false;
     }
     return true;
        
    }
    return a;
}

console.log(num(10));