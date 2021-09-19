import Widgets from "./component/Widgets";
import Sidebar from "./component/Sidebar";
import Main from "./component/Main";
import "./App.css";
import NavTab from "./component/NavTab/NavTab";

const App = () => {
  return (
    <>
      <div className="app">
        <Sidebar />
        <Main />
        <Widgets />
      </div>

      <NavTab />
    </>
  );
};

export default App;
