import { Avatar } from "@material-ui/core";
import TweetButton from "./TweetButton";
import "./TweetBox.scss";

const TweetBox = () => {
  return (
    <div className={"tweetbox"}>
      <form>
        <div className={"tweetbox_input"}>
          <Avatar src="https://wallpapercave.com/wp/wp8190839.jpg" />
          <input
            className={"fnt-s"}
            placeholder="What's happening"
            type="text"
          ></input>
        </div>
        <input
          className={"tweetbox_inputurl"}
          placeholder="Image URl"
          type="text"
        ></input>
        <TweetButton className={"tweetbox_tweet" + " radius-m"}>
          TWEET
        </TweetButton>
      </form>
    </div>
  );
};
export default TweetBox;
