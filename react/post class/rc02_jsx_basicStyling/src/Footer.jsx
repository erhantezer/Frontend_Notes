//*rfc  rfce rafce

//*React v17 sonrasında tekrar import edilmeye gerek yoktur
import React from 'react'

//? Componentler fonksiyonlarda oldugu gibi 3 farkli yontemle yazilabilir.
//? Aşağıdaki componentte arrow function kullanarak oluşturduk.

const Footer = () => {
  return (
    <footer>CopyRight by Clarusway {new Date().getFullYear()}</footer>
    //? JSX icerisinde degiskenler {} 👆 icerisinde gosterilir.  
  )
}

export default Footer