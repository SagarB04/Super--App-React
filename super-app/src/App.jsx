import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Register from "./pages/register";
import SelectCategory from "./pages/select-category";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register/>}/>
        <Route path="/select-category" element={<SelectCategory/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
