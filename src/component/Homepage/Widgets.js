import "./Widgets.scss";

import SearchIcon from "@material-ui/icons/Search";
import WidgetFeed from "../WidgetFeed";

const Widgets = () => {
  return (
    <div className={"widgets"}>
      <div className={"widgets_input" + " radius-s"}>
        <SearchIcon className={"widgets_search"} />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className={"widgetcontainer" + " radius-xs"}>
        <h3>Whar's happening</h3>
        <WidgetFeed />
      </div>
    </div>
  );
};
export default Widgets;
