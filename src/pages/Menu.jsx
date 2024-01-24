import { useContext } from "react";
import ItemCard from "../components/Header/ItemCard";
import { PizzasContext } from "../contexts/PizzasInfoContext";

const Menu = () => {
  const pizzas = useContext(PizzasContext);

  return (
    <div className="menu">
      {pizzas.map((pizza) => (
        <ItemCard pizzaInfo={pizza} key={pizza.id} />
      ))}
    </div>
  );
};

export default Menu;
