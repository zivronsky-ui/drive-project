import DeleteFile from "./DeleteFile";
import RenameFile from "./RenameFile";

function File({ filename, data, setData, username }) {
  return (
    <>
      <div className="file-container">
        <div>{filename}</div>
        <div>
          <DeleteFile
            filename={filename}
            data={data}
            setData={setData}
            username={username}
          />
          <RenameFile
            data={data}
            setData={setData}
            filename={filename}
            username={username}
          />
        </div>
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
