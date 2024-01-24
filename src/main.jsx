import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import UserInfoContext from "./contexts/UserInfoContext.jsx";
import PizzasInfoContext from "./contexts/PizzasInfoContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserInfoContext>
      <PizzasInfoContext>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PizzasInfoContext>
    </UserInfoContext>
  </React.StrictMode>
);
