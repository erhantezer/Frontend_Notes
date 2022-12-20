
//? Componentler fonksiyonlarda oldugu gibi 3 farkli yontemle yazilabilir.
//? JSX icerisinde degiskenler {} icerisinde gosterilir.
const Footer = () => {
  return (
    <footer>Copyright by Clarusway,{new Date().getFullYear()}</footer>
  )
}

export default Footer