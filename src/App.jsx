import Gallery from "./components/Gallery";
import { Profile } from "./components/Gallery";
import MyDate from "./components/MyDate";
import MyProfile from "./components/MyProfile";
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
    </>
  );
};

export default App;
