import "./WidgetFeed.scss";
import data from "../data/widget.json";

const WidgetFeed = () => {
  return (
    <>
      {data.map((widget) => {
        return (
          <div className={"WidgetFeed"}>
            <div className={"head"}>
              <div className={"headtext"}>
                <p>{widget.type}</p>
                <h4>{widget.title}</h4>
              </div>
              <img className={"radius-xxs"} src={widget.imageURL} alt="" />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default WidgetFeed;
