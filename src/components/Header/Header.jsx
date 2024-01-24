import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserInfoContext";

const Header = () => {
  const { value } = useContext(UserContext);

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
      {value == "" ? null : <p>{value}</p>}
    </nav>
  );
};

export default Header;
