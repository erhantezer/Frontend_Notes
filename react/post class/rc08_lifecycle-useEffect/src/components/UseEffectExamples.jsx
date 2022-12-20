import React, { useState,useEffect } from 'react'
import axios from "axios"

const UseEffectExamples = () => {
    const [products,setProducts] = useState([])

    const url = "https://dummyjson.com/products"

    const getDataApi =async () =>{
        const res = await axios.get(url)
        // const {res} = await axios.get(url)
       if (res.data){
        setProducts(res.data.products)
        // setProducts(data.products)
       }
    }
    console.log(products)

    useEffect(() => {
        getDataApi()
    
     
    }, [])
    

    const imgStyle ={
        width:"300px",
        height:"200px"
    }

    const liImgStyle = {
        boxShadow:"rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
        // boxShadow:"2px 2px 5px pink",
        backgroundColor:"pink",
        borderRadius:"10px"
    }
    

  return (
    <div>
        <h5>Products</h5>
        {/* <button onClick={()=>getDataApi()}>CLİCK</button> */}
        <ul className='d-flex gap-3 flex-wrap justify-content-center'>
        {products.map((item,id)=>{
            return (
                <li style={liImgStyle} className='border border-3 border-dark p-3 list-unstyled'>
                    
                    <img style ={imgStyle} src={item.images[0]} alt="{item.title}" />
                    <p key={id}>{item.title}</p>
                    <p>${item.price}</p>
                </li>
            )
           
        })}

        </ul>
        
    </div>
  )
}

export default UseEffectExamples