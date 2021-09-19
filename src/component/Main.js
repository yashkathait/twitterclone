import classes from "./Main.module.css";
import TweetBox from "./TweetBox";
import Post from "./Post";

const Main = () => {
  return (
    <>
      <div className={classes.main}>
        <div className={classes.header}>
          <h2>Home</h2>
        </div>
        <TweetBox />
        <Post />
      </div>
    </>
  );
};

export default Main;
