import { GiFeather } from "react-icons/gi";
const MiniTweetButton = (props) => {
  return (
    <button
      className={props.className}
      type={props.type || "sumbit"}
      onClick={props.onClick}
    >
      <GiFeather fontSize={24} />
    </button>
  );
};
export default MiniTweetButton;
