import { useState } from "react";

const FormObject = () => {
  //! Birden fazla object 👇 kullankatansa object yapısı icerisinde bu işlemi yapabiliriz.
  const [FormData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  console.log(FormData); // { "username":"", "email":"" "password":""}

  //! 1️⃣ Burada üç inputtan veri gelecek gelen verileri object eklemek istiyorsak spread operatörü ile extend
  //! edip 2️⃣  ***key:value*** şeklinde ekleme yapmamız gerekiyor.Ancak gelen değişken sabit olmadığı için
  //!  (username,email,password) 3️⃣ gelen verileri  👇 [] ile değişken haline getiyoruz.
  //! Third party kütüphanelerde bu yapı kolaylaştırılabilir.YUP-FORMİK gibi
  
  const handleFormData = (e) => {
    // console.log(e.target.name)
    console.log(e.target.id);
    //İlgili değişkene id yoluyla ulaşarak değeri object eklemiş olduk.
    setFormData({ ...FormData, [e.target.id]: e.target.value });
    // setFormData({...FormData,key:value})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password } = FormData;
    alert(`username : ${username}
  email:${email}
  password: ${password}`);

    setFormData("");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} style={{ margin: "5rem" }}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username :<span className="text-danger">{FormData.username}</span>
          </label>
          <input
            onChange={handleFormData}
            type="text"
            className="form-control"
            id="username"
            // value={FormData.username}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address : {FormData.email}
          </label>
          <input
            onChange={handleFormData}
            type="email"
            className="form-control"
            id="email"
            // value={FormData.email}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            onChange={handleFormData}
            type="password"
            className="form-control"
            id="password"
            // value={FormData.password}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormObject;
