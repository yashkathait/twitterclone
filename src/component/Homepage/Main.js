import "./Main.scss";
import TweetBox from "../TweetBox";
import Post from "../Post";

const Main = () => {
  return (
    <>
      <div className={"main"}>
        <div className={"header"}>
          <h2 className={"fnt-s"}>Home</h2>
        </div>
        <TweetBox />
        <Post />
      </div>
    </>
  );
};

export default Main;
