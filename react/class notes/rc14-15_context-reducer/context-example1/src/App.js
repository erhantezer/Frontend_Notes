import { useState } from 'react';
import StudentList from './components/StudentList';
import data from './data';
import { StudentContext } from './context/StudentContext';

function App() {
  const [students, setStudents] = useState(data);
  
  
  return (
    <div>
      {/* <StudentList students={students} /> */}
      <StudentContext.Provider value={{students ,setStudents}}>
        {/* {value çift parantez olmalı} */}
        <StudentList/>
      </StudentContext.Provider>
    </div>
  );
}
export default App;
