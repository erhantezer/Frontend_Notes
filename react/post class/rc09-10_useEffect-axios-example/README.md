# API Base URLs

## https://tutorials-api-cw.herokuapp.com/api/tutorials

## https://axios-example-cw.herokuapp.com/api/tutorials

## https://cw-axios-example.herokuapp.com/api/tutorials

###  🚩 API ENDPOINTS

- GET `api/tutorials` get all Tutorials
- GET `api/tutorials/:id` get Tutorial by id
- POST `api/tutorials` add new Tutorial
- PUT `api/tutorials/:id` update Tutorial by id
- DELETE `api/tutorials/:id` remove Tutorial by id
- DELETE `api/tutorials` remove all Tutorials
- GET `api/tutorials/published` find all published Tutorials
- GET `api/tutorials?title=[kw]` find all Tutorials which title contains 'kw'

# Deployed Frontend

## https://axios-example.netlify.app/

<p align=center >
<img src ="https://user-images.githubusercontent.com/99876715/196916894-8d5c9a2a-fc12-4b70-ab0a-a10a35f2ebcb.gif"/>
</p>

### 🚩 Home.js 👇

propslar yukarıdan aşağıya doğru bir akış seyreder.
Aşağıdan yukarıya veri akışını global statement (context veya redux)
yoluyla yapabiliriz.Ancak reactın yapısını bozmaktadır.
burada Home.js içerisinde tutorial adında bir state tanımladık bu apı den 
gelen verileri datayı saklayacak ve bunu TutorialList.js props olarak gönderecektir.

```js
import AddTutorial from '../components/AddTutorial';
import TutorialList from '../components/TutorialList';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Home = () => {
 //? tutorials
  const [tutorials, setTutorials] = useState();👇
  const url = 'https://tutorials-api-cw.herokuapp.com/api/tutorials';

  1️⃣ propslar yukarıdan aşağıya doğru bir akış seyreder.
  2️⃣ Aşağıdan yukarıya veri akışını global statement (context veya redux) yoluyla yapabiliriz.Ancak reactın yapısını bozmaktadır.
  3️⃣ Burada Home.js içerisinde tutorial adında bir state tanımladık bu apı den gelen verileri datayı saklayacak ve bunu TutorialList.js props olarak gönderecektir.
  4️⃣ <TutorialList tutorials ={tutorials/>

  5️⃣ AddTutorial inputları backend gönderiyoruz.Ancak refresh yaptığımızda bunlar Home gelecek bu yöntem çok effective olmaycaktır.
  6️⃣ Burada AddTutorial gönderilen verileri Home nasıl aktarırız.Children-parent veri akışı yoktur.Home.js içerisinde verileri tutan tutorials güncellenmeli
  7️⃣💣💥❎➡️Bunu fonksiyonu props olarak göndererek gerçekleştirdik.

//***************************************************************************************//
  //! GET 
  / ❎ axios 👇 
  const getTutorials =async()=>{
    try {
      const response = await axios.get(url) // get işlemi sadece url alır.
      // const {data} = await axios.get(url) // gelen datayı destructiring yaparız
      //console.log(response);
      setTutorials(response.data)
      
    } catch (error) {
      console.log(error);
      
    }
  }

  // ❎ fetch
// const getTutorials = async () => {
  //   const response = await fetch(url)
  //   const data = await response.json()
  //   setTutorials(data)
  // }

//! ⛔ Sürekli render işlemini engellemek için

useEffect(() => {
    //! ComponentDidMount --> Birkez çalışacaktır.
    getTutorials()
  }, [])

//***************************************************************************************//

💥 AddTutorials.jsx gönderilen veri backend gidecek ancak TutorList.jsx güncellenmeyecektir.

💥 Bunu engellemek için addtutorials fonksiyonu Home.js yazıp props olarak AddTutorial.jsx  gönderiririz.Bu da şunu sağlıyor addtutorials func sayesinde tutorial state güncelleyebiliriz. Ancak AddTutorials.jsx yazarsak yukarı veri taşıma işlemi yapamayız.AddTutorials.jsx submit işleminde addTutorial func çalıştırıyoruz.👇 

# AddTutorial.jsx
const handleSubmit = (e) => {
    e.preventDefault();
    addTutorial({title:title,description:desc})
    // title ve description backend keyleri title,desc ise bizim statelerimiz
    setTitle('');
    setDesc('');
  };

❎ Gelen veriyi backend gönderiyoruz ve getTutorials() güncel veriyi geçiyoruz.Böylece TutorList.jsx güncellenmiş
oluyor.

//***************************************************************************************//
//! POST (CREATE)
const addTutorial = async(tutorial)=>{  //! tutorial = {title:title,description:desc}
  try {
    await axios.post(url,tutorial) 
  } catch (error) {
    console.log("error") 
  }
  getTutorials() // refresh yaptığında gelmesini engelledik.
}

//! addTutorial func props olarak AddTutorial gönderiyoruz.


//***************************************************************************************//
//! DELETE
const deleteTutorial =async(id)=>{

    try {
      await axios.delete(`${url}/${id}`)
      
    } catch (error) {
      console.log(error);
    }
    getTutorials()
    toastWarnNotify("Tutorial deleted")
  }

❎  TutorList.jsx veriyi silmek için url+id olarak istek gönderiyoruz.
# TutorialList.jsx içerisinde;onClick eventi ile deleteTutorial func tetikliyoruz ve ilgili verinin id
sini gönderiyoruz.👇 
 <AiFillDelete
   size={22}
 className="text-danger cursor-pointer"
onClick={()=>deleteTutorial(id)}
/>


  return (
    <>
       <AddTutorial addTutorial = {addTutorial}/>
      <TutorialList tutorials={tutorials} />
      <TutorialList tutorials={tutorials}  deleteTutorial ={deleteTutorial}/>
      />
    </>
  );
};

export default Home;

```

### 🚩AddTutorials.js

```js

import { useState } from 'react';

const AddTutorial = ({addTutorial}) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTutorial({title:title,description:desc})
    // title ve description backend keyleri title,desc ise bizim statelerimiz
    setTitle('');
    setDesc('');
  };

✅ Form submit iki önemli artısı vardır.
1️⃣ required check eder.
2️⃣ Enter tuşu otomatik olarak çalışır.

  return (
    <div className="container text-center mt-4">
      <h1 className="display-6 text-danger">Add Your Tutorial</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter your title"
            value={title}
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
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            required
          />
        </div>
        <button className="btn btn-danger mb-4">Submit</button>
      </form>
    </div>
  );
};

export default AddTutorial;

```

### 🚩 TutorialList.js

```js
import { FaEdit } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';


const TutorialList = () => {
    const [edited,setEdited] =useState("") //! EditTutorial.js için oluşturduk.
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
                <td className="text-center text-nowrap">
                  <FaEdit
                  data-bs-toggle="modal"
                  data-bs-target="#edit-modal"
                  //! Modal özelliğini aktif hale getirdik.

                    size={20}
                    className="me-2 text-warning cursor-pointer"
                     onClick={()=>setEdited(item)}
                     //! EditTutorial içerisine id,title,descriptin dinamik olarak
                     //!göndermek için tanımlama yaptık

                  />
                  <AiFillDelete
                    size={22}
                    className="text-danger cursor-pointer"
                    onClick={()=>deleteTutorial(id)}
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



```

### 🚩EditTutorials.js

```js

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





```