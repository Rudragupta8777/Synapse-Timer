import React from 'react';
import Timer from './Timer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./admin.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path='/' element={<Timer />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
