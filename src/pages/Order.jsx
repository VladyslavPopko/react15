import { useParams } from "react-router-dom";
import { PIZZA_API } from "../constanses";
import useFetch from "../hooks/useFetch";

const Order = () => {
  const params = useParams();

  const [{ data }, isError, isLoading] = useFetch(
    `${PIZZA_API}/order/${params.id}`
  );
  console.log(data);
  const {
    cart = [],
    // customer,
    // estimateDelivery,
    // id,
    // orderPrice,
    // priority,
    // priorityPrice,
    // status,
  } = data;
  console.log(cart);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="order">
      <div className="orderTitle_content">
        <p className="orderTitle_text">Order #{params.id} status: preparing</p>
        <div className="orderTitle_buttons">
          {/* {priority ? (  */}
          <button className="orderTitle_area orderTitle_area__priority">
            PRIORITY
          </button>
          {/* ) : null}  */}

          <button className="orderTitle_area">PREPARING ORDER</button>
        </div>
      </div>
      <div className="orderTimer_content">
        <p className="orderTimer_text">Only 9 minutes left 😁</p>
        <p className="orderTimer_time">
          (Estimated delivery: Jan, 20, 04:20 PM)
        </p>
      </div>
      <hr></hr>
      <div className="orderItems">
        <div className="orderItem_content">
          <div className="orderItem_header">
            <p className="orderItem_title">1 x Margherita</p>
            <p className="orderItem_price">€12.00</p>
          </div>
          <p className="orderItem_ingridients">Tomato, Mozzarela, Basil</p>
        </div>
      </div>
      <div className="orderTotal_content">
        <p>Price pizza: €42.00</p>
        <p>Price priority: €8.00</p>
        <p>To pay on delivery: €50.00</p>
      </div>
      <div className="orderPriority_content">
        <button className="newOrder_button">PRIORITIZE</button>
      </div>
    </div>
  );
};

export default Order;
