
//? React,JSX kullanmaktadir.
//? JSX'de, HTMl elementleri dogrudan JS icerisinde kullanilabilir

import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";



//! Componentler, HTML,CSS ve JS kodlarindan meydana gelmiş
//! bir kod parcacigidir.

//! Bir componentin return () kismi ise JSX kodlari icerir.

//! JSX'in kendine gore bazi kurallari vardir. Ornegin bir
//! component eger birden fazla html elementi dondurmesi
//! gerekirse bunlari tek bir container elemani ile sarmayalarak
//! dondurmelidir.container icin div, article, header, <> v.b
//! herhangi bir element kullanilabilir.





//? App componentinin tanimlanmasi
function App() {
  return (
    //? return içinde JSX kullanılır.COMPONENTLER RETURN İŞLEVİ VARDIR
     //? stillendirme yapilmayacaksa container icin <> kullanilabilir
    <div>
      <Header/>
      <Content/>
      <Footer/>
     
     
    </div>
  );
}

export default App;
