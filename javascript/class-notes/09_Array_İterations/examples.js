


//örnek
let numbers=[2,5,8,11,3,20]

//console.log(parseInt(numbers.toString()));

let kareküp=numbers.map(function(value,indeks){
    if(indeks%2==0){
        return Math.pow(value,2)
    }
    else{
        return Math.pow(value,3)
    }
})

//console.log(kareküp);

//soru-1
const price = [100, 250, 50, 89];
const buyuk90=(price.filter((a) => a>90).map((a)=> a*1.1))
buyuk90.forEach((a)=>console.log(a));

//soru-2
const price1 = [100, 250, 50, 89];
const buyuk110=price1.filter((a)=>a<110).map((v)=>v*1.1).forEach((v)=>console.log(v.toFixed(2)))

console.log(buyuk110);








