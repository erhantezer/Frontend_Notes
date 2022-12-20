
## JSX ve REACTTA STILLENDİRME YÖNTEMLERİ

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
# yarn kurulu ise; npm install --global yarn
yarn---best pratice
```
komutlarıyla node modules install edilir.Git bash kullanmak önerilir.



## 🚩 Component Mimarisi
- Compoenetin çağrılması self closing tag ile yapılır.
- Single Pages Application
- Herbir componentin export edilmesi ve kullanılacak yerde 
- import edilerek erişim sağlanması
- Component isimleri büyük harfle başlamalıdır



index.js👇

🔹  index componenti ReactDOM.createRoot() metodu ile

🔹  public klasorunde yer alan index.html icersindeki id'si root

🔹 olan elemana erisir.

const root = ReactDOM.createRoot(document.getElementById('root')); //* create ile object haline gelir
root.render(<App />);


## 🚩 JSX 

JSX ile ilgili react dokümanı👇

🔹 [On this page](https://tr.reactjs.org/docs/introducing-jsx.html) you can 


🔹  React,JSX kullanmaktadir.

🔹  JSX'de, HTMl elementleri dogrudan JS icerisinde kullanilabilir

🔹 Componentler, HTML,CSS ve JS kodlarindan meydana gelmiş bir kod parcacigidir.

🔹  Bir componentin return () kismi ise JSX kodlari icerir.

🔹  JSX'in kendine gore bazi kurallari vardir. Ornegin bir
🔹  component eger birden fazla html elementi dondurmesi gerekirse bunlari tek bir container elemani ile sarmayalarak
🔹  dondurmelidir.container icin div, article, header, <> v.b herhangi bir element kullanilabilir.


//? App componentinin tanimlanmasi
```
function App() {
  return (
    //? return içinde JSX kullanılır.COMPONENTLER RETURN İŞLEVİ VARDIR
     //? stillendirme yapilmayacaksa container icin <> kullanilabilir
   
    <>
     <h1></h1>
    <>
    
  );
}

export default App;
```



✔ Harici bir dosya icersinde olusturulan bir component
✔  export default ile proje icerisinde herhangi bir yerde
✔  kullanima kullanima acimiş olur. Kullanmak icin hedef
✔  dosyada import .... from "./..." ile import yapmak yeterlidir.
✔  Componentler fonksiyonlarda oldugu gibi 3 farkli yontemle yazilabilir.
✔  JSX icerisinde degiskenler {} icerisinde gosterilir.

 ### 🔴 JSX'de stillendirme farklli sekillerde yapilabilir. 

- 1-) Harici CSS sayfalari ile (index.css, app.css v.b) 👇

```
import "./Content.css"
```

- 2-) Inline stillendirme ile (style = {{color:"red"}}) 👇

```
 <h2 style={{color:"red"}} >React JS</h2>

```

- 3- )Local veya global degiskenler ile. 👇

```
//* Lokal olarak stillendirme
const imgStyle={
    display:"block",
    width:"300px",
    margin:"1rem auto"
}

 <!-- <img style={imgStyle} src="https://cdn.pixabay.com/photo/2017/02/15/13/40/tulips-2068692__340.jpg" alt="" /> -->

```

### ⭐ NOTLAR:
- Stillendirme icin property-value(object) yapisi kullanilir.

- property isimlerinde camelCase kullanimalidir.
- class isimleri icin className kullanilir.
- Material UI, Styled Component, Sass, Bootstrap v.b harici kutuphaneler kullanilabilir.
