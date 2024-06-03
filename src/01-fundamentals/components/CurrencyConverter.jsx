import { useState } from "react";
import useCurrencyConverter from "../../hooks/useCurrencyConverter";
import CodeHighlight from "../../UI/CodeHighlight";
import { currencyconverter } from "../codestrings/SideEffectsCodeStrings";

function CurrencyConverter() {
  const [amount, setAmount] = useState("");
  const [currency1, setCurrency1] = useState("USD");
  const [currency2, setCurrency2] = useState("EUR");

  const [conversion, error, loading] = useCurrencyConverter(
    amount,
    currency1,
    currency2,
  );

  return (
    <div className="my-4 flex flex-col gap-6">
      <div className="flex justify-around">
        <form className="flex gap-2">
          <input
            type="number"
            onChange={(e) => {
              setAmount(e.target.value);
            }}
            className="rounded border border-emerald-600"
          />
          <label htmlFor="currencytosell">FROM</label>

          <select
            name=""
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

          <label htmlFor="currencytobuy"> TO</label>
          <select
            name=""
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
        </form>
        <div>
          <span>{conversion || error}</span>
        </div>
      </div>

      <CodeHighlight codeString={currencyconverter} />
    </div>
  );
}

export default CurrencyConverter;
