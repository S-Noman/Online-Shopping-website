import {BrowserRouter, Route, Routes} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import * as React from 'react';
import Home from './components/routes/Home';
import Authentication from './components/Authentication/Authentication';
import Shop from './components/routes/Shop';
import CheckOut from './components/routes/CheckOut';

const App =()=> {
 return (
  <div>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<NavBar />}>
      <Route index element={<Home />}/>
      <Route path='shop' element={<Shop />}/>
      <Route path='auth' element={<Authentication />}/>
      <Route path='checkout' element={<CheckOut />}/>
    </Route>
    </Routes>    
    </BrowserRouter>
  </div>
  
 )
 
}
export default App;
