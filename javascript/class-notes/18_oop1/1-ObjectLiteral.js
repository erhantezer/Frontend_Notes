//* ======================================================
//*                    (OOPS)
//* ======================================================
//* js prototype tabanlı OOP kullanır. diğer OOP dilleri class-based OOP kullanır.

//* Object Literals
const book={
  title:"The Brothers Karamozov",
  author:"Dostoyevski",
  year:1880,
  getSummary:function(){
    return `${this.title} was written by ${this.author} in ${this.year}`
  }
}

const book2 = {
    title: 'the lily of the valley',
    author: 'Honero de balzac',
    year: 1835,
    getSummary: function () {
      return `${this.title} was written by ${this.author} in ${this.year} `;
    },
  };
  
  console.log(book2);
  console.log(book2.getSummary());
  
  //? Object literals yontemi ile fazla sayida yeni objeler olusturmak oldukca zahmetlidir.
  //? Ayrica programcilik yaklasimi acisindan da cok tekrar icerdigi icin uygun degildir (DRY - Dont Repeat Yourself)
  //? Cozum: Object Oriented Programming (ES5 and ES6)