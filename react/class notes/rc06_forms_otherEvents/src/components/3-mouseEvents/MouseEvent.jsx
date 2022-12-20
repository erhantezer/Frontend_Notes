import { FaReact } from "react-icons/fa";
import { FaEvernote } from "react-icons/fa";
import { useState } from "react";

const MouseEvent = () => {
  const [visible, setVisible] = useState(false);
  const [toggle,setToggle] =useState(false)

  const handleDoubleClick =(e)=>{
    setToggle(!toggle);
    toggle
    ? (e.target.className="bg-danger text-light w-50 p-4 mt-4")
    : (e.target.className="bg-primary text-light w-50 p-4 mt-4")
  }

  return (
    <div className="container text-center d-flex flex-column align-items-center mt-4">
      <h2 className="text-danger">MOUSE EVENTS</h2>

      <div
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        id="todo-1"
        className="bg-success text-light w-50 p-4" >
        todo item 1 <FaReact />
      </div>
      {visible && <p className="bg-success"> "This is a hint"</p>}

      <div id="todo-2" className="bg-success text-light w-50 p-4 mt-4" onDoubleClick={handleDoubleClick}>
        todo item 2 <FaEvernote />
      </div>

      <div id="todo-3" className="bg-success text-light w-50 p-4 my-4">
        todo item 3 <FaReact />
      </div>

      <p>X and Y</p>
      {/* <p className="text-danger fw-bold">
        {coordX} {coordY}
      </p> */}
    </div>
  );
};

export default MouseEvent;
