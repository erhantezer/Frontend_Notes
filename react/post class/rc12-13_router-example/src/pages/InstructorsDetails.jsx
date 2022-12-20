import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import NotFound from "./NotFound";
import loadinggif from "../img/loading.gif"

const InstructorsDetails = () => {
  //! Linkteki parametreyi almak icin useParams Hook'u kullanilabilir.
  const { id } = useParams();
  const navigate =useNavigate()

  //! navigate ile gonderilen state(veriyi) yakalamak icin ise
  //! useLocation Hook'u kullanilabilir.
  // const inst =useLocation()
  // const {state} =useLocation()
  const [inst, setInst] = useState(null);
  const [error,setError] =useState(false)

  const getInstructors = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        if(!res.ok){
          setError(true)
          throw new Error("error")
        }
        return res.json()
      })
      .then((data) =>{
        setTimeout(()=>{
          setInst(data)
        },3000)
      } )
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getInstructors();
  }, [id]);

  //console.log(inst);
  console.log(inst)
//! if yapısı ile oluştursan return kullanmayı unutma!!!
//! Aşağıdaki kurgu if/else if/else ile de yapılabilir👇
//! Burada amaçlanan 10 ürünümüz var 11 id bize veri döndürmüyor
//! id=11 ile istekte bulunan kişiyi Not Found sayfasına yönlendirmek
//! veri gelinceye kadarda uyarı oluşturmak
  return (
    <>
    {error ? <NotFound/> : !inst  ? (
      <img src={loadinggif} alt="" />
    ) : (
      <div className="text-center">
      <h3>{inst.name}</h3>
      <img
        className="w-50"
        src={`https://avatars.dicebear.com/v2/avataaars/${id}.svg`}
        alt=""
      />
      <h4>{inst.email}</h4>
      <h4>{inst.phone}</h4>
      <div>
        <button  onClick={()=>navigate("/")} className="btn btn-success me-2 ">Home</button>
        <button onClick={()=>navigate(-1)}  className="btn btn-danger">Go Back</button>
      </div>
    </div>
    )}
   </>
  );
};

export default InstructorsDetails;


//! Link ile NaVLink arasındaki fark NavLink içerisinde active özelliğini olması 
//! Link ile NaVLink statik durumlarda, navigate ise dinamik olarak hareket eder.
//* navigate bir fonksiyon gibidir.
//! Navigate ise bir componenttir.
