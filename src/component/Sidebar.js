import React from "react";
import classes from "./Sidebar.module.css";
import { GrTwitter } from "react-icons/gr";

import SiderbarOption from "./SiderbarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import TweetButton from "./TweetButton";
import MiniTweetButton from "./MiniTweet/MiniTweetButton";

const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <GrTwitter className={classes.twittericon} />

      <SiderbarOption active text="Home" Icon={HomeIcon} />
      <SiderbarOption text="Explore" Icon={SearchIcon} />
      <SiderbarOption text="Notification" Icon={NotificationsNoneIcon} />
      <SiderbarOption text="Messages" Icon={MailOutlineIcon} />
      <SiderbarOption text="Bookmark" Icon={BookmarkBorderIcon} />
      <SiderbarOption text="Lists" Icon={ListAltIcon} />
      <SiderbarOption text="Profile" Icon={PermIdentityIcon} />
      <SiderbarOption text="More" Icon={MoreHorizIcon} />
      <MiniTweetButton className={classes.minibutton} />

      <TweetButton>TWEET</TweetButton>
    </div>
  );
};
export default Sidebar;
