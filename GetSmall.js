// একটা কোড লিখো যেটা দিয়ে তিনটা সংখ্যার মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিবে।  

// Methood using function

function GetMin(num1,num2,num3){

    if(num1<num2 && num1<num3){
        return "Smallest is:",num1;
    }
    else if(num2<num1 && num2<num3){
        return "Smallest is:",num2;
    }
    else{
        return "Smallest is:",num3;
    }
}

let value1 = 50;
let value2 = 12;
let value3 = 32;

let Result = GetMin(value1,value2,value3);

console.log(Result);


//Methood:2
// Using Math.min();

function getMin(n1,n2,n3){
    const Valueis = Math.min(n1,n2,n3);
    return Valueis;
}

let Myvalue1 = 55;
let Myvalue2 = 25;
let Myvalue3 = 15;

const MyResult = getMin(Myvalue1,Myvalue2,Myvalue3);

console.log(MyResult);


