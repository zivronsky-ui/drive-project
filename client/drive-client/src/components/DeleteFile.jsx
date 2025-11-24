import { useState } from "react";
// import User from "./components/User";
import "../App.css";

function DeleteFile({ filename, data, setData, username }) {
  function deleteFile() {
    fetch(`http://localhost:3000/myDrive/${username}/file/${filename}/delete`, {
      method: "DELETE",
    }).then((response) => {
      if (response.ok) {
        const arr = data.filter((file) => file.filename !== filename);
        setData(arr);
      } else {
        alert("something went wrong");
      }
    });
  }
  return (
    <>
      <button onClick={deleteFile}>delete</button>
    </>
  );
}

export default DeleteFile;
