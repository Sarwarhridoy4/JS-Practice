function centimeterToMeter(centimeter){
    const Meter = centimeter / 100;
    return Meter;
}

let MyCentimeter = 212145;

const MyMeter = centimeterToMeter(MyCentimeter);

console.log(MyCentimeter, 'centimeter is', MyMeter, 'meter');
