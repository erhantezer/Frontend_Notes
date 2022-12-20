
### 🚩 Router

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
🔹 [React Router Dom official dokümanına ulaşmak için tıklayınız](https://reactrouter.com/en/main) 

React library içinde bir Next.js is a framework (Sistemlerini kullanmak zorundasın)
React-router -> client side rendering
Next.js -> server side rendering
Google router üzerinden belirtilen sayfaları indexleme yapamadığından SEO açısından zayıftır.

### Client Side Rendering

### Server Side Rendering

### Router Components

 - <span style="color:red;font-weight:bolder;font-size:2rem">BrowserRouter</span>

clean  URL'ler kullanarak tarayıcının adres çubuğunda geçerli konumu depolar ve tarayıcının yerleşik geçmiş yığınını kullanarak gezinir.
```js
import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    {/* The rest of your app goes here */}
  </BrowserRouter>,
  root
);
```

### Nested Router