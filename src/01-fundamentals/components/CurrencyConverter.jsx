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
    <div className="my-4 flex flex-col justify-around gap-4 border   p-2 md:border-none lg:border-none">
      <div className="flex justify-around">
        <form className="flex flex-wrap justify-between gap-2 overflow-auto md:px-0 lg:px-0 ">
          <input
            type="number"
            onChange={(e) => {
              setAmount(e.target.value);
            }}
            className="rounded border border-emerald-600"
          />
          <div className="flex w-full justify-between md:flex-none">
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
          </div>

          <div className="flex w-full justify-between md:flex-none">
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
          </div>
        </form>
        <div className="self-center">
          <span>{conversion || error}</span>
        </div>
      </div>

      <CodeHighlight codeString={currencyconverter} />
    </div>
  );
}

export default CurrencyConverter;
