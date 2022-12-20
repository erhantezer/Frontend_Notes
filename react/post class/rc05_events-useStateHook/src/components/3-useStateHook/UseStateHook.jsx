//* ========================== HOOKS ====================================
//! Hook'lar fonksiyonel component'ler icerisinde state'leri kullanmamiza
//! olanak saglayan ozel fonksiyonlardir.
//! React 16.8 (2019) versiyonu ile gelmistir ve geldikten sonra Class-componentler'in
//! kullanimi cok azaltmistir.

//? React'ta useState(), useEffect(), useContext() gibi bir cok built-in
//? Hook bulunmaktadir. Ayrica custom hook tanimlamak da mumkundur.

//* Hook Kullanim Kurallari:
//?  1. İlk olarak import edilmedlir. import { useState } from "react";

//!  2. Hook'lar ust seviyede kullanilmalidir. Yani Hook'lar bir
//*    dongunun, kosul cumleciginin ve icice fonksiyonlarin icerisinde
//*    kullanilmamalidir.

//*  3. Hook'lar sadece React Fonksiyonel componentleri icerisinde cagrilmalidir.
//*    Normal Javascript fonksiyonlari icerisinde cagrilmamalidir
//*    (Custom hook'lar icerisinde bir hook cagrilabilir)
//?    https://reactjs.org/docs/hooks-rules.html
//* =====================================================================

import { useState } from "react";

const UseStateHook = () => {
  const [count, setCount] = useState(0);
  const [info,setInfo] =useState({
    name:"Ahmet YILMAZ",
    email:"ay@gmail.com",
    age:32

  })

const handleAgeInc=()=>{
    setInfo({...info,age:info.age+1})
    //! Objectin içindeki bir verinin değerini değiştirmek istiyorsak,speard operatörü ile ilgili 
    //! objecti açıyoruz.Sonrasında değiştirmek istediğimiz key ve value değerlerini yazıyoruz...
   //console.log(info.age);
    
}
//console.log(info)

  //! useState içerisine dizi,array,object olabilir
  //! Statenin her değişimde render işlevi gerçekleşir
  //? array destructuringde sıranın önemi vardır.
  //! Class Componentin constructor içinde yaptığımız işlemi yapmış olduk.
  //! Bir component içinde birden fazla useState Hooku kullanılabilir.Ama object olarak kullanılabilir.

  const handleInc = () => {
    setCount(count + 1);
  };
  const handleDec = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <div className="container text-center mt-4">
        <section>
          <h1>UseState Hook</h1>

          <h4 className="display-4 text-danger m-4">COUNT:{count}</h4>

          <button onClick={handleInc} className=" btn btn-danger">
            INCREASE
          </button>
          <button
            onClick={() => setCount(count * 0)}
            className=" ms-3 btn btn-success"
          >
            CLEAR
          </button>
          <button onClick={handleDec} className="ms-3 btn btn-warning">
            DECREASE
          </button>
        </section>
        <section>
        <h1 className="display-4 text-danger m-4">USESTATE OBJECT</h1>
        <h2>{info.name}</h2>
        <h3>{info.age}</h3>
        <butto  onClick={handleAgeInc} className="btn btn-info"> Inc Age</butto>
        </section>
      </div>
    </div>
  );
};

export default UseStateHook;
