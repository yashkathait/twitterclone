import React from "react";
import "./NavTab.scss";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const NavTab = () => {
  return (
    <>
      <div className={"navtab"}>
        <div className={"headings"}>
          <div>
            <HomeIcon />
          </div>
          <div>
            <SearchIcon />
          </div>
          <div>
            <NotificationsNoneIcon />
          </div>
          <div>
            <MailOutlineIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavTab;
