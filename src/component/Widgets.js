import classes from "./Widgets.module.css";

import SearchIcon from "@material-ui/icons/Search";
import WidgetFeed from "./WidgetFeed";

const Widgets = () => {
  return (
    <div className={classes.widgets}>
      <div className={classes.widgets_input}>
        <SearchIcon className={classes.widgets_search} />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className={classes.widgetcontainer}>
        <h3>Whar's happening</h3>
        <WidgetFeed />
      </div>
    </div>
  );
};
export default Widgets;
