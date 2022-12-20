import { useState } from 'react';
import HoverCardUseEffect from './components/HoverCardUseEffect';
import LifeCycleMethods from './components/LifeCycleMethods';
import UseEffectExamples from './components/UseEffectExamples';
import UseEffectHook from './components/UseEffectHook';
import User from './components/User';


function App() {

  const [show,setShow] =useState(false)
  console.log(show)

  return (
    <div className="" 
    // style={{backgroundColor:"pink"}}
    
    >
      {/* <button
      onClick={()=>setShow(!show)}
      className='btn btn-warning'>
       {show ? "Hide" : "Show"}
      </button> */}
      {/* {Conditional Rendering} */}
     {/* {show &&  <LifeCycleMethods /> }  */}
     {/* {show ?  <LifeCycleMethods /> :null }  */}
     {/* {!show || <LifeCycleMethods /> } */}
     
{/* {   show &&  <UseEffectHook/>} */}
    {/* <User/> */}
    {/* <UseEffectExamples/>  */}
    <HoverCardUseEffect/>
    </div>
  );
}

export default App;
