const Cup = ({ guest }) => {
  return <p>Cup no</p>;
};

const TeaGathering = () => {
  const arr = [];
  for (let i = 1; i <= 12; i++) {
    arr.push(<Cup key={i} guest={i} />);
  }
  return [<Cup />, <Cup />];
};

export default TeaGathering;
