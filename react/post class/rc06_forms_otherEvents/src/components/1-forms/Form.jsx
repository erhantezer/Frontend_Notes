
import {useState,useRef} from "react"


const Form = () => {

 //* useRef 1. kullanım--
  //* 👇 DOM elementlerine ulaşmak için kullanılır
 const FormResetRef = useRef();


const [username, setUsername] = useState("")
const [email, setEmail] = useState("")
const [password,setPassword] =useState("")

const handleUsername =(e)=>{
  console.log(e.target.value)
 setUsername(e.target.value)
}

const handleSubmit =(e)=>{
  e.preventDefault()  //? Refresh özelliğini kapattık.
  alert(`username  : ${username}`)
  // setEmail("")
  // setPassword("")
  // setUsername("")
  // e.target.reset() //Uncontrolled olduğundan Controlled form verilerine işlem yapmaz.
  // FormResetRef.current.reset() // Kontrollü bir bileşende, form verileri bir React bileşeni tarafından işlenir. Kontrolsüz bileşenlerde ise form verileri DOM'un kendisi tarafından işlenir.
  
}

  return (
    <div className="container">
      <form onSubmit={handleSubmit} style={{margin:"5rem"}}  ref={FormResetRef}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username :<span className="text-danger">{username}</span>
          </label>
          <input
           
            onChange={handleUsername}
            type="text"
            className="form-control"
            id="username"
            // value={username}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address : {email}
          </label>
          <input
           
            onChange={(e)=>setEmail(e.target.value)}
            type="email"
            className="form-control"
            id="email"
            // value={email}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            onChange={(e)=>setPassword(e.target.value)}
            type="password"
            className="form-control"
            id="password"
            // value={password}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;


/*

What are the differences between Controlled and Uncontrolled Components in React JS?
In a controlled component, form data is handled by a React component. Whereas in uncontrolled components, form data is handled by the DOM itself.
Usage of Component State is a must for controlled components. Use of state is completely optional for uncontrolled components, but one must use Refs in it.
With controlled components, we can validate as the input is being changed but the same is not possible with uncontrolled components.

React JS'de Kontrollü ve Kontrolsüz Bileşenler arasındaki farklar nelerdir?
Kontrollü bir bileşende, form verileri bir React bileşeni tarafından işlenir. Kontrolsüz bileşenlerde ise form verileri DOM'un kendisi tarafından işlenir.
Bileşen Durumunun kullanılması, kontrollü bileşenler için bir zorunluluktur. Durum kullanımı, kontrol edilmeyen bileşenler için tamamen isteğe bağlıdır, ancak içinde Ref'lerin kullanılması gerekir.
Kontrollü bileşenlerle, giriş değiştirilirken doğrulama yapabiliriz, ancak kontrolsüz bileşenlerde aynısı mümkün değildir.


*/