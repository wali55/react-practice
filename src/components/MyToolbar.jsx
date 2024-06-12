const Button = ({ onClick, children }) => {
  return <button className="bg-lime-200 py-2 px-3 rounded mr-2 my-2" onClick={onClick}>{children}</button>;
};

const PlayButton = ({ movieName }) => {
  const handlePlayClick = () => {
    alert(`playing ${movieName}`);
  };
  return <Button onClick={handlePlayClick}>play {movieName}</Button>;
};

const UploadButton = () => {
  const handleUploadClick = () => {
    alert("uploading");
  };
  return <Button onClick={handleUploadClick}>Upload Image</Button>;
};

const MyToolbar = () => {
  return (
    <div>
      <UploadButton />
      <PlayButton movieName="My Name is Khan" />
    </div>
  );
};

export default MyToolbar;
