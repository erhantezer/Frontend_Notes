## React Context

**Context** provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree. 
##### [Bağlam, ağacın her seviyesinden açıkça bir destek geçirmek zorunda kalmadan bileşenler arasında bu gibi değerleri paylaşmanın bir yolunu sağlar.]

<img src="./src/images/Ekran Resmi 2022-07-16 10.23.06.png"/>

## prop-drilling
In this case, we need to pass state from the top level of the application through all the intermediary components to the one which needs the data at the bottom, even though the intermediary levels don't need it. This tedious and time-consuming process is known as prop drilling.
(Bu durumda, ara seviyelerin buna ihtiyacı olmasa bile, uygulamanın en üst seviyesinden tüm aracı bileşenlerden en alttaki verilere ihtiyaç duyana geçmemiz gerekir. Bu sıkıcı ve zaman alıcı süreç, pervane delme olarak bilinir.)

<img src="./src/images/Ekran Resmi 2022-07-16 10.19.36.png"/>

## Create Context

```
//index.js
import React from "react";
import ReactDOM from "react-dom";
import ThemeContext from "./themeContext";

import App from "./App";

ReactDOM.render(
  <ThemeContext.Provider value={"Day"}>
    <App />
  </ThemeContext.Provider>,
  document.getElementById("root")
);
```

## Dezavantajları

*Global state olduğundan re-render işlemine sebeb olur
*Component yapısını bozuyor.

## Consume(use) =>tüketmek
consume için useContext hooku kullanılır.

import {useState} from "react";
import StudentContext from "file.path"
const {state} =useContext(StudentContext)

## Context Api steps:
1- createContext
2-Provider genellikle App uygun olur
3-ilgili componentslerde consume yaparız veri global state olur
4-consume için useContext hooku kullanılır.
