import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/register";
import SelectCategory from "./pages/select-category";
import Homepage from "./pages/homepage";
import Browse from "./pages/browse";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/select-category" element={<SelectCategory />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/browse" element={<Browse />} />
      </Routes>
    </HashRouter>
  )
}

export default App;
