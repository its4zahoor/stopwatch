import React, { useEffect, useState } from "react";
import { formatTime } from "./util";

function App() {
  const [millisec, setMillisec] = useState(0);
  const [isPaused, setIsPaused] = useState(true);
  const [startTime, setStartTime] = useState(null);
  const [splitList, setSplitList] = useState([]);

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
    setSplitList([]);
  };

  const splitTimer = () => {
    setSplitList((splitList) => [millisec - (splitList[0] || 0), ...splitList]);
  };

  return (
    <div>
      {formatTime(millisec)}
      <div>
        <button onClick={startTimer}>Start</button>
        <button onClick={splitTimer}>Split</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
      <div>
        {[...splitList].reverse().map((x) => (
          <div key={x}>{formatTime(x)}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
