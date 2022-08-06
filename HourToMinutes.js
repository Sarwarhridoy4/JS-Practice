function HourToMinute(hour){

    let minutes = hour*60;

    return minutes;
}

let Hour = 3;

let MyHour = HourToMinute(Hour);

console.log('We just convwert your Hours as',MyHour,'Minutes.');