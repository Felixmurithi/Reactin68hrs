import { useCallback, useEffect, useState } from "react";

function useMultiplySeparatedEffects(num1, num2, allowColor, setTotal, total) {
  const [bg, setBg] = useState("");

  useEffect(
    function () {
      if (allowColor) {
        const color = `rgb(${[1, 2, 3].map(() => (Math.random() * 256) | 0)})`;
        return setBg(color);
      }
      setBg("");
    },
    [allowColor, total],
  );

  useEffect(
    function () {
      setTotal(num1 * num2);
    },
    [setTotal, num1, num2],
  );

  return [bg];
}

export default useMultiplySeparatedEffects;
