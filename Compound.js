
function CompoundCalc(principle,rate,cycling){
    let result = principle * Math.pow((1+(rate/cycling)), n*cycling)

    return result;
}

let Rate = 10;
Rate = Rate/100;

let Principle =5000 ;

let n = 1;
let Mycycling = 3;

MyAmount = CompoundCalc(Principle,Rate,Mycycling);


console.log(MyAmount);