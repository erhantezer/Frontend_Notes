
### REDUX
<p>
Reactın ilk zamanlarında redux kullanılması zorunluydu.Ancak Context ile birlikte bu alana bir kayma meydana 
gelmiştir.

Redux'ın avantajları:

- büyük projelerde global state daha hakim olmamızı sağlar.
- State Management
- State Container
- İnspried by Flux and Elm
- Can be used without React
- Created by Dan Abramov

</p>

<span>WHY REDUX</span>
Global saklama alanına store diyebiliriz.Context karşılık gelir
React mimarisini destekler.
Community Support

# Defining

- Context oluşturmak için createContext
- Redux ise store oluşturmak için createStore

# Consume

- useContext---Context
- useSelector--REDUX

# Provider

- Context.Provider
- Provider

<p style="font-size:30px; color:lightgray; font-weight:bold">Installion</p>

#npm

```js
npm install redux react-redux
```

#yarn
```js
yarn add redux react-redux
```

### REDUX PRINCIPLES
Redux Context ile useReducer birleşimi gibi
Global State değiştirmek için dispath ile istek göndermemiz gerekiyor.
Dispath js objesidir.dispath(action)
Reducer methodu gelen istediğe bakarak güncelleme yaparak Store gönderiyor.
Böylelikle state güncellenmiş oluyor.
