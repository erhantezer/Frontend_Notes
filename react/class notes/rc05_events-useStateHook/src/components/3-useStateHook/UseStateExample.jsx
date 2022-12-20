//* ========================== HOOKS ====================================
//! Hook'lar fonksiyonel component'ler icerisinde state'leri kullanmamiza
//! olanak saglayan ozel fonksiyonlardir.
//! React 16.8 versiyonu ile gelmistir ve geldikten sonra Class-componentler'in
//! kullanimi cok azaltmistir.

//? React'ta useState(), useEffect(), useContext() gibi bir cok built-in
//? Hook bulunmaktadir. Ayrica custom hook tanimlamak da mumkundur.

//* Hook Kullanim Kurallari:
//* 1. İlk olarak import edilmedlir. import { useState } from "react";
//* 2. Hook'lar ust seviyede kullanilmalidir. Yani Hook'lar bir
//*    dongunun, kosul cumleciginin ve icice fonksiyonlarin icerisinde
//*    kullanilmamalidir.
//* 3. Hook'lar sadece React Fonksiyonel componentleri icerisinde cagrilmalidir.
//*    Normal Javascript fonksiyonlari icerisinde cagrilmamalidir
//*    (Custom hook'lar icerisinde bir hook cagrilabilir)
//?    https://reactjs.org/docs/hooks-rules.html
//* =====================================================================

import { useState } from "react";
import Counter from "../2-classComponents/Counter";

const UseStateExample = () => {

  const [count,setCount] =useState(0);
  //* count==>değişken
  //* setcount=>Func
  const [info,setInfo] =useState({
    name:"Ahmet YILMAZ",
    age:34,
    email:"ayılmaz@gmail.com"
  })

  const handleInc=()=>{
    setCount(count+1)
  }
  const handleDec=()=>{
    if(count>0){
    setCount(count-1)
    }
  }


  return (
    <div className="container text-center mt-4">
      <section><h1 className="display-4 text-danger m-4">USESTATE COUNT:{count}</h1>
        <button onClick={handleInc} className="btn btn-success ms-3">
          INC
        </button>
        <button onClick={()=>setCount(0)} className="btn btn-danger ms-3">CLR</button>
        <button onClick={handleDec} className="btn btn-warning ms-3">DEC</button></section>
        <section>
          <h1 className="display-4 text-danger mt-4">USESTATEOBJECT</h1>
          <h2>{info.name}</h2>
          <h3 >{info.age}</h3>
          <h2>{info.email}</h2>
          <button onClick={()=>setInfo({...info,age:info.age+1})} className="btn btn-danger">Click</button>
        </section>
        
      </div>
  )
};

export default UseStateExample;

/*useState en çok kullanılan hook'tur.
Bir state in degisken,ve obje ile kutlanilabilmesine olanak saglar
useState hook'u 2 deger dondurur.

1. si state degiskenidir.
2. si ise state"i degistirmeye izin veren bir setter metodudur.
useState parametre olarak state'in ilk degerini alir.*/