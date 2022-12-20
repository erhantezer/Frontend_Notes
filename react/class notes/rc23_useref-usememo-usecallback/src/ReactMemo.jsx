import React, { useState } from "react";
import Header from "./components/Header";
import fs from "./assets/fs.png";

const ReactMemo = () => {
  const [value, setValue] = useState(0);
  const [img, setImg] = useState();
  return (
    <div>
      <Header img={img} />
      <p>Count:{value}</p>
      <button onClick={() => setValue(value + 1)}>Increase</button>
      <button onClick={() => setImg(fs)}>FS</button>
    </div>
  );
};

export default ReactMemo;
