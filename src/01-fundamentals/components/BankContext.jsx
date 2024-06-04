import { currencyConverter } from "../../utils/currencyConverter";
import useGetCurrencies from "../../hooks/useGetCurrencies";
import { useBank } from "../../context/BankContext";

function BankContext() {
  const {
    account,
    deposit,
    currencyChange,
    disabled,
    errorMessage,

    dispatch,
  } = useBank();

  const currencies = useGetCurrencies();

  function handleAccountOpen(e) {
    e.preventDefault();
    if (account.name && account.amount && account.currency)
      dispatch({ type: "openaccount", payload: "open" });
  }

  async function handleChangeCurrency() {
    if (
      account.amount <= 0 ||
      account.loan > 0 ||
      account.currency === currencyChange
    )
      return;
    console.log(account);

    dispatch({ type: "disablebuttons", payload: true });
    const conversion = await currencyConverter(
      account.amount,
      account.currency,
      currencyChange,
    );
    console.log(account.amount, account.currency, currencyChange);
    dispatch({
      type: "conversion",
      payload: {
        amount: conversion,
        currency: currencyChange,
      },
    });
    dispatch({ type: "disablebuttons", payload: false });

    // call async function from outside in an async block , u only use try catch when u weant to catch exceptions

    // setErrorMessage(error);
  }

  //convert some money to another currency convert account to another currency withdraw all , pay all loans close account
  return (
    <div className="flex flex-col">
      {account.status === "open" && (
        <div className="flex justify-around">
          <div>
            <span className="pr-2 font-bold text-emerald-800">hello</span>
            <span className="text-2xl font-extrabold">{account.name}</span>
          </div>
          <div>
            <span className="pr-5 font-bold text-emerald-800">balance</span>
            <span>
              {account.amount} : {account.currency}
            </span>
            {Boolean(account.loan) && (
              <div>
                <span className="pr-5 font-bold text-red-800">loan</span>
                <span>
                  {account.loan} : {account.currency}
                </span>
              </div>
            )}
          </div>
        </div>
      )}

      {account.status === "closed" && (
        <form
          className="flex flex-wrap justify-between gap-2 overflow-auto border p-2  md:border-none md:px-0 lg:border-none lg:px-0 "
          onSubmit={handleAccountOpen}
        >
          <div className="flex gap-4 ">
            <Label id="name" text="name" />
            <Input
              id="name"
              onChange={(e) =>
                dispatch({ type: "name", payload: e.target.value })
              }
            />
          </div>
          <div className="flex gap-4 ">
            <Label id="currency" text="currency" />
            <Select
              id="currency"
              onChange={(e) =>
                dispatch({ type: "currency", payload: e.target.value })
              }
            >
              <CurrencyOptions currencies={currencies} />
            </Select>
          </div>
          <Label id="amount" text="amount" />
          <Input
            id="amount"
            type="number"
            onChange={(e) =>
              dispatch({ type: "amount", payload: Number(e.target.value) })
            }
          />
          <Button text="open account" type="submit" />
        </form>
      )}
      {account.status === "open" && (
        <div className="flex flex-col gap-4 ">
          <div className="flex justify-center gap-20">
            <Input
              disabled={disabled}
              type="number"
              onChange={(e) =>
                dispatch({
                  type: "depositValue",
                  payload: Number(e.target.value),
                })
              }
              value={deposit}
            />
            <Button
              disabled={disabled}
              text={"deposit"}
              onClick={() => dispatch({ type: "deposit" })}
            ></Button>
          </div>
          <div className="flex justify-center gap-20">
            <Input
              disabled={disabled}
              type="number"
              onChange={(e) =>
                dispatch({
                  type: "loanValue",
                  payload: Number(e.target.value),
                })
              }
            />
            <Button
              disabled={disabled}
              text={"get loan"}
              onClick={() => dispatch({ type: "getloan" })}
            ></Button>
          </div>
          <div className="flex justify-center gap-20">
            <Input
              disabled={disabled}
              type="number"
              onChange={(e) =>
                dispatch({
                  type: "payloanValue",
                  payload: Number(e.target.value),
                })
              }
            />
            <Button
              disabled={disabled}
              text={"pay loan"}
              onClick={() => dispatch({ type: "payloan" })}
            ></Button>
          </div>
          <div className="flex justify-center gap-20">
            <Input
              disabled={disabled}
              type="number"
              onChange={(e) =>
                dispatch({
                  type: "withdrawValue",
                  payload: Number(e.target.value),
                })
              }
            />
            <Button
              disabled={disabled}
              text={"withdraw"}
              onClick={() => dispatch({ type: "withdraw" })}
            ></Button>
          </div>
          <div className="flex flex-wrap justify-center  gap-4 md:flex-nowrap md:gap-20 lg:flex-nowrap lg:gap-20">
            <Select
              disabled={disabled}
              id="currencyValue"
              onChange={(e) =>
                dispatch({ type: "currencyValue", payload: e.target.value })
              }
            >
              <CurrencyOptions currencies={currencies} />
            </Select>

            <Button
              disabled={disabled}
              text={"change currency"}
              onClick={handleChangeCurrency}
            ></Button>
            {errorMessage && <span> {errorMessage}</span>}
          </div>
        </div>
      )}
    </div>
  );
}

function Label({ id, text }) {
  return <label htmlFor={id}>{text}</label>;
}

// value prop to reset the values
function Input({ id, onChange, type = "text", value, disabled }) {
  return (
    <input
      type={type}
      id={id}
      className="w-16 rounded border border-emerald-800 px-2"
      onChange={onChange}
      value={value}
      disabled={disabled}
    />
  );
}

function Button({ onClick, text, type, disabled }) {
  return (
    <button
      disabled={disabled}
      type={type}
      className="self-center rounded-md border border-solid border-stone-600 px-2 hover:border-stone-200"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

// u can only pass down the parennt compote -NOTE at into

// use jsut the prop hidden to display chooose option in select

function Select({ id, children, onChange, disabled }) {
  return (
    <select
      id={id}
      onChange={onChange}
      className="w-min rounded px-2"
      disabled={disabled}
    >
      <option hidden>choose currency</option>
      {children}
    </select>
  );
}

function CurrencyOptions({ currencies }) {
  return (
    <>
      {currencies &&
        currencies.map(([code, text], i) => (
          <Option key={i} value={code} text={text} position={i}></Option>
        ))}
    </>
  );
}
function Option({ value, text }) {
  return <option value={value}>{text}</option>;
}

export default BankContext;
