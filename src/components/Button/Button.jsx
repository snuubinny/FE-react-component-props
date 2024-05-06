import "./Button.css";

const Button = (props) => {
  return <button className="btn"
  style={{backgroundColor:props.color}}
      onClick={props.onClick}
    >{props.label}
  </button>;
};

export default Button;
