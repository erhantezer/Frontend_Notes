//*Harici stillendirme:
import "./Content.css"


//* JSX'de stillendirme farklli sekillerde yapilabilr.
//* 1-) Harici CSS sayfalari ile (index.css, app.css v.b)
//* 2-) Inline stillendirme ile (style = {{color:"red"}}) tırnak olmalı
//* 3- )Local veya global degiskenler ile.

//! NOTLAR:
//* Stillendirme icin property-value(object) yapisi kullanilir.
//* property isimlerinde camelCase kullanimalidir.
//* class isimleri icin className kullanilir.
//* Material UI, Styled Component, Sass, Bootstrap v.b harici kutuphaneler kullanilabilir.


//* Dahili resim eklemek için import etmek gerekmektedir.
import img1 from "./image/img1.jpeg"


//* Lokal olarak stillendirme
const imgStyle={
    display:"block",
    width:"300px",
    margin:"1rem auto"
}





const Content = () => {
//JS BÖLÜMÜ
  return (
//JSX bölümü👇
    <div className="content">
        <h2 style={{color:"red"}} >React JS</h2>
        <p style={{backgroundColor:"lightgreen"}}>React, Kullanıcı arabirimi tasarlamak için kullanılan JS kütüphanesidir</p>
        <img style={imgStyle} src="https://cdn.pixabay.com/photo/2017/02/15/13/40/tulips-2068692__340.jpg" alt="" />
        <img style={imgStyle} src={img1} alt="img1" />
        <p className="par1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quam facilis officia animi, eos in quod nemo qui magni vitae corrupti, tenetur aliquid. Deserunt aliquam commodi labore odio optio provident nisi officia expedita sint, quisquam iure nesciunt dolorem, itaque aspernatur.
        </p>
    </div>
  )
}

export default Content