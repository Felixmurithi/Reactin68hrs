import { useState } from "react";
import { currencyConverter } from "../../utils/currencyConverter";

function CurrencyConverterII() {
  const [amount, setAmount] = useState("");
  const [currency1, setCurrency1] = useState("USD");
  const [currency2, setCurrency2] = useState("EUR");
  const [conversion, setConversion] = useState(0);
  const [loading, setLoading] = useState(false);

  async function handleConvert(e) {
    e.preventDefault();
    setLoading(true);
    const result = await currencyConverter(amount, currency1, currency2);
    setLoading(false);

    if (result) setConversion(result);
  }

  return (
    <div className="flex justify-around  gap-4 border  p-2 md:border-none lg:border-none ">
      <form className="flex flex-wrap justify-between gap-2 overflow-auto    md:px-0 lg:px-0 ">
        <input
          placeholder="0"
          type="number"
          onChange={(e) => {
            setAmount(e.target.value);
          }}
          className="w-28 overflow-hidden rounded border-2 border-emerald-800 pl-2"
        />

        <div className="flex w-full justify-between md:flex-none">
          <label htmlFor="currencytosell">FROM</label>

          <select
            className="rounded-sm border-2 border-yellow-900 px-1 font-bold"
            id="currencytosell"
            onChange={(e) => {
              setCurrency1(e.target.value);
            }}
            value={currency1}
            disabled={loading}
          >
            <option value="USD">USD</option>
            <option value="EUR">EURO</option>
            <option value="JPY">YEN</option>
            <option value="ZAR">RAND</option>
          </select>
        </div>
        <div className="flex w-full justify-between">
          <label htmlFor="currencytobuy"> TO</label>
          <select
            className="rounded-sm border-2 border-yellow-900 px-1 font-bold"
            id="currencytobuy"
            value={currency2}
            onChange={(e) => {
              setCurrency2(e.target.value);
            }}
            disabled={loading}
          >
            <option value="EUR">EURO</option>
            <option value="USD">USD</option>
            <option value="JPY">YEN</option>
            <option value="ZAR">RAND</option>
          </select>
        </div>
        <button
          className="rounded border-2 border-yellow-900  px-1 font-bold"
          disabled={loading}
          type="submit"
          onClick={handleConvert}
        >
          convert
        </button>
      </form>
      <div className="self-center">
        <span>{conversion}</span>
      </div>
    </div>
  );
}

export default CurrencyConverterII;
