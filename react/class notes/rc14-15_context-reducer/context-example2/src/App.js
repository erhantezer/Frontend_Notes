// import { useState, useEffect } from 'react';
import UserContextProvider from './context/UserContextProvide';
import ShowUsers from './pages/ShowUsers';

function App() {
  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   fetch('https://api.github.com/users')
  //     .then((res) => res.json())
  //     .then((data) => setUsers(data));
  // }, []);

  return (
    <>
     <UserContextProvider> <ShowUsers  /></UserContextProvider>
     
    </>
  );
}
export default App;
