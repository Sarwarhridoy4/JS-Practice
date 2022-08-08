//function to get prime number

function PrimeNumber(number){

    if(number == 2){
        return "Prime Number";
    }
    else if(number>2){
        for(let i = 2; i<number; i++){
            if(number % i !== 0){
                return "Prime Number"
            }
            else if(number== i*i){
                return "Not a Prime Number"
            }
            else{
                return "Not a Prime Number"
            }
        }
        
    }
    else{
        return "Not a Prime Number"
    }
}

let Mynumber = 1;

const IsPrime = PrimeNumber(Mynumber);

console.log("Result",IsPrime);