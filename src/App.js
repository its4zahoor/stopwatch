import React, { useEffect, useState } from "react";
import { formatTime } from "./util";

function App() {
  const [millisec, setMillisec] = useState(0);
  const [isPaused, setIsPaused] = useState(true);
  const [startTime, setStartTime] = useState(null);
  const [splitList, setSplitList] = useState([]);

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

  const startTimer = () => {
    setStartTime(Date.now() - millisec);
    setIsPaused((p) => !p);
    if (!isPaused) addSplitValue("Pause");
  };

  const resetTimer = () => {
    setMillisec(0);
    setIsPaused(true);
    setSplitList([]);
  };

  const splitTimer = () => {
    addSplitValue("Split");
  };

  const addSplitValue = (reason) => {
    setSplitList((split) => [...split, { millisec, reason }]);
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
        {splitList.map((x, i, arr) => {
          const interval = i > 0 ? x.millisec - arr[i - 1].millisec : x.millisec;
          return (
            <div key={x.millisec}>
              #{i} {formatTime(interval)} {x.reason}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
