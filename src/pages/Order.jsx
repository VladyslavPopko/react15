import { useParams } from "react-router-dom";
import { PIZZA_API } from "../constanses";
import useFetch from "../hooks/useFetch";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMenuItems } from "../redux/slices/pizzaSlice";

const Order = () => {
  const params = useParams();
  const [info, setInfo] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [prior, setPrior] = useState("");
  const [inTime, setInTime] = useState("true");
  const { menuItems } = useSelector((state) => state.pizza);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMenuItems());
  }, [dispatch]);

  const [data, isError, isLoading] = useFetch(
    `${PIZZA_API}/order/${params.id}`
  );
  const {
    cart = [],
    customer,
    estimatedDelivery,
    id,
    orderPrice = 0,
    priority,
    priorityPrice = 0,
    status,
  } = info;

  let time = new Date(estimatedDelivery);
  let timeNow = new Date();
  let timer = parseInt((time.getTime() - timeNow.getTime()) / 60);

  if (data.status === "success") {
    if (info === "") {
      setInfo(data.data);
    }
    if (prior === "" && priority !== undefined) {
      setPrior(priority);
    }
    if (timer < 0 && inTime === "true") {
      setInTime(false);
    }
  }
  let total = priorityPrice + orderPrice;

  if (totalPrice === 0 && total !== 0) {
    setTotalPrice(total);
  }
  if (isError) {
    return <h1>Something went wrong</h1>;
  }
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const handlePriority = () => {
    setTotalPrice(totalPrice + 8);
    setPrior(true);
  };

  return (
    <div className="order">
      <div className="orderTitle_content">
        <p className="orderTitle_text">
          Order #{id} status: {status}
        </p>
        <div className="orderTitle_buttons">
          {prior ? (
            <button className="orderTitle_area orderTitle_area__priority">
              PRIORITY
            </button>
          ) : null}

          <button className="orderTitle_area">{status} ORDER</button>
        </div>
      </div>
      <div className="orderTimer_content">
        {inTime ? (
          <p className="orderTimer_text">Only {timer} minutes left 😁</p>
        ) : (
          <p className="orderTimer_text">Allready delievered 😁</p>
        )}
        <p className="orderTimer_time">
          (Estimated delivery: {estimatedDelivery})
        </p>
      </div>
      <hr></hr>
      <div className="orderItems">
        {cart.map((item) => (
          <div className="orderItem_content" key={item.pizzaId}>
            <div className="orderItem_header">
              <p className="orderItem_title">
                {item.quantity} x {item.name}
              </p>
              <p className="orderItem_price">€{item.totalPrice}.00</p>
            </div>
            <p className="orderItem_ingridients" id={item.name}>
              {menuItems.map((menuItem) => {
                if (menuItem.name === item.name) {
                  let ingredients = "";
                  menuItem.ingredients.map((ingredient) => {
                    if (ingredients !== "")
                      ingredients = ingredients + ", " + ingredient;
                    else ingredients = ingredients + ingredient;
                  });
                  ingredients.replace(", ", "");
                  return ingredients;
                }
              })}
            </p>
          </div>
        ))}
      </div>
      <div className="orderTotal_content">
        <p>Price pizza: €{orderPrice}.00</p>
        {prior ? <p>Price priority: €8.00</p> : null}
        <p>To pay on delivery: €{totalPrice}.00</p>
      </div>
      {prior ? null : (
        <div className="orderPriority_content">
          <button onClick={handlePriority} className="newOrder_button">
            PRIORITIZE
          </button>
        </div>
      )}
    </div>
  );
};

export default Order;
