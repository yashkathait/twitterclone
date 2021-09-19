import React from "react";
import classes from "./SidebarOption.module.css";

export const SiderbarOption = ({ active, text, Icon }) => {
  return (
    <div
      className={active ? classes.sidebarOption_active : classes.sidebarOption}
    >
      <Icon className={classes.icon} />
      <h2 className={classes.h2}>{text}</h2>
    </div>
  );
};

export default SiderbarOption;
