import data from "../data/tweet.json";
import classes from "./Post.module.css";
import { GoVerified } from "react-icons/go";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import { Avatar } from "@material-ui/core";

const Post = () => {
  return (
    <div className={classes.postContainer}>
      {data.map((tweet) => {
        return (
          <div className={classes.post}>
            <div className={classes.post_avatar}>
              <Avatar className={classes.size} src={tweet.userProfile} />
            </div>
            <div className={classes.post_body}>
              <div className={classes.post_header}>
                <div className={classes.post_headertext}>
                  <h3>{tweet.name}</h3>
                  <GoVerified className={classes.post_badge} />
                  <span className={classes.post_headerspecial}>
                    {tweet.username}
                  </span>
                </div>
                <div className={classes.post_headerdescription}>
                  <p>{tweet.title}</p>
                </div>
              </div>
              <img src={tweet.imageURl} alt="" />
              <div className={classes.post_footer}>
                <ChatBubbleOutlineIcon fontSize="small" />
                <RepeatIcon fontSize="small" />
                <PublishIcon fontSize="small" />
                <FavoriteBorderIcon fontSize="small" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Post;
