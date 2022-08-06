//Simple Interest Calculator A = P(1 + rt)
// A = Total Amount;
// P = Principle Amount.
// r = Rate of Interest.
// t = Time Period.

// function will be like this:

function SimpleInterest(P,r,t){
    let Amount = P*(1+((r/100)*t));
    return Amount;
}

let Myp = 10000;
let Myr = 10;
let Myt = 1;

const MyAmount = SimpleInterest(Myp,Myr,Myt);

console.log(MyAmount);
