import { useContext } from 'react';
import { StudentContext } from '../context/StudentContext';
import StudentItem from './StudentItem';

const StudentList = () => {
  //! Context student verisi aldık
  //? consume yapmak
  const {students} =useContext(StudentContext);
  console.log(students);
  return (
    <div>
      {students.map((student) => (
        <StudentItem key={student.id} student={student} />
      ))}
    </div>
  );
};

export default StudentList;
