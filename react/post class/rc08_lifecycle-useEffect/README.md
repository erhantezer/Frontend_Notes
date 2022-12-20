
## <center>🔄 LifeCycleMethods  🔄 </center>

### SUMMARY

✅ Lifecycle metotlari componetnlerin DOM'da varoldugu sure boyunca
uzerinde islem yapmamizi imkan saglayan ozel React metotlaridir.

✅ Ornegin bir component olsuturuldugunda, DOM'a basilsiginda,
guncellendiginde veya DOM'dan kaldirildiginda bir seyler yapmak icin
lifecycle metotlari kullanilabilir.

✅  En bilindik lifecycle metodu render() metodudur

1️⃣ Bir component'in olsuturulmasi (constructor,

2️⃣ Bir component'in DOM'a basilmasi (render)

3️⃣ Bir componentin DOM agacina eklenmesinin sonrasi(componentDidMount)

4️⃣ (Optional)Bir componentin guncellenmesinin sonrasi (componentDidUpdate)

5️⃣ Bir component'in DOM agacindan kaldirilmasi sonrasi(componentWillUnmount)

🔹 [LifeCycle Metotlarına erişmek için tıklayınız](https://reactjs.org/docs/react-component.html) 

<h3>  🚩 Mounting </h3>
These methods are called in the following order when an instance of a component is being created and inserted into the DOM:

componentDidMount() is invoked immediately after a component is mounted (inserted into the tree). Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request.

  - constructor()

  - static getDerivedStateFromProps()

  - render()

  - ❗ componentDidMount()==> render işlevinden sonra bir kez çalışır.(İsim verme)

```js

import React from 'react';


class LifeCycleMethods extends React.Component {
   //! 1-) Bir componentin olsuturulmasinda cagrilir
   constructor(props) {
    console.log("Constructor running");
    super(props);
    this.state = {
      count: 0,
    };
  }
 //! Arrow kullandığımızdan bind kullanmadık
  handleInc = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

//! Built-in funct arrow kullanmaya ihtiyaç duymaz.
//! 3-) Bir component DOM agacina eklendiginde calistirilir.
  //! (İlk render sonrasi).
  //! Her yasam dongusu icin bir kere calisir.
componentDidMount(){
  console.log("Mounted")

}


  render() {
     //! 2-) Her bir render'da cagrilir
    console.log("Rendered")
    return (
      <div className="container text-center mt-4">
        <h1 className="text-danger">LIFECYCLE METHODS</h1>
        <h3>COUNT={this.state.count}</h3>
        <button className="btn btn-info" onClick={this.handleInc}>
          INC
        </button>
      </div>
    );
  }
}
export default LifeCycleMethods;
```

  <h3>  🚩 Updating </h3>

  - static getDerivedStateFromProps()
  - shouldComponentUpdate()
  - render()
  - getSnapshotBeforeUpdate()
  - componentDidUpdate()

  componentDidUpdate() is invoked immediately after updating occurs. ❗ This method is not called for the initial render.
    Use this as an opportunity to operate on the DOM when the component has been updated. This is also a good place to do network requests as long as you compare the current props to previous props (e.g. a network request may not be necessary if the props have not changed).

```
  componentDidUpdate(prevProps) {
  // Typical usage (don't forget to compare props):
  if (this.props.userID !== prevProps.userID) {
    this.fetchData(this.props.userID);
  }
}
```
👆 setState() öğesini componentDidUpdate() içinde hemen çağırabilirsiniz, ancak yukarıdaki örnekte olduğu gibi bir koşula sarılması gerektiğini unutmayın, aksi takdirde sonsuz bir döngüye neden olursunuz.

```js
import React from 'react';


class LifeCycleMethods extends React.Component {
   //! 1-) Bir componentin olsuturulmasinda cagrilir
   constructor(props) {
    console.log("Constructor running");
    super(props);
    this.state = {
      count: 0,
    };
  }
 //! Arrow kullandığımızdan bind kullanmadık
  handleInc = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

//! Built-in funct arrow kullanmaya ihtiyaç duymaz.
//! 3-) Bir component DOM agacina eklendiginde calistirilir.
  //! (İlk render sonrasi).
  //! Her yasam dongusu icin bir kere calisir.
componentDidMount(){
  console.log("Mounted")

}

//! 4-) Bu metot ilk render haric dige tüm render'lardan sonra cagrilir.
  //!  prevState ve prevProps degerlerini parametre olarak alabilir.
componentDidUpdate(){
  console.log("Updated");
}


  render() {
     //! 2-) Her bir render'da cagrilir
     //? Her state değiştiğinde render çağrılır.
    console.log("Rendered")
    return (
      <div className="container text-center mt-4">
        <h1 className="text-danger">LIFECYCLE METHODS</h1>
        <h3>COUNT={this.state.count}</h3>
        <button className="btn btn-info" onClick={this.handleInc}>
          INC
        </button>
      </div>
    );
  }
}
export default LifeCycleMethods;
```

  <h3>  🚩 WillUnMount </h3>

  This method is called when a component is being removed from the DOM:

  ❗ You should not call setState() in componentWillUnmount() because the component will never be re-rendered. Once a component instance is unmounted, it will never be mounted again.

  ```js

  import React from 'react';


class LifeCycleMethods extends React.Component {
   //! 1-) Bir componentin olsuturulmasinda cagrilir
   constructor(props) {
    console.log("Constructor running");
    super(props);
    this.state = {
      count: 0,
    };
  }
 //! Arrow kullandığımızdan bind kullanmadık
  handleInc = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

//! Built-in funct arrow kullanmaya ihtiyaç duymaz.
//! 3-) Bir component DOM agacina eklendiginde calistirilir.
  //! (İlk render sonrasi).
  //! Her yasam dongusu icin bir kere calisir.
componentDidMount(){
  console.log("Mounted")

}

//! 4-) Bu metot ilk render haric dige tüm render'lardan sonra cagrilir.
  //!  prevState ve prevProps degerlerini parametre olarak alabilir.
componentDidUpdate(){
  console.log("Updated");
}

//! 5-) Bir componentin DOM ağacından kaldırıltıktan sonra  çalışır
componentWillUnmount(){
  console.log("UnMount");
}

  render() {
     //! 2-) Her bir render'da cagrilir
     //? Her state değiştiğinde render çağrılır.
    console.log("Rendered")
    return (
      <div className="container text-center mt-4">
        <h1 className="text-danger">LIFECYCLE METHODS</h1>
        <h3>COUNT={this.state.count}</h3>
        <button className="btn btn-info" onClick={this.handleInc}>
          INC
        </button>
      </div>
    );
  }
}
export default LifeCycleMethods;

  ```

##  <center> 🚩useEffect 🚩 </center>

✅  Class componente meydana gelen lifecycle methodları uygulamamızı sağlar.
UseEffect Hook'u fonksiyonel componenler'te yan etkileri (side effect) gerceklestirmek icin kullanilir.

✅  ComponentDidMount,ComponentDidUpdate,ve ComponentWillUnmount
metotlarinin bir birlesimi gibi dusunulebilir.

1️⃣ - ComponentDidMount

```js

useEffect(() => {
//ComponentDidMount code 

 }, []);

//! ComponentDidMount
useEffect(() => {
console.log('Mounted'); //! fetch, asyn-await ,localStorage, setTimeout
     setTimeout(() => {
      alert('Data Fetched');
    }, 3000);
  },[]);

```

2️⃣ - ComponentDidMount + componentDidUpdate

```js
useEffect(() => {
//? componentDidUpdate code 
}, [var1, var2]);

//! ComponentDidMount + componentDidUpdate
//? ComponentDidUpdate tek başına oluşmaz.
useEffect(() => {
  console.log('Mounted + Updated');
  setTimeout(() => {
   alert('Data Fetched');
  }, 1000);
  }, [count]);
  
```

3️⃣ -  ComponentDidMount + componentWillUnmount

```js
useEffect(() => {
 return () =>
  {
  //* componentWillUnmount code */
};
}, []);

seEffect(() => {
    //*ComponenentDidMount
    const timerId = setInterval(fetchData, 1000);
    console.log("Mounted");
    return () => {
      //* componentWillUnMount
      clearInterval(timerId);
      console.log("Unmounted");
    };
  }, []);

```