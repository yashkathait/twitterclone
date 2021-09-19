import classes from "./WidgetFeed.module.css";
import data from "../data/widget.json";

const WidgetFeed = () => {
  return (
    <>
      {data.map((widget) => {
        return (
          <div className={classes.WidgetFeed}>
            <div className={classes.head}>
              <div className={classes.headtext}>
                <p>{widget.type}</p>
                <h4>{widget.title}</h4>
              </div>
              <img src={widget.imageURL} alt="" />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default WidgetFeed;
