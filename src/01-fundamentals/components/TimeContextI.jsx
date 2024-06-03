import { createContext, useContext, useEffect, useState } from "react";
import formatTime from "../../utils/formatTime";

const TimeContextI = createContext();

function TimeProviderI({ children }) {
  const [time, setTime] = useState(formatTime(new Date()));
  const [allowColor, setAllowColor] = useState(true);

  useEffect(function () {
    const id = setInterval(function () {
      setTime(formatTime(new Date()));
    }, 1000);

    return function cleanup() {
      clearInterval(id);
    };
  });

  const value = { time };

  return (
    <TimeContextI.Provider value={value}>
      <div className="my-4 flex flex-col justify-around gap-6">{children}</div>
    </TimeContextI.Provider>
  );
}

function useTimeI() {
  const context = useContext(TimeContextI);
  if (context === undefined)
    throw new Error("TimerContext was used outside TimerProvider");

  return context;
}

export { TimeProviderI, useTimeI };
