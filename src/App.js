import React, { useContext } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Welcome from "./Welcome.js";
import Login from "./Auth/Login.js";
import Register from "./Auth/Register.js";
import Home from "./homePage.js";

function App() {
  return (
    <div>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
