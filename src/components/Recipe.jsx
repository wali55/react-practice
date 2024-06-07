const MyRecipe = ({ drinkers }) => {
  return (
    <ol>
      <li>Add {drinkers} cups of water to boil.</li>
      <li>Add {drinkers} teaspoons of tea.</li>
      <li>Add {drinkers * 0.5} spoon of spice.</li>
      <li>
        Add {drinkers} cups of milk and {drinkers} spoons of sugar.
      </li>
    </ol>
  );
};

const Recipe = () => {
  return (
    <div>
      <h2 className="font-bold text-lg my-4">Recipe for couple of persons.</h2>
      <MyRecipe drinkers={2} />
      <h2 className="font-bold text-lg my-4">Recipe for a group of people.</h2>
      <MyRecipe drinkers={4} />
    </div>
  );
};

export default Recipe;
