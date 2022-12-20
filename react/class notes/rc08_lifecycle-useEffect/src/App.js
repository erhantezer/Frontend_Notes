import LifeCycleMethods from './components/LifeCycleMethods';
import { useState } from 'react';
import UseEffectHook from './components/UseEffectHook';
import User from './components/User';

function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="container text-center" style={{ marginTop: '10rem' }}>
      {/* <button className="btn btn-dark" onClick={() => setShow(!show)}>
        {show ? 'Hide' : 'Show'}
      </button> */}

      {/* Conditional Rendering (Short-Circuit) */}
      {/* {show && <LifeCycleMethods />} */}
      {/* {show ? <LifeCycleMethods /> : null} */}
      {/* {show && <UseEffectHook/>} */}
      <User/>

    </div>
  );
}

export default App;