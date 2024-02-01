import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(url);

        if (!res.ok) {
          throw new Error("Failed to fetch");
        }

        const resData = await res.json();
        setData(resData);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [url]);

  return [data, isError, isLoading];
};

export default useFetch;
