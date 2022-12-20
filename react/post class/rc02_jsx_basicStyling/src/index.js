
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App'; 
// sonuna js yazılmasına gerek yok react js veya jsx olarak algılar.css,png gibi kavramları uzantısı yazılmalıdır.
// App default olarak export edilmiştir.
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
