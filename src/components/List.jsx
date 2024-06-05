const person = [
  "Creola Katherine Johnson: mathematician",
  "Mario José Molina-Pasquel Henríquez: chemist",
  "Mohammad Abdus Salam: physicist",
  "Percy Lavon Julian: chemist",
  "Subrahmanyan Chandrasekhar: astrophysicist",
];

const List = () => {
  const listItem = person.map((item, index) => <li key={index}>{item}</li>);
  return (
    <div>
      <h1>My List</h1>
      <ul>{listItem}</ul>
    </div>
  );
};

export default List;
