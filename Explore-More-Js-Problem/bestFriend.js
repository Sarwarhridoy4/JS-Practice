
function bestFriend(names){
    let BiggestName = names[0];
    for(let i = 0; i<names.length; i++){
        const name = names[i];
        if(name.length>BiggestName.length){
            BiggestName = name;
        }
    }
    return BiggestName;

}

let Myarr = ['Abul','babul Hossain','Pappu','Shuvo Al Akib','Mrs Bulbuli','Rumana Akter Eti'];
const MyList = bestFriend(Myarr);
console.log(MyList);