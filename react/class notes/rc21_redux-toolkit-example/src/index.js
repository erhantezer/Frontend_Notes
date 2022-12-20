import App from './App';
import ReactDOM from 'react-dom';


//* react v17
// ReactDOM.render(<App />, document.getElementById('root'));


//* react v18

const root = ReactDOM.createRoot( document.getElementById("root"))
root.render( 

    <App/>

);
