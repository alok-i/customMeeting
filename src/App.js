import React, { useContext } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Welcome from "./Welcome.js";
import Login from "./Auth/Login.js";
import Register from "./Auth/Register.js";
import Home from "./homePage.js";
import { SocketProvider } from "./context/socket.js";

function App() {
  return (
    <div>
      <SocketProvider>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </SocketProvider>
    </div>
  );
}

export default App;
