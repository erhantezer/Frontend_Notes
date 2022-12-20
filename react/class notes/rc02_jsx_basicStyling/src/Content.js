
//* JSX'de stillendirme farklli sekillerde yapilabilr.
//* 1-) Harici CSS sayfalari ile (index.css, app.css v.b)
//* 2-) Inline stillendirme ile (style = {{color:"red"}})
//* 3- )Local veya global degiskenler ile.

//! NOTLAR:
//* Stillendirme icin property-value(object) yapisi kullanilir.
//* property isimlerinde camelCase kullanimalidir.
//* class isimleri icin className kullanilir.
//* Material UI, Styled Component, Sass, Bootstrap v.b harici kutuphaneler kullanilabilir.

import img2 from './img/snowdrop-6101818__340.jpeg';

// ? Dahili bir resim eklemek icin import yapmak gereklidir.
import "./Content.css"

// const deneme={x:1} ==>>>JS

//*local ile style vermek için
const imgStyle={
    width:"300px",
    display:"block",
    margin:"1rem auto"

}

//* ================RETURN KISMI JSX=============*/



const Content = () => {
  return (
    <div className='content'>
        {/* İnline style */}
        <h2 style={{color:"red",textAlign:"center"}}>React JS</h2>

        <p style={{backgroundColor:"lightgreen"}}>Kullanıcı arabirimi tasarlamak için kullanılan bir Js kütüphanesidir</p>

        <img style={imgStyle}
         src="https://cdn.pixabay.com/photo/2017/02/15/13/40/tulips-2068692__340.jpg" alt="" />

        <img style={imgStyle} src={img2} alt="" />

        <p className='par-1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi velit incidunt quae amet laudantium, natus ab quisquam delectus in voluptatibus.</p>
    </div>
  )
}

export default Content