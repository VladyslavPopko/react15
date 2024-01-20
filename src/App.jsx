import Header from "./components/Header/Header";
import { Route, Routes } from "react-router";
import "./style/reset.css";
import "./style/main.css";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
