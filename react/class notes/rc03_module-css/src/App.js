

import Card from "./components/card/Card";
import data from "./util/data"

function App() {
  console.log(data);
  return (
    <>
    {data.map((item)=>{  //* id yoksa index kullanın!!!
      // console.log(item);
      const {id,img,btnName,dil} =item;
      return(
        <Card 
        key={id}
        img={img}
        btnName={btnName}
        dil={dil}
        /> 
      )

    })}
    </>
   
  
  );
}

export default App;
