import { Avatar } from "@material-ui/core";
import TweetButton from "./TweetButton";
import classes from "./TweetBox.module.css";

const TweetBox = () => {
  return (
    <div className={classes.tweetbox}>
      <form>
        <div className={classes.tweetbox_input}>
          <Avatar src="https://wallpapercave.com/wp/wp8190839.jpg" />
          <input placeholder="What's happening" type="text"></input>
        </div>
        <input
          className={classes.tweetbox_inputurl}
          placeholder="Image URl"
          type="text"
        ></input>
        <TweetButton className={classes.tweetbox_tweet}>TWEET</TweetButton>
      </form>
    </div>
  );
};
export default TweetBox;
