import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [tutorials, setTutorials] = useState();

  const url = "https://cw-axios-example.herokuapp.com/api/tutorials";

  // const getTutorials = async () => {
  //   const response = await fetch(url)
  //   const data = await response.json()
  //   setTutorials(data)
  // }
  //? Bu async -await hali axios anlayamayanlar buna da bakabilir
  const getTutorials = async () => {
    try {
      const { data } = await axios.get(url);
      setTutorials(data);
    } catch (err) {
      console.log(err);
    }
  };

  //! Sadece Component mount oldugunda istek yapar

  useEffect(() => {
    getTutorials();
  }, []); //! renderdan sonra birkez mount çalışır

  // * POST(CREATE)
  const addTutorial = async (tutorials) => {
    try {
      await axios.post(url, tutorials);
    } catch (err) {
      console.log(err);
    }
    getTutorials();
  };
  // console.log(tutorials);

  const deleteTutorial = async (id) => {
    try {
      await axios.delete(`${url}/${id}`);
    } catch (err) {
      console.log(err);
    }
    getTutorials();
  };

  const editTutorial = async (id, title, desc) => {
    const filtered = tutorials
      .filter((tutor) => tutor.id === id)
      .map(() => ({ title: title, description: desc }));

    console.log(filtered);
    try {
      await axios.put(`${url}/${id}`, filtered[0]);
    } catch (err) {
      console.log(err);
    }
    getTutorials();
  };

  return (
    <>
      <AddTutorial addTutorial={addTutorial} />
      <TutorialList
        tutorials={tutorials}
        deleteTutorial={deleteTutorial}
        editTutorial={editTutorial}
      />
    </>
  );
};

export default Home;

//* ======================SUMMARY=====================
//TODO (1) - İlk olarak home pages API den verimizi çekip parent vasıtasıyla chidlere göndermemiz gerekecektir.APİ den gelecek tutorlist TutorList componentine gönderilecektir.

//? (2) - TutorList comp home gelen datayı props olarak alacak ve kullanacaktır

//! (3) - AddTutor veri ekleyip submit ettiğimizde bunun TutorList görünmesi için sürekli refresh yapmak gerekecektir.

//* (4) - Bunun önlemek global state kullanılabilir global state yardımıyla veri Add componentinden home pages gidecek state güncellenecek haliyle props güncelliğinden TutorList te güncellencektir.

//TODO (5) Global state kullanmıyorsak ortak olanları parent ten child göndeririz.Ancak props dışında parentte bir function da childlara gönderilir.Böylece child veri güncellediğinden veya gönderildiğinden fonksiyon yardımıyla parentte güncellenmiş olacaktır.
