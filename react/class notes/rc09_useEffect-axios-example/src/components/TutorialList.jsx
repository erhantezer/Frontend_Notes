import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import EditTutorilas from "./EditTutorilas";
import { useState } from "react";

const TutorialList = ({ tutorials, deleteTutorial, editTutorial }) => {
  const [edited, setEdited] = useState("");
  //! boş olarak atarsan id undefined olur
  //? Test data
  // let tutorials = [
  //   {
  //     id: 1,
  //     title: 'ReactJS',
  //     description: 'React is a JS-library for UI Design',
  //   },
  //   {
  //     id: 2,
  //     title: 'HTML',
  //     description: 'HTML is a markup language',
  //   },
  // ];

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
                    size={20}
                    className="me-3 text-warning cursor-pointer "
                    onClick={() => setEdited(item)}
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
      <EditTutorilas editTutorial={editTutorial} edited={edited} />
    </div>
  );
};

export default TutorialList;
//* editte tutorlist title desc bilgileri gerekli olduğundan state
//*(edited)tanımlayarak editte gönderdik
