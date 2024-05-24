import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from 'react-redux'
import { Store } from './redux/Store'
import {Toaster} from "react-hot-toast"
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <Provider store={Store}>
    <App />
    <Toaster/>
  </Provider>
  </BrowserRouter>

);


