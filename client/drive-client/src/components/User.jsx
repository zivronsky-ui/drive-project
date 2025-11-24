import { useEffect } from "react";
import AddFile from "./AddFile";
import Folder from "./Folder";
import File from "./File";
import { useState } from "react";
/**hello */
function User() {
  const [data, setData] = useState([]);
  let username = "ziv";
  useEffect(() => {
    fetch(`http://localhost:3000/myDrive/${username}`, { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <>
      <AddFile url="/myDrive/file/new" data={data} setData={setData} />

      {data.map((file) => {
        return file.type === "file" ? (
          <File filename={file.filename} />
        ) : (
          <Folder foldername={file.filename} />
        );
      })}
    </>
  );
}
export default User;
