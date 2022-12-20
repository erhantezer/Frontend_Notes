import React, { useState, useEffect } from "react";
import axios from "axios";
import "./HoverCard.css";

const HoverCardUseEffect = () => {
  const [products, setProducts] = useState([]);
  const [searchText,setSearchText] = useState("")

  const url = "https://dummyjson.com/products";

  const getDataApi = async () => {
    const res = await axios.get(url);
    // const {res} = await axios.get(url)
    if (res.data) {
      setProducts(res.data.products);
      // setProducts(data.products)
    }
  };
  console.log(products);

  useEffect(() => {
    getDataApi();
  }, []);

  console.log(products);

  return (
    <div>
      <h4 className="text-center mt-4">Products</h4>
      <div className="text-center mb-3"><input onChange={(e)=>setSearchText(e.target.value)} type="text" className="text-center w-75 p-2"/></div>
      

      <div className="row d-flex gap-5 flex-wrap justify-content-center ">
        {products.map((item, id) => {
          return (
            <div  className="col-sm-3 layer-container">
                <div className="imgContainer">
                <img className="images" src={item.thumbnail} alt="" />
                </div>
            
              <div className="text-content">
                <div className="brand">
                <p id="brand">{item.brand}</p>
                <p className="title">{item.title}</p>
                </div>
                <div className="star">
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star-half-o" aria-hidden="true"></i>
              </div>
              <div className="sizes">
                <span>Size</span>
                <ul>
                  <li>7</li>
                  <li>8</li>
                  <li>9</li>
                  <li>10</li>
                </ul>
            <div className="bottom">
            <h3 id="price">${item.price}</h3>
              <a className="cart-btn" href="">
                Add to cart
              </a></div>
            
              </div>
                
              </div>
           
             
              
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HoverCardUseEffect;
