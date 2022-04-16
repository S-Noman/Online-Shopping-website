import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.scss";
import { createRoot } from "react-dom/client";
import { CartProvider } from "./contexts/cart.context";
import { Provider } from "react-redux";
import {store} from './redux/store'

//I added the following two lines and imported the above component:
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

//replaced ReactDOM with root render (to get rid of render error because after the react 18 update):

root.render(
  <React.StrictMode>
    <Provider store={store}>
          <CartProvider>
            <App />
          </CartProvider>
    </Provider>
  </React.StrictMode>
);
