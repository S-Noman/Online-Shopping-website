import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { UserProvider } from "./contexts/user.context";
import './index.scss';
import {createRoot} from 'react-dom/client';

//I added the following two lines and imported the above component:
const rootElement = document.getElementById('root');
const root = createRoot(rootElement); 

//replaced ReactDOM with root render (to git rid of render error because of react 18):

root.render(
  <React.StrictMode>
    <UserProvider>
    <App />
    </UserProvider>
  </React.StrictMode>,
);