import { useState, useEffect } from "react";

const EditTutorial = ({ editTutorial, edited }) => {
  console.log(edited);
  const { id, title: newTitle, description } = edited;

  console.log(edited.id);

  const [title, setTitle] = useState(newTitle);
  const [desc, setDesc] = useState(description);

  //? https://reactjs.org/docs/hooks-reference.html#usestate
  //! State degiskeninin degeri, 1.render ile initialState
  //! parametresinin ilk degerini alir. Dolayisiyle bu durumda
  //! prop'tan gelen ilk deger state'e aktarilir.
  //! Sonradan degisen props degerleri useState'e aktarilmaz.
  //! Eger props'tan gelen degerleri her degisimde useState'e
  //! aktarmak istersek useEffect hook'unu componentDidUpdate
  //! gibi kullanabiriz. 

  useEffect(() => {
    setTitle(newTitle);
    setDesc(description);
  }, [newTitle, description]);

  const handleSave = (e) => {
    e.preventDefault();
    editTutorial(id, title, desc);
    setTitle("");
    setDesc("");
  };

  //! Gelen id de hata olmamak için Tutorlist içindeli edited State "" hale getirdik.
  //! Bootstrap modal kullanmak için js linkini public içerisindeki index.html dosyasına import ettik.
  //! EditTutorial modal olarak oluşturduk id olarak "edit-modal" ismiyle tanımladık ve
  //! TutorList edit iconuna " data-bs-toggle="modal" data-bs-target="#edit-modal" ile bağladık
  //! Save butonuna data-bs-dismiss ile close özelliği de tanımladık.
  //! TutoList bulunan verileri initial olarak statelere atadık ve useEffect WillUpdate özelliğini aktif ettik
  //! Destructuring aynı isimleri değiştirdik.
  //! Home.js içerisinde tanımlanan EditTutorial içerisine gücellenen verileri gönderdik.

  return (
    <div className="modal" tabIndex="-1" id="edit-modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Enter your title"
                value={title || ""}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="desc" className="form-label">
                Description
              </label>
              <input
                type="text"
                className="form-control"
                id="desc"
                placeholder="Enter your Description"
                value={desc || ""}
                onChange={(e) => setDesc(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSave}
              data-bs-dismiss="modal"
              
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTutorial;

