import { useState } from "react";

function AddFile({ url, setData, data, username }) {
  const [fileName, setFileName] = useState("");

  function handleChange(e) {
    setFileName(e.target.value);
  }
  function addFile() {
    console.log("fn", fileName);
    console.log(username);
    fetch("http://localhost:3000" + url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        fileName: fileName,
        userName: username,
      }),
    });
    setData([...data, { filename: fileName, type: "file" }]);
    setFileName("");
  }
  return (
    <>
      <div className="add-file-container">
        <input
          value={fileName}
          onChange={handleChange}
          placeholder="Enter file name"
        />
        <button onClick={addFile}>Add</button>
      </div>

      {/* <input
        onChange={handleChange}
        placeholder="enter file name"
        type="text"
      />
      <button onClick={addFile}>add</button> */}
    </>
  );
}
export default AddFile;
