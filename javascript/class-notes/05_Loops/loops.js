console.log('****** LOOPS *******');

// * =======================================================
// *                     DÖNGÜLER
// * =======================================================

//************************ FOR ****************************
// Math.floor() =>aşağıya yuvarlar
// Math.ceil() =>sürekli yukarıya yuvarlar
// Math.round() => değerine göre yuvarlar.
// Math.trunc() => kesirli sayının tam kısmı alır.

/* for (let i = 1; i <= 10; i++) {
  const randomSayi = Math.floor(Math.random() * 100 + 1);
  console.log(randomSayi);
}

console.log('Program bitti');

//? Ornek: 1 den n kadar sayıları toplayan kodu yazınız.

const n = prompt('n sayisini girinz:');
let toplam = 0;
for (let i = 1; i <= n; i++) {
  toplam += i;
}

console.log('Toplam:', toplam); */

//? ÖRNEK: Dışarıdan girilen sayının Asal olup olmadığını tespit ederek sonucu yazdıran programı yazınız.

//******************** WHILE ******************

/* let i = 1;
while (i <= 5) {
  console.log('Merhaba-', i);
  i++;
} */

/* let i=1;
do{
console.log("Merhaba-",i)
i++
}while(i<=5) */

//*Örnek: 

//GRADE ENTER

/* const not=prompt("Lütfen notunuzu giriniz (0-100) : ")

while(not<0 || not>100){
    console.log("Girilen not 0-100 arasında olmalıdır")
    let not=prompt("Lütfen notunuzu giriniz (0-100) : ")
}
console.log("Girilen not :",not) */

//******************** DO WHILE ******************

/* let grade;

do{
  grade=prompt("Lütfen gradeunuzu giriniz (0-100) : ")
}while(grade<0 || grade>100){
    let grade=prompt("Lütfen gradeunuzu giriniz (0-100) : ")
}
console.log("Enter a  grade :",grade)
 */
//? ÖDEV: Klavyeden Q karakteri girilene kadar not girişi yapan bir programı döngü kullanarak yazınız.



//EK-NOTLAR
/* onsole.log('Bitti');

console.log("script.js is running...")
for(let i=1;i<=10;i++) {
    console.log(`${i}-Hello World!`)
}
for(let i=1;i<=3; i++) {  // i daha sonra değişebileceği için const olmaz
    const randomSayi = Math.trunc(Math.random() * 100 +1); // trunc virgül sonrasını atar
    console.log(randomSayi);
}
for(let i=1;i<=3; i++) {  // i daha sonra değişebileceği için const olmaz
    const randomSayi = Math.floor(Math.random() * 100 +1); // floor aşağı yuvarlar
    console.log(randomSayi);
}
for(let i=1;i<=3; i++) {  // i daha sonra değişebileceği için const olmaz
    const randomSayi = Math.ceil(Math.random() * 100 +1); // ceil yukarı yuvarlar
    console.log(randomSayi);
}
for(let i=1;i<=3; i++) {  // i daha sonra değişebileceği için const olmaz
    const randomSayi = Math.round(Math.random() * 100 +1); // round değerine göre yuvarlar
    console.log(randomSayi);
}
for(let i=1;i<=3; i++) {  // i daha sonra değişebileceği için const olmaz
    const randomSayi = Math.round(Math.random() * 100 +1); // round değerine göre yuvarlar
    console.log(randomSayi);
} */