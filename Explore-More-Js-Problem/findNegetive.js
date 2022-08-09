// ৫. এইটা একটু ট্রিকি হতে পারে। একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে। 

function findNegetive(arr) {
  const Newarr = [];
  for (i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element >= 0) {
      Newarr.push(element);
    } else {
      break;
    }
  }
  return Newarr;
}

let Myarr = [4, 2, 5, 2, -1, -8, 6, 7, 10, -11];
const NewArray = findNegetive(Myarr);
console.log(NewArray);