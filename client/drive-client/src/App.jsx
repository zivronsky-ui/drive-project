import { useState } from "react";
import User from "./components/User";
import "./App.css";
function App() {
  return (
    <>
      <div className="header">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/d/da/Google_Drive_logo.png"
          alt="MyDrive Logo"
          className="logo"
        />
        <h1>MyDrive</h1>
      </div>
      <User />
    </>
  );
}

export default App;
