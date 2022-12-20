
## ✏ REACT INITIAL SETUP ✏

#npx 👇
```
💻 Go to terminal
npx create-react-app my-app
```
#npm  👇
```
💻 Go to terminal
npm init react-app my-app
```
#yarn 👇
```
💻 Go to terminal
yarn create react-app my-app
```
🔹 [On this page](https://create-react-app.dev/docs/getting-started) you can create "react install" for your projects.

## 🚩 Githubtan react dosyası clone yaptığımızda;👇

```
npm install
or 
# yarn kurulu değilse ise;
 npm install --global yarn
yarn     >>>best pratice react tarafından geliştirilmiştir.
```

komutlarıyla node modules install edilir.Git bash kullanmak önerilir.
##  🚩 FORMS


```python

      <form onSubmit={handleSubmit} style={{margin:"5rem"}}  ref={FormResetRef}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username :<span className="text-danger">{username}</span>
          </label>
          <input
           
            onChange={handleUsername}
            type="text"
            className="form-control"
            id="username"
            // value={username}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address : {email}
          </label>
          <input
           
            onChange={(e)=>setEmail(e.target.value)}
            type="email"
            className="form-control"
            id="email"
            // value={email}
          />
        </div>

          </form>
// Form içindeki inputlardan girilen verileri state object içine yakalıyor.
Bu işlemi onChange eventi ile gerçekletiriyoruz.Form verilerini ise onSubmit event ile gönderiyoruz.

```

### What are the differences between Controlled and Uncontrolled Components in React JS?

What are the differences between Controlled and Uncontrolled Components in React JS?
In a controlled component, form data is handled by a React component. Whereas in uncontrolled components, form data is handled by the DOM itself.
Usage of Component State is a must for controlled components. Use of state is completely optional for uncontrolled components, but one must use Refs in it.
With controlled components, we can validate as the input is being changed but the same is not possible with uncontrolled components.

React JS'de Kontrollü ve Kontrolsüz Bileşenler arasındaki farklar nelerdir?
Kontrollü bir bileşende, form verileri bir React bileşeni tarafından işlenir. Kontrolsüz bileşenlerde ise form verileri DOM'un kendisi tarafından işlenir.
Bileşen Durumunun kullanılması, kontrollü bileşenler için bir zorunluluktur. Durum kullanımı, kontrol edilmeyen bileşenler için tamamen isteğe bağlıdır, ancak içinde Ref'lerin kullanılması gerekir.
Kontrollü bileşenlerle, giriş değiştirilirken doğrulama yapabiliriz, ancak kontrolsüz bileşenlerde aynısı mümkün değildir.

Birden fazla state mevcut olabilir bu durumda stateleri bir object içinde saklayabiliriz.


```

//! Birden fazla object 👇 kullankatansa object yapısı icerisinde bu işlemi yapabiliriz.
  const [FormData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });


  /! 1️⃣ Burada üç inputtan veri gelecek gelen verileri object eklemek istiyorsak spread operatörü ile extend
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

   const handleFormData = (e) => {
    // console.log(e.target.name)
    console.log(e.target.id);
    //İlgili değişkene id yoluyla ulaşarak değeri object eklemiş olduk.
    setFormData({ ...FormData, [e.target.id]: e.target.value });
    // setFormData({...FormData,key:value})
  };


return (
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

        </form>

        )
```

##  🚩 KEYBOARD CLIP BOARD EVENTS

##  🚩 MOUSEEVENTS