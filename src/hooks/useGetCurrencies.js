import { useEffect, useState } from "react";

function useGetCurrencies() {
  const [currencies, setCurrencies] = useState("");

  useEffect(() => {
    async function getCurrencies() {
      const res = await fetch("https://api.frankfurter.app/currencies");
      const data = await res.json();
      setCurrencies(Object.entries(data));
    }
    getCurrencies();
  }, []);

  return currencies;
}

export default useGetCurrencies;
