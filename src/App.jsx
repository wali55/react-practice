import Gallery from "./components/Gallery";
import { Profile } from "./components/Gallery";
import List from "./components/List";
import MyDate from "./components/MyDate";
import MyProfile from "./components/MyProfile";
import NewList from "./components/NewList";
import PackingList from "./components/PackingList";

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
    </>
  );
};

export default App;
