import { useController } from "react-hook-form";

const Input = (props) => {
  const { field, fieldState } = useController(props);
  const { onClick } = props;

  return (
    <input
      className="newOrder_checkbox"
      type="checkbox"
      {...field}
      onClick={onClick}
    />
  );
};

export default Input;
