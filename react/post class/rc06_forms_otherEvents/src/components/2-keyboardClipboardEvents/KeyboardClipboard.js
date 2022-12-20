import { useState, useEffect } from "react";

const KeyboardClipboard = () => {
  //! panoya kopyalandı

  const [inputValue, SetInputValue] = useState("");

  const handleInputChange = (e) => {
    SetInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    console.log(e.keyCode);
    e.target.value = e.target.value.toUpperCase();
    e.keyCode === 13 && alert("Entere basıldı");
  };
  

  const handleAreaPaste =(e)=>{
    console.log(e)
    e.target.value = e.clipboardData.getData("text").toLowerCase()
    e.target.style.border="3px solid red"
    e.target.style.backgroundColor="lightgray" 
    e.preventDefault()
   }

   const handleAreaChange =(e)=>{
    if(!e.target.value) {
      console.log(e.target);
      e.target.style.border="3px solid black"
      e.target.style.backgroundColor="green" 
    }else{
    e.target.style.border="3px solid red"
    e.target.style.backgroundColor="lightgray" 
    }
   }


  return (
    <>
    <div className="container text-center bg-primary text-white opacity-100 p-4 rounded-4">
      <h3>CLIPBOARD EVENTS</h3>
      <input
        type="text"
        value={inputValue}
        //? Birden fazla event aynı anda kullanılabilir
        onChange={handleInputChange}
        // onChange={(e)=>SetInputValue(e.target.value)}

        onKeyDown={handleKeyDown}

        onFocus={(e)=>SetInputValue(e.target.value)}
      />
      <p className="text-start m-4">{inputValue}</p>

     
    </div>
     <textarea 
     style={{resize:"none"}}
     onPaste={handleAreaPaste}
     onChange={handleAreaChange}
     
     name="area"
      id="area" 
      cols="50" 
      rows="10"
      >

      </textarea>
      </>
  );
};

export default KeyboardClipboard;
