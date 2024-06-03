import { useEffect, useState } from "react";

function useCurrencyConverter(amount, currencyToSell, currencyToBuy) {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [conversion, setConversion] = useState(0);

  useEffect(
    function () {
      setLoading(true);

      async function currencyConverter() {
        try {
          if (
            !amount ||
            amount < 0 ||
            !currencyToSell ||
            !currencyToBuy ||
            currencyToBuy === currencyToSell
          )
            return;
          const res = await fetch(
            `
            https://api.frankfurter.app/latest?amount=${amount}&from=${currencyToSell}&to=${currencyToBuy}`,
          );

          if (!res.ok) {
            setConversion("");
            throw new Error("error. try again");
          }

          const data = await res.json();
          setConversion(data.rates[currencyToBuy]);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      }
      if (amount && currencyToSell && currencyToBuy) currencyConverter();
    },
    [amount, currencyToSell, currencyToBuy],
  );

  return [conversion, error, loading];
}

export default useCurrencyConverter;
