const Input = (props) => {
  const { value, onChange, onBlur, name, innerRef } = props;

  return (
    <input
      id={name}
      className="newOrder_input"
      type="text"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      name={name}
      ref={innerRef}
    />
  );
};

export default Input;
