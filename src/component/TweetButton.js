import classes from "./TweetButton.module.css";

const TweetButton = (props) => {
  return (
    <button
      className={props.className || classes.tweet}
      type={props.type || "submit"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default TweetButton;
