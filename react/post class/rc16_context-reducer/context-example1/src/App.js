import { useState } from 'react';
import StudentList from './components/StudentList';
import { StudentContext } from './context/StudentContext';
import data from './data';

function App() {
  const [students, setStudents] = useState(data);

  return (
    <div>
      {/* <StudentList students={students} /> */}

      <StudentContext.Provider value={{students,setStudents}} >
        <StudentList/>
      </StudentContext.Provider>
    </div>
  );
}
export default App;
