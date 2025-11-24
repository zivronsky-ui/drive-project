import { useState } from "react";
// import User from "./components/User";
import "./App.css";

function RenameFile(url) {
  function renameFile() {
    fetch("http://localhost:3000" + url, { method: "PUT" });
  }
  return (
    <>
      <button onClick={renameFile}>rename</button>
    </>
  );
}

export default RenameFile;
