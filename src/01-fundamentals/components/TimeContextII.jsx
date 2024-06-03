import { createContext, useContext, useEffect, useMemo, useState } from "react";
import formatTime from "../../utils/formatTime";

const TimeContextII = createContext();

function TimeProviderII({ children }) {
  const [time, setTime] = useState(formatTime(new Date()));
  const [allowColor, setAllowColor] = useState(true);

  const value = { time };

  return (
    <TimeContextII.Provider value={value}>
      <div className="my-4 flex  justify-center gap-6 border p-2">
        {children}
        <input
          type="checkbox"
          value={allowColor}
          onChange={(e) => {
            setAllowColor(e.target.checked);
          }}
        />
      </div>
    </TimeContextII.Provider>
  );
}

function useTimeII() {
  const context = useContext(TimeContextII);
  if (context === undefined)
    throw new Error("TimerContext was used outside TimerProvider");

  return context;
}

export { TimeProviderII, useTimeII };
