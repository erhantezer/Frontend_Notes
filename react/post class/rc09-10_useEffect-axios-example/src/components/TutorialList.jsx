import { FaEdit } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';
import EditTutorial from './EditTutorial';
import { useState } from 'react';

const TutorialList = ({tutorials,deleteTutorial,editTutorial}) => {
  const [edited,setEdited] =useState("")
  //!boş olarak atarsan id undefined olur
  // const tutorials = [
  //   {
  //     id:1,
  //     title:"HTML",
  //     description:"HTML is a markup language"
  //   },
  //   {
  //     id:2,
  //     title:"CSS",
  //     description:"HTML is a markup language"
  //   }
  // ]

 
  return (
    <div className="container mt-4">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col" className="text-center">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
          {tutorials?.map((item) => {
            const { id, title, description } = item;
            return (
              <tr key={id}>
                <th>{id}</th>
                <td>{title}</td>
                <td>{description}</td>
                <td className="text-center">
                  <FaEdit
                    data-bs-toggle="modal"
                    data-bs-target="#edit-modal"
                    // role={button}
                    // onClick={()=> editTutorial(id,"CSS","html")}
                    onClick={()=>setEdited(item)}
                    size={20}
                    className="me-3 text-warning cursor-pointer "
                   
                  />
                  <AiFillDelete
                    size={22}
                    className="text-danger"
                    onClick={() => deleteTutorial(id)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
     <EditTutorial editTutorial ={editTutorial} edited ={edited}/>
    </div>
  );
};

export default TutorialList;
