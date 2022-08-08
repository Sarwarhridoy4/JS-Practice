// ১. একটা কোড লিখো। যেটা দিয়ে কোন একটা array এর মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিতে পারবে। 
function ArrMin(array){
    const Min = Math.min(...array);
    
    return Min;
    
}

const arr = [14, 58, 20, 77, 66, 82, 42, 67, 42, 20]

let MyMin = ArrMin(arr);

console.log(MyMin);