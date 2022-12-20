//*===============================================================
//*                   4- ASYNC-AWAIT
//*===============================================================
//? Async-Await ECMAScript 2017 ile Javascript diline eklenmistir.
//? Aslinda Promise yapisinin syntax olarak basitlestirilmis halidir.
//? Bu baglamda sentetik seker benzetmesi yapilabilir.

//* Bir fonskiyonu asyn hale getirmek icin fonksiyon keyword'nun onune
//* asyn keyword'u eklenir.

//* Bir async fonksiyon icerisinde await keyword'u ile yapilan istegin cevabinin
//* beklenmesi saglanir.

//* Aslinda dizilis olarak senkron mantiga benzeyen kod yazarak Asenkron
//* kod yazmayı mumkun kilar.

//* Await, promise-temelli herhangi bir fonksiyonun onune getirilerek getirildigi
//* satirdaki kodun durudurulmasini saglar. Yapilan istek yerine getirilip sonuc
//* degerlerinin dondurulmesine ile kodun calismasi devam eder.

let hata=false;

const getUsers=async ()=>{
    try{
const res=await fetch('https://api.github.com/users')
if(!res.ok){
    hata=true;
    //throw Error(`Something went wrong: ${res.status}`)
}

const data=await res.json()
updateDom(data)
    }
    catch(error){
        console.log(error);
    }
    finally{
        hata=false
    }
};

getUsers();
const updateDom = (data) => {
  const userDiv = document.querySelector('.users');
  if(hata){
    userDiv.innerHTML=`<h1 class="text-danger mt-3">error message</h1>
    <img src="https://www.elegantthemes.com/blog/wp-content/uploads/2019/12/401-error-wordpress-featured-image.jpg" class="img-thumbnail mt-2">
    `;
  }
  else{ data.forEach((user) => {
    const { login, avatar_url, html_url } = user;
    userDiv.innerHTML += `
    <h2 class="text-primary">NAME:${login}</h2>
    <img src=${avatar_url} width="50%" alt="" />;
    <h3>HTML_URL :${html_url}</h3>
  `;
  });}
 
};
