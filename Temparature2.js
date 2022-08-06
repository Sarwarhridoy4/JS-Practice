// Logic C = 1.8*(F-32)

// function TemparatureCalculatorToCelciuos(Farenheight){
//     let Mytemp = 1.8*(Farenheight-32);

//     return Mytemp;
    
// }

function fahrenheitToCelsius ( fahrenheit ){ return (fahrenheit - 32) * 5/9;}


let Sample2 = 40;
let TempInCel = TemparatureCalculatorToCelciuos(Sample2);

console.log('Temparature is:', TempInCel, 'Farenheight.');