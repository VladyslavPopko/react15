import { useEffect } from "react";
import ItemCard from "../components/ItemCard.jsx/ItemCard";
import { useDispatch, useSelector } from "react-redux";
import { getMenuItems } from "../redux/slices/pizzaSlice";

const Menu = () => {
  const dispatch = useDispatch();
  const { menuItems, isLoading, isError } = useSelector((state) => state.pizza);
  useEffect(() => {
    dispatch(getMenuItems());
  }, [dispatch]);

  return (
    <div className="menu">
      {isError && <h2>Some error</h2>}
      {isLoading && <h2>Loading...</h2>}
      {!!menuItems && menuItems.map((pizza) => (
        <ItemCard pizzaInfo={pizza} key={pizza.id} />
      ))}
    </div>
  );
};

export default Menu;
