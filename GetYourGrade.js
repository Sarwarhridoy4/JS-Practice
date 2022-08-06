function KnowYourGrade(number){
    if(number>=80 && number<=100){
        return "You have got A+";
    }
    else if(number>=70 && number<=79){
        return "You have got A";
    }
    else if(number>=60 && number<=69){
        return "You have got A-";
    }
    else if(number>=50 && number<=59){
        return "You have got B";
    }
    else if(number>=40 && number<=49){
        return "You have got C";
    }
    else if(number>=33 && number<=39){
        return "You have got D";
    }
    else if(number<33){
        return "Try Again Next Time";
    }
    else{
        return "Not a Vaid Number!!"
    }

}

let Number = 79;
const Result =  KnowYourGrade(Number);

console.log(Result);