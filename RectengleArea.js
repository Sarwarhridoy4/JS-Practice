// একটা ফাংশন লিখো। যেটা ইনপুট প্যারামিটার হিসেবে একটা আয়তক্ষেত্রের দৈর্ঘ্য আর উচ্চতাকে নিবে। তারপর সেই আয়তক্ষেত্র এর area (আয়তন) কে রেজাল্ট হিসেবে রিটার্ন করবে। 

function RecArea(length,height){
    const area = length*height;
    return area;
}
//Consider a and b as length and height.
let a = 5;
let b = 2;

const Area = RecArea(a,b);

console.log('Area is :',Area);