import { useState } from "react";
import DeleteFile from "./DeleteFile";
import RenameFile from "./RenameFile";

function File({ filename, data, setData, username }) {
  const [content, setContent] = useState("");
  async function showText() {
    // const fetchResult =
    await fetch(`http://localhost:3000/myDrive/${username}/${filename}/read`, {
      method: "GET",
    }).then(async (res, err) => {
      if (err) {
        console.log("err: ", err);
      } else {
        const text = await res.text();
        setContent(text);
      }
    });

    // if (!fetchResult.ok) {
    //   console.log("UH OH");
    //   return;
    // }
    // console.log("fetchResult: ", fetchResult);
    // const res = await fetchResult.text();
    // console.log(res);
  }
  return (
    <>
      <div className="file-container">
        <button onClick={showText}>{filename}</button>
        <div>
          <DeleteFile
            filename={filename}
            data={data}
            setData={setData}
            username={username}
          />
          <RenameFile data={data} setData={setData} filename={filename} />
        </div>
        <div>{content}</div>
      </div>

      {/* <div>file: {filename}</div>
      <DeleteFile
        filename={filename}
        data={data}
        setData={setData}
        username={username}
      />
      <RenameFile data={data} setData={setData} filename={filename} /> */}
    </>
  );
}
export default File;
