import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header">
      <NavLink className="headerTitle" to="/">
        PIZZA DAY
      </NavLink>
      <input
        className="input"
        type="name"
        placeholder="Search for the order #"
      />
    </nav>
  );
};

export default Header;
