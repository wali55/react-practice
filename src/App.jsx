import Click from "./components/Click";
import Gallery from "./components/Gallery";
import { Profile } from "./components/Gallery";
import List from "./components/List";
import MyDate from "./components/MyDate";
import MyProfile from "./components/MyProfile";
import NewList from "./components/NewList";
import PackingList from "./components/PackingList";
import Recipe from "./components/Recipe";
import TeaGathering from "./components/TeaGathering";

const App = () => {
  return (
    <>
      <Gallery />
      <h1 style={{ backgroundColor: "gray", color: "lightgreen" }}>Profile</h1>
      <Profile />
      <MyDate />
      <MyProfile />
      <PackingList />
      <List />
      <NewList />
      <Recipe />
      <TeaGathering />
      <Click />
    </>
  );
};

export default App;
