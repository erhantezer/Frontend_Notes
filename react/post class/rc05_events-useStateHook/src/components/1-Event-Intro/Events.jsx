
// * =======================================================
// *                     EVENTS
// * =======================================================

//? ReactJS, Tarayicilar arasi uyumluluk ve performans artisi gibi
//? sebeplerden oturu Sentetik Event olarak adilandirilan Olaylari
//? kullanir. Sentetik Event, aslinda tarayicinin dogal event'larinin
//? bir sarmalayici (Wrapper) arabirimle ortulmesi ile olusur. Bu sayede,
//? React ortaminda kullanilan event'larin bilindik tarayicilarda
//? sorunsuz calismasini saglanir.
//? Ayrinti icin : https://reactjs.org/docs/events.html


import React from 'react'

const Events = () => {

let info="Events"

 const handleClick=()=>{
    alert("Btn clicked")
    
 }   

 const handleClear=(text)=>{
    alert(text)

 }
const handleChange=(e)=>{
    info="HOOKS"
    console.log(info)
    // Burada HOOKS kelimesini değiştirdirmiyor.
    //Amaç DOM 
    console.log(e.target.value)

}


  return (
    <div className='container text-center mt-4'>
        <div className='display-4 text-danger m-4'>{info}</div>
        <button onClick={handleClick} className=' btn btn-danger' >Click</button>
        {/* Fonksiyonu refere ettiğinden self-trigger olmaz */}
        
        {/* <button onClick={handleClear("Clear Btn pressed")}  className='ms-3 btn btn-dark' >Clear</button> */}
        {/* Bu şekilde parametre vererek çağrılırsa direkt tetiklenecektir.
        Yani self-trigger bu engelemek için arrow func kullanılır.Paramere varsa arrow funct olmalı yoksa invoke olarak hareket eder. */}
        
        <button onClick={()=>handleClear("Clear Btn pressed")}  className='ms-3 btn btn-dark' >Clear</button>
        {/* <button onClick={()=>handleClear()}  className='ms-3 btn btn-dark' >Clear</button> */}
        {/* <button onClick={()=>handleClear}  className='ms-3 btn btn-dark' >Clear</button> */}
        <button onClick={(e)=>handleChange(e)} className='ms-3 btn btn-warning'>Change</button>
    </div>
  )
}

export default Events


//* arrow fonksiyonu refere ediliyorsa handleClick() || handleClick("Clicked") şeklinde olmalıdır.
//! info console'da guncellendigini ancak DOM'da guncellenmedigini gorduk.
//* Bunun sebebi REACT'in aksi belirtilmedigi surece elementleri
//* static olarak kabul etmesinden kaynaklanir.

//* React bunu DOM islemlerini minimize etmek icin yapmaktadir.
//* REACT'a hangi elementleri interaktif oldugu belirtilmelidir.
//! React'a elementlerin interaktif oldugunu belirtmek icin state'ler kullanilir.
//! State, elementlerin degisiklik durumlarini tutan nesnelerdir.
//? ReactJs'de state'leri kullanmak icin  2 ayri Component yapisi bulunmaktadir.
//? 1. Statefull Classes (Class Components).
//? 2. Hooks (Functional Components).

//?Biz su ana kadar uygulamalarimizda Fonksiyonel Component'leri kullandik.
//? Yaygin kullanim Fonksiyonel Component'lerdir.