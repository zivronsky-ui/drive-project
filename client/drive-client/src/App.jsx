import { useState } from "react";
import User from "./components/User";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <h1>hi ziv and efrat</h1>
        <Routes>
          <Route path="/" element={<div>home!</div>} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/myDrive/:username" element={<User />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
