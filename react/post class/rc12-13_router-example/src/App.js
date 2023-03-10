import Footer from './components/Footer';
import Navbar from './components/Nav';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Instructors from './pages/Instructors';
import NotFound from './pages/NotFound';
import {BrowserRouter,Routes,Route, Navigate} from "react-router-dom"
import InstructorsDetails from './pages/InstructorsDetails';
import Paths from './pages/Paths';
import FullStack from './pages/FullStack';
import Aws from './pages/Aws';
import PrivateRouter from "./components/PrivateRouter"

//? / olarak tanımlamak absolute path aksine relative path 
//* İc ice sayfalari gsotermek icin Nested Route kullanilabilir.

//? Link, NavLink ve Navigate componentleri declerative routing
//? gerceklestirmek icin kullanilir.
//? Ornegin: Link ve NavLink Sayfada gorulebilen, kullanciyla
//? bir etkilesim icerisinde bulunarak yonledirme yapılan bir
//? componentlerdir. (Nav v.b)

//? Navigate sayfada gorulmeyen ve programsal olarak bir linkin
//? bir baska linke yonledirmesi icin kullanilir. (v5 -> Redirect)

//* useNavigate() ise imperative routing icin elverislidir.
//* Ornegin bir fonksiyon,event veye UseEffect icerisinde programsal
//* olarak yonledirme yapmak icin kullanilabilir.

function App() {
  return (
    <>
    <BrowserRouter>

    <Navbar />
    <Routes>
      <Route path ="/" element={ <Home />} />
      <Route path ="/instructors" element={  <Instructors />} />
      <Route path ="/instructors/:id" element={<InstructorsDetails/>} />
      <Route path ="/contact" element={ <Contact />} />

      <Route path="paths" element={<Paths />} >
            <Route index element={<FullStack/>} />
            <Route path="fullstack" element={<FullStack/>} />
            <Route path="aws" element={<Aws />} />
    </Route>

    <Route path="/contact" element={<PrivateRouter/>} >
          <Route path="/contact" element={<Contact />} />
    </Route>




      {/* <Route path ="/contact" element={ <Navigate to="/">} /> */}
      {/* <Route path ="*" element={ <NotFound />} /> */}
      <Route path ="*" element={<Navigate to ="/" />} />
    </Routes>
     

      <Footer />
    </BrowserRouter>
     
    </>
  );
}

export default App;
