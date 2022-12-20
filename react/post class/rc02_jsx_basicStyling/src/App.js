
//? Kısa yolu **rafce** class component için ise **rcc**
//? App componentinin tanimlanmasi

import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  //? sitillendirme yapılmayacaksa container için <> kullanılabilir
  return (
    <>
      <Header/>
      <Content/>
      <Footer/>
      
    </>
  );
}

export default App;



