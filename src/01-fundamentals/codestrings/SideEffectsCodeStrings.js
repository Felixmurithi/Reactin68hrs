export const sideEffect = `
document.addEventListener("keydown", callbackFunction);`;

export const eventhandler = `
<button onClick={handleConvert}> deposit </button>

 async function handleConvert(e) {
  e.preventDefault();
  setLoading(true);
  const result = await currencyConverter(amount, currency1, currency2);
  setLoading(false);

  if (result) setConversion(result);
}
 }`;

export const useeffect = `
useEffect(
    function setup() {
  
    return function cleanup () {};
  },
   [optionalDependencyArray]);`;

export const currencyconverter = `
useEffect(
  function setup() {
  async function currencyConverter() {
    try {
      if (!amount || amount < 0 || !currencyToSell || !currencyToBuy)
        return;
      const res = await fetch(
       \`https://api.frankfurter.app/latest?amount=\${amount}&from=\${currencyToSell}&to=\${currencyToBuy}\`,
      );
      ...
  },
  [amount, currencyToSell, currencyToBuy], //reactive values
);
}`;
export const focuselement = `
useEffect(function setup() {
  function callbackFunction(e) {
    if (focusEl.current && e?.code.toLowerCase() === "enter".toLowerCase()) {
      focusEl.current.focus();
    }
  }

  document.addEventListener("keydown", callbackFunction);
  return function cleanup() {
    document.removeEventListener("keydown", callbackFunction);
  };
}, [] //empty
);`;

export const timer = `
useEffect(
  function () {
    const id = setInterval(function () {
      setTime(formatTime(new Date()));
    }, 1000);

    return function cleanup() {
      clearInterval(id);
    };
  }, //  array not included`;

export const usememo = `
 const value= useMemo (()=> {[1,2,3]}, [dependecies])s`;
export const usecallback = `
 const functionDeclaration= useCallback(()=> {[1,2,3]}, [dependecies])`;

export const result = `
const [num1, setNum1] = useState(0);
const [num2, setNum2] = useState(0);
const [num3, setNum3] = useState(0);
const [total, setTotal] = useState("");

useEffect(
  function () {
    setTotal(num1 * num2);
    ...

onClick={() => { setTotal(num1 * num2 * num3);`;

export const color = `
const [allowColor, setAllowColor] = useState(false);
const [background, setBackground] = useState("");

const randomBg = function () {
  if (allowColor) {
    const color = \`rgb(\${[1, 2, 3].map(() => (Math.random() * 256) | 0)})\`;
    return  setBackgroundcolor(color);
  }
  setBackgroundcolor("");};`;

export const usemultiplyunstablefunction = `
useEffect(
  function () {
    setTotal(num1 * num2);
    randomBg();
  },
  [num1, num2, randomBg],
);
onClick={() => { setTotal(num1 * num2 * num3);`;

export const usemultiplyunrelatedeffects = `
const randomBg = useCallback(
  function () {
    if (allowColor) {
      const color = \`rgb(\${[1, 2, 3].map(() => (Math.random() * 256) | 0)})\`;
      return setBackgroundcolor(color);
    }
    setBackgroundcolor("");
  },
  [allowColor],
);

useEffect(
  function () {
    setTotal(num1 * num2);
    randomBg();
  },
  [num1, num2, randomBg],
);}`;
export const usemultiplyseparatedeffects = `
useEffect(
  function () {
    if (allowColor) {
      const color = \`rgb(\${[1, 2, 3].map(() => (Math.random() * 256) | 0)})\`;
      return setBg(color);
    }
          setBackgroundcolor("");
  },
  [allowColor, total],
);

useEffect(
  function () {
    setTotal(num1 * num2);
  },
  [ num1, num2],
)`;
