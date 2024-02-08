import Header from "./components/Header/Header";
import { Route, Routes } from "react-router";
import "./style/reset.css";
import "./style/main.css";
import PageNotFound from "./pages/PageNotFound";
import { Suspense, lazy } from "react";

const HomeLazy = lazy(() => import("./pages/Home"));
const MenuLazy = lazy(() => import("./pages/Menu"));
const CartLazy = lazy(() => import("./pages/Cart"));
const NewOrderLazy = lazy(() => import("./pages/NewOrder"));
const OrderLazy = lazy(() => import("./pages/Order"));

function App() {
  return (
    <>
      <Header />

      <Suspense fallback={<h1>Loading ...</h1>}>
        <Routes>
          <Route path="/" element={<HomeLazy />}></Route>
          <Route path="/menu" element={<MenuLazy />}></Route>
          <Route path="/cart" element={<CartLazy />}></Route>
          <Route path="/order/new" element={<NewOrderLazy />}></Route>
          <Route path="/order/:id" element={<OrderLazy />}></Route>

          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
