import { createContext, useEffect, useState } from "react";
import { PIZZA_API } from "../constanses";

export const PizzasContext = createContext(null);

const PizzasInfoContext = ({ children }) => {
  const [pizzas, setpizzas] = useState([]);

  useEffect(() => {
    const getPizzas = async () => {
      try {
        const res = await fetch(
          `${PIZZA_API}/menu`
        );

        if (!res.ok) {
          throw new Error("Failed to fetch");
        }

        const data = await res.json();
        setpizzas(data.data);
      } catch (e) {
        console.error(e.message);
      }
    };

    getPizzas();
  }, []);


  return (
    <PizzasContext.Provider value={pizzas}>{children}</PizzasContext.Provider>
  );
};

export default PizzasInfoContext;
