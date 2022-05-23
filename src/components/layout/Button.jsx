import "./Button.css";

const Button = (props) => {
  return (
    <button className="button" onClick={props.onView}>
      {props.children}
    </button>
  );
};

export default Button;
