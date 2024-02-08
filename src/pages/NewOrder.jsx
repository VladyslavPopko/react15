import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "../validationSchema";
import Input from "../components/Input/input";
import InputCheckbox from "../components/Input/InputCheckbox";
import { useState } from "react";
import { PIZZA_API } from "../constanses";

const NewOrder = () => {
  const name = useSelector((state) => state.user.value);
  const cartItems = useSelector((state) => state.cart.items);

  let cartPrice = 0;
  cartItems.map(
    (item) => (cartPrice = cartPrice + item.unitPrice * item.unitPrice)
  );

  const [price, setPrice] = useState(cartPrice);

  const handleCheckbox = (e) => {
    if (e.target.checked) setPrice(price + 8);
    else setPrice(price - 8);
  };

  const {
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm({
    defaultValues: {
      name: name,
      number: "",
      address: "",
      checkbox: false,
    },
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (info) => {
    const { address, number, checkbox: priority } = info;
    const position = "";
    const data = {
      address,
      name,
      number,
      priority,
      position,
      cartItems,
    };
    console.log(data);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    fetch(`${PIZZA_API}/order`, requestOptions).then(() =>
      console.log("ADDED")
    );
  };

  return (
    <div className="newOrder">
      <h2 className="newOrder_title">Ready to order? Let`s go!</h2>
      <form className="newOrder_form" onSubmit={handleSubmit(onSubmit)}>
        <div className="newOrder_form_content">
          <div className="newOrder_item">
            <p className="newOrder_name">First Name</p>
            <Input control={control} name="name" />
          </div>
          {errors.name && <p className="erorMessage">{errors.name.message}</p>}
          <div className="newOrder_item">
            <p className="newOrder_name">Phone number</p>
            <Input name="number" control={control} />
          </div>
          {errors.number && (
            <p className="erorMessage">{errors.number.message}</p>
          )}
          <div className="newOrder_item">
            <p className="newOrder_name">Address</p>
            <Input control={control} name="address" />
          </div>
          {errors.address && (
            <p className="erorMessage">{errors.address.message}</p>
          )}
          <div className="newOrder_item newOrder_item__checkbox">
            <p className="newOrder_name"></p>
            <div className="newOrder_item_content">
              <InputCheckbox
                onClick={handleCheckbox}
                control={control}
                name="checkbox"
              />
              <p className="newOrder_checkboxText">
                Want to give your order priority?
              </p>
            </div>
          </div>
        </div>
        <button className="newOrder_button" type="submit">
          ORDER NOW FOR €{price}.00
        </button>
      </form>
    </div>
  );
};

export default NewOrder;
