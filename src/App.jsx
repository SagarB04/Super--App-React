import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/register";
import SelectCategory from "./pages/select-category";
import Homepage from "./pages/homepage";
import Browse from "./pages/browse";

function App() {
  return (
    <BrowserRouter basename="/super-app">
      <Routes>
        <Route path="/super-app" element={<Register />} />
        <Route path="/select-category" element={<SelectCategory />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/browse" element={<Browse />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
