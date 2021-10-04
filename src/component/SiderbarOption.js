import React from "react";
import "./SidebarOption.scss";

export const SiderbarOption = ({ active, text, Icon }) => {
  return (
    <div
      className={
        active ? "sidebarOption_active" : "sidebarOption" + " radius-m"
      }
    >
      <Icon className={"icon" + " pdng-s"} />
      <h2 className={"h2" + " pdng-xxs"}>{text}</h2>
    </div>
  );
};

export default SiderbarOption;
