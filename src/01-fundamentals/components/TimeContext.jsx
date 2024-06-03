import { createContext, useContext, useEffect, useMemo, useState } from "react";
import formatTime from "../../utils/formatTime";
import { Color } from "./TimerContextComponents";

const TimeContext = createContext();

function TimeProvider({ children }) {
  const [time, setTime] = useState(formatTime(new Date()));
  const [allowColor, setAllowColor] = useState(true);

  // useEffect(function () {
  //   const id = setInterval(function () {
  //     setTime(formatTime(new Date()));
  //   }, 1000);

  //   return function cleanup() {
  //     clearInterval(id);
  //   };
  // });

  function toggleColor() {
    setAllowColor(!allowColor);
  }

  // const value = useMemo(() => {
  //   return {
  //     time,
  //   };
  // }, [time]);
  const value = { time };

  // time will be generated on

  return (
    <TimeContext.Provider value={value}>
      <div className="my-4 flex  justify-center gap-6 self-center border p-2">
        {children}
        <Color />
        <input
          type="checkbox"
          value={allowColor}
          onChange={(e) => {
            setAllowColor(e.target.checked);
          }}
        />
      </div>
    </TimeContext.Provider>
  );
}

function useTime() {
  const context = useContext(TimeContext);
  if (context === undefined)
    throw new Error("TimerContext was used outside TimerProvider");

  return context;
}

export { TimeProvider, useTime };
