import { useState } from "react";

const KeyboardClipboard = () => {
  const [inputValue, setinputValue] = useState("");

  const handleinputChange = (e) => {
    setinputValue(e.target.value);
  };

  const handleKeydown = (e) => {
    // console.log(e.keyCode);
    e.target.value = e.target.value.toUpperCase();
    e.keyCode === 13 && alert("Entere basıldı");
    e.keyCode === 8 && alert("silindi");
  };
  const handleAreaPaste = (e) => {
    console.log(e.clipboardData);
    e.target.value = e.clipboardData.getData("text").toLowerCase();
    if(e.target.value.length>5){e.target.style.border="3px solid red"}
   
    e.preventDefault();
  };
  const handleAreaChange =(e)=>{

    if(!e.target.value){
      e.target.style.border="3px solid black"
      e.target.style.backgroundColor="green"

    }
  }

  return (
    <div className="container text-center">
      <h2>CLİPBOARD EVENTS</h2>
      <input
        onChange={handleinputChange}
        onKeyDown={handleKeydown}
        type="text"
        value={inputValue}
      />
      <p  style={{userselect:"none"}} onCopy={()=>alert("Dikkat kopyalandı")} className="text-start m-4">{inputValue} </p>
      <textarea
        name="area"
        id="area"
        cols="50"
        rows="10"
        onPaste={handleAreaPaste}
        onChange={handleAreaChange}
      ></textarea>
    </div>
  );
};

export default KeyboardClipboard;
