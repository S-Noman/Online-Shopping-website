import {BrowserRouter, Route, Routes} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import * as React from 'react';
import Home from './components/routes/Home';
import SignIn from './components/sign-in/SignIn';

const Shop =()=>{
  return(
    <div>
      <h2>This is the shop</h2>
    </div>
  )
}

const App =()=> {
 return (
  <div>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<NavBar />}>
      <Route index element={<Home />}/>
      <Route path='shop' element={<Shop />}/>
      <Route path='sign-In' element={<SignIn />}/>
    </Route>
    </Routes>    
    </BrowserRouter>
  </div>
  
 )
 
}
export default App;
