import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import UserInfoContext from "./contexts/UserInfoContext.jsx";
import PizzasInfoContext from "./contexts/PizzasInfoContext.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserInfoContext>
      <PizzasInfoContext>
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>
      </PizzasInfoContext>
    </UserInfoContext>
  </React.StrictMode>
);
