import { people } from "../data/data";
import { getImageUrl } from "../utils/utils";

const NewList = () => {
  const chemist = people.filter((item) => item.profession === "chemist");
  const listItems = chemist.map((item) => (
    <li key={item.id}>
      <img src={getImageUrl(item)} alt={item.name} />
      <p>
        <b>{item.name}</b> {item.profession} {item.accomplishment}
      </p>
    </li>
  ));
  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  );
};

export default NewList;
