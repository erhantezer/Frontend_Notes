import './Counter.css';
import { useDispatch } from 'react-redux'; // ? DİSPATCH İSTEK YAPILIR

import { useSelector } from 'react-redux'; // ? consume
import { decrement, increment, reset } from '../../redux/actions/counterAction';



const Counter = () => {

  const dispatch=useDispatch()

  // const counter=useSelector(state=>state.counter)  //? 👈 == useReducer hook benzeri
  const counter=useSelector(state=>state.count.counter)  //? 👈 == useReducer hook benzeri
  return (
    <div className="app">
      <h2 className="counter-header">Counter With Redux</h2>
      <h1>{counter}</h1>
      <div>

        <button className="counter-button positive"
        //  onClick={()=>dispatch({type:"INCREMENT"})}>increase</button> 
         onClick={()=>dispatch(increment())}>increase</button> 
        {/* //? 👆 dispatch obje içerir. */}
      

        <button className="counter-button zero" 
        // onClick={()=>dispatch({type:"RESET"})}>reset</button>
        onClick={()=>dispatch(reset())}>reset</button>


        <button className="counter-button negative" 
        // onClick={()=>dispatch({type:"DECREMENT"})}
        onClick={()=>dispatch(decrement())}
        >decrease</button>

      </div>
    </div>
  );
};

export default Counter;
