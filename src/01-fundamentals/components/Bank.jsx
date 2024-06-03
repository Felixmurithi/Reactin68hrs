import { useEffect, useReducer, useState } from "react";
import { currencyConverter } from "../../utils/currencyConverter";
import useGetCurrencies from "../../hooks/useGetCurrencies";

function Bank() {
  const [account, setAccount] = useState({
    name: "",
    currency: " ",
    amount: 0,
    loan: 0,
    status: "closed",
  });
  const [loan, setLoan] = useState(0);
  const [payLoanAmount, setPayLoanAmount] = useState("");
  const [deposit, setDeposit] = useState("");
  const [withdraw, setWithdraw] = useState("");
  const [currencyChange, setCurrencyChange] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const currencies = useGetCurrencies();

  // useEffect(() => {
  //   async function getCurrencies() {
  //     const res = await fetch("https://api.frankfurter.app/currencies");
  //     const data = await res.json();
  //     setCurrencies(Object.entries(data));
  //   }
  //   getCurrencies();
  // }, []);

  function handleAccountOpen(e) {
    e.preventDefault();
    if (account.name && account.amount && account.status && account.currency)
      setAccount((acc) => {
        return { ...acc, status: "open" };
      });
  }

  async function handleChangeCurrency() {
    if (
      account.amount <= 0 ||
      account.loan > 0 ||
      account.currency === currencyChange
    )
      return;

    console.log(account.currency !== currencyChange);
    setDisabled(true);
    const conversion = await currencyConverter(
      account.amount,
      account.currency,
      currencyChange,
    );
    setDisabled(false);

    // call async function from outside in an async block , u only use try catch when u weant to catch exceptions

    // setErrorMessage(error);

    setAccount((acc) => {
      return {
        ...acc,
        amount: conversion,
        currency: currencyChange,
      };
    });
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
        <form className="flex justify-around" onSubmit={handleAccountOpen}>
          <Label id="name" text="name" />
          <Input
            id="name"
            onChange={(e) =>
              setAccount((acc) => {
                return { ...acc, name: e.target.value };
              })
            }
          />
          <Label id="currency" text="currency" />
          <Select
            id="currency"
            onChange={(e) => {
              setAccount((acc) => {
                return { ...acc, currency: e.target.value };
              });
            }}
          >
            <CurrencyOptions currencies={currencies} />
          </Select>
          <Label id="amount" text="amount" />
          <Input
            id="amount"
            type="number"
            onChange={(e) =>
              setAccount((acc) => {
                return { ...acc, amount: Number(e.target.value) };
              })
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
              onChange={(e) => setDeposit(Number(e.target.value))}
              value={deposit}
            />
            <Button
              disabled={disabled}
              text={"deposit"}
              onClick={(e) => {
                setAccount((acc) => {
                  return { ...acc, amount: acc.amount + deposit };
                });
                setDeposit("");
              }}
            ></Button>
          </div>
          <div className="flex justify-center gap-20">
            <Input
              disabled={disabled}
              type="number"
              onChange={(e) => setLoan(Number(e.target.value))}
            />
            <Button
              disabled={disabled}
              text={"get loan"}
              onClick={() => {
                if (account.loan <= 0)
                  setAccount((acc) => {
                    return {
                      ...acc,
                      loan: acc.loan + loan,
                      amount: acc.amount - loan,
                    };
                  });
                setLoan("");
              }}
            ></Button>
          </div>
          <div className="flex justify-center gap-20">
            <Input
              disabled={disabled}
              type="number"
              onChange={(e) => setPayLoanAmount(Number(e.target.value))}
            />
            <Button
              disabled={disabled}
              text={"pay loan"}
              onClick={() => {
                if (account.amount >= payLoanAmount) {
                  setAccount((acc) => {
                    return {
                      ...acc,
                      loan: acc.loan - payLoanAmount,
                      amount: acc.amount - payLoanAmount,
                    };
                  });
                }
                setPayLoanAmount("");
              }}
            ></Button>
          </div>
          <div className="flex justify-center gap-20">
            <Input
              disabled={disabled}
              type="number"
              onChange={(e) => setWithdraw(Number(e.target.value))}
            />
            <Button
              disabled={disabled}
              text={"withdraw"}
              onClick={() => {
                if (account.amount >= withdraw) {
                  setAccount((acc) => {
                    return {
                      ...acc,
                      amount: acc.amount - withdraw,
                    };
                  });
                }
                setWithdraw("");
              }}
            ></Button>
          </div>
          <div className="flex justify-center gap-20">
            <Select
              disabled={disabled}
              id="currency"
              onChange={(e) => setCurrencyChange(e.target.value)}
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

export default Bank;
