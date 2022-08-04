// Write a function called make_avg() which will take an three integers and return the
// average of those values.


function make_avg(num1,num2,num3){
    var sum = num1+num2+num3;
    var average = sum/3;
    return average;
}

var num1 = 20;
var num2 = 60;
var num3 = 20;

var average = make_avg(num1, num2, num3);

console.log(average);
