export const initialStateReducer = `
const initialState= {
    Accountstatus: "closedf"
    deposit: 0,
    ...
}

function reducer (){}`;

export const usereducer = `
const [{state, state1}, dispatch]=useReducer (reducer, initialState)
`;

export const dispatchInstructions = `
<button> deposit </button>
dispatch({type: "deposit", payload: 20})
`;
export const reducerActions = `
function reducer (state, action){

    switch (action.type) {
        case "deposit":
          return {
            ...state,
            deposit: state.deposit + action.payload,
          };
}`;

export const context = `
const BankContext = createContext(); //  create  context

// create the provider
function BankProvider({ children }) {
const [{accountStatus,deposit}, dispatch,]=useReducer(reducer,initialState);
  
    const value =  {accountStatus, deposit, dispatch};

 return <BankContext.Provider value={value}>{children}</BankContext.Provider>;
  }

 // return the context 
  function useBank() {
    const context = useContext(BankContext);
    if (context === undefined)
      throw new Error("BankContext was used outside BankProvider");
    return context;
  }

// export the context and the provider
  export { useBank, BankProvider };`;

export const usecontext = `
    <BankProvider>
        <BankContext />
    </BankProvider>

function Bank () {
const  {deposit, accountStatus, dispatch }= useBank() 
}
`;
