const Avatar = ({ size = 100, person }) => {
  return (
    <div>
      <img src={person.imgSrc} alt={person.name} width={size} />
    </div>
  );
};

export default Avatar;
