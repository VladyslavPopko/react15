import Header from "./components/Header/Header";
import { Route, Routes } from "react-router";
import "./style/reset.css";
import "./style/main.css";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";

function App() {


  
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/cart" element={<Cart />}></Route>

        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
