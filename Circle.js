function CircleArea(r){
    const pi = 3.141;
    const area = pi*r*r;
    return area.toFixed(2);
}

let r =6;

let Area = CircleArea(r);

console.log(Area);