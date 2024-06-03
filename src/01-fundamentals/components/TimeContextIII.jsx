import { createContext, useContext, useMemo, useState } from "react";
import formatTime from "../../utils/formatTime";
import { ColorIII } from "./TimerContextComponents";

const TimeContextIII = createContext();

function TimeProviderIII({ children }) {
  const [time, setTime] = useState(formatTime(new Date()));
  const [allowColor, setAllowColor] = useState(true);

  const value = useMemo(() => {
    return { time };
  }, [time]);

  return (
    <TimeContextIII.Provider value={value}>
      <div className="my-4 flex  justify-center gap-2 border p-2">
        {children}

        <input
          type="checkbox"
          value={allowColor}
          onChange={(e) => {
            setAllowColor(e.target.checked);
          }}
        />
      </div>
    </TimeContextIII.Provider>
  );
}

function useTimeIII() {
  const context = useContext(TimeContextIII);
  if (context === undefined)
    throw new Error("TimerContext was used outside TimerProvider");
  return context;
}

export { TimeProviderIII, useTimeIII };
