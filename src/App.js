import React, { useEffect, useState } from "react";
import { formatTime } from "./util";

function App() {
  const [millisec, setMillisec] = useState(0);
  const [isPaused, setIsPaused] = useState(true);
  const [startTime, setStartTime] = useState(null);
  const [splitList, setSplitList] = useState([]);
  const [splitIntervals, setSplitIntervals] = useState([]);

  useEffect(() => {
    if (!isPaused) {
      let timer = setInterval(() => {
        setMillisec(() => {
          const elapsedTime = Date.now() - startTime;
          return elapsedTime;
        });
      }, 4);
      return () => clearInterval(timer);
    }
  }, [isPaused, startTime]);

  useEffect(() => {
    const intervalsList = splitList.map((x, i, arr) => {
      if (i === 0) return x;
      return x - arr[i - 1];
    });

    setSplitIntervals(intervalsList);
  }, [splitList]);

  const startTimer = () => {
    setStartTime(Date.now() - millisec);
    setIsPaused((p) => !p);
  };

  const resetTimer = () => {
    setMillisec(0);
    setIsPaused(true);
    setSplitList([]);
  };

  const splitTimer = () => {
    setSplitList((splitList) => [...splitList, millisec]);
  };

  const isReset = millisec === 0;
  const timerState = !isPaused ? "Pause" : "Start";

  return (
    <div>
      {formatTime(millisec)}
      <div>
        <button onClick={startTimer}>{timerState}</button>
        <button disabled={isReset || isPaused} onClick={splitTimer}>
          Split
        </button>
        <button disabled={isReset || !isPaused} onClick={resetTimer}>
          Reset
        </button>
      </div>
      <div>
        {splitIntervals.map((x) => (
          <div key={x}>{formatTime(x)}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
