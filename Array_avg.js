const array = [25, 39, 3, 40, 62];
let sum = 0;
let length = array.length; 

function avarage(length){
    for (let i = 0; i < length; i++) {
        sum += array[i];
        avg = sum/length;
    }
    return avg;
}

let Avarage = avarage(length);
console.log('You Avarage is:',Avarage);