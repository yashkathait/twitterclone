import Widgets from "./component/Widgets";
import Sidebar from "./component/Sidebar";
import Main from "./component/Main";
import "./App.css";
import NavTab from "./component/NavTab/NavTab";
import MiniTweet from "./component/MiniTweet/MiniTweet";

const App = () => {
  return (
    <>
      <div className="app">
        <Sidebar />
        <Main />
        <Widgets />
        <MiniTweet />
      </div>

      <NavTab />
    </>
  );
};

export default App;
