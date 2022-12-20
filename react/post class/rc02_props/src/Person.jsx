import React from "react";
import Msg from "./Msg";

const Person = ({data}) => {
//{ name, img, tel } 
//Havalada destructiring👆
//const { name, img, tel } = props;

console.log(data);

  const imgStyle = {
    width: "300px",
    height: "300px",
    display: "block",
  };

  const card = {
    border: "1px solid black",
    margin: "1rem",
    padding: "1.2rem",
    boxShadow: "2px 2px 3px 5px rgba(0, 0, 0, 0.2)",
    borderRadius: "10px",
  };
  return (
    <div>
      <div className="card" style={card}>
        {data.map((item)=>{
            const {img,name,tel} =item
            return(
                <div>
                <img style={imgStyle} src={img} alt="" />
                <div>
                <Msg name={name}/>
                  <p>{tel}</p>
                </div>
                </div>
            )
        })}
      </div>
    
    </div>
  );
};

export default Person;
