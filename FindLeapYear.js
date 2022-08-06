// Function to find odd number from an array and return their sum

    function isLeap(array) {
        for(i=0; i<array.length;i++){
            var year = array[i];
            if (year % 4 === 0) {
                if (year % 100 === 0){
                   if (year % 400 == 0){
                      console.log ("Leap year.");
                   } else {
                      console.log ("Not leap year.");
                   }
                } else {
                   console.log ("Leap year.");
                }
             } else{
                console.log ("Not leap year.");
             }
        }
     }


const MyArray = [2020,2001,2006,2010,2012,2017,2018];

Result = isLeap(MyArray);