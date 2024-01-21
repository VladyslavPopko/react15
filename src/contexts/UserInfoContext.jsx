import { createContext, useState } from "react";

export const UserContext = createContext(null);

const UserInfoContext = ({ children }) => {
  const [name, setName] = useState("");

  const userInfo = {
    value: name,
    onChange: setName,
  };

  return (
    <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
  );
};

export default UserInfoContext;
