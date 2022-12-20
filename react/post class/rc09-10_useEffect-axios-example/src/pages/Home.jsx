import AddTutorial from '../components/AddTutorial';
import TutorialList from '../components/TutorialList';
import axios from 'axios';
import { useState, useEffect } from 'react';
import {toastSuccessNotify} from "../helper/ToastNotify"
import {toastWarnNotify} from "../helper/ToastNotify"

const Home = () => {
  const [tutorials, setTutorials] = useState();

  const url = 'https://tutorials-api-cw.herokuapp.com/api/tutorials';

  //! verilerimizi çağırıyoruz.
  //! GET(READ)
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

  //getTutorials() //? state güncellenmediğinden render işlemi tetiklenmez
  //getTutorials //! state güncelliğinden render işleminin sürekli olmasını engellemek için👇

  useEffect(() => {
    //! ComponentDidMount --> Birkez çalışacaktır.
    getTutorials()
  }, [])
  
console.log(tutorials) // ilk undefined gelir çünkü ilk render işlemi tetiklenir.
//? Burada gelen tutorials artık TutorialList aktaracağız.

//* 💥 AddTutorials.jsx gönderilen veri backend gidecek ancak TutorList.jsx güncellenmeyecektir.

//! 💥 Bunu engellemk için addtutorials fonksiyonu Home.js yazıp props olarak AddTutorial.jsx  gönderiririz.Bu da şunu sağlıyor addtutorials func sayesinde tutorial state güncelleyebiliriz. Ancak AAddTutorials.jsx yazarsak yukarı veri taşıma işlemi yapamayız.

//! POST (CREATE)
const addTutorial = async(tutorial)=>{
  try {
   const res = await axios.post(url,tutorial) 
   if(res.status===200){
    getTutorials()
    toastSuccessNotify("Tutorial added")
   }

  } catch (error) {
    console.log("error") 
  }
  
  }
  
  //! DELETE()

  const deleteTutorial =async(id)=>{

    try {
      await axios.delete(`${url}/${id}`)
      
    } catch (error) {
      console.log(error);
    }
    getTutorials()
    toastWarnNotify("Tutorial deleted")
  }


  //! UPDATE (PUT AND PATCH)
  const editTutorial = async(id,title,desc)=>{
    const filtered =tutorials
    .filter((tutor)=>tutor.id===id)
    .map(()=>({title:title,description:desc}))
    
    console.log(filtered)

    try {
      await axios.put(`${url}/${id}`,filtered[0])
      
    } catch (error) {
      
    }
    getTutorials()
   
  }


  return (
    <div>
      <AddTutorial addTutorial = {addTutorial}/>
      <TutorialList 
      tutorials={tutorials} 
      deleteTutorial ={deleteTutorial}
      editTutorial ={editTutorial}
      />

      {/* <TutorialList {...tutorials} /> */}
    </div>
  );
};

export default Home;
