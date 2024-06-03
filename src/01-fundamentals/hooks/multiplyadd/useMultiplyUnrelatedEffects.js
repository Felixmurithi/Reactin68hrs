import { useCallback, useEffect, useState } from "react";

function useMultiplyUnrelatedEffects(num1, num2, allowColor, setTotal, total) {
  const [bg, setBg] = useState("");

  const randomBg = useCallback(
    function () {
      if (allowColor) {
        const color = `rgb(${[1, 2, 3].map(() => (Math.random() * 256) | 0)})`;
        return setBg(color);
      }
      setBg("");
    },
    [allowColor],
  );

  useEffect(
    function () {
      setTotal?.(num1 * num2);

      if (num1 && num2) randomBg();
    },
    [randomBg, setTotal, num1, num2],
  );

  return [bg];
}

export default useMultiplyUnrelatedEffects;
