//Function for Calculation

// Celcious to Farenheight

// Logic = °F = (9/5 × °C) + 32

function TemparatureCalculatorToFarenheight(Celcious){
    let Farenheight = (9/5*Celcious) +32;

    return Farenheight;
}

let Temp = 45;
let TempInFar = TemparatureCalculatorToFarenheight(Temp);

console.log('Temparature is:',TempInFar,'degree');
