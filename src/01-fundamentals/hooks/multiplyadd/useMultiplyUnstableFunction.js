import { useEffect, useState } from "react";

function useMultiplyUnstableFunction(num1, num2, allowColor, setTotal, total) {
  const [bg, setBg] = useState("");

  const randomBg = function () {
    if (allowColor) {
      const color = `rgb(${[1, 2, 3].map(() => (Math.random() * 256) | 0)})`;
      return setBg(color);
    }
    setBg("");
  };

  useEffect(
    function () {
      if ((num1 && num2) || (num1 === 0 && num2) || (num1 && num2 === 0)) {
        setTotal(num1 * num2);
        randomBg();
      }
    },
    [total, randomBg, setTotal, num1, num2],
  );

  return [bg];
}

export default useMultiplyUnstableFunction;
