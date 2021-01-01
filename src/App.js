import React, { useEffect, useState } from "react";
import { formatTime } from "./util";

function App() {
  const [millisec, setMillisec] = useState(0);
  const [isPaused, setIsPaused] = useState(true);
  const [startTime, setStartTime] = useState(null);

  useEffect(() => {
    let timer = setInterval(() => {
      if (!isPaused) {
        setMillisec(() => {
          const elapsedTime = Date.now() - startTime;
          return elapsedTime;
        });
      }
    }, 4);
    return () => clearInterval(timer);
  }, [isPaused, startTime]);

  const startTimer = () => {
    if (millisec === 0) setStartTime(Date.now());
    if (isPaused) setStartTime(Date.now() - millisec);
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
