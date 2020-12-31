import React, { useEffect, useState } from "react";
import { formatTime } from "./util";

function App() {
  const [millisec, setMillisec] = useState(0);
  const [isPaused, setIsPaused] = useState(true);

  useEffect(() => {
    let timer = setInterval(() => {
      if (!isPaused) {
        setMillisec((millisec) => {
          return millisec + 1;
        });
      }
    }, 1);
    return () => clearInterval(timer);
  }, [isPaused]);

  const startTimer = () => {
    setIsPaused((p) => !p);
  };

  const resetTimer = () => {
    setMillisec(0);
    setIsPaused(true);
  };

  const time = formatTime(millisec);
  return (
    <div>
      {time.h}:{time.m}:{time.s}:{time.ms}
      <div>
        <button onClick={startTimer}>Start</button>
        <button>Split</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}

export default App;
