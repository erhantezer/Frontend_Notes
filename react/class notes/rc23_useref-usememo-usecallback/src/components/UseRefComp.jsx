import React from "react";
import { useState } from "react";
import { useEffect, useRef } from "react";

const UseRefComp = () => {
  //* useRef 1. kullanım--
  //* 👇 DOM elementlerine ulaşmak için kullanılır
  const [value, setValue] = useState(0);

  const inputRef = useRef(null);

  const divRef = useRef();
  useEffect(() => {
    // document.querySelector("input").focus()
    // console.log(inputRef.current.focus());
  }, []);

  const changeBgColor = () => {
    //! RANDOM COLOR

    // const colors = [
    //   "orange",
    //   "pink",
    //   "purple",
    //   "red",
    //   "#00FF00",
    //   "rgb(150, 150, 150)",
    // ];
    // const random = Math.trunc(Math.random() * colors.length);
    // console.log(random);
    //? div elemetini yakaladık.
    //? 🎈  divRef.current.style.backgroundColor = colors[random];
    divRef.current.style.backgroundColor = inputRef.current.value;

    //
  };

  const increase = () => {
    setValue(value + 1);
    console.log(value);
  };

  return (
    <div ref={divRef} className="useref">
      <h2>UseRefComponents</h2>
      <input ref={inputRef} type="text" placeholder="Enter text..." />
      {/* <input
        style={{ marginTop: "1rem" }}
        ref={inputRef}
        type="color"
        placeholder="Enter text..."
      /> */}
      <button onClick={changeBgColor}>ChangeBgColor</button>
      <button onClick={increase}>Increase</button>
    </div>
  );
};

export default UseRefComp;
