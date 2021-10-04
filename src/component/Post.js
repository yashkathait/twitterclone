import data from "../data/tweet.json";
import "./Post.scss";
import { GoVerified } from "react-icons/go";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import { Avatar } from "@material-ui/core";

const Post = () => {
  return (
    <div className={"postContainer"}>
      {data.map((tweet) => {
        return (
          <div className={"post"}>
            <div className={"post_avatar" + " pdng-m"}>
              <Avatar className={"size"} src={tweet.userProfile} />
            </div>
            <div className={"post_body"}>
              <div className={"post_header"}>
                <div className={"post_headertext"}>
                  <h3>{tweet.name}</h3>
                  <GoVerified className={"post_badge"} />
                  <span className={"post_headerspecial" + " fnt-xs"}>
                    {tweet.username}
                  </span>
                </div>
                <div className={"post_headerdescription" + " fnt-xs"}>
                  <p>{tweet.title}</p>
                </div>
              </div>
              <img className={"radius-s"} src={tweet.imageURl} alt="" />
              <div className={"post_footer"}>
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
