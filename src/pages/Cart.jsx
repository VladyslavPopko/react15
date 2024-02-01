import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetCart } from "../redux/slices/cartSlice";
import CartItem from "../components/CartItem/CartItem";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const value = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  const nextTo = useNavigate();

  const handleBackToMenu = () => {
    nextTo("/menu");
  };
  const handleOrder = () => {
    nextTo("/order/new");
  };
  const handleResetCart = () => {
    dispatch(resetCart(cartItems));
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
      <button onClick={handleOrder} className="cart_button" type="button">
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
