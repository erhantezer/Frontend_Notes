import Events from "./components/1-Event-Intro/Events";
import Counter from "./components/2-ClassComponents/Counter";
import UseStateHook from "./components/3-useStateHook/UseStateHook";

function App() {
  return (
    <div>
        <Events/>
        <Counter count={10}/>
        <Counter/>
        <hr style={{height:"10px",border:"none",color:"#333",backgroundColor: "#333"}} />
        <UseStateHook/>
    </div>
    
  );
}

export default App;
