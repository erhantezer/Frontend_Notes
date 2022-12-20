import React, { useState,useEffect } from 'react'
import loadingImage from './images/loading.gif';

const User = () => {

    const [user,setUser] =useState()
    const [loading, setLoading] = useState(false);

//! Bu şekilde user yani state değiştiğinden render tetiklenecek böylece sonsuz bir döngü oluşacaktır.

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((res)=>res.json())
// .then((data)=>setUser(data))


//! Bu engelemek için veriyi bir butona bağlanabiliriz.👇 Ancak yöntem çok effective useable değil

//! FETCH
const getUser =() =>{
setLoading(true);
fetch("https://jsonplaceholder.typicode.com/users")
.then((res)=>res.json())
.then((data)=>setUser(data))
setTimeout(function(){
    setLoading(false);
},3000)
}



//? Bunun yerine useEffect hookunu kullanıyoruz.

//! USE EFFECT
useEffect(() => {
//ComponentDidMount --Bir kez çalışacak.
getUser()
}, [])


console.log(user); //Birincisinde undefined gelecek.Çünkü renderdan sonra componentDidMount çalışıyor.


//! LOADİNG
// if (loading) {
//     return(
//         <img src={loadingImage} />
//     )
// }



//! lokal  style 
const colStyle = {
    boxShadow:"rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
}


  return (
    <div >
        {loading  ? <img src={loadingImage}/> :
        <>

        <h1 className='display-6'>User List</h1>
        {/* <button onClick={getUser}  className='btn btn-danger'>Get User</button> */}
        <div className="row gap-4">
            {user && user.map((item,index)=>{
                return (
                <div key={index} className="col p-2 " style={colStyle}>
                    <img src={`https://i.pravatar.cc/200/${index}`} className="rounded-circle" alt="image" />
                    <h6>{item.name}</h6>
                </div>
                )
            })}
            
        </div>

        </>
        
        }

    </div>
  )
}

export default User