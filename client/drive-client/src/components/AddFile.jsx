import { useState } from "react";

function AddFile({ url, setData, data }) {
  const [fileName, setFileName] = useState("");
  const userName = "ziv";

  function handleChange(e) {
    setFileName(e.target.value);
  }
  function addFile() {
    console.log("fn", fileName);
    console.log(userName);
    fetch("http://localhost:3000" + url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        fileName: fileName,
        userName: userName,
      }),
    });
    setData([...data, { filename: fileName, type: "file" }]);
    setFileName("");
  }
  return (
    <>
      <input
        onChange={handleChange}
        placeholder="enter file name"
        type="text"
      />
      <button onClick={addFile}>add</button>
    </>
  );
}
export default AddFile;
