import Click from "./components/Click";
import Counter from "./components/Counter";
import Gallery from "./components/Gallery";
import { Profile } from "./components/Gallery";
import List from "./components/List";
import MyCounter from "./components/MyCounter";
import MyDate from "./components/MyDate";
import MyProfile from "./components/MyProfile";
import MyToolbar from "./components/MyToolbar";
import NewList from "./components/NewList";
import NewToolbar from "./components/NewToolbar";
import PackingList from "./components/PackingList";
import Propagation from "./components/Propagation";
import Recipe from "./components/Recipe";
import SignUp from "./components/SignUp";
import TeaGathering from "./components/TeaGathering";
import Toolbar from "./components/Toolbar";

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
      <Toolbar />
      <MyToolbar />
      <NewToolbar />
      <Propagation />
      <SignUp />
      <Counter />
      <MyCounter />
    </>
  );
};

export default App;
