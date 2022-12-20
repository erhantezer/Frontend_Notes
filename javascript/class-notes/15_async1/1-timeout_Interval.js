//*=================================================================
//*              1- Senkron-Asenkron Programlama
//* ================================================================

//! Javascript, bir single-threaded (birim zamanda -1- tane iş parçacığı <<kolumuz bir process ise parmaklarımız thread (iş parçacığı)'dir>> çalıştırıyor. Ancak Java, C++, Python'da multi-threaded aktif hale getirilebiliyor) ve Asenkron Programlama dilidir.

//! CPU birden fazla iş yaparken aslında zamanı küçük dilimlere böldüğünde milisaniye seviyesinde. belli bir zaman aralığında birden fazla iş yapıyormuş gibi geliyor.

//? Asenkron Programlama
//? ---------------------------------------------------------------
//? Asenkron Programlama, bir alt gorevin uygulamanin asil thread'inden
//? bagimsiz olarak arka planda calistirilmasina izin veren paralel programlama
//? teknigidir. Bu alt gorev tamamlandiginda (basriyla veya basarisizlikla)
//? asil thread bu konuda bilgilendirilir. Asenkron programlama, uygulamalarin
//? performansininin artirilmasina ve daha iyi kullanici deneyimine katki saglamaktadir.

//? Ozellikle bir API'den veya Veritabanindan veri cekme, Giris/Cikis islemleri,
//? Dosya Okuma/Yazma islemleri gibi zaman tuketen kodlarda Asyn Programlama
//? kullanilmasi cok onemlidir.

//* Senkron
//* ---------------------------------------------------------------

const bekle=(ms)=>{

    //! blocking-code
    const start=new Date().getTime(); //1655227837903
    while(new Date().getTime()<start+ms){
        ;
    }
}

console.log("hello")
//alert(  "ITF")  //! blocking code==> KODU KESER.TAMAMLANMADAN DİĞERİ GEÇM
console.time("timer");
bekle(3000)
console.timeEnd("timer")
console.log("FS11"); 


//* Asenkron (setTimeout)
//? makro task kuyruğu
setTimeout(()=>{ //! non-blocking code
    console.log("Nasılsın");
},1000)  //setTimeout(function, milliseconds);-bir defa yürütülüyor
//* sıfır olması birşeyi değiştirmez.
//? Micro task kuyruğu
console.log("İyiyim");
console.log("Merhaba");

setTimeout(()=>{ //! non-blocking code
    console.log("Dostum naber");
},2000)  //

//!süre minumum bekle demek 
//!iki setTimeout olması durumunda süreye bakılır.
//! hemen değilde bir süre sonra işlemin yapılmasını istemek gibi


// *Examples of macrotasks are setTimeout, setInterval, setImmediate, etc.
//* Examples of microtasks are, Promises, processes.nextTick, etc


//* Asenkron(setInterval,clearInterval)


//*---------------------------------------------------------------
/*console.log("Counter started");
let counter=0;
const sec1=setInterval(()=>{ //! non-blocking-code

console.log(++counter);
if(counter>9){
    clearInterval(sec1)
}

},1000)

console.log("Counter finished");*/


//! Callback Hell (nested ve birbirine bagli callback'ler)
//!-----------------------------------------------------------------
//* Eger birbirine bagimli asenkron kodlarin yazilmasi gerekirse,nested callback
//* yapisinin kullanilmasi gerekebilir. Fakta bu iyi bir programlama yaklasimi degildir.
// !callback hell olarak adlandirilan bu yapinin anlasilmasi ve surdurulebilirligi oldukca zordur.


//! DIŞTAKİ İLK  ÇALIŞIR

/*setTimeout(() => {
    console.log("john:Hi");
    setTimeout(() => {
      console.log("Sarah: Hello");
      setTimeout(() => {
        console.log("John: How Are you?");
        setTimeout(() => {
          console.log("Fine and you?");
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
*/
//? COZUMLER:
//?----------------------------------------------------------------
//* 1- XMLHttpRequest (Eski yontem, Ornek: AJAX)
//? https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
//* 2- Promise,
//! 3- Fetch API (Promise'in basitlestirilmis hali),
//! 4- ASYNC-AWAIT (Fetch API'nin makyajlanmis hali)

