import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

const ItemCard = ({ pizzaInfo }) => {
  const { name, ingredients, imageUrl, unitPrice, soldOut } = pizzaInfo;
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(pizzaInfo));
  };

  let ingredientsUp = "";

  ingredients.forEach((ingredient) => {
    const splitted = ingredient.split("");
    const first = splitted[0].toUpperCase();
    const rest = [...splitted];
    rest.splice(0, 1);
    ingredient = [first, ...rest].join("");
    if (ingredientsUp == "") ingredientsUp = ingredient;
    else ingredientsUp = ingredientsUp + ", " + ingredient;
  });

  ingredientsUp.replace(",", "");

  return (
    <div className="itemCard">
      <div className="itemCard_content">
        {!soldOut ? (
          <img className="itemCard_image" src={imageUrl} alt={name} />
        ) : (
          <img
            className="itemCard_image itemCard_image_soldOut"
            src={imageUrl}
            alt=""
          />
        )}
        <div className="itemCard_text">
          <p className="itemCard_name">{name}</p>
          <p className="itemCard_ingredients">{ingredientsUp}</p>
          {!soldOut ? (
            <p className="itemCard_price">€{unitPrice}.00</p>
          ) : (
            <p className="itemCard_price itemCard_price__soldOut">SOLD OUT</p>
          )}
        </div>
      </div>
      {!soldOut ? (
        <div className="itemCard_action">
          <button
            onClick={handleAddToCart}
            className="itemCard_button"
            type="button"
          >
            ADD TO CARD
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default ItemCard;
