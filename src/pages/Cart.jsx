import CartItem from "../components/Header/CartItem";
import { useContext } from "react";
import { UserContext } from "../contexts/UserInfoContext";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetCart } from "../redux/slices/cartSlice";

const Cart = () => {
  const { value } = useContext(UserContext);
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const backToMenu = useNavigate();

  const handleBackToMenu = () => {
    backToMenu("/menu");
  };
  const handleResetCart = () => {
    dispatch(resetCart(cartItems));
  };
  const submitOrder = () => {
    console.log("Your Order:");
    cartItems.map((item) => console.log(`${item.name} x ${item.qty}`));
  };
  return (
    <div className="cart">
      <p className="cart_back" onClick={handleBackToMenu}>
        &larr; Back to menu
      </p>
      <p className="cart_title">Your cart, {value}</p>
      <ul className="cart_list">
        {cartItems.map((item) => (
          <CartItem pizzaInfo={item} key={item.id} />
        ))}
      </ul>
      <button onClick={submitOrder} className="cart_button" type="button">
        ORDER PIZZAS
      </button>
      <button
        onClick={handleResetCart}
        className="cart_button cart_button_white"
        type="button"
      >
        CLEAR CART
      </button>
    </div>
  );
};

export default Cart;
