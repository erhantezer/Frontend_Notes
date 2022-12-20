//! DOM OBJECTLERİNE ERİŞMEK JQUERY HIZLI ERİŞEBİLİR.
//* jquery bir js kütüphanesidir.projelerimizde kullammak için install etmemiz ya da 
//* CDN linki ile kullanmamız gerekir

const formJS=document.querySelector("form") // Form JS objectine erişmiş oluyoruz.
// console.log(formJS)

//! 👇 Aynı DOMa jquery ile erişmek istiyorsak
//?jQuery==$
// const formJquery=jQuery("form").eq(0) //? Jquery objectine erişmiş oluyoruz.
// console.log(formJquery)
const formJquery=$("form").eq(0)
const inputJQ=$(".top-banner input").eq(0)
const messageJQ=$(".top-banner span").eq(0)
const listJQ=$(".cities").eq(0)

console.log(formJquery);


//! 👇 bir elementen birden fazla varsa;
// const FormJS=document.querySelectorAll("form") //* tüm formlara erişiriz.
// const FormJquery=jQuery("form")  
/* tüm formlara erişiriz.Specific forma erişmek için get(index) veya eq(index)
ancak get(index) ==> toArray(get()) js objecti dödürür bunun için jquerynin 
 objecti elde etmek için eq tercih ediyoruz.*/


//load : DOM ağacınındaki contentlerin sytle yüklenmesi || DOMContentLoaded : Dom tree ağacının oluşması

//! JS for >>>> window.onload=()=>{}
//addEventListener ====> on

$(window).on("load",()=>{
    console.log("Window.load");
})


//! JS for document.addEventListener( DOMContentLoaded)
//* jQuery for 👇
$(document).ready(()=>{
    console.log(" DOMContentLoaded")
    localStorage.setItem("apiKey",EncryptStringAES("346b0899c9b7d0f52312e560ac10f74e"))
})
//? Yukarıda ile aynıdır
// $(document).on(()=>{
//     console.log(" DOMContentLoaded")
// })


//* 1.kullanım
// formJquery.on("submit",(e)=>{
//     e.preventDefault()
//     getWeatherDataFromApi()
// })


//* 2.kullanım
formJquery.submit((e)=>{
    e.preventDefault()
    getWeatherDataFromApi()
})

//XMLHttpRequest (XHR), FETCH , AXİOS $.ajax
const getWeatherDataFromApi=()=>{
    //console.log("Ajax func. is callded");
    const apiKey=DecryptStringAES(localStorage.getItem("apiKey"))
    //* Js .value == jquery. val()
    const cityName=inputJQ.val()
    console.log(cityName)
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`


   $.ajax({
    type : "GET",
    url:url,
    dataType: "json",
    success: (response) =>{
        //mainBody
        console.log(response)

        const {main,sys,name,weather} =response
        const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

        //js=>document.createElemet("li")
        // const createdLi = $(document.createElement("li"))
        const createdLi = $('<li></li>')

        createdLi.addClass("city")
        createdLi.html(`
        <h2 class="city-name" >
        <span>${name}</span>
        <sup>${sys.country}</sup>
      </h2>
      <div class="city-temp">
        ${Math.round(main.temp)}
        <sup>°C</sup>
      </div>
      <figure>
        <img class="city-icon" src=${iconUrl} alt="city-icon" />
        <figcaption>${weather[0].description}</figcaption>
      </figure>`)
      //append and prepend both 
      listJQ.append(createdLi)
    //   formJS.reset()-JS
    formJquery.trigger("reset")

    },
    beforeSend:(request)=>{
        console.log("Before ajax send");
    },
    complete:()=>{ console.log("Data completed");},
    error:(XMLHttpRequest)=>{console.log(XMLHttpRequest);}
   })

}




