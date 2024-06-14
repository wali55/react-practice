const NewToolbar = () => {
  return (
    <Toolbar
      onPlayMovie={() => alert("movie playing")}
      onUploadImage={() => alert("Image uploading")}
    />
  );
};

const Toolbar = ({ onPlayMovie, onUploadImage }) => {
  return (
    <>
      <Button onClick={onPlayMovie}>Play Movie</Button>
      <Button onClick={onUploadImage}>Upload Image</Button>
    </>
  );
};

const Button = ({ onClick, children }) => {
  return <button className="mr-2 py-2 px-3 bg-lime-400" onClick={onClick}>{children}</button>;
};

export default NewToolbar;
