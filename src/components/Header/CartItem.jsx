import { useDispatch } from "react-redux";
import { decrementQty, deleteFromCart, incrementQty } from "../../redux/slices/cartSlice";

const CartItem = ({ pizzaInfo }) => {
  const { id, name, unitPrice, qty } = pizzaInfo;

  const dispatch = useDispatch();

  const handleDeleteFromCart = () => {
    dispatch(deleteFromCart(pizzaInfo));
  };
  const handleDecrementQty = () => {
    dispatch(decrementQty(id));
  };
  const handleIncrementQty = () => {
    dispatch(incrementQty(id));
  };

  let price = unitPrice * qty;
  return (
    <li className="cart_item">
      <div className="cart_item_text">
        <p>{qty} x</p>
        <p>{name}</p>
      </div>
      <div className="cart_item_action">
        <p>€ {price}.00</p>
        <button onClick={handleDecrementQty} className="cart_button" type="button">
          -
        </button>
        <p>{qty}</p>
        <button onClick={handleIncrementQty} className="cart_button" type="button">
          +
        </button>
        <button onClick={handleDeleteFromCart} className="cart_button" type="button">
          DELETE
        </button>
      </div>
    </li>
  );
};

export default CartItem;
