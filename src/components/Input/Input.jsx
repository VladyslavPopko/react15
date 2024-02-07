import { useController } from "react-hook-form";

const Input = (props) => {
  const { field, fieldState } = useController(props);

  return <input className="newOrder_input" type="text" {...field} />;
};

export default Input;
