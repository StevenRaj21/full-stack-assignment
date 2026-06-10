const Button = ({ text, onClick, type = "Button" }) => {
  return (
    <button onClick={onClick} type={type}>
      {text}
    </button>
  );
};

export default Button;
