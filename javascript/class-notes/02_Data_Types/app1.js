
/*let b;
console.log(b);* Error:Undefined*/ 

//HOSTİNG ==>>let and const olmaz.
/* a=5;
console.log(a);
var a;
 */




//TYPEOF//

/* let c="2";
let d=2;
console.log(typeof c);
console.log(typeof d); */

//let e=+prompt("Bir şey yazınız")  /* + number olması için kullanılır.input mantığı*/
//console.log(typeof e)



//NULL==>>Primitive type ancak typeof ==>>object döner.

let hata=null;
console.log(typeof hata);


//NUMBER:==>>integer,float tipi yoktur.

let pi=3.13;
let big=1_000_000; /* Okunabilirlik açısından*/

console.log(big);

let i=999_999_999_999_999; /* max=15 digit safe*/
console.log(i);

let j=999_999_999_999_999_123;
console.log(j);



//NAN

/* let k=+prompt("Bir sayı giriniz: ");

console.log(typeof k,k);

console.log(isNaN(k)); */

/*let x;
do{
    x=prompt("Enter a Number: ")

}while(isNaN(x));

console.log(x+2)*/

//window.location = `https://${0.1+0.2}.com`;

let float=0.1+0.2;
console.log(float.toFixed(2)) //tofixed STRİNGE ÇEVİRİR.

//STRİNG

//ÜÇ ŞEKİLDE YAPILIR

//çift tırnak,tek tırnak, back tip;

let s='Hello';
let m="Hello";
let n=`Merhaba JS`;
console.log(s)
console.log(m)
console.log(n)

//STRİNG TEMPLATE
let p=`Merhaba ${1+2}`;
console.log(p)


//BOOLEAN 

//false
let x=Boolean("");
let y=Boolean(0);
let z=Boolean(-0)
let q=Boolean(null);


//OBJECT
const myCar={
    make:"Ford",
    model:"Mustang",
    year:1965,
    color:"Black"

};
console.log(myCar.color)
myCar.color="Red";
console.log(myCar)
myCar["year"]=1332;
console.log(myCar);
myCar.owner="Barış";
console.log(myCar);

myCar.age=function(current){
    console.log(current-this.year)
}
console.log(myCar);
myCar.age(2022)

delete myCar.owner;
console.log(myCar)
