import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const name = useSelector((state) => state.user.value);

  return (
    <nav className="header">
      <div className="">
        <NavLink className="headerTitle" to="/">
          PIZZA DAY
        </NavLink>
        <NavLink className="headerTitle" to="/cart">
          CART
        </NavLink>
      </div>

      <input
        className="input"
        type="name"
        placeholder="Search for the order #"
      />
      {name == "" ? null : <p>{name}</p>}
    </nav>
  );
};

export default Header;
