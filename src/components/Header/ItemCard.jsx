const ItemCard = ({ pizzaInfo }) => {
  const { name, ingredients, imageUrl, unitPrice, soldOut } = pizzaInfo;

  return (
    <div className="itemCard">
      <div className="itemCard_content">
        {!soldOut ? (
          <img className="itemCard_image" src={imageUrl} alt="" />
        ) : (
          <img
            className="itemCard_image itemCard_image_soldOut"
            src={imageUrl}
            alt=""
          />
        )}
        <div className="itemCard_text">
          <p className="itemCard_name">{name}</p>
          <p className="itemCard_ingredients">{ingredients.toString()}</p>
          {!soldOut ? (
            <p className="itemCard_price">€{unitPrice}.00</p>
          ) : (
            <p className="itemCard_price itemCard_price__soldOut">SOLD OUT</p>
          )}
        </div>
      </div>
      {!soldOut ? (
        <div className="itemCard_action">
          <button className="itemCard_button" type="button">
            ADD TO CARD
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default ItemCard;
