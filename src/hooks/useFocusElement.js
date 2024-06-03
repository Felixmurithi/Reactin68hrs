import { useEffect, useRef } from "react";

function useFocusElement() {
  useEffect(function () {
    function callbackFunction(e) {
      // object will  another element- why does focusEL return null
      if (focusEl.current && e?.code.toLowerCase() === "enter".toLowerCase()) {
        focusEl.current.focus();
      }
    }

    document.addEventListener("keydown", callbackFunction);
    return function cleanup() {
      document.removeEventListener("keydown", callbackFunction);
    };
  }, []);

  const focusEl = useRef(null);

  return [focusEl];
}

export default useFocusElement;
