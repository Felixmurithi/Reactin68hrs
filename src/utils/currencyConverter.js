export async function currencyConverter(amount, currencyToSell, currencyToBuy) {
  let conversion;

  if (
    !amount ||
    amount < 0 ||
    !currencyToSell ||
    !currencyToBuy ||
    currencyToBuy === currencyToSell
  ) {
    return;
  }
  const res = await fetch(
    `
          https://api.frankfurter.app/latest?amount=${amount}&from=${currencyToSell}&to=${currencyToBuy}`,
  );

  if (!res.ok) {
    throw new Error("error. try again");
  }
  const data = await res.json();
  conversion = data.rates[currencyToBuy];

  return conversion;
}
