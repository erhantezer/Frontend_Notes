

// ? ==========================================================
// ?                   FONKSİYONLAR-SCOPE
// ? ==========================================================
console.log("************ 4- SCOPE *************");
let sayi1 = 5; //! Global Scope
console.log(sayi1); //!5
const fonk1 = function () {
  sayi1 = 22;
  console.log(sayi1); //!22
};
fonk1();
console.log(++sayi1); //!23
console.log("***********************");

let sayi2 = 7; //!Global-scope
console.log(sayi2); //!7
const fonk2 = function () {
  let sayi2 = 11; //! function-scope
  console.log(sayi2); //!11
};
fonk2();
console.log(++sayi2); //!8


// ! FUNCTİON + GLOBAL SCOBE 

// var value1=10;
// let value2=20;
// const value3=30;


// function Func(){
//   var value1=11;
//   let value2=22;
//   const value3=33;
//   console.log(value1,value2,value3);
  
// }
// Func();


// console.log(value1,value2,value3)


// var value1=10;
// let value2=20;
// const value3=30;



// if(true){
//     var a=3;
//     let b=4;
//     const c=4
// }

// console.log(a,b,c)


// var value1=10;
// let value2=20;
// const value3=30;


// if(true){
//     var value1=3;
//     let value2=4;
//     const value3=19
   
// }

// console.log(value1,value2,value3)