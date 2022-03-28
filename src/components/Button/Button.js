import "./Button.css";

const Button = (props) => {
  return (
    <button className="button" onClick={props.callback}>
      {props.label}
    </button>
  );
};

export default Button;
