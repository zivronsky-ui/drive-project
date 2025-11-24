import { useEffect } from "react";
import AddFile from "./AddFile";
import Folder from "./Folder";
import File from "./File";
import { useState } from "react";
import { useNavigate } from "react-router";

/**hello */
function User() {
  let navigate = useNavigate();
  const [data, setData] = useState([]);
  let username = JSON.parse(localStorage.getItem("currentUser"));
  if (username === null) {
    navigate(`/login`);
  }
  useEffect(() => {
    console.log("enter");
    fetch(`http://localhost:3000/myDrive/${username}`, { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);
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
      <AddFile url="/myDrive/file/new" data={data} setData={setData} />

      {data.map((file) => {
        return file.type === "file" ? (
          // <Link url="">
          // {" "}
          <File
            filename={file.filename}
            data={data}
            setData={setData}
            username={username}
          />
        ) : (
          // </Link>
          <Folder foldername={file.filename} data={data} setData={setData} />
        );
      })}
    </>
  );
}
export default User;
