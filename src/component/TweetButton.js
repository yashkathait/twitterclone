import "./TweetButton.scss";

const TweetButton = (props) => {
  return (
    <button
      className={props.className || "tweet"}
      type={props.type || "submit"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default TweetButton;
