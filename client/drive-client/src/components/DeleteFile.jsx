import { useState } from "react";
// import User from "./components/User";
import "./App.css";

function DeleteFile(url) {
  function deleteFile() {
    fetch("http://localhost:3000" + url, { method: "DELETE" });
  }
  return (
    <>
      <button onClick={deleteFile}>delete</button>
    </>
  );
}

export default DeleteFile;
