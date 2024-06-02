const Profile = () => {
  const myImg = "https://i.imgur.com/MK3eW3As.jpg";
  return <img src={myImg} alt="Katherine Johnson" />;
};

const Gallery = () => {
  const person = {
    name: "Mohammad Waliullah",
    theme: {
        color: 'lightgreen',
        fontSize: '30px'
    }
  };
  return (
    <section>
      <h1 style={person.theme}>Scientist Name {person.name}</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
};

export { Profile };
export default Gallery;

