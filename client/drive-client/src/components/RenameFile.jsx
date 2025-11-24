import { useState } from "react";
// import User from "./components/User";
import "../App.css";

function RenameFile({ filename, data, setData, username }) {
  const [showInput, setShowInput] = useState(false);
  const [value, setValue] = useState("");
  function renameFile() {
    console.log(filename);
    console.log(value);
    fetch(`http://localhost:3000/myDrive/file/rename`, {
      method: "PUT",
      body: JSON.stringify({
        fileName: filename,
        newFileName: value,
        username: username,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (response.ok) {
        fetch(`http://localhost:3000/myDrive/${username}`, { method: "GET" })
          .then((response) => response.json())
          .then((data) => {
            setData(data);
          });
        setShowInput(!showInput);
      } else {
        alert("something went wrong");
      }
    });
  }
  function handleChange(e) {
    setValue(e.target.value);
  }
  return (
    <>
      <button onClick={() => setShowInput(!showInput)}>rename</button>
      {showInput && (
        <>
          {" "}
          <input onChange={handleChange} value={value} />
          <button onClick={renameFile}>✅</button>
        </>
      )}
    </>
  );
}

export default RenameFile;
