import { Fab, Action } from "react-tiny-fab";
import "react-tiny-fab/dist/styles.css";
import { GiFeather } from "react-icons/gi";
import classes from "./MiniTweet.module.css";

const MiniTweet = () => {
  return (
    <div className={classes.minitweet}>
      <Fab
        icon={<GiFeather />}
        event="false"
        mainButtonStyles={{
          backgroundColor: "#50b7f5",
          color: "white",
        }}
        style={{
          right: 0,
          bottom: 44,
        }}

        // alwaysShowTitle={true}
      >
        {/* <Action text="Email" />
        <Action text="Help">
          <i className="fa fa-help" />
        </Action> */}
      </Fab>
    </div>
  );
};
export default MiniTweet;
