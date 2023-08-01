import logo from './logo.svg';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components'
import { Cocktaildata } from './helpers';
import {About} from './about' 
import {routes} from './routes'
import {Newsletter} from '../newsletter';
function App() {
  return (
    <div >
      <BrowserRouter>
//       <Routes>
//         {
           routes.map(({path, element}) => (
             <Route key={path} path={path} element={element} />
           ))
        }
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/product/:id" element={<Newsletter />} />
        <Route path="*" element={<>Not found</>} /> 
     </Routes>

    </BrowserRouter>
      <Home/>
      <About/>
      <Newsletter/>
    </div>
  );
}

export default App;
