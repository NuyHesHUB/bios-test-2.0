import React from 'react';
/* import ReactDOM from 'react-dom/client'; */
import { createRoot } from "react-dom/client";
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './App';
import reducer from './store/reducer/reducer'
import reportWebVitals from "./reportWebVitals";

const store = createStore(reducer);
const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App/>
  </Provider>
  /* document.getElementById('root') */
)
reportWebVitals();


/* 추가 */

/* const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals(); */


