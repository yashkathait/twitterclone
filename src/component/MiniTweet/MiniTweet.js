import { Fab, Action } from "react-tiny-fab";
import "react-tiny-fab/dist/styles.css";
import { GiFeather } from "react-icons/gi";

const MiniTweet = () => {
  return (
    <Fab icon={<GiFeather />} event="click" alwaysShowTitle={true}>
      <Action text="Email" />
      <Action text="Help">
        <i className="fa fa-help" />
      </Action>
    </Fab>
  );
};
export default MiniTweet;
