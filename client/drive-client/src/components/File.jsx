import DeleteFile from "./DeleteFile";
import RenameFile from "./RenameFile";
function File({ filename, data, setData, username }) {
  return (
    <>
      <div>file: {filename}</div>
      <DeleteFile
        filename={filename}
        data={data}
        setData={setData}
        username={username}
      />
      <RenameFile />
    </>
  );
}
export default File;
