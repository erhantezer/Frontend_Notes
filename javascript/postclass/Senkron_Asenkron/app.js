// Single Thread (tek bir kod parçacığı çalıştırır.)  and Synchonous
console.log("Senkron and Asenkron");

// const func=()=>{
//     console.time("start")
//     console.log("func1: func1")
//     console.timeEnd("finish")
//     console.log("func1: func2")
//     alert("Alert Message!")
// }

// const func1=()=>{
//     console.time("start")
//     console.log("func2: func1")
//     console.timeEnd("finish")
//     console.log("func2: func2")
// }
// func1()
// func()

// let num =10;
// console.log("Birinci veri:", num);

// setTimeout(()=>{
//     num= num+5
//     console.log(num) //20
// },1000)

// console.log("İkinci veri:", num);
// num=num+5
// console.log("Üçüncü veri:", num);

//! CALL STACK
//* Fonksiyonlarun çalışma sırası:
// const func1 = ()=>{
//     console.log("Birinci fonksiyon");
//     func2()
//     console.log("Birinci tekrar fonksiyon")
// }

// const func2 =()=>{
//     console.log("İkinci fonksiyon");
//     func3()
//     console.log("İkinci tekrar fonksiyon")
// }

// const func3=()=>{
// console.log("Üçüncü fonksiyon");
// }

// func1()

//
// function task(message) {
//   let n = 10000000;
//   while (n > 0) {
//     n--;
//   }
//   console.log(message);
// }

// console.log("1");

// setTimeout(() => {
//   console.log("2");
// }, 1000); // setTimeout içerisindeki  callback function=>task quence alınır.Callback kuyruğuna alınır
// console.log("3");
// console.log("4");
// task("İşlem tamamlandı");

// setTimeout(() => {
//   console.log("5");
// }, 2000);

// //!=============CALLBACK=========================
// const myName = () => {
//   console.log("My name Barıs");
// };

// //setTimeout((function),süre)
// setTimeout(myName, 3000);

// const btn = document.querySelector(".btn");
// const h1Element = document.querySelector("h1");

// console.log(btn);

// btn.addEventListener("click", () => {
//   let pElement = document.createElement("p");
//   pElement.innerHTML = "Buton is hiden";
//   h1Element.after(pElement);
//   setTimeout(() => {
//     pElement.textContent = "";
//   }, 3000);
// });

// const books = [
//   { name: "Pinball 1973", author: "Haruki" },
//   { name: "Yorgun Savaşcı", author: "Kemal Tahir" },
//   { name: "Geleceği Arayanlar", author: "Anoymus" },
// ];

// const BookList =()=>{
//     books.map((book,index)=>{
//         console.log(book,index) // çıktı ne olur ? 
//     })
// }

// //BookList();
// const AddBook = (newBook,callback)=>{
//     books.push(newBook)
//     callback()
// }

// AddBook( { name: "Berlin Hatıralım", author: "Hüsrev Gerede" },BookList)

//!==================PROMISE (YER TUTUCU)==================================

//? Promise bir asenkron yapının nihayi socunu temsil eden bir js nesnedir...


const promise1 =new Promise(function(resolve,reject){
   // promiseStatus:pending : promiseResult: undefined; 
   resolve()  // promiseStatus:fullfilled : promiseResult: undefined; 
   reject()   // promiseStatus:rejected : promiseResult: undefined; 
   reject(" Error ")   // promiseStatus:rejected : promiseResult: Error; 
})

console.log(promise1);

// Promise, JavaScript'te bir nesne tipidir ve bir işlemin sonucunun bir daha geleceği 
//ancak şu anda mevcut olmayabileceği durumlar için kullanılır. Örneğin, bir API'den 
//veri çekme işlemini gerçekleştirirken, API cevabının hemen döndürülmesini beklemek 
//yerine, bir Promise nesnesi döndürülür ve API cevabı geldiğinde Promise nesnesinin çözülmesi ile elde edilebilir.
function getDataFromAPI() {
    return new Promise((resolve, reject) => {
      // API çağrısını gerçekleştirin
      const xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
      xhr.onload = () => {
        if (xhr.status === 200) {
          // API cevabı başarılı ise, Promise nesnesini çözün
          resolve(xhr.response);
        } else {
          // API cevabı başarısız ise, Promise nesnesini reddedin
          reject(xhr.statusText);
        }
      };
      xhr.send();
    });
  }

  getDataFromAPI()
  .then(response => {
    // API cevabı başarılı ise buraya düşer
    console.log(response);
  })
  .catch(error => {
    // API cevabı başarısız ise buraya düşer
    console.error(error);
  })
  .finally(()=>{
    console.log("Her türlü çalışır.")
  });