// ৩. একটা ফাংশন লিখো। সেই ফাংশনের মধ্যে ইনপুট হিসেবে একটা array নিবে। সেই array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হবে ইনপুট নেয়া array এর মধ্যে যতগুলা সংখ্যা আছে। সেই সংখ্যা গুলার গড় বের করবে। তারপর সেই গড় ফাংশনের রিটার্ন হিসেবে দিয়ে দিবে। একটু চিন্তা করো। বুঝার চেষ্টা করো। ট্রাই করো। দেখো পারো কিনা। 


let Array =[2,6,9,15,12,4,8,7,5];


function GetAvarage(array){
    
    for(let i = 0; i<array.length; i++){
        sum = 0;
        let sum = sum + array[i]
        avg = sum / array[i]
    }
    // return avg;
    console.log('Sum is',sum);
    console.log('Avarage is',avg);
}



// const MyAvarage = GetAvarage(Array);

// console.log('Your Avarage is:',avg);
