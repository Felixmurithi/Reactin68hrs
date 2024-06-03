import { createContext, useContext, useMemo, useReducer } from "react";

const BankContext = createContext();

const initialState = {
  currencies: "",
  account: {
    name: "",
    currency: "",
    amount: 0,
    loan: 0,
    status: "closed",
  },
  loan: 0,
  payLoanAmount: 0,
  deposit: "",
  withdraw: "",
  currencyChange: "",
  disabled: false,
  errorMessage: "",
};

// reducer similar to teh reduce method of arrays, meaning tat the state is reduced at each case
function reducer(state, action) {
  switch (action.type) {
    case "openaccount":
      return {
        ...state,
        account: { ...state.account, status: action.payload },
      };
    case "name":
      return {
        ...state,
        account: { ...state.account, name: action.payload },
      };
    case "amount":
      return {
        ...state,
        account: { ...state.account, amount: action.payload },
      };
    case "currency":
      return {
        ...state,
        account: { ...state.account, currency: action.payload },
      };
    case "currencyValue":
      if (action.payload !== state.account.currency)
        return {
          ...state,
          currencyChange: action.payload,
        };

      return state;
    case "depositValue":
      return {
        ...state,
        deposit: action.payload,
      };
    case "deposit":
      if (state.deposit)
        return {
          ...state,
          account: {
            ...state.account,
            amount: state.account.amount + state.deposit,
          },
          deposit: "",
        };
      return state;
    case "loanValue":
      return {
        ...state,
        loan: action.payload,
      };
    case "getloan":
      if (state.loan && state.loan <= state.account.amount)
        return {
          ...state,
          account: {
            ...state.account,
            loan: state.account.loan + state.loan,
            amount: state.account.amount - state.loan,
          },
          loan: "",
        };
      return state;
    case "payloanValue":
      return {
        ...state,
        payLoanAmount: action.payload,
      };
    case "payloan":
      if (state.payLoanAmount && state.payLoanAmount <= state.account.loan)
        return {
          ...state,
          account: {
            ...state.account,
            loan: state.account.loan - state.payLoanAmount,
          },
          payLoanAmount: "",
        };
      return state;
    case "withdrawValue":
      return {
        ...state,
        withdraw: action.payload,
      };
    case "withdraw":
      if (state.withdraw && state.withdraw <= state.account.amount)
        return {
          ...state,
          account: {
            ...state.account,
            amount: state.account.amount - state.withdraw,
          },
          withdraw: "",
        };
      return state;

    case "disablebuttons":
      return { ...state, disabled: action.payload };
    case "conversion":
      return {
        ...state,
        account: {
          ...state.account,
          currency: action.payload.currency,
          amount: action.payload.amount,
        },
      };
    default:
      throw new Error("action unknown");
  }
}

function BankProvider({ children }) {
  const [
    {
      account,
      loan,
      payLoanAmount,
      deposit,
      withdraw,
      currencyChange,
      disabled,
      errorMessage,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  const value = useMemo(() => {
    return {
      account,
      loan,
      payLoanAmount,
      deposit,
      withdraw,
      currencyChange,
      disabled,
      errorMessage,
      dispatch,
    };
  });

  return <BankContext.Provider value={value}>{children}</BankContext.Provider>;
}

function useBank() {
  const context = useContext(BankContext);
  if (context === undefined)
    throw new Error("BankContext was used outside BankProvider");

  return context;
}

export { useBank, BankProvider };
