export class Operation {


/**
 * add
num:number : number*/
public add(a:number,b:number): number{
 return a + b;
}

/**
 * sub
 :number*/
public sub(a:number,b:number):number {
    return a - b;
}

/**
 * gt
 */
public gt(a:number, b:number ) {
    if (a > b ) {
        return a;
    }
    if(b > a){
        return b
    }
    
}


public ge(a:number, b:number){

    if(a >= b){
        return a;
    }
    if(b >= a){
        return b;
    }
}

public div(a:number,b:number){
    return a / b;
}

public math(){

}

public lt(a: number, b:number){
if( a < b){
    return a;
}
if(b > a){
    return b;
}
}

public le(a: number, b: number){
    if( a <= b){
        return a;
    }
    if(b >= a){
        return b;
    }
}


}


