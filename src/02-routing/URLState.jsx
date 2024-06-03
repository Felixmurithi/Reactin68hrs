import { useSearchParams } from "react-router-dom";
import useGetCurrencies from "../hooks/useGetCurrencies";
import useCurrencyConverter from "../hooks/useCurrencyConverter";

function URLState() {
  const currencies = useGetCurrencies();

  const [searchParams, setSearchParams] = useSearchParams();
  const currencytosell = searchParams.get("currencytosell");
  const currencytobuy = searchParams.get("currencytobuy");
  const amount = searchParams.get("amount");

  const conversion = useCurrencyConverter(
    Number(amount),
    currencytosell,
    currencytobuy,
  );

  return (
    <div className="flex justify-between bg-stone-200 p-2">
      <form action="" className="flex gap-3">
        <input
          className="w-16 rounded-sm border border-stone-700 px-2"
          type="number"
          value={amount || 0}
          onChange={(e) => {
            searchParams.set("amount", e.target.value);
            setSearchParams(searchParams);
          }}
        />

        <label htmlFor="currencytosell" className="font-bold">
          FROM
        </label>
        <select
          className="w-min rounded-sm border border-stone-700 px-2"
          name=""
          id="currencytosell"
          onChange={(e) => {
            searchParams.set("currencytosell", e.target.value);
            setSearchParams(searchParams);
          }}
        >
          <CurrencyOptions currencies={currencies} />
        </select>

        <label htmlFor="currencytobuy" className="font-bold">
          TO
        </label>
        <select
          className="w-min rounded-sm border border-stone-700 px-2"
          name=""
          id="currencytobuy"
          onChange={(e) => {
            searchParams.set("currencytobuy", e.target.value);
            setSearchParams(searchParams);
          }}
        >
          <CurrencyOptions currencies={currencies} />
        </select>
      </form>
      {conversion ? <span>{conversion}</span> : ""}
    </div>
  );
}

function CurrencyOptions({ currencies }) {
  return (
    <>
      <option hidden>choose currency</option>
      {currencies &&
        currencies.map(([code, text], i) => (
          <option key={i} value={code} className="w-24">
            {text}
          </option>
        ))}
    </>
  );
}

export default URLState;
