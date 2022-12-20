//*  Kısayolu >> rcc

//* ============================ CLASS COMPONENTS AND STATE ============================
//* React'da Class-Component'ler ES6 class yapisina dayanmaktadir.
//* Cok fazla boilerplate kod icermektedir.
//* Ancak Class-Component'ler React'da state'leri barindiran ilk component yapisidir.
//* State, aslinda bir component hakkinda bilgi tutan bir React nesnesidir.
//* Bir componentin state'i zaman icerisinde degisebilir.
//* State her degistiginde React bu componenti yeninden render eder.
//* Bir state'e baslangıc degeri constructor metodu icersinde this.state ile atanabilir
//* constructor'in disinda state, setState() metodu ile degistilebilir.
//* ====================================================================================

import React, { Component } from 'react'

export default class Counter extends Component {

//! Kısayolu rconst👇

constructor(props) {
  super(props)

  this.state = {
     //count:0
     count: props.count || 0, 
     //NAN HATASI VEYA UNDEFİNED HATASINI ÖNLEMEK İÇİN KULLANDIK.

  };
  //* handleInc metodunun Counter class'ina baglanmasi
  //? setState kullanmak için handleInc classa bağlamamız gerekiyor.
  //? Bind : methoda classa bağlamak istiyorsak
this.handleInc = this.handleInc.bind(this);
}

handleInc=()=>{
    //! setState undefined 👆 hatası alacağız.Bunu düzeltmek için bind kullan 
    this.setState({
        count:this.state.count + 1,
    })

}

handleDec=()=>{
    this.setState({
        count:this.state.count > 0 ? this.state.count -1 :  this.state.count * 0 ,
    })
}

//!  👆 Yazmis oldugumuz metotlar default olarak classa baglanmaz.Ancak, React built-in fonksiyonlari baglidir (Component Did Mount gibi)
//! Bunun icin metotlarimizi ya constructor icerisinde baglamaliyiz yada otomatik baglamayi saglayan arrow fonksiyonlarini kullanmaliyiz.
//!Arrow fonksiyonu kullanırsak bind işlemine gerek kalmıyor.

handleClear=()=>{
    this.setState({
        count:this.state.count * 0,
    })
}
  render() {
    return (
      <div>
        <div className='container text-center mt-4'>
        <h1 className='display-4 text-danger m-4'>COUNT:{this.state.count}</h1>
        
        <button onClick={this.handleInc}  className=' btn btn-danger' >INCREASE</button>
        <button  onClick={this.handleClear} className=' ms-3 btn btn-success' >CLEAR</button>
        <button onClick={this.handleDec}  className='ms-3 btn btn-warning'>DECREASE</button>
    </div>

      </div>
    )
  }
}

