//?========================================================
//?                  USEEFFECT HOOK
//?========================================================
//! UseEffect Hook'u fonksiyonel componenler'te yan etkileri
//! (side effect) gerceklestirmek icin kullanilir.
//! componentDidMount,componentDidUpdate,ve componentWillUnmount
//! metotlarinin bir birlesimi gibi dusunulebilir.

import { useState, useEffect } from "react";

//! useEffect(() => {
//*   /* ComponentDidMount code */
//! }, []);

//! useEffect(() => {
//*   */ componentDidUpdate code */
//! }, [var1, var2]);

//! useEffect(() => {
//!   return () => {
//*     //* componentWillUnmount code */
//!   };
//! }, []);

//! useEffect(() => {
//*   //* componentDidMount code + componentDidUpdate code */

//!   return () => {
//*     //* componentWillUnmount code */
//!   };
//! }, [var1, var2]);

const UseEffectHook = () => {
  const [count, setCount] = useState(0);

  //! ComponentDidMount
  // useEffect(() => {
  //   console.log('Mounted'); //! fetch, asyn-await ,localStorage, setTimeout
  //   setTimeout(() => {
  //     alert('Data Fetched');
  //   }, 3000);
  // },[]);

  //! ComponentDidMount + componentDidUpdate
  //? ComponentDidUpdate tek başına oluşmaz.
  // useEffect(() => {
  //   console.log('Mounted + Updated');
  //   setTimeout(() => {
  //     alert('Data Fetched');
  //   }, 1000);
  // }, [count]);
  
  // useEffect(() => {
  //   console.log('Mounted + Updated');
  //   setTimeout(() => {
  //     alert('Data Fetched');
  //   }, 1000);
  // });

  //! ComponentDidMount + componentWillUnmount
  const fetchData = () => {
    console.log("Data Fetched");
  };

  useEffect(() => {
    //*ComponenentDidMount
    const timerId = setInterval(fetchData, 1000);
    console.log("Mounted");
    return () => {
      //* componentWillUnMount
      clearInterval(timerId);
      console.log("Unmounted");
    };
  }, []);

  console.log("rendered");
  return (
    <div className="container text-center mt-4">
      <h1 className="text-danger">USEEFFECT</h1>
      <h3>Count:{count}</h3>
      <button className="btn btn-warning" onClick={() => setCount(count + 1)}>
        INC
      </button>
    </div>
  );
};

export default UseEffectHook;
