import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserInfoContext";

const Home = () => {
  const { onChange } = useContext(UserContext);

  const [user, setUser] = useState("");

  const handleChangeUser = (event) => {
    setUser(event.target.value);
  };

  const submitForm = () => {
    onChange(user);
    console.log(user);
  };

  return (
    <div className="home">
      <h1 className="homeTitle">
        The best pizza.<br></br>
        <span className="textSelect">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      <p className="homeText">
        <img
          className="homeWelcomeImg"
          src="https://upload.wikimedia.org/wikipedia/commons/7/70/Emoji_u1f44b.svg"
        ></img>{" "}
        Welcome! Please start by telling us your name:
      </p>

      <input
        value={user}
        onChange={handleChangeUser}
        name="name"
        className="input homeInput"
        id="homeInput"
        placeholder="Your full name"
        type="text"
      />
      <br></br>
        <button className="homeSubmit" onClick={submitForm}>
        Login
      </button>
    </div>
  );
};

export default Home;
