
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

function is_leap(year:number) {
  if(year % 4 === 0 ){
    return true
  }else{
    return false
  }
}

console.log(is_leap(2024));